import { computed } from 'vue'

export interface Post {
  id: string
  date: string
  categories: string[]
  tags: string[]
  title: Record<string, string>
  description: Record<string, string>
  content: Record<string, string>
}

const postMetadata = import.meta.glob('@/assets/blog/*/post.json', {
  eager: true,
  import: 'default',
})
const postContent = import.meta.glob('@/assets/blog/*/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

type PostMetadata = Omit<Post, 'id' | 'content'>

export function usePosts() {
  const posts = computed<Post[]>(() => {
    return Object.entries(postMetadata as Record<string, PostMetadata>)
      .map(([path, metadata]) => {
        const id = path.split('/').slice(-2, -1)[0] || ''
        const content: Record<string, string> = {}
        const languages = ['zh-CN', 'en', 'ja', 'zh-TW']

        languages.forEach((lang) => {
          const targetPath = path.replace('post.json', `${lang}.md`)

          if (postContent[targetPath]) {
            content[lang] = postContent[targetPath] as string
          }
        })

        return {
          ...metadata,
          id,
          content,
        }
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  })

  const isRecent = (dateStr: string) => {
    const date = new Date(dateStr)
    const now = new Date()

    date.setHours(0, 0, 0, 0)
    now.setHours(0, 0, 0, 0)

    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays <= 30
  }

  const recentPosts = computed(() => posts.value.filter((p) => isRecent(p.date)))
  const archivedPosts = computed(() => posts.value.filter((p) => !isRecent(p.date)))

  const searchPosts = (
    query: string,
    filters: { tags?: string[]; categories?: string[]; dateRange?: [string, string] } = {},
  ) => {
    let result = posts.value

    if (query) {
      const lowerQuery = query.toLowerCase()
      result = result.filter((p) => {
        const titleMatch = Object.values(p.title).some((t) => t.toLowerCase().includes(lowerQuery))
        const contentMatch = Object.values(p.content).some((c) =>
          c.toLowerCase().includes(lowerQuery),
        )
        return titleMatch || contentMatch
      })
    }

    if (filters.tags && filters.tags.length > 0) {
      result = result.filter((p) => filters.tags!.every((tag) => p.tags.includes(tag)))
    }

    if (filters.categories && filters.categories.length > 0) {
      result = result.filter((p) => filters.categories!.every((cat) => p.categories.includes(cat)))
    }

    if (filters.dateRange) {
      const [start, end] = filters.dateRange
      const startDate = start ? new Date(start) : null
      const endDate = end ? new Date(end) : null

      result = result.filter((p) => {
        const postDate = new Date(p.date)
        if (startDate && postDate < startDate) return false
        if (endDate && postDate > endDate) return false
        return true
      })
    }

    return result
  }

  const getPostById = (id: string) => {
    return posts.value.find((p) => p.id === id)
  }

  return {
    posts,
    recentPosts,
    archivedPosts,
    searchPosts,
    getPostById,
  }
}

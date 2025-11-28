<script setup lang="ts">
import { computed } from 'vue'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import { useI18nContent, useLocale } from '@/composables/useI18nContent'

type LocalizedSection = {
  title: Record<string, string>
  description: Record<string, string>
  content: Record<string, string>
}

type BlogPost = LocalizedSection & {
  id: string
  date: string
  categories: string[]
  tags: string[]
}

type FenceToken = {
  info: string
  content: string
}

type MarkdownRendererOptions = {
  highlight?: (code: string, lang: string, attrs?: string) => string | null
}

const props = defineProps<{
  post: BlogPost
  isPreview?: boolean
}>()

const { t } = useLocale()
const { getContent } = useI18nContent()

const mdUtils = new MarkdownIt().utils

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight(code: string, lang: string): string {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang }).value
      } catch (error) {
        console.warn('[highlight.js]', error)
      }
    }
    try {
      return hljs.highlightAuto(code).value
    } catch (error) {
      console.warn('[highlight.js]', error)
    }
    return mdUtils.escapeHtml(code)
  },
})

const fenceRenderer = (
  tokens: unknown[],
  idx: number,
  options: MarkdownRendererOptions,
  _env?: unknown,
  _self?: unknown,
): string => {
  void _env
  void _self
  const token = tokens[idx] as FenceToken | undefined
  if (!token) return ''
  const info = token.info ? mdUtils.escapeHtml(token.info) : ''
  const highlighted = options.highlight
    ? options.highlight(token.content, token.info)
    : mdUtils.escapeHtml(token.content)
  const linesRaw = token.content.endsWith('\n') ? token.content.slice(0, -1) : token.content
  const lineCount = linesRaw ? linesRaw.split('\n').length : 1
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => `<span>${i + 1}</span>`).join('')
  const copyText = t('ui.copy')
  const copiedText = t('ui.copied')

  return `
    <div class="code-block-wrapper">
      <div class="code-header">
        <span class="language-name">${info}</span>
        <div class="copy-btn-wrapper">
          <span class="copy-btn" onclick="const btn = this; const wrapper = this.closest('.code-block-wrapper'); navigator.clipboard.writeText(wrapper.querySelector('.code-content').innerText).then(() => { btn.innerText = '${copiedText}'; setTimeout(() => { btn.innerText = '${copyText}'; }, 2000); })">${copyText}</span>
        </div>
      </div>
      <div class="code-body">
        <div class="line-numbers" aria-hidden="true">${lineNumbers}</div>
        <pre class="hljs language-${info || 'plaintext'}"><code class="hljs code-content">${highlighted}</code></pre>
      </div>
    </div>
  `
}

md.renderer.rules.fence = fenceRenderer as typeof md.renderer.rules.fence

type CombinedContent = {
  title?: string
  description?: string
  body?: string
}

const localizedData = computed(() => {
  const combined: Record<string, CombinedContent> = {}
  const langs = new Set([...Object.keys(props.post.title), ...Object.keys(props.post.content)])

  langs.forEach((lang) => {
    combined[lang] = {
      title: props.post.title[lang],
      description: props.post.description[lang],
      body: props.post.content[lang],
    }
  })

  return getContent(combined)
})

const renderedBody = computed(() => {
  if (!localizedData.value) return ''
  return md.render(localizedData.value.body || '')
})
</script>

<template>
  <div class="card post-card">
    <div v-if="localizedData">
      <div v-if="localizedData.isFallback" class="fallback-warning">
        <i class="fa-solid fa-triangle-exclamation"></i> {{ t('ui.fallbackWarning') }}
      </div>

      <router-link :to="'/post/' + post.id">
        <h2 class="post-title">{{ localizedData.title }}</h2>
      </router-link>

      <div class="meta">
        <span class="date"> <i class="fa-solid fa-calendar fa-fw"></i> {{ post.date }} </span>
        <span v-for="category in post.categories" :key="category" class="category">
          <i class="fa-solid fa-folder-open fa-fw"></i> {{ category }}
        </span>
        <span v-for="tag in post.tags" :key="tag" class="tag">
          <i class="fa-solid fa-tags fa-fw"></i> {{ tag }}
        </span>
      </div>

      <div class="description" v-if="isPreview">
        {{ localizedData.description }}
      </div>
      <div class="content markdown-body" v-else v-html="renderedBody"></div>

      <div class="read-more" v-if="isPreview">
        <router-link :to="'/post/' + post.id" class="btn">{{ t('ui.readMore') }}</router-link>
      </div>
    </div>
    <div v-else>
      <p>Content not available.</p>
    </div>
  </div>
</template>

<style scoped>
.fallback-warning {
  background-color: #fff3cd;
  color: #856404;
  padding: 10px 15px;
  border-radius: 5px;
  margin-bottom: 15px;
  border: 1px solid #ffeeba;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>

<style scoped>
.post-title {
  color: var(--color-primary);
  text-align: center;
  cursor: pointer;
}

.meta {
  text-align: center;
  color: var(--color-meta);
  margin-bottom: 20px;
}

.tag {
  margin-left: 10px;
  color: var(--color-secondary);
}

.category {
  margin-left: 10px;
  color: var(--color-secondary);
}

.btn {
  background: linear-gradient(120deg, #9abbf7 0%, #ffbbf4 100%);
  color: white;
  padding: 8px 20px;
  border-radius: 20px 0;
  font-weight: bold;
  margin-top: 15px;
  float: right;
}

@media (max-width: 768px) {
  .btn {
    padding: 6px 15px;
    font-size: 0.9rem;
  }
}
</style>

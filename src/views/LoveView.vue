<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// ====== Editable content ======
const myName = ref('赵梦府')
const herName = ref('郑菲')

const startDate = new Date('2026-03-30')
const daysTogether = ref(0)

const letterParagraphs = ref([
  '宇宙很大，但我们的小世界很小，刚好只装得下你和我的日常。',
  '谢谢你陪我分享每一顿热气腾腾的饭，和每一个漫无目的的傍晚。',
  '未来的日子还很长，我们不赶时间，就这么并肩慢慢走。',
])

const letterSignature = ref('( *´˘`)(*´∇`*  )')
// ===============================

let timerId: ReturnType<typeof setInterval>
function updateDays() {
  const now = new Date()
  daysTogether.value = Math.floor((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
}
onMounted(() => {
  updateDays()
  timerId = setInterval(updateDays, 1000 * 60 * 60)
})
onUnmounted(() => clearInterval(timerId))

// Heart SVG for divider
function heartSvg(scale: number): string {
  const n = 80
  const pts: string[] = []
  for (let i = 0; i <= n; i++) {
    const t = (2 * Math.PI * i) / n
    const st = Math.sin(t)
    const x = 16 * st * st * st
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)
    pts.push(`${(x * scale).toFixed(2)} ${(-y * scale).toFixed(2)}`)
  }
  return `M ${pts.join(' L ')} Z`
}
const heartD = heartSvg(1.8)
</script>

<template>
  <div class="love-page">
    <section class="hero">
      <!-- Names — Apple HIG -->
      <div class="apple-names">
        <span class="apple-name">{{ myName }}</span>
        <svg
          class="apple-heart"
          viewBox="-32 -32 64 64"
          aria-hidden="true"
        >
          <path :d="heartD" fill="currentColor" />
        </svg>
        <span class="apple-name">{{ herName }}</span>
      </div>

      <!-- Days counter — Apple HIG -->
      <div class="apple-days">
        <span class="apple-days-num">{{ daysTogether }}</span>
        <span class="apple-days-unit">天</span>
      </div>
      <p class="apple-caption">
        始于
        {{
          startDate.toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        }}
      </p>

      <!-- Letter (Material Design 3) -->
      <div class="card-letter">
        <svg
          class="decorative-heart"
          viewBox="-32 -32 64 64"
          aria-hidden="true"
        >
          <path :d="heartSvg(1.2)" fill="currentColor" />
        </svg>
        <blockquote>
          <p v-for="(para, i) in letterParagraphs" :key="i" class="body-large">
            {{ para }}
          </p>
        </blockquote>
        <div class="divider"></div>
        <p class="label-medium signature">{{ letterSignature }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ============================================================
   Shared tokens
   ============================================================ */
.love-page {
  --md-sys-color-surface: #fef8fb;
  --md-sys-color-surface-container-low: #fdf0f5;
  --md-sys-color-surface-container: #f8e8ef;
  --md-sys-color-on-surface: #23191e;
  --md-sys-color-on-surface-variant: #51454b;
  --md-sys-color-outline-variant: #d4c2ca;
  --md-sys-color-primary-container: #ffd9e3;

  --md-sys-elevation-1: 0px 1px 2px 0px rgba(0, 0, 0, 0.08),
    0px 1px 3px 1px rgba(0, 0, 0, 0.06);
  --md-sys-elevation-2: 0px 1px 2px 0px rgba(0, 0, 0, 0.08),
    0px 2px 6px 2px rgba(0, 0, 0, 0.06);
  --md-sys-shape-corner-extra-large: 28px;
  --md-sys-motion-easing-standard: cubic-bezier(0.2, 0, 0, 1);
  --md-sys-motion-duration-medium: 300ms;

  min-height: 100dvh;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    175deg,
    var(--md-sys-color-surface) 0%,
    var(--md-sys-color-surface-container-low) 50%,
    var(--md-sys-color-surface-container) 100%
  );
  color: var(--md-sys-color-on-surface);
  font-family: 'Lexend', 'Noto Sans SC', sans-serif;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
}

/* ============================================================
   Hero layout
   ============================================================ */
.hero {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 480px;
  padding: 24px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

/* ============================================================
   Apple HIG — Names
   ============================================================ */
.apple-names {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px 28px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow:
    0 0 0 0.5px rgba(0, 0, 0, 0.04),
    0 2px 12px rgba(0, 0, 0, 0.04);
}

.apple-name {
  font-size: clamp(1.15rem, 3.8vw, 1.6rem);
  font-weight: 530;
  line-height: 1.3;
  letter-spacing: 0.08em;
  color: #2c1520;
}

.apple-heart {
  width: clamp(1.3rem, 3.5vw, 1.7rem);
  height: clamp(1.3rem, 3.5vw, 1.7rem);
  color: #d4546c;
  flex-shrink: 0;
  animation: apple-heart-beat 1.8s cubic-bezier(0.25, 0, 0.35, 1) infinite;
}

@keyframes apple-heart-beat {
  0%,
  100% {
    transform: scale(1);
  }
  8% {
    transform: scale(1.18);
  }
  16% {
    transform: scale(1);
  }
  24% {
    transform: scale(1.1);
  }
  32% {
    transform: scale(1);
  }
}

/* ============================================================
   Apple HIG — Days stat
   ============================================================ */
.apple-days {
  margin-top: 4px;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 6px;
}

.apple-days-num {
  font-size: clamp(3.8rem, 10vw, 5.5rem);
  font-weight: 250;
  line-height: 1;
  letter-spacing: -1.5px;
  color: #2c1520;
  font-variant-numeric: tabular-nums;
}

.apple-days-unit {
  font-size: clamp(1rem, 3vw, 1.25rem);
  font-weight: 420;
  color: #8a6e79;
  letter-spacing: 0.15em;
}

.apple-caption {
  font-size: 0.8rem;
  font-weight: 400;
  color: #9e858f;
  letter-spacing: 0.08em;
  margin: 0;
}

/* ============================================================
   Letter card (Material Design 3)
   ============================================================ */
.card-letter {
  width: 100%;
  background: var(--md-sys-color-surface-container-low);
  border-radius: var(--md-sys-shape-corner-extra-large);
  box-shadow: var(--md-sys-elevation-1);
  padding: 28px 24px;
  position: relative;
  transition:
    box-shadow var(--md-sys-motion-duration-medium)
      var(--md-sys-motion-easing-standard),
    transform var(--md-sys-motion-duration-medium)
      var(--md-sys-motion-easing-standard);
}

.card-letter:hover {
  box-shadow: var(--md-sys-elevation-2);
  transform: translateY(-2px);
}

.decorative-heart {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  width: 28px;
  height: 28px;
  color: var(--md-sys-color-primary-container);
}

.card-letter blockquote {
  border: none;
  margin: 0;
  padding: 0;
}

.card-letter p {
  margin: 8px 0;
  color: var(--md-sys-color-on-surface);
}

.body-large {
  font-size: clamp(0.95rem, 2.4vw, 1.0625rem);
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: 0.15px;
}

.label-medium {
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: 0.5px;
}

.divider {
  height: 1px;
  background: var(--md-sys-color-outline-variant);
  margin: 20px 0 16px;
  opacity: 0.6;
}

.signature {
  color: var(--md-sys-color-on-surface-variant);
  opacity: 0.7;
}

/* ============================================================
   Responsive
   ============================================================ */
@media (max-height: 640px) {
  .hero {
    gap: 10px;
    padding: 12px 16px;
  }

  .apple-names {
    padding: 6px 20px;
  }

  .card-letter {
    padding: 20px 16px;
  }

  .divider {
    margin: 12px 0 10px;
  }
}

@media (min-width: 900px) {
  .hero {
    max-width: 540px;
    gap: 20px;
  }

  .card-letter {
    padding: 36px 32px;
  }
}
</style>

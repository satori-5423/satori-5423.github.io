<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from 'vue'

// Multi-layer glow -- each layer tracks cursor at a different speed & offset,
// creating an irregular organic composite shape.

interface GlowLayer {
  x: number
  y: number
}

const layers = reactive<GlowLayer[]>([
  { x: 0, y: 0 }, // fastest -- blue
  { x: 0, y: 0 }, // medium  -- purple
  { x: 0, y: 0 }, // slower  -- pink
  { x: 0, y: 0 }, // slowest -- orange
])

const ease = [0.12, 0.07, 0.05, 0.035]
const offset = [
  { dx: 0, dy: 0 },
  { dx: 60, dy: -40 },
  { dx: -70, dy: 50 },
  { dx: 40, dy: 70 },
]

let targetX = 0
let targetY = 0
let rafId = 0

function onMouseMove(e: MouseEvent) {
  targetX = e.clientX
  targetY = e.clientY
}

function animate() {
  for (let i = 0; i < layers.length; i++) {
    layers[i].x += (targetX + offset[i].dx - layers[i].x) * ease[i]
    layers[i].y += (targetY + offset[i].dy - layers[i].y) * ease[i]
  }
  rafId = requestAnimationFrame(animate)
}

onMounted(() => {
  targetX = window.innerWidth / 2
  targetY = window.innerHeight / 2
  for (const l of layers) {
    l.x = targetX
    l.y = targetY
  }
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  rafId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  cancelAnimationFrame(rafId)
})
</script>

<template>
  <div class="md-bg">
    <!-- Multi-layer organic glow -->
    <div
      v-for="(_, i) in layers"
      :key="i"
      class="glow"
      :class="`glow-${i}`"
      :style="{ '--gx': layers[i].x + 'px', '--gy': layers[i].y + 'px' }"
    ></div>

    <!-- Floating geometric shapes -->
    <div class="shape shape-1"></div>
    <div class="shape shape-2"></div>
    <div class="shape shape-3"></div>
    <div class="shape shape-4"></div>
    <div class="shape shape-5"></div>
    <div class="shape shape-6"></div>

    <!-- Subtle dot grid overlay -->
    <div class="dot-grid"></div>
  </div>
</template>

<style scoped>
.md-bg {
  position: fixed;
  inset: 0;
  z-index: -2;
  overflow: hidden;
  pointer-events: none;
}

/* --- Organic multi-layer glow --- */
.glow {
  position: absolute;
  inset: 0;
  z-index: 1;
  will-change: background;
}

.glow-0 {
  background: radial-gradient(
    250px 280px ellipse at var(--gx) var(--gy),
    rgba(102, 175, 239, 0.09),
    rgba(102, 175, 239, 0.03) 40%,
    transparent 100%
  );
}

.glow-1 {
  background: radial-gradient(
    200px 240px ellipse at var(--gx) var(--gy),
    rgba(124, 77, 255, 0.07),
    rgba(124, 77, 255, 0.02) 40%,
    transparent 100%
  );
}

.glow-2 {
  background: radial-gradient(
    280px 220px ellipse at var(--gx) var(--gy),
    rgba(218, 10, 81, 0.06),
    rgba(218, 10, 81, 0.02) 40%,
    transparent 100%
  );
}

.glow-3 {
  background: radial-gradient(
    180px 200px ellipse at var(--gx) var(--gy),
    rgba(255, 171, 64, 0.05),
    rgba(255, 171, 64, 0.015) 40%,
    transparent 100%
  );
}

/* --- Geometric shapes --- */
.shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.12;
  will-change: transform;
}

.shape-1 {
  width: 600px;
  height: 600px;
  background: var(--color-primary, #66afef);
  top: -10%;
  left: -5%;
  animation: drift1 20s ease-in-out infinite;
}

.shape-2 {
  width: 500px;
  height: 500px;
  background: var(--color-secondary, #da0a51);
  top: 60%;
  right: -8%;
  animation: drift2 25s ease-in-out infinite;
  border-radius: 40% 60% 55% 45% / 45% 50% 50% 55%;
}

.shape-3 {
  width: 400px;
  height: 400px;
  background: #7c4dff;
  top: 30%;
  left: 50%;
  animation: drift3 22s ease-in-out infinite;
  border-radius: 60% 40% 50% 50% / 55% 60% 40% 45%;
}

.shape-4 {
  width: 350px;
  height: 350px;
  background: var(--color-primary, #66afef);
  bottom: -5%;
  left: 20%;
  animation: drift4 18s ease-in-out infinite;
  opacity: 0.08;
}

.shape-5 {
  width: 250px;
  height: 250px;
  background: #ffab40;
  top: 5%;
  right: 25%;
  animation: drift1 28s ease-in-out infinite reverse;
  opacity: 0.1;
}

.shape-6 {
  width: 300px;
  height: 300px;
  background: var(--color-secondary, #da0a51);
  top: 40%;
  left: -3%;
  animation: drift2 24s ease-in-out infinite reverse;
  opacity: 0.07;
}

@keyframes drift1 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(40px, -30px) scale(1.05);
  }
  50% {
    transform: translate(-20px, 20px) scale(0.97);
  }
  75% {
    transform: translate(30px, 15px) scale(1.03);
  }
}

@keyframes drift2 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(-50px, 25px) scale(1.08);
  }
  66% {
    transform: translate(20px, -35px) scale(0.95);
  }
}

@keyframes drift3 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  20% {
    transform: translate(35px, -20px) scale(1.04);
  }
  50% {
    transform: translate(-30px, -15px) scale(0.96);
  }
  70% {
    transform: translate(15px, 30px) scale(1.02);
  }
}

@keyframes drift4 {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(-25px, -20px) scale(1.06);
  }
}

/* --- Dot grid --- */
.dot-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.06) 1px, transparent 1px);
  background-size: 32px 32px;
  opacity: 0.6;
  z-index: 2;
}

@media (max-width: 768px) {
  .shape {
    transform: scale(0.7);
  }
  .dot-grid {
    background-size: 24px 24px;
  }
  .glow-0 {
    background: radial-gradient(
      180px 200px ellipse at var(--gx) var(--gy),
      rgba(102, 175, 239, 0.07),
      rgba(102, 175, 239, 0.02) 40%,
      transparent 100%
    );
  }
  .glow-1 {
    background: radial-gradient(
      140px 160px ellipse at var(--gx) var(--gy),
      rgba(124, 77, 255, 0.05),
      rgba(124, 77, 255, 0.015) 40%,
      transparent 100%
    );
  }
  .glow-2 {
    background: radial-gradient(
      180px 150px ellipse at var(--gx) var(--gy),
      rgba(218, 10, 81, 0.04),
      rgba(218, 10, 81, 0.01) 40%,
      transparent 100%
    );
  }
  .glow-3 {
    background: radial-gradient(
      120px 140px ellipse at var(--gx) var(--gy),
      rgba(255, 171, 64, 0.04),
      rgba(255, 171, 64, 0.01) 40%,
      transparent 100%
    );
  }
}
</style>

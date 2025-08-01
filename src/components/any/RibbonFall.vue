<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const canvasRef = ref(null)
let ctx
let animationId
let ribbons = []
const colors = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#3f51b5',
  '#03a9f4',
  '#009688',
  '#4caf50',
  '#ff9800',
]
const numRibbons = 40
const gravity = 0.05

class Ribbon {
  constructor() {
    this.reset()
  }

  reset() {
    const side = Math.floor(Math.random() * 4) // 0: top, 1: left, 2: right, 3: bottom (avoid bottom)
    const margin = 50

    if (side === 0) {
      this.x = Math.random() * window.innerWidth
      this.y = -margin
    } else if (side === 1) {
      this.x = -margin
      this.y = Math.random() * window.innerHeight
    } else if (side === 2) {
      this.x = window.innerWidth + margin
      this.y = Math.random() * window.innerHeight
    } else {
      this.x = Math.random() * window.innerWidth
      this.y = -margin
    }

    this.size = 12 + Math.random() * 8
    this.rotation = Math.random() * Math.PI * 2
    this.rotationSpeed = (Math.random() - 0.5) * 0.1
    this.windOffset = Math.random() * 1000
    this.vx = 0
    this.vy = 1 + Math.random() * 2
    this.color = colors[Math.floor(Math.random() * colors.length)]
    this.flip = 1
    this.flipSpeed = (Math.random() - 0.5) * 0.2
  }

  update() {
    const time = Date.now() * 0.001
    this.vx = Math.sin(time + this.windOffset) * 0.8
    this.x += this.vx
    this.y += this.vy
    this.rotation += this.rotationSpeed
    this.flip += this.flipSpeed
    this.vy += gravity * 0.02

    if (this.y > window.innerHeight + 60 || this.x < -60 || this.x > window.innerWidth + 60) {
      this.reset()
    }
  }

  draw(ctx) {
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.rotate(this.rotation)
    ctx.scale(Math.sin(this.flip), 1)
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.moveTo(-this.size / 2, 0)
    ctx.lineTo(0, -this.size / 2)
    ctx.lineTo(this.size / 2, 0)
    ctx.lineTo(0, this.size / 2)
    ctx.closePath()
    ctx.fill()
    ctx.restore()
  }
}

function initRibbons() {
  ribbons = []
  for (let i = 0; i < numRibbons; i++) {
    ribbons.push(new Ribbon())
  }
}

function animate() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
  for (const ribbon of ribbons) {
    ribbon.update()
    ribbon.draw(ctx)
  }
  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  const canvas = canvasRef.value
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  ctx = canvas.getContext('2d')
  initRibbons()
  animate()

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  })
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
})
</script>

<template>
  <canvas ref="canvasRef" class="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" />
</template>

<style scoped>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;
}
</style>

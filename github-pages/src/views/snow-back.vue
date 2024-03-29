<template>
  <div class="background">
    <div class="snow"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.createSnowflakes()
  },
  methods: {
    createSnowflakes() {
      const background = document.querySelector('.background')
      for (let i = 0; i < 90; ++i) {
        const snowflake = document.createElement('div')
        snowflake.className = 'snowflake'
        snowflake.style.left = Math.random() * 100 + 'vw'
        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's' // 随机下落速度
        snowflake.style.animationDelay = Math.random() * 5 + 's' // 随机延迟开始下落
        snowflake.style.backgroundColor = this.getRandomColor() // 设置随机颜色
        snowflake.style.clipPath = this.getRandomClipPath() // 为雪花添加随机多边形形状
        background.appendChild(snowflake)
      }
    },
    getRandomColor() {
      const letters = '0123456789ABCDEF'
      let color = '#'
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    },
    getRandomClipPath() {
      const sides = Math.floor(Math.random() * (10 - 6 + 1)) + 6; // 保留随机生成6到10边的多边形
      let clipPath = 'polygon(';
      for (let i = 0; i < sides; i++) {
        // 通过调整半径实现每个顶点的位置更加随机和自然
        const radiusAdjustment = Math.random() * 10 - 5; // 调整半径以添加随机性
        const radius = 40 + radiusAdjustment; // 默认半径为50，通过随机调整来改变形状
        const x = Math.cos((2 * Math.PI / sides) * i) * radius + 50;
        const y = Math.sin((2 * Math.PI / sides) * i) * radius + 50;
        clipPath += `${x}% ${y}%`;
        if (i < sides - 1) clipPath += ', ';
      }
      clipPath += ')';
      return clipPath;
    }
  }
}
</script>

<style>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  background-color: beige;
}

.snowflake {
  position: absolute;
  width: 1.2vw;
  height: 1.2vw;
  /*border-radius: 50%;*/
  animation: fall linear infinite;
  transform: translateY(-10vh);
}

@keyframes fall {
  0% {
    transform: translateY(-10vh) translateX(0vw) rotate(0deg);
  }
  100% {
    transform: translateY(110vh) translateX(0vw) rotate(360deg);
  }
}

@media (max-width: 440px) {
  .snowflake {
    width: 1.2vh;
    height: 1.2vh;
  }
}
</style>

<template>
  <div class="left-door-cute">
    <div class="door-frame">
      <div class="bg-dots"></div>
      <div class="sticker flower" style="bottom: 10vh; left: 6vw; color: #ffd1dc; font-size: 5vw">
        🌸
      </div>
      <div class="sticker ribbon tag-label">花</div>
    </div>
  </div>
</template>

<style scoped>
.left-door-cute {
  width: 50vw;
  height: 100vh;
  background: linear-gradient(to right, #fff0f5, #ffeaf3);
  position: relative;
  box-shadow: inset -2vw 0 4vw rgba(255, 200, 230, 0.3);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.door-frame {
  width: 92%;
  height: 92%;
  background: #fffafc;
  border-radius: 4vw;
  position: relative;
  box-shadow: 0 0 2vw rgba(255, 182, 193, 0.2);
  overflow: hidden;
}

.bg-dots {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(#ffcce6 0.5vw, transparent 0.6vw);
  background-size: 4vw 4vw;
  opacity: 0.25;
  pointer-events: none;
  z-index: 1;
}

.sticker {
  position: absolute;
  font-size: 3.5vw;
  user-select: none;
  pointer-events: none;
  opacity: 0.9;
  text-shadow: 0 0 0.5vw rgba(255, 182, 193, 0.7);
  animation: float 6s ease-in-out infinite;
  z-index: 2;
}

.sticker.flower {
  animation: float 5s ease-in-out infinite;
}

.ribbon.tag-label {
  bottom: 8vh;
  right: 9vw;
  width: 12vw;
  height: 6vh;
  background: #ffbde3;
  border-radius: 3vh / 3vh;
  box-shadow: 0 0 1vh rgba(255, 128, 192, 0.3);
  animation: none;
  font-size: 2.4vw;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Hiragino Maru Gothic Pro', 'Noto Sans JP', sans-serif;
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
  25% {
    transform: translateY(-2vh) rotate(-5deg) scale(1.1);
  }
  50% {
    transform: translateY(-3vh) rotate(5deg) scale(1.15);
  }
  75% {
    transform: translateY(-1.5vh) rotate(-3deg) scale(1.05);
  }
  100% {
    transform: translateY(0) rotate(0deg) scale(1);
  }
}
</style>

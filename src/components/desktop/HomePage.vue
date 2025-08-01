<script setup>
import ProfileTop from '@/components/desktop/ProfileTop.vue'
import ContactLink from '@/components/desktop/ContactLink.vue'
import CodeLang from '@/components/desktop/CodeLang.vue'
import ClockTime from '@/components/desktop/ClockTime.vue'
import BeijingWeather from '@/components/desktop/BeijingWeather.vue'
import SakanaWidget from '@/components/any/SakanaWidget.vue'
</script>

<template>
  <div class="home-layout">
    <div class="main-content">
      <div class="left-column">
        <section class="card profile">
          <ProfileTop />
        </section>

        <div class="social-row-inline">
          <ContactLink />
        </div>

        <div class="tech-columns">
          <CodeLang />
        </div>
      </div>

      <div class="poem-column">
        <div class="vertical-poem">寄蜉蝣于天地，渺滄海之一粟。</div>
        <br />
        <div class="vertical-poem">哀吾生之須臾，羨長江之無窮。</div>
      </div>

      <div class="right-column">
        <div class="center-modules">
          <section class="card time">
            <ClockTime />
          </section>

          <section class="card weather">
            <div class="weather-content">
              <BeijingWeather />
            </div>
          </section>

          <section class="sakana">
            <SakanaWidget />
            <SakanaWidget character="chisato" />
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-layout {
  display: flex;
  flex-direction: column;
  color: #fff;
  height: 80vh;
  width: 80vw;
}

.main-content {
  display: flex;
  flex: 1;
  gap: 2vw;
  width: 80vw;
}

.left-column {
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: 38vw;
  justify-content: flex-start;
}

.right-column {
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 28vw;
}

.poem-column {
  align-items: baseline;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  width: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.vertical-poem {
  font-family: Courier;
  text-orientation: upright;
  color: #111;
  font-size: 2vw;
  font-weight: 600;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 73vh;
  z-index: 10;
}

.center-modules {
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: 28vw;
  margin: 0;
  height: auto;
  justify-content: flex-start;
}

.card {
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(5px);
  border-radius: 1vh;
  padding: 2vh 2vw;
  transition:
    background 0.3s ease,
    transform 0.3s ease;
}

.card:hover {
  background: rgba(0, 0, 0, 0.5);
  transform: translateY(-0.5vh);
}

/*
.profile {
  height: 28vh;
}
*/

.time {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3vh 3vw;
  height: 23vh;
}

.weather-content {
  font-family: 'Courier New', Courier, monospace;
  font-size: 2.5vh;
  color: #fff;
  text-align: center;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3em;
  padding: 0 1vw;
}

.weather {
  font-weight: 700;
  font-size: 2.5vh;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 22vh;
}

.social-row-inline {
  display: flex;
  justify-content: space-between;
  gap: 1vw;
}

.tech-columns {
  display: flex;
  gap: 1vw;
}

.sakana {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 24vh;
}
</style>

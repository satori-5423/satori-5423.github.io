<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const BEIJING_LAT = 39.9042
const BEIJING_LON = 116.4074

const city = ref('北京')
const temperature = ref(null)
const description = ref('')
const weatherCode = ref(null)

// 天气代码映射参考：https://open-meteo.com/en/docs#latitude=39.9&longitude=116.4&current_weather=true
const weathercodeMap = {
  0: '晴',
  1: '主要晴朗',
  2: '部分多云',
  3: '多云',
  45: '雾',
  48: '冻结雾',
  51: '轻微毛毛雨',
  53: '中度毛毛雨',
  55: '浓毛毛雨',
  56: '冻毛毛雨',
  57: '浓冻毛毛雨',
  61: '轻微雨',
  63: '中雨',
  65: '大雨',
  66: '冻雨',
  67: '大冻雨',
  71: '轻微雪',
  73: '中雪',
  75: '大雪',
  77: '雪粒',
  80: '阵雨轻微',
  81: '阵雨中等',
  82: '强阵雨',
  85: '轻微雷阵雨',
  86: '大雷阵雨',
  95: '雷暴',
  96: '轻微雷暴伴冰雹',
  99: '大雷暴伴冰雹',
}

async function fetchBeijingWeather() {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${BEIJING_LAT}&longitude=${BEIJING_LON}&current_weather=true`,
    )
    const data = await res.json()
    if (data && data.current_weather) {
      temperature.value = data.current_weather.temperature
      description.value = `温度 ${data.current_weather.temperature}°C | 风速 ${data.current_weather.windspeed} km/h`
      weatherCode.value = data.current_weather.weathercode
    } else {
      description.value = '天气数据获取失败'
      temperature.value = null
      weatherCode.value = null
    }
  } catch {
    description.value = '天气获取失败'
    temperature.value = null
    weatherCode.value = null
  }
}

let weatherTimer = null

onMounted(() => {
  fetchBeijingWeather()
  weatherTimer = setInterval(fetchBeijingWeather, 5 * 60 * 1000)
})

onUnmounted(() => {
  if (weatherTimer) clearInterval(weatherTimer)
})
</script>

<template>
  <div class="city-weather">
    <span class="city">{{ city }}</span>
    <span class="weather-text" v-if="weatherCode !== null">{{
      weathercodeMap[weatherCode] || '未知天气'
    }}</span>
  </div>
  <div class="desc">{{ description }}</div>
</template>

<style scoped>
.city-weather {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  user-select: none;
}

.weather .city {
  font-size: 3.5vh;
  font-weight: 700;
}

.weather-text {
  font-size: 2vh;
  font-weight: 500;
}

.weather .desc {
  font-size: 2.5vh;
  font-weight: 500;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.weather {
  height: 22vh;
}
</style>

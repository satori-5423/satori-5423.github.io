<script setup>
import { onMounted, onBeforeUnmount, watch, ref, nextTick } from 'vue'
import 'sakana-widget/lib/sakana.min.css'
import SakanaWidget from 'sakana-widget/lib/sakana.min.js'

const props = defineProps({
  size: { type: Number, default: 200 },
  character: { type: String, default: 'takina' },
  autoFit: { type: Boolean, default: false },
  controls: { type: Boolean, default: true },
  rod: { type: Boolean, default: true },
  draggable: { type: Boolean, default: true },
  autoShake: { type: Boolean, default: true },
})

const sakanaRoot = ref(null)
let sakanaInstance = null

const initWidget = async () => {
  sakanaInstance?.unmount()
  sakanaInstance = new SakanaWidget({
    size: props.size,
    autoFit: props.autoFit,
    character: props.character,
    controls: props.controls,
    rod: props.rod,
    draggable: props.draggable,
  }).mount(sakanaRoot.value)

  if (props.autoShake) {
    await nextTick()
    sakanaInstance.triggerAutoMode()
  }
}

onMounted(() => {
  initWidget()
})

watch(
  () => [props.size, props.character],
  () => {
    initWidget()
  },
)

onBeforeUnmount(() => {
  sakanaInstance?.unmount()
  sakanaInstance = null
})
</script>

<template>
  <div ref="sakanaRoot" class="sakana-size"></div>
</template>

<style scoped>
.sakana-size {
  width: 14vw;
  height: 14vw;
}

@media (max-aspect-ratio: 1/1) {
  .sakana-size {
    width: 14vh;
    height: 14vh;
  }

  @media (max-width: 768) {
    .sakana-size {
      width: 160px;
      height: 160px;
    }
  }
}

:deep(.sakana-widget-app) {
  width: 100% !important;
  height: 100% !important;
}
</style>

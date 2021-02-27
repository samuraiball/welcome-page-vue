<template>
  <div class="chart">
    <div class="column" v-for="d in data">
      <span class="name">{{ d.name }}</span>
      <div class="bar-wrapper">
        <div class="bar" :style="calcBarWidth(maxNum, d.number)"/>
        <div>{{ d.number }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "@vue/composition-api";

export default defineComponent({
  name: "BarChart",
  props: {
    data: Array as PropType<{ name: string, number: number }[]>,
    maxNum: Number
  },
  setup() {
    const calcBarWidth = (maxNum: number, n: number) => {
      return {
        '--barWidth': `${(n / maxNum) * 100}%`,
        '--barOpacity': `${(n / maxNum) * 100}%`
      }
    }
    return {
      calcBarWidth,
    }
  }
})
</script>

<style scoped>

.chart {
  width: 100%;
}

.column {
  display: flex;
}

.name {
  width: 40%;
}

.bar-wrapper {
  width: 60%;
  display: flex;
  align-items: center
}

.bar {
  margin-right: 5px;
  --barWidth: 0%;
  --barOpacity: 100%;
  width: var(--barWidth);
  height: 20px;
  background-color: #004643;
  border-radius: 3px;
  opacity: var(--barOpacity);
}
</style>
<template>
  <div class="temps">
    <div class="date">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 1024 1024"
      >
        <path
          fill="currentColor"
          d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"
        />
      </svg>
      {{ date }}
    </div>
    <h5>min {{ data.list[0].main.temp_min }}°</h5>
    <h5>max {{ data.list[0].main.temp_max }}°</h5>
    <h4>{{ data.list[1].weather[0].description }}</h4>
  </div>
  <div class="temps">
    <div class="date">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 1024 1024"
      >
        <path
          fill="currentColor"
          d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"
        /></svg
      >{{ tomorrow }}
    </div>
    <h5>min {{ data.list[1].main.temp_min }}°</h5>
    <h5>max {{ data.list[1].main.temp_max }}°</h5>
    <h4>{{ data.list[1].weather[0].description }}</h4>
  </div>

  <div class="temps">
    <div class="date">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 1024 1024"
      >
        <path
          fill="currentColor"
          d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"
        />
      </svg>
      {{ afterTomorrow }}
    </div>
    <h5>min {{ data.list[2].main.temp_min }}°</h5>
    <h5>max {{ data.list[2].main.temp_max }}°</h5>
    <h4>{{ data.list[1].weather[0].description }}</h4>
  </div>
</template>

<script setup lang="ts">
const { data } = defineProps(["data","date",  "tomorrow", "afterTomorrow"]);
</script>



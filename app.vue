<script setup lang="ts">
const search = ref("damietta");
const input = ref("");
const { isDarkMode } = useDarkMode();


const { data, error, refresh } = useAsyncData("city", async () => {
  let response;
  try {
    response = await $fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${search.value}&units=metric&appid=f7330c9dfd3350d90ed655e16c60ff1a`
  );
  } catch(e) {
    console.log(e)
  }

  return response;
});

const handleCLick = () => {
  search.value = input.value;
  input.value = "";
  refresh();
};

const current = new Date();
const hours = current.getHours();
const minutes = current.getMinutes();
const date = ` ${current.getDate()} / ${current.getMonth() + 1} `;
const tomorrow = ` ${current.getDate() + 1} / ${current.getMonth() + 1}`;
const afterTomorrow = ` ${current.getDate() + 2} / ${current.getMonth() + 1}`;
</script>

<template>
  <div
  v-if="data"
    class="all"
    :style="
      isDarkMode
        ? { backgroundColor: 'rgb(35,35,75)', color: 'rgb(200,200,150)' }
        : { backgroundColor: 'rgb(250,250,200)', color: 'rgb(40,40,65)' }
    "
  >
    <div class="main">
      <div class="left">
        <div class="search">
          <input type="text" v-model="input" />
          <button @click="handleCLick">search</button>
        </div>
        <div class="city-date">
          <h2>{{ data.city.name }}</h2>
          <div class="main-temp">
            <h3>current temp {{ data.list[0].main.temp }}°</h3>
          </div>
          <div class="time">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <g id="evaClockOutline0">
                <g id="evaClockOutline1">
                  <g id="evaClockOutline2" fill="currentColor">
                    <path
                      d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8Z"
                    />
                    <path
                      d="M16 11h-3V8a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2Z"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <h4>{{ hours }}:{{ minutes }}</h4>
          </div>
        </div>
      </div>
      <div class="right">
        <Temps :data = 'data' :tomorrow="tomorrow" :date="date" :afterTomorrow="afterTomorrow"/>
        
      </div>
    </div>
  </div>
  <div class="error" v-else>
    <h1>city not found</h1>
  </div>
</template>
<style lang="scss">
.all {
  margin: -8px;
  .main {
    padding: 0px 10px;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-size: 35px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    .left {
      align-self: center;
      display: flex;
      align-items: center;
      flex-direction: column;
      .time {
        display: flex;
        align-items: center;
        gap: 1rem;
        transform: translateY(-20px);
      }
      .search {
        input {
          border-style: none;
          padding: 5px;
          font-size: 22px;
          background: #62727228;
          border-radius: 7px 0px 0px 7px;
        }
        button {
          border-style: none;
          padding: 5px;
          font-size: 22px;
          background: #52cac063;
          border-radius: 0px 7px 7px 0px;
          transition: 300ms;
          &:hover {
            cursor: pointer;
            background: #337492;
          }
        }
      }
    }
    .right {
      align-self: center;
      justify-self: center;
      display: grid;
      gap: 3rem;
      grid-template-columns: repeat(3, 1fr);
      .temps {
        text-align: center;
        .date{
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .main-temp {
        text-align: center;
      }
    }
  }
}
.error{
  height: 100vh;
  background: #ff0404;
  font-size: 40px;
  color: wheat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -8px;
}

@media (max-width: 1024px) {
  *{
    font-size: 22px;
  }
  .all {
    .search {
      margin-top: 10px;
      input {
        width: 70%;
      }}
    
    min-height: 110vh;
    height: 120vh;
    .main {
      display: flex;
      flex-direction: column;
      .right {
        margin: 1rem;
        align-self: center;
        justify-self: center;
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
}
</style>

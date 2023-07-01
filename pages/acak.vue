<template>
  <div
    class="max-w-screen-sm mx-auto bg-white h-screen flex flex-col justify-center items-center"
  >
    <h1 class="text-xl font-semibold py-3 my-4">Acak Angka</h1>

    <button
      @click="putar()"
      class="w-[300px] h-[300px] rounded-full bg-yellow-200 p-5"
    >
      <div class="w-full h-full flex flex-col justify-center items-center bg-yellow-300 rounded-full">
        <span v-if="ranNum" class="text-sm">Angka Kamu:</span>
        <span v-if="ranNum" class="text-6xl font-semibold text-blue-700">
          {{ ranNum }}
        </span>
        <span v-if="!ranNum" class="text-2xl font-semibold text-dark-100">
          Tekan Untuk Mulai
        </span>
      </div>
    </button>
    <p class="p-2 my-4 text-center w-full">
     EARLY BIRD RAHASIA OCLP
    </p>
  </div>
</template>
<script>
export default {
  layout: "blank",
  data() {
    return { ranNum: this.ranNum };
  },
  methods: {
    putar() {
      let MyVar = setInterval(this.rolldice, 40);
      setTimeout(() => {
        clearInterval(MyVar);
      }, 2000);
    },

    rolldice() {
      let ranNum = Math.floor(1 + Math.random() * 49);
      this.ranNum = ranNum;
    },
  },
};
</script>

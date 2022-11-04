<template>
  <div class="max-w-screen-sm mx-auto bg-white h-screen flex flex-col justify-center items-center">
    <h1 class="text-xl font-semibold py-3">Acak Angka</h1>
    <p class="p-2 my-4 text-center w-full">
        Dapatkan saldo ShopeePay <strong>Rp100.000</strong> untuk 10 pemenang.  Yuk mulai!
    </p>
    <button @click="putar()" 
    class="w-[300px] h-[300px] flex flex-col justify-center items-center rounded-full bg-yellow-200 p-5">
    <span v-if="ranNum" class="text-sm">Angka Kamu:</span>
    <span v-if="ranNum" class="text-6xl font-semibold text-blue-700">
        {{ranNum}}
    </span>
    <span v-if="!ranNum" class="text-2xl font-semibold text-dark-300">
        Tap Untuk Mulai Mengacak
    </span>
    </button>
    <p class="p-2 my-4 text-center w-full">
        Tulis angka yang tampil, di kolom komentar postingan Channel Telegram Sadiskon
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
      }, 2300);
    },

    rolldice() {
      let ranNum = Math.floor(1 + Math.random() * 999);
      this.ranNum = ranNum;
    },
  },
};
</script>

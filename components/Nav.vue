<template>
  <nav class="fixed z-2 top-0 left-0 w-full bg-white border-b-1">
    <div class="max-w-md mx-auto relative flex justify-between py-3 px-2">
      <!-- hanya tampilkan di halaman detail ( singular ) -->
      <NuxtLink
        to="/"
        class="flex justify-center items-center h-10 w-10"
        v-if="isSingular"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </NuxtLink>

      <div class="relative rounded-full w-10 h-10" v-if="isSingular">
        <img
          src="/assets/images/favicon.png"
          width="32"
          height="32"
          alt="logo Sadiskon.com"
          class="absolute left-0 top-0 w-full h-full rounded-full object-cover"
        />
      </div>
      <!-- hanya tampilkan di halaman index -->
      <span id="helper" v-if="!isSingular"></span>
      <!-- <fieldset class="flex-grow" v-if="!isSingular">
        <div class="relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </span>

          <input
            type="text"
            v-model="query"
            class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white rounded-md focus:border-rose-500 focus:outline-none"
            placeholder="Cari Racun.."
          />
        </div>
      </fieldset> -->
      <!-- hasil pencarian  -->
      <!-- <div
        class="absolute right-0 z-20 w-full py-2 mt-10 bg-white rounded-md shadow-xl dark:bg-gray-800"
        v-if="!isSingular && searchRes.lenght > 0"
      >
       <NuxtLink
          to="https://www.sadiskon.com"
          class="flex px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
        hasil
       </NuxtLink>
      </div> -->


      <!-- tampilkan di semua halaman  -->
      <button
        class="flex justify-center items-center h-10 w-10"
        @click="toggleMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            v-if="!menuOpen"
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
          <path
            v-else
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <!-- Dropdown menu floating  -->
      <div
        class="absolute right-2 z-20 w-48 py-2 mt-10 bg-white rounded-md shadow-xl dark:bg-gray-800"
        v-if="menuOpen"
      >
        <a
          href="https://www.sadiskon.com"
          class="flex px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
              clip-rule="evenodd"
            />
          </svg>
          Cari Kode Voucher
        </a>
        <a
          href="https://www.instagram.com/sadiskon"
          target="_blank"
          rel="noopener nofollow"
          class="flex px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
              clip-rule="evenodd"
            />
          </svg>
          Follow di Instagram
        </a>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    let isSingular = this.$store.state.view.isSingular;

    return {
      isSingular,
      menuOpen: false,
      query: '',
      searchRes: []
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
  watch: {
    $route: function () {
      this.isSingular = this.$store.state.view.isSingular;
      this.menuOpen = false;
    },
    // async query(query) {
    //   if (!query) {
    //     this.searchRes = [];
    //     return;
    //   }

    //   const hasil = await this.$http.post(
    //       `${this.$store.state.baseHost}/search`,
    //       { query: this.query }
    //     );
      
    //   console.log(hasil)
    // },
  },
};
</script>

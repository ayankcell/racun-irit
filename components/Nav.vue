<template>
  <nav class="fixed z-5 top-0 left-0 w-full bg-white border-b-1">
    <div class="max-w-screen-md mx-auto relative flex justify-between">
      <!-- tombol back hanya tampilkan di halaman detail ( singular ) -->
      <NuxtLink
        to="/"
        class="flex justify-center items-center h-13 w-13 racun-nav_back"
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

      <div class="rounded-full w-13 h-13 p-2" v-if="isSingular">
        <nuxt-img
          src="https://sadiskon.files.wordpress.com/2022/03/favicon.png?resize=32%2C32"
          width="32"
          height="32"
          format="webp"
          fit="contain"
          alt="logo Sadiskon.com"
          class="w-full h-full rounded-full object-cover"
        />
      </div>
      <!-- hanya tampilkan di halaman index -->
      <!-- <div
        id="helper"
        class="flex justify-start items-center px-5 font-bold"
        v-if="!isSingular"
      >
        IRIT.LINK
      </div> -->
      <fieldset class="flex-grow" v-if="!isSingular">
        <div class="relative h-full">
          <input
            type="text"
            v-model="searchText"
            id="searchInput"
            :class="`${
              !isSearchVisible ? 'hidden' : 'inline'
            } w-full h-10 p-2 my-1 text-gray-700 bg-white rounded-md focus:bg-gray-100 focus:outline-rose-300`"
            placeholder="Cari Produk Rekomendasi kami.."
          />

          <button
            class="absolute inset-y-0 right-0 flex items-center justify-center h-13 w-13"
            @click="toggleSearchInput"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
                v-if="isSearchVisible"
              />
              <path
                fill-rule="evenodd"
                v-else
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </fieldset>
      <!-- hasil pencarian  -->
      <div
        class="absolute right-0 left-0 z-20 w-full md:w-[95%] max-h-screen-sm overflow-y-scroll py-2 mt-13 bg-white rounded-md shadow-xl dark:bg-gray-800"
        v-if="!isSingular && searchRes.length"
      >
        <NuxtLink
          v-for="snippet of searchRes"
          :key="snippet.ID"
          :to="`/p/${snippet.slug}/`"
          class="flex px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100"
        >
          {{ snippet.title }}
        </NuxtLink>
      </div>
      <!-- no search res -->
       <div
        class="absolute right-0 left-0 z-20 w-full md:w-[95%] py-2 mt-13 bg-white rounded-md shadow-xl dark:bg-gray-800"
        v-if="!searchRes.length && searchText.length"
      >
      <span class="block text-gray-300 px-4 py-3">Tidak ada hasil pencarian</span>
       </div>

      <!-- tampilkan di semua halaman  -->
      <button
        class="flex justify-center items-center h-13 w-13 racun-nav_toggle place-self-start"
        @click="toggleMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
            v-if="!menuOpen"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
            v-else
          />
        </svg>
      </button>
      <!-- Dropdown menu floating  -->
      <div
        class="absolute right-2 z-20 w-52 py-2 mt-13 bg-white rounded-md border-1 dark:bg-gray-800"
        v-if="menuOpen"
      >
        <a
          href="https://www.sadiskon.com"
          class="racun-nav_link-sds flex px-4 py-3 text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
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
          href="https://www.instagram.com/irit.link"
          target="_blank"
          rel="noopener nofollow"
          class="racun-nav_link-ig flex px-4 py-3 text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
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
          Follow Instagram
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
      isSearchVisible: this.$store.state.isSearchVisible,
      searchText: "",
      searchRes: [],
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    async toggleSearchInput() {
      this.isSearchVisible = !this.isSearchVisible;
      this.$store.commit('toggleSearch', this.isSearchVisible)
      if (!this.isSearchVisible) {
        this.searchRes = [];
        this.searchText = "";
      }
    },
    async doSearch() {
      const search = await this.$http.$get(
        `/posts/?search=${this.searchText}&fields=title,slug,ID`
      );
      this.searchRes = search.posts;
    },
  },
  watch: {
    $route() {
      this.isSingular = this.$store.state.view.isSingular;
      this.menuOpen = false;
      this.searchRes = [];
      this.searchText = "";
      this.showSearchInput = false;
    },
    searchText(query) {
      if (!!query.length) {
        this.doSearch();
      } else {
        this.searchRes = [];
      }
    },
  },
};
</script>

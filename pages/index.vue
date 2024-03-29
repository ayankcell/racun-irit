<template>
  <div>
    <Header />
    <div id="content" class="flex flex-wrap items-center px-3">
      <div class="p-1 w-1/2 md:w-1/3" v-for="item of racun" :key="item.ID">
        <NuxtLink
          :to="`/p/${item.slug}/`"
          class="block rounded-xl overflow-hidden shadow racun-item_link"
        >
          <div class="ft_img_wrap w-full relative">
            <div class="absolute z-2 w-full bottom-0 left-0 flex gap-1">
              <span
                v-for="merchant of item.tags"
                :key="merchant.ID"
                class="text-xs p-1 text-white"
                :style="`background-color:${
                  merchantColor[merchant.name] || merchantColor['default']
                }`"
              >
                {{ merchant.name }}
              </span>
            </div>

            <div
              class="absolute z-1 top-0 left-0 w-full h-full bg-black bg-opacity-0 transition-opacity duration-300 hover:bg-opacity-30"
            ></div>
            <nuxt-picture
              :src="`${item.featured_image}?resize=500%2C500`"
              sizes="sm:140px md:190px"
              height="180"
              width="180"
              format="webp"
              quality="80"
              fit="cover"
              :alt="item.title"
              :imgAttrs="{ class: 'z-0 w-full object-cover' }"
            />
          </div>
          <h2
            v-html="item.title"
            class="p-2 truncate text-gray-800"
          ></h2>
        </NuxtLink>
      </div>

      <div
        class="p-1 w-1/2 md:w-1/3"
        v-for="item of racunPaginate"
        :key="item.ID"
      >
        <NuxtLink
          :to="`/p/${item.slug}/`"
          class="block rounded-xl overflow-hidden shadow racun-item_link"
        >
          <div class="ft_img_wrap w-full relative">
            <div class="absolute z-2 w-full bottom-0 left-0 flex gap-1">
              <span
                v-for="merchant of item.tags"
                :key="merchant.ID"
                class="text-xs p-1 text-white"
                :style="`background-color:${
                  merchantColor[merchant.name] || merchantColor['default']
                }`"
              >
                {{ merchant.name }}
              </span>
            </div>

            <div
              class="absolute z-1 top-0 left-0 w-full h-full bg-black bg-opacity-0 transition-opacity duration-300 hover:bg-opacity-30"
            ></div>
            <nuxt-picture
              :src="`${item.featured_image}?resize=500%2C500`"
              sizes="sm:140px md:190px"
              height="180"
              width="180"
              format="webp"
              quality="80"
              fit="cover"
              :alt="item.title"
              :imgAttrs="{ class: 'z-0 w-full object-cover', loading: 'lazy' }"
            />
          </div>
          <h2
            v-html="item.title"
            class="p-2 truncate text-gray-800"
          ></h2>
        </NuxtLink>
      </div>

      <SkeletonGrid v-if="isLoading" />
      <SkeletonGrid v-if="isLoading" />
      <SkeletonGrid v-if="isLoading" />
    </div>

    <button
      v-if="!!nextPage"
      @click="loadNext"
      class="flex text-gray-700 bg-white border-1 py-2 px-5 rounded-lg mx-auto my-5"
    >
      Lihat racun lainnya
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <div
      v-else
      class="block mx-auto text-center p-2 my-5 text-sm text-gray-400 border-1 rounded-lg"
    >
      Semua rekomendasi sudah ditampilkan
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $http, store }) {
    const perPage = store.state.perPage;

    const racun = await $http.$get(
      `/posts/?number=${perPage}&fields=ID,title,featured_image,slug,tags`
    );
    
    //pagination helper
    const totalPage = Math.ceil(racun.found / perPage )
    // kalau jumlah halaman lebih dari 1 berarti next page = 2
    const nextPage = totalPage > 1 ? store.state.pagination.nextPage : false;
    // unset view as singular
    store.commit("view/isSingular", false);

    return {
      perPage,
      totalPage,
      nextPage,
      racun:racun.posts,
      isLoading: false,
    };
  },
  data() {
    return {
      racunPaginate: this.$store.state.pagination.pageData,
    };
  },
  mounted() {
    //pastikan next page bernilai sesuai nilai terakhir setelah nuxt route
    this.nextPage =
      this.totalPage > 1 ? this.$store.state.pagination.nextPage : false;
  },
  computed: {
    merchantColor() {
      return {
        Lazada: "#100e6f",
        Shopee: "#ef472e",
        Tokopedia: "#3fab37",
        "JD.ID": "#e71910",
        default: "#000",
      };
    },
  },
  methods: {
    async loadNext() {
      this.isLoading = true;
      const loadNext = await this.$http.$get(
        `/posts/?number=${this.perPage}&page=${this.nextPage}&_fields=ID,title,featured_image,slug,tags`
      );

      // atur next page
      const nextPage =
        this.totalPage > this.nextPage ? this.nextPage + 1 : false;
      this.$store.commit("pagination/setNext", nextPage);
      // push item ke existing data
      loadNext.posts.forEach((item) => {
        this.$store.commit("pagination/pushPageData", item);
      });
      // sembunyikan loading
      this.isLoading = false;
    },
  },

  watch: {
    "$store.state.pagination.nextPage": function () {
      this.nextPage = this.$store.state.pagination.nextPage;
    },
    "$store.state.pagination.pageData": function () {
      this.racunPaginate = this.$store.state.pagination.pageData;
    },
    "$store.state.isSearchVisible": function(isVisible){
      if(isVisible) document.getElementById('searchInput').focus()
    }
  },
  head() {
    const link = 'https://irit.link/'
    const title =
      "Racun Produk di Shopee, Lazada & Toko Online | IRIT.LINK";
    const description =
      "Rekomendasi Barang Promo di Shopee, Lazada & Toko Online Lain. Racun Produk by Irit Link Sadiskon, Racun Shopee, Racun Lazada, Racun Irit Link.";
    return {
      title: title,
      link: [
        {rel:'canonical',href: link}
      ],
      meta: [
        { name: "description", hid: "description", content: description },
        { name: "og:title", hid: "og:title", content: title },
        { name: "og:url", hid: "og:url", content: link },
        { name: "og:description", hid: "og:description", content: description },
        { name: "twitter:title", hid: "twitter:title", content: title },
        {
          name: "twitter:description",
          hid: "twitter:description",
          content: description,
        },
        { name: "twitter:site", hid: "twitter:site", content: '@sadiskon' },
        { name: "twitter:card", hid: "twitter:card", content: "summary" },
        {name:'facebook-domain-verification',content:'0l7ou7u0f89oasssyjl0k54qdb3oq0'}
      ],
      
    };
  },
};
</script>

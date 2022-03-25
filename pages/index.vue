<template>
  <div>
    <Header />
    <div id="content" class="flex flex-wrap items-center px-3">
      <div class="p-1 w-1/2 md:w-1/3" v-for="item of racun" :key="item.ID">
        <NuxtLink
          :to="`/${item.slug}/`"
          class="block rounded-xl overflow-hidden shadow"
        >
          <nuxt-img
            :src="item.featured_image"
            class="w-full h-full object-cover"
            height="189"
            width="189"
            format="webp"
            quality="80"
            fit="cover"
          />
          <h2 v-html="item.title" class="p-2 truncate text-gray-800"></h2>
        </NuxtLink>
      </div>
      <!-- appended items  -->
      <div class="p-1 w-1/2 md:w-1/3" v-for="item of racunPaginate" :key="item.ID">
        <NuxtLink
          :to="`/${item.slug}/`"
          class="block rounded-xl overflow-hidden shadow"
        >
          <nuxt-img
            :src="item.featured_image"
            class="w-full h-full object-cover"
            height="189"
            width="189"
            format="webp"
            quality="80"
            fit="cover"
          />
          <h2 v-html="item.title" class="p-2 truncate text-gray-800"></h2>
        </NuxtLink>
      </div>
      <!-- skeleton loading  -->
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
  </div>
</template>
<script>
export default {
  async asyncData({ $http, store }) {
    const perPage = store.state.perPage;

    const racunData = await $http.$get(
      `${store.state.baseHost}/posts/?number=${perPage}`
    );
    //pagination helper
    const totalPage = Math.ceil(racunData.found / perPage);
   // kalau jumlah halaman lebih dari 1 berarti next page = 2
    const nextPage = totalPage > 1 ? store.state.pagination.nextPage : false ;
    // unset view as singular
    store.commit("view/isSingular", false);

    return {
      perPage,
      totalPage,
      nextPage,
      racun: racunData.posts,
      isLoading: false,
    };
  },
  data(){
    return{
      racunPaginate: this.$store.state.pagination.pageData
    }
  },
  // created(){
  //   if ( this.$store.state.pagination.isInitial  ) {
  //     this.racun.forEach((item) => {
  //       this.$store.commit("pagination/pushPageData", item );
  //     })
  //     this.$store.commit('pagination/initialCommit')
  //   }
  // },
  mounted() {
    //pastikan next page bernilai sesuai nilai terakhir setelah nuxt route
    this.nextPage = this.totalPage > 1 ? this.$store.state.pagination.nextPage : false ;
  },
  methods: {
    async loadNext() {
      this.isLoading = true;
      const loadNext = await this.$http.$get(
        `${this.$store.state.baseHost}/posts/?number=${this.perPage}&page=${this.nextPage}`
      );
      // atur next page
      const nextPage = this.totalPage > this.nextPage ? this.nextPage + 1 : false;
      this.$store.commit("pagination/setNext", nextPage);
      // push item ke existing data
      loadNext.posts.forEach((item) => {
        console.log(item.title)
        this.$store.commit('pagination/pushPageData', item )
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
      console.log(this.racun)
      console.log(this.$store.state.pagination.pageData)
    },
    "$route": function (data) {
      console.log("data");
    },
  },
  head() {
    const title =
      "Racun Produk Irit Link di Shopee, Lazada & Toko Online | by Sadiskon";
    const description =
      "Rekomendasi Barang Promo di Shopee, Lazada & Toko Online Lain. Racun Produk by Irit Link Sadiskon, Racun Shopee, Racun Lazada, Racun Irit Link.";
    return {
      title: title,
      meta: [
        { name: "description", hid: "description", content: description },
        { name: "og:title", hid: "og:title", content: title },
        { name: "og:description", hid: "og:description", content: description },
      ],
    };
  },
};
</script>

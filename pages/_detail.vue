<template>
  <div>
    <div class="w-full">
      <nuxt-img
        :src="racun.featured_image"
        :alt="racun.title"
        height="488"
        width="488"
        fit="cover"
        format="webp"
        class="object-cover"
      />
    </div>
    <div id="content" class="block items-center py-5">
      <div class="flex justify-between itemx-center px-2">
        <h1
          v-html="racun.title"
          class="text-xl font-semibold text-gray-700 flex flex-grow items-center"
        ></h1>
        <button class="w-10 h-10 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"
            />
          </svg>
        </button>
      </div>
      <hr/>
      <div
        class="racun-content text-lg leading-normal w-full py-2 px-4"
        v-html="racun.content"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $http, store, params }) {
    const racun = await $http.$get(
      `${store.state.baseHost}/posts/slug:${params.detail}`
    );

    // set view as singular
    store.commit("view/isSingular", true);
    return {
      racun,
    };
  },
  head(){
      const title = `${this.racun.title} | Irit.Link by Sadiskon`
      const description = this.racun.excerpt || this.racun.title
      return{
          title: title,
          meta:[
              {name:'description', hid: 'description', content: description },
              {name:'og:title', hid:'og:title', content:title},
              {name:'og:description', hid:'og:description', content:description}
          ]
      }
  }
};
</script>
<style>
.racun-content p {
  margin: 1rem auto;
}
.has-text-align-center{
    text-align:center;
}
.wp-block-button {
  display: block;
  text-align: center;
  padding: 1rem;
}
.wp-block-button__link {
  background: #e85668;
  display: block;
  padding: 0.7rem 2rem;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  border-radius:10px;
}
</style>

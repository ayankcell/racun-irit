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
        class="object-cover w-full"
      />
    </div>
    <div id="content" class="block items-center">
      <div class="flex justify-between itemx-center px-2 py-3">
        <h1
          v-html="racun.title"
          class="text-xl font-semibold text-gray-700 flex flex-grow items-center"
        ></h1>
        <button class="w-12 h-12 flex justify-center items-center focus:outline-light-500" @click="socialShare">
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
    <SocialShare :title="racun.title" :description="racun.excerpt.replace(/<[^>]*>/g,'') || racun.title" :url="`https://racun.irit.link/${racun.slug}`"/>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
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
  },
  methods:{
    ...mapMutations({
      socialShare:'socialshare/open'
    })
  },
  watch:{
    '$store.state.socialshare.modalOpened': function(data){
      this.isOpened = data
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
}
.wp-block-button__link {
  background: #e85668;
  display: block;
  padding: 0.5rem;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  border-radius:10px;
}
.wp-block-button__link:hover,.wp-block-button__link:focus {
  background: #eb6c7a;
  display: block;
  padding: 0.7rem 2rem;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  border-radius:10px;
}
/** button link icon */
.wp-block-button__link:before{
  display:inline-block;
  content:'';
  vertical-align: -.125em;
  background-image: url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>');
  background-repeat: no-repeat;
  background-size: 1.3rem 1.3rem;
  height:1.3rem;
  width:1.3rem;
  margin-right:1rem;
}
.racun-content .wp-block-embed{
  margin:0;
}
.racun-content iframe{
  max-width:100%;
}
</style>

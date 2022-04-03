<template>
  <div>
    <div class="w-full ft_img_wrap">
      <nuxt-picture
        :src="`${racun.featured_image}?resize=488%2C488`"
        :alt="racun.title"
        height="488"
        width="488"
        fit="cover"
        format="webp"
        :imgAttrs="{class:'object-cover w-full'}"
      />
    </div>
    <div id="content" class="block items-center">
      <div class="flex justify-between itemx-center px-2 py-3">
        <h1
          v-html="racun.title"
          class="text-xl font-semibold text-gray-700 flex flex-grow items-center leading-relaxed"
        ></h1>
        <button
          class="racun-btn_social-modal w-12 h-12 flex justify-center items-center focus:outline-light-500"
          @click="socialShare"
        >
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
      <hr />
      <div
        class="racun-content text-lg leading-normal w-full py-2 px-4"
        v-html="racun.content"
      ></div>
    </div>
    <SocialShare
      :title="racun.title"
      :description="racun.excerpt.replace(/<[^>]*>/g, '') || racun.title"
      :url="`https://racun.irit.link/p/${racun.slug}/`"
    />
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  async asyncData({ $http, store, params }) {
    const racun = await $http.$get(
      `/posts/slug:${params.detail}`
    );

    // set view as singular
    store.commit("view/isSingular", true);
    return {
      racun: racun,
    };
  },
  head() {
    const title = `${this.racun.title} | Irit.Link by Sadiskon`;
    const description = this.racun.excerpt.replace( /(<([^>]+)>)/ig, '') || this.racun.title;
    const image = this.racun.featured_image;
    return {
      title: title,
      meta: [
        { name: "description", hid: "description", content: description },
        { name: "og:title", hid: "og:title", content: title },
        { name: "og:description", hid: "og:description", content: description },
        { name: "og:image", hid: "og:image", content: image },
        { name: "twitter:title", hid: "twitter:title", content: title },
        {
          name: "twitter:description",
          hid: "twitter:description",
          content: description,
        },
        { name: "twitter:image", hid: "twitter:image", content: image },
        { name: "twitter:card", hid: "twitter:card", content: "summary" },
      ],
    };
  },
  methods: {
    ...mapMutations({
      socialShare: "socialshare/open",
    }),
  },
  watch: {
    "$store.state.socialshare.modalOpened": function (data) {
      this.isOpened = data;
    },
  },
};
</script>
<style>
.ft_img_wrap {
  background-color: #eee;
  background-image: url('data:image/svg+xml, <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="%23ccc"><path d="M13.38 10.543c.548 0 1.125.333 1.74 1.006.632.657.946 1.17.946 1.55 0 .39-.366.913-1.093 1.57-.713.659-1.202.988-1.47.988-.489 0-1.048-.337-1.677-1.01-.628-.668-.943-1.187-.943-1.549 0-.208.253-.614.753-1.213l-1.005.94-1.133 1.088c-.321.31-.658.622-1.009.943a19.51 19.51 0 0 1-.858.757c-.395.336-.585.193-.925.022a20.255 20.255 0 0 1-.797-.465l-.38-.248c.282-.292.497-.548.65-.757l6.09-8.252c-.1 0-.472.3-1.115.899a23.933 23.933 0 0 1-2.182 1.827c-.811.596-1.47.9-1.974.9-.515 0-1.089-.337-1.717-1.01-.618-.668-.925-1.183-.925-1.549 0-.322.343-.822 1.027-1.506.702-.698 1.199-1.049 1.491-1.049.53 0 1.104.337 1.718 1.005.632.658.95 1.174.95 1.55 0 .238-.197.585-.592 1.049l.987-.943c.435-.402.804-.75 1.115-1.023l.942-.903c.337-.307.607-.541.82-.694.383-.344.555-.187.88 0 .281.168.548.336.797.504l.358.252a6.14 6.14 0 0 0-.61.69l-6.086 8.253c.099 0 .464-.3 1.093-.899.629-.6 1.352-1.202 2.16-1.802.811-.614 1.47-.92 1.974-.92zM5.95 6.98c0 .139.109.344.336.607.237.256.475.38.712.38.099 0 .282-.143.549-.42.263-.278.398-.468.398-.567 0-.139-.12-.333-.358-.585-.223-.267-.453-.402-.695-.402-.08 0-.263.146-.544.42-.263.282-.399.472-.399.567Zm7.576 7.101c.098 0 .281-.139.548-.416.263-.282.395-.468.395-.567 0-.139-.117-.336-.355-.585-.223-.266-.457-.402-.694-.402-.084 0-.263.143-.545.42-.267.282-.398.469-.398.567 0 .14.11.344.336.607.238.252.475.376.713.376z" style="stroke-width:3.65481" transform="translate(1.782 1.802)"/><path d="m11.033.584.022 1.62a8.059 8.059 0 0 1 7.244 8.014 8.077 8.077 0 0 1-8.1 8.077 8.055 8.055 0 0 1-8.058-7.748H.522a9.7 9.7 0 0 0 19.392-.329 9.696 9.696 0 0 0-8.88-9.63Z" style="stroke-width:3.65481" transform="translate(1.782 1.802)"/><path d="M10.2.522c-2.01 0-3.87.621-5.42 1.67l.237.27.11.125c.278.322.486.574.702.833a8.063 8.063 0 0 1 4.37-1.286c.089 0 .165.022.25.025V.551c-.085 0-.161-.029-.25-.029ZM3.373 3.344A9.656 9.656 0 0 0 .54 9.239c.676 0 1.232-.008 1.63-.015a8.037 8.037 0 0 1 2.255-4.667l-.683-.779-.11-.127c-.102-.117-.16-.194-.256-.307Z" style="stroke-width:3.65481" transform="translate(1.782 1.802)"/></svg>');
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 200px 200px;
}
.racun-content h2 {
  font-size: 1.3em;
  font-weight: bold;
}
.racun-content p {
  margin: 1rem auto;
}
.has-text-align-center {
  text-align: center;
}
.wp-block-buttons{
  margin:1rem auto;
}
.wp-block-button {
  display: block;
  text-align: center;
  margin:1rem auto;
}

.wp-block-button__link {
  background: #e85668;
  display: block;
  padding: 0.5rem;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  border-radius: 10px;
}
.wp-block-button__link:hover,
.wp-block-button__link:focus {
  background: #eb6c7a;
}
/** button link icon */
.wp-block-button__link:before {
  display: inline-block;
  content: "";
  vertical-align: -0.125em;
  background-image: url('data:image/svg+xml, <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>');
  background-repeat: no-repeat;
  background-size: 1.3rem 1.3rem;
  height: 1.3rem;
  width: 1.3rem;
  margin-right: 1rem;
}
.wp-block-table{
  margin:0 auto;
}
.racun-content .wp-block-embed {
  margin: 0;
}
.racun-content img {
  display:inline-block;
  margin: .2rem auto;
}
.racun-content iframe {
  max-width: 100%;
}
.wp-block-table{margin:0 0 1em;overflow-x:auto}.wp-block-table table{border-collapse:collapse;width:100%}
.wp-block-table td{padding:.5rem;}
.wp-block-table.is-style-stripes{background-color:transparent;border-bottom:1px solid #f0f0f0;border-collapse:inherit;border-spacing:0}.wp-block-table.is-style-stripes tbody tr:nth-child(odd){background-color:#f0f0f0}.wp-block-table.is-style-stripes.has-subtle-light-gray-background-color tbody tr:nth-child(odd){background-color:#f3f4f5}.wp-block-table.is-style-stripes.has-subtle-pale-green-background-color tbody tr:nth-child(odd){background-color:#e9fbe5}.wp-block-table.is-style-stripes.has-subtle-pale-blue-background-color tbody tr:nth-child(odd){background-color:#e7f5fe}.wp-block-table.is-style-stripes.has-subtle-pale-pink-background-color tbody tr:nth-child(odd){background-color:#fcf0ef}.wp-block-table.is-style-stripes td,.wp-block-table.is-style-stripes th{border-color:transparent}
</style>

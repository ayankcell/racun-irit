<template>
  <div
    :class="`${
      isOpened ? 'fixed bg-opacity-50 h-full' : 'fixed bg-opacity-0 max-h-0'
    } transition-all ease-in-out duration-50 z-5 top-0 left-0 w-full bg-black`"
  >
  <div class="racun-social_close-wrapper block absolute top-0 left-0 w-full h-full bg-transparent"  @click="close"></div>
    <div
      :class="`${
        isOpened ? 'top-0 opacity-100' : '-top-100 opacity-0'
      } transition-all ease-in-out duration-400 relative block max-w-sm mx-auto p-5 bg-white rounded-br-2xl rounded-bl-2xl`"
    >
      <button
        class="racun-social_close-btn absolute top-0 right-0 h-12 w-12 flex justify-center items-center"
        @click="close"
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <p class="text-lg text-center font-semibold">Bagikan ke</p>
      <ShareNetwork
        v-for="network in networks"
        :network="network.network"
        :key="network.network"
        :style="{ backgroundColor: network.color }"
        :url="sharing.url"
        :title="sharing.title"
        :description="sharing.description"
        :twitterUser="sharing.twitterUser"
        :class="`racun-social_${network.network} flex p-2 justify-center item-center gap-2 my-2 rounded-xl`"
      >
        <span v-html="network.icon" class="fill-white flex items-center"></span>
        <span class="text-white">{{ network.name }}</span>
      </ShareNetwork>
      <button
        class="racun-social_copylink flex w-full p-2 justify-center item-center gap-2 my-2 rounded-xl bg-gray-700"
        @click="copyLink"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="white">
  <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
</svg>
        <span class="text-white">Salin Link</span>
      </button>
      <!-- copy success  -->
      <div
        :class="`absolute transition-all ease-in-out duration-200 ${isCopied? 'w-20 h-20 bg-opacity-70': 'w-0 h-0 bg-opacity-0'} rounded-lg bg-black top-40 mx-auto inset-x-0 flex justify-center items-center`"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["url", "title", "description"],
  data() {
    return {
      isOpened: this.$store.state.socialshare.modalOpened,
      isCopied: false,
      sharing: {
        url: this.$props.url,
        title: `Aku nemuin promo ${this.$props.title}`,
        description: `${this.$props.description}`,
        twitterUser: "sadiskon",
      },
      networks: [
        {
          network: "whatsapp",
          name: "Whatsapp",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
</svg>`,
          color: "#25d366",
        },

        {
          network: "facebook",
          name: "Facebook",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>`,
          color: "#1877f2",
        },
        {
          network: "telegram",
          name: "Telegram",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
</svg>`,
          color: "#0088cc",
        },

        {
          network: "twitter",
          name: "Twitter",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg>`,
          color: "#1da1f2",
        },
      ],
    };
  },
 
  methods: {
    async copyLink() {
      try {
        await this.$copyText(`Aku nemuin promo ${this.$props.title}\n`
        +this.$props.url +'\n'
        +this.$props.description
        );

        this.isCopied = true
        setTimeout(()=>{this.isCopied = false}, 1000)
      } catch (e) {
        console.error(e);
      }
    },
    ...mapMutations({
      close: "socialshare/close",
    }),
  },
  head() {
    return {
      bodyAttrs: {
        class: this.isOpened ? "overflow-hidden" : "",
      },
    };
  },
  watch: {
    "$store.state.socialshare.modalOpened": function (data) {
      this.isOpened = data;
    },
  },
};
</script>

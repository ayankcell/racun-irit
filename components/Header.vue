<template>
  <div id="bio" class="flex flex-col items-center py-5 px-3 mb-3 border-b-1">
    <div class="relative rounded-full w-18 h-18">
      <nuxt-img
        src="https://sadiskon.files.wordpress.com/2022/03/favicon.png"
        width="72"
        height="72"
        format="webp"
        quality="80"
        fit="contain"
        alt="logo Sadiskon.com"
        class="absolute left-0 top-0 w-full h-full rounded-full object-cover"
      />
    </div>
    <h1 class="py-5 text-gray-800 font-semibold text-lg">
      Racun Diskon | Irit.Link
    </h1>
    <div class="text-gray-500 text-center">
      <p>Racun Barang Promo di Shopee, Lazada, Tokopedia & Online Shop Lain</p>

      <div class="block w-full md:flex md:gap-1 md:justify-center">
        <a
        href="https://www.instagram.com/sadiskon"
        target="_blank"
        rel="noopener nofollow"
        class="racun-btn_followig flex w-auto md:px-5 py-2 font-semibold justify-center mt-3 rounded-xl text-white bg-rose-500 capitalize transition-colors duration-200 transform hover:bg-rose-400 focus:bg-rose-400"
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
      <a
        href="https://www.sadiskon.com"
        target="_blank"
        rel="noopener"
        class="racun-btn_followig flex w-auto md:px-5 py-2 font-semibold justify-center mt-3 rounded-xl text-white bg-rose-500 capitalize transition-colors duration-200 transform hover:bg-rose-400 focus:bg-rose-400"
      >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fill-rule="evenodd"
              d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
              clip-rule="evenodd"
            />
          </svg>
        Pusat Kode Voucher
      </a>
      </div>
    </div>
    <hr />
  </div>
</template>

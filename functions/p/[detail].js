export async function gatherResponse(response) {
   const { headers } = response;
   const contentType = headers.get('content-type') || '';

   if (contentType.includes('application/json')) {
      return await response.json();
   } else if (contentType.includes('application/text')) {
      return response.text();
   } else if (contentType.includes('text/html')) {
      return response.text();
   } else {
      return response.text();
   }
}
export async function onRequest(context) {
   // const baseHost = 'https://iritlink.hack.id/wp-json/wp/v2'
   // // Contents of context object
   // const { params } = context;
   // const slug = params.detail
   // const init = {
   //    headers: {
   //       'content-type': 'text/html;charset=UTF-8',
   //    },
   // };
   // const racunFetch = await fetch(`${baseHost}/posts/?slug=${slug}`, init)
   // let racun = await gatherResponse(racunFetch, init)

   return new Response( 'Halo..', { headers: {'content-type': 'text/html;charset=UTF-8'}})
}


export const template = (racun) => {
   return `<!doctype html>
<html lang="id">
   <head>
      <title>${racun.title.rendered} | Irit.Link by Sadiskon</title>
      <meta charset="utf-8">
      <meta charset="utf-8">
      <meta name="mobile-web-app-capable" content="yes">
      <meta name="apple-mobile-web-app-title" content="Racun Diskon">
      <meta name="og:type" property="og:type" content="website">
      <meta name="og:site_name" property="og:site_name" content="Racun Diskon">
      <link rel="icon" type="image/x-icon" href="/favicon.png">
      <link rel="dns-prefetch" href="https://fonts.gstatic.com/">
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="">
      <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Roboto">
      <link rel="preload" as="script" href="https://cdn.jsdelivr.net/npm/umbrellajs">
      <link rel="shortcut icon" href="/_nuxt/icons/icon_64x64.558a40.png">
      <link rel="apple-touch-icon" href="/_nuxt/icons/icon_512x512.558a40.png" sizes="512x512">
      <script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=G-EXD84HQ4LQ&amp;l=dataLayer&amp;cx=c"></script><script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-K5ZNMV4"></script>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto">
      <noscript >
         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto">
      </noscript>
     <link rel="stylesheet" href="/assets/css/details.css">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <script >if(!window._gtm_init){window._gtm_init=1;(function(w,n,d,m,e,p){w[d]=(w[d]==1||n[d]=='yes'||n[d]==1||n[m]==1||(w[e]&&w[e][p]&&w[e][p]()))?1:0})(window,navigator,'doNotTrack','msDoNotTrack','external','msTrackingProtectionEnabled');(function(w,d,s,l,x,y){w[x]={};w._gtm_inject=function(i){if(w.doNotTrack||w[x][i])return;w[x][i]=1;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);};w[y]('GTM-K5ZNMV4')})(window,document,'script','dataLayer','_gtm_ids','_gtm_inject')}</script><script>(function(){var l=document.createElement('link');l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?family=Roboto";document.querySelector("head").appendChild(l);})();</script>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto">
      <meta name="description" content="${racun.excerpt.rendered.replace(/(<([^>]+)>)/ig, '')}">
      <meta name="og:title" content="${racun.title.rendered} | Irit.Link by Sadiskon">
      <meta name="og:description"  content="${racun.excerpt.rendered.replace(/(<([^>]+)>)/ig, '')}">
      <meta name="og:image"  content="${racun.jetpack_featured_media_url}">
      <meta name="twitter:title"  content="${racun.title.rendered} | Irit.Link by Sadiskon">
      <meta name="twitter:description" content="${racun.excerpt.rendered.replace(/(<([^>]+)>)/ig, '')}">
      <meta name="twitter:image" content="${racun.jetpack_featured_media_url}">
      <meta name="twitter:card"content="summary">
      <script src="https://cdn.jsdelivr.net/npm/umbrellajs"></script>
      <script src="/assets/js/clipboard.min.js"></script>
   </head>
   <body class="">
      <noscript data-pbody="true"><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K5ZNMV4&" height="0" width="0" style="display:none;visibility:hidden" title="gtm"></iframe></noscript>
      <div id="__nuxt">
         <div id="__layout">
            <div class="max-w-screen-sm mx-auto bg-white">
               <nav class="fixed z-5 top-0 left-0 w-full bg-white border-b-1">
                  <div class="max-w-screen-md mx-auto relative flex justify-between">
                     <a href="/" class="flex justify-center items-center h-13 w-13 racun-nav_back nuxt-link-active">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                           <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                        </svg>
                     </a>
                     <div class="rounded-full w-13 h-13 p-2"><img src="https://racunproduk.files.wordpress.com/2022/03/sadiskon_icon_rev_2020.png?resize=32%2C32" width="32" height="32" alt="logo Sadiskon.com" class="w-full h-full rounded-full object-cover"></div>
                     <button class="flex justify-center items-center h-13 w-13 racun-nav_toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6">
                        <path id="menuiconopen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                        <path id="menuiconclose" class="hidden" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                     </button>
                     <div id="menudropdown" class="hidden absolute right-2 z-20 w-52 py-2 mt-13 bg-white rounded-md border-1 dark:bg-gray-800"><a href="https://www.sadiskon.com" class="racun-nav_link-sds flex px-4 py-3 text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clip-rule="evenodd"></path></svg>
                        Cari Kode Voucher
                     </a> <a href="https://www.instagram.com/irit.link" target="_blank" rel="noopener nofollow" class="racun-nav_link-ig flex px-4 py-3 text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd"></path></svg>
                        Follow Instagram
                     </a>
                  </div>
                  </div>
               </nav>
               <div class="mt-12">
                  <div class="w-full ft_img_wrap">
                  <picture>
                     <source srcset="${racun.jetpack_featured_media_url}&lb=320,320 320w, ${racun.jetpack_featured_media_url}&lb=500,500 640w, ${racun.jetpack_featured_media_url}&lb=500,500 768w, ${racun.jetpack_featured_media_url}&lb=500,500 1024w, ${racun.jetpack_featured_media_url}&lb=500,500 1280w, ${racun.jetpack_featured_media_url}&lb=500,500 1536w, ${racun.jetpack_featured_media_url}&lb=500,500 1536w"
                        sizes="(max-width: 320px) 320px, (max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, (max-width: 1536px) 1536px, 1536px">
                     <img src="${racun.jetpack_featured_media_url}&lb=500,500 
                        srcset="${racun.jetpack_featured_media_url}&lb=320,320 320w, ${racun.jetpack_featured_media_url}&lb=500,500 640w, ${racun.jetpack_featured_media_url}&lb=500,500 768w, ${racun.jetpack_featured_media_url}&lb=500,500 1024w, ${racun.jetpack_featured_media_url}&lb=500,500 1280w, ${racun.jetpack_featured_media_url}&lb=500,500 1536w, ${racun.jetpack_featured_media_url}&lb=500,500 1536w"
                        sizes="(max-width: 320px) 320px, (max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1280px) 1280px, (max-width: 1536px) 1536px, 1536px"
                        width="488" height="488" alt="Toples  Kue Kering" class="object-cover w-full">
                  </picture>
                  </div>
                  <div id="content" class="block items-center">
                     <div class="flex justify-between itemx-center px-2 py-3">
                        <h1 class="text-xl font-semibold text-gray-700 flex flex-grow items-center leading-relaxed">${racun.title.rendered}</h1>
                        <button class="racun-btn_social-modal w-12 h-12 flex justify-center items-center focus:outline-light-500">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                           </svg>
                        </button>
                     </div>
                     <hr>
                     <div class="racun-content text-lg leading-normal w-full py-2 px-4">
                        ${racun.content.rendered.replace(/\s+/g, ' ')}
                     </div>
                  </div>
                  <div id="social-modal_wrapper" class="fixed bg-opacity-0 max-h-0 transition-all ease-in-out duration-50 z-5 top-0 left-0 w-full bg-black">
                     <div class="racun-social_close-wrapper block absolute top-0 left-0 w-full h-full bg-transparent"></div>
                     <div id="social-btns" class="-top-100 opacity-0 transition-all ease-in-out duration-400 relative block max-w-sm mx-auto p-5 bg-white rounded-br-2xl rounded-bl-2xl">
                        <button class="racun-social_close-btn absolute top-0 right-0 h-12 w-12 flex justify-center items-center">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                           </svg>
                        </button>
                        <p class="text-lg text-center font-semibold">Bagikan ke</p>
                        <a href="javascript:void(0)" class="share-network-whatsapp racun-social_whatsapp flex p-2 justify-center item-center gap-2 my-2 rounded-xl" style="background-color: rgb(37, 211, 102);">
                           <span class="fill-white flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                 <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                              </svg>
                           </span>
                           <span class="text-white">Whatsapp</span>
                        </a>
                        <a href="javascript:void(0)" class="share-network-facebook racun-social_facebook flex p-2 justify-center item-center gap-2 my-2 rounded-xl" style="background-color: rgb(24, 119, 242);">
                           <span class="fill-white flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                 <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                              </svg>
                           </span>
                           <span class="text-white">Facebook</span>
                        </a>
                        <a href="javascript:void(0)" class="share-network-telegram racun-social_telegram flex p-2 justify-center item-center gap-2 my-2 rounded-xl" style="background-color: rgb(0, 136, 204);">
                           <span class="fill-white flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                 <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
                              </svg>
                           </span>
                           <span class="text-white">Telegram</span>
                        </a>
                        <a href="javascript:void(0)" class="share-network-twitter racun-social_twitter flex p-2 justify-center item-center gap-2 my-2 rounded-xl" style="background-color: rgb(29, 161, 242);">
                           <span class="fill-white flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                 <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                              </svg>
                           </span>
                           <span class="text-white">Twitter</span>
                        </a>
                        <button class="racun-social_copylink flex w-full p-2 justify-center item-center gap-2 my-2 rounded-xl bg-gray-700" data-clipboard-text="Aku nemuin promo ${racun.title.rendered} https://racun.irit.link/p/${racun.slug}/">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="h-5 w-5">
                              <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"></path>
                           </svg>
                           <span class="text-white">Salin Link</span>
                        </button>
                        <div id="copycheck" class="absolute transition-all ease-in-out duration-200 w-0 h-0 bg-opacity-0 rounded-lg bg-black top-40 mx-auto inset-x-0 flex justify-center items-center">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2" class="h-8 w-8">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="footer" class="flex flex-col items-center py-5 px-3 border-t-1 mt-5">
                  <p class="text-gray-500">IRIT.LINK by <a href="https://www.sadiskon.com" class="racun-footer_link underline">SADISKON</a></p>
               </div>
            </div>
         </div>
      </div>
    <script type="text/javascript">
    u('.racun-nav_toggle').on('click',function(){
      u('#menuiconopen, #menuiconclose, #menudropdown').toggleClass('hidden')
    })
    u('.racun-btn_social-modal').on('click',function(){
       u('#social-modal_wrapper').removeClass('bg-opacity-0, max-h-0').addClass('bg-opacity-50,h-full')
       u('#social-btns').removeClass('-top-100 ,opacity-0').addClass('top-0 ,opacity-100')
    })
    u('.racun-social_close-wrapper, .racun-social_close-btn').on('click',function(){
      u('#social-modal_wrapper').addClass('bg-opacity-0, max-h-0').removeClass('bg-opacity-50,h-full')
      u('#social-btns').addClass('-top-100 ,opacity-0').removeClass('top-0 ,opacity-100')
    })
    var clipboard = new ClipboardJS('.racun-social_copylink')
    clipboard.on('success',function(e){
       u('#copycheck').removeClass('w-0, h-0, bg-opacity-0').addClass('w-20, h-20, bg-opacity-70')
       setTimeout(function(){
         u('#copycheck').addClass('w-0, h-0, bg-opacity-0').removeClass('w-20, h-20, bg-opacity-70')
       },1000)
    })
    u('.share-network-whatsapp').on('click',function(){
       sharePopup('whatsapp')
    })
    u('.share-network-twitter').on('click',function(){
      sharePopup('twitter')
   })
   u('.share-network-facebook').on('click',function(){
      sharePopup('facebook')
   })
   u('.share-network-telegram').on('click',function(){
      sharePopup('telegram')
   })
   function sharePopup(network) {
      var url = 'https://racun.irit.link/p/${racun.slug}/'
      var mc = ''
      var title = '${racun.title.rendered}'
      var excerpt = '${encodeURIComponent(racun.excerpt.rendered.replace(/(<([^>]+)>)/ig, ''))}'
      var msg = encodeURIComponent('Aku nemuin promo ') + mc + ' - ' + title + excerpt
      if (network == 'whatsapp') {
          url = 'https://api.whatsapp.com/send?text=' + msg
      }
      if(network == 'facebook'){
          url = 'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(url)+'&title='+encodeURIComponent( title)+'&description='+encodeURIComponent(excerpt)
      }
      if(network == 'twitter'){
          url = 'https://twitter.com/intent/tweet?text='+encodeURIComponent('Aku nemu promo '+mc+' - '+title)+'&url='+encodeURIComponent( url)+'&via=sadiskon'
      }
      if(network == 'telegram'){
          url = 'https://t.me/share/url?url='+encodeURIComponent(url)+'&text='+msg;
      }
      window.open(url, '','popup=yes,width=650,height=400');
  }
    </script>
    </body>
    </html>
    `
}
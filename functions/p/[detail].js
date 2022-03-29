export async function onRequest(context) {
    const baseHost = 'https://public-api.wordpress.com/rest/v1.1/sites/racunproduk.wordpress.com'
    // Contents of context object
    const {
      request, // same as existing Worker API
      env, // same as existing Worker API
      params, // if filename includes [id] or [[path]]
      waitUntil, // same as ctx.waitUntil in existing Worker API
      next, // used for middleware or to fetch assets
      data, // arbitrary space for passing data between middlewares
    } = context;

    async function gatherResponse(response) {
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

    const slug = params.detail
    const init = {
        headers: {
          'content-type': 'text/html;charset=UTF-8',
        },
      };
    const racunFetch = await fetch(`${baseHost}/posts/slug:${slug}`, init)
    const racun = await gatherResponse(racunFetch,init)
    let template = `
    <!doctype html>
<html>
  <head>
    <title>Cookies Karakter Unik 400gr | Irit.Link by Sadiskon</title>
    <meta data-n-head="ssr" charset="utf-8">
    <meta data-n-head="ssr" name="viewport" content="width=device-width,initial-scale=1">
    <meta data-n-head="ssr" data-hid="charset" charset="utf-8">
    <meta data-n-head="ssr" data-hid="mobile-web-app-capable" name="mobile-web-app-capable" content="yes">
    <meta data-n-head="ssr" data-hid="apple-mobile-web-app-title" name="apple-mobile-web-app-title" content="Racun Diskon">
    <meta data-n-head="ssr" data-hid="og:type" name="og:type" property="og:type" content="website">
    <meta data-n-head="ssr" data-hid="og:site_name" name="og:site_name" property="og:site_name" content="Racun Diskon">
    <meta data-n-head="ssr" name="description" data-hid="description" content="<p>Harga Rp31.500 &amp;#8211; Rp35.500 Cocok banget untuk isi toples lebaran. selain warna dan tampilannya unik. anak anak juga pasti suka.</p>
">
    <meta data-n-head="ssr" name="og:title" data-hid="og:title" content="Cookies Karakter Unik 400gr | Irit.Link by Sadiskon">
    <meta data-n-head="ssr" name="og:description" data-hid="og:description" content="<p>Harga Rp31.500 &amp;#8211; Rp35.500 Cocok banget untuk isi toples lebaran. selain warna dan tampilannya unik. anak anak juga pasti suka.</p>
">
    <meta data-n-head="ssr" name="og:image" data-hid="og:image" content="https://racunproduk.files.wordpress.com/2022/03/screenshot_20220328-102607_1.jpg">
    <meta data-n-head="ssr" name="twitter:title" data-hid="twitter:title" content="Cookies Karakter Unik 400gr | Irit.Link by Sadiskon">
    <meta data-n-head="ssr" name="twitter:description" data-hid="twitter:description" content="<p>Harga Rp31.500 &amp;#8211; Rp35.500 Cocok banget untuk isi toples lebaran. selain warna dan tampilannya unik. anak anak juga pasti suka.</p>
">
    <meta data-n-head="ssr" name="twitter:image" data-hid="twitter:image" content="https://racunproduk.files.wordpress.com/2022/03/screenshot_20220328-102607_1.jpg">
    <meta data-n-head="ssr" name="twitter:card" data-hid="twitter:card" content="summary">
    <link data-n-head="ssr" rel="icon" type="image/x-icon" href="/favicon.png">
    <link data-n-head="ssr" data-hid="gf-prefetch" rel="dns-prefetch" href="https://fonts.gstatic.com/">
    <link data-n-head="ssr" data-hid="gf-preconnect" rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="">
    <link data-n-head="ssr" data-hid="gf-preload" rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Roboto">
    <link data-n-head="ssr" data-hid="shortcut-icon" rel="shortcut icon" href="/_nuxt/icons/icon_64x64.558a40.png">
    <link data-n-head="ssr" data-hid="apple-touch-icon" rel="apple-touch-icon" href="/_nuxt/icons/icon_512x512.558a40.png" sizes="512x512">
    <link data-n-head="ssr" rel="manifest" href="/_nuxt/manifest.40f65780.json" data-hid="manifest">
    <script data-n-head="ssr" data-hid="gtm-script">
      window._gtm_init || (window._gtm_init = 1, function(t, e, n, a, o) {
        t[n] = 1 == t[n] || "yes" == e[n] || 1 == e[n] || 1 == e.msDoNotTrack || t[a] && t[a][o] && t[a][o]() ? 1 : 0
      }(window, navigator, "doNotTrack", "external", "msTrackingProtectionEnabled"), function(a, o, i, g, m) {
        a[m] = {}, a._gtm_inject = function(t) {
          var e, n;
          a.doNotTrack || a[m][t] || (a[m][t] = 1, a[g] = a[g] || [], a[g].push({
            "gtm.start": (new Date).getTime(),
            event: "gtm.js"
          }), e = o.getElementsByTagName(i)[0], (n = o.createElement(i)).async = !0, n.src = "https://www.googletagmanager.com/gtm.js?id=" + t, e.parentNode.insertBefore(n, e))
        }, a._gtm_inject("GTM-K5ZNMV4")
      }(window, document, "script", "dataLayer", "_gtm_ids"))
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
.hidden{
    display:none;
}
.wp-block-buttons{
  margin:1rem auto;
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
</style>

    <script data-n-head="ssr" data-hid="gf-script">
      ! function() {
        var e = document.createElement("link");
        e.rel = "stylesheet", e.href = "https://fonts.googleapis.com/css2?family=Roboto", document.querySelector("head").appendChild(e)
      }()
    </script><noscript data-n-head="ssr" data-hid="gf-noscript">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto">
    </noscript>

    <style data-vue-ssr-id="b39e1096:0 fa7ff0ca:0 5eb71786:0 00538b50:0">
      *,
      :after,
      :before {
        box-sizing: border-box;
        border: 0 solid #e5e7eb
      }

      * {
        --tw-ring-inset: var(--tw-empty, );
        /*!*/
        /*!*/
        --tw-ring-offset-width: 0px;
        --tw-ring-offset-color: #fff;
        --tw-ring-color: rgba(59, 130, 246, 0.5);
        --tw-ring-offset-shadow: 0 0 transparent;
        --tw-ring-shadow: 0 0 transparent;
        --tw-shadow: 0 0 transparent
      }

      :root {
        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4
      }

      :-moz-focusring {
        outline: 1px dotted ButtonText
      }

      :-moz-ui-invalid {
        box-shadow: none
      }

      ::moz-focus-inner {
        border-style: none;
        padding: 0
      }

      ::-webkit-inner-spin-button,
      ::-webkit-outer-spin-button {
        height: auto
      }

      ::-webkit-search-decoration {
        -webkit-appearance: none
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit
      }

      [type=search] {
        -webkit-appearance: textfield;
        outline-offset: -2px
      }

      abbr[title] {
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted
      }

      a {
        color: inherit;
        text-decoration: inherit
      }

      body {
        margin: 0;
        font-family: inherit;
        line-height: inherit
      }

      button {
        text-transform: none;
        background-color: transparent;
        background-image: none
      }

      [type=button],
      [type=reset],
      [type=submit],
      button {
        -webkit-appearance: button
      }

      [role=button],
      button {
        cursor: pointer
      }

      fieldset {
        margin: 0;
        padding: 0
      }

      html {
        -webkit-text-size-adjust: 100%;
        font-family: Roboto, sans-serif;
        line-height: 1.5
      }

      hr {
        height: 0;
        color: inherit;
        border-top-width: 1px
      }

      h1,
      h2 {
        font-size: inherit;
        font-weight: inherit
      }

      button,
      input {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
        padding: 0;
        line-height: inherit;
        color: inherit
      }

      img {
        border-style: solid;
        max-width: 100%;
        height: auto
      }

      input::placeholder {
        opacity: 1;
        color: #9ca3af
      }

      input::webkit-input-placeholder {
        opacity: 1;
        color: #9ca3af
      }

      input::-moz-placeholder {
        opacity: 1;
        color: #9ca3af
      }

      input:-ms-input-placeholder {
        opacity: 1;
        color: #9ca3af
      }

      input::-ms-input-placeholder {
        opacity: 1;
        color: #9ca3af
      }

      img,
      svg {
        display: block;
        vertical-align: middle
      }

      h1,
      h2,
      hr,
      p {
        margin: 0
      }

      .bg-rose-500 {
        --tw-bg-opacity: 1;
        background-color: rgba(244, 63, 94, var(--tw-bg-opacity))
      }

      .focus\:bg-rose-400:focus,
      .hover\:bg-rose-400:hover {
        --tw-bg-opacity: 1;
        background-color: rgba(251, 113, 133, var(--tw-bg-opacity))
      }

      .bg-white {
        --tw-bg-opacity: 1;
        background-color: rgba(255, 255, 255, var(--tw-bg-opacity))
      }

      .dark .dark\:bg-gray-800 {
        --tw-bg-opacity: 1;
        background-color: rgba(31, 41, 55, var(--tw-bg-opacity))
      }

      .hover\:bg-gray-100:hover {
        --tw-bg-opacity: 1;
        background-color: rgba(243, 244, 246, var(--tw-bg-opacity))
      }

      .dark .dark\:hover\:bg-gray-700:hover {
        --tw-bg-opacity: 1;
        background-color: rgba(55, 65, 81, var(--tw-bg-opacity))
      }

      .bg-gray-200 {
        --tw-bg-opacity: 1;
        background-color: rgba(229, 231, 235, var(--tw-bg-opacity))
      }

      .bg-gray-50 {
        --tw-bg-opacity: 1;
        background-color: rgba(249, 250, 251, var(--tw-bg-opacity))
      }

      .bg-black {
        --tw-bg-opacity: 1;
        background-color: rgba(0, 0, 0, var(--tw-bg-opacity))
      }

      .bg-transparent {
        background-color: transparent
      }

      .bg-gray-700 {
        --tw-bg-opacity: 1;
        background-color: rgba(55, 65, 81, var(--tw-bg-opacity))
      }

      .bg-light-400 {
        --tw-bg-opacity: 1;
        background-color: rgba(246, 246, 246, var(--tw-bg-opacity))
      }

      .bg-opacity-50 {
        --tw-bg-opacity: 0.5
      }

      .bg-opacity-0 {
        --tw-bg-opacity: 0
      }

      .bg-opacity-70 {
        --tw-bg-opacity: 0.7
      }

      .hover\:bg-opacity-30:hover {
        --tw-bg-opacity: 0.3
      }

      .focus\:border-rose-500:focus {
        --tw-border-opacity: 1;
        border-color: rgba(244, 63, 94, var(--tw-border-opacity))
      }

      .rounded-full {
        border-radius: 9999px
      }

      .rounded-xl {
        border-radius: .75rem
      }

      .rounded-md {
        border-radius: .375rem
      }

      .rounded-lg {
        border-radius: .5rem
      }

      .rounded-br-2xl {
        border-bottom-right-radius: 1rem
      }

      .rounded-bl-2xl {
        border-bottom-left-radius: 1rem
      }

      .border-1 {
        border-width: 1px
      }

      .border-t-1 {
        border-top-width: 1px
      }

      .border-b-1 {
        border-bottom-width: 1px
      }

      .block {
        display: block
      }

      .flex {
        display: flex
      }

      .flex-col {
        flex-direction: column
      }

      .flex-wrap {
        flex-wrap: wrap
      }

      .items-center {
        align-items: center
      }

      .justify-start {
        justify-content: flex-start
      }

      .justify-center {
        justify-content: center
      }

      .justify-between {
        justify-content: space-between
      }

      .flex-grow {
        flex-grow: 1
      }

      .font-semibold {
        font-weight: 600
      }

      .font-bold {
        font-weight: 700
      }

      .h-full {
        height: 100%
      }

      .h-5 {
        height: 1.25rem
      }

      .h-6 {
        height: 1.5rem
      }

      .h-36 {
        height: 9rem
      }

      .h-7 {
        height: 1.75rem
      }

      .h-12 {
        height: 3rem
      }

      .h-20 {
        height: 5rem
      }

      .h-0 {
        height: 0
      }

      .h-8 {
        height: 2rem
      }

      .h-18 {
        height: 4.5rem
      }

      .h-13 {
        height: 3.25rem
      }

      .text-lg {
        font-size: 1.125rem;
        line-height: 1.75rem
      }

      .text-sm {
        font-size: .875rem;
        line-height: 1.25rem
      }

      .text-xl {
        font-size: 1.25rem;
        line-height: 1.75rem
      }

      .text-xs {
        font-size: .75rem;
        line-height: 1rem
      }

      .leading-relaxed {
        line-height: 1.625
      }

      .leading-normal {
        line-height: 1.5
      }

      .mx-auto {
        margin-left: auto;
        margin-right: auto
      }

      .my-2 {
        margin-top: .5rem;
        margin-bottom: .5rem
      }

      .my-5 {
        margin-bottom: 1.25rem
      }

      .mt-5,
      .my-5 {
        margin-top: 1.25rem
      }

      .mb-3 {
        margin-bottom: .75rem
      }

      .mt-3 {
        margin-top: .75rem
      }

      .mt-10 {
        margin-top: 2.5rem
      }

      .mt-13 {
        margin-top: 3.25rem
      }

      .mt-2 {
        margin-top: .5rem
      }

      .mt-12 {
        margin-top: 3rem
      }

      .max-h-0 {
        max-height: 0
      }

      .max-w-screen-md {
        max-width: 768px
      }

      .max-w-sm {
        max-width: 24rem
      }

      .max-w-screen-sm {
        max-width: 640px
      }

      .object-cover {
        -o-object-fit: cover;
        object-fit: cover
      }

      .opacity-100 {
        opacity: 1
      }

      .opacity-0 {
        opacity: 0
      }

      .focus\:outline-none:focus {
        outline: 2px solid transparent;
        outline-offset: 2px
      }

      .focus\:outline-light-500:focus {
        --tw-outline-opacity: 1;
        outline-color: rgba(242, 242, 242, var(--tw-outline-opacity))
      }

      .overflow-hidden {
        overflow: hidden
      }

      .p-2 {
        padding: .5rem
      }

      .p-1 {
        padding: .25rem
      }

      .p-5 {
        padding: 1.25rem
      }

      .py-5 {
        padding-top: 1.25rem;
        padding-bottom: 1.25rem
      }

      .px-3 {
        padding-left: .75rem;
        padding-right: .75rem
      }

      .py-2 {
        padding-top: .5rem;
        padding-bottom: .5rem
      }

      .px-5 {
        padding-left: 1.25rem;
        padding-right: 1.25rem
      }

      .px-4 {
        padding-left: 1rem;
        padding-right: 1rem
      }

      .py-3 {
        padding-top: .75rem;
        padding-bottom: .75rem
      }

      .px-2 {
        padding-left: .5rem;
        padding-right: .5rem
      }

      .pl-3 {
        padding-left: .75rem
      }

      .pl-10 {
        padding-left: 2.5rem
      }

      .pr-4 {
        padding-right: 1rem
      }

      .static {
        position: static
      }

      .fixed {
        position: fixed
      }

      .absolute {
        position: absolute
      }

      .relative {
        position: relative
      }

      .inset-y-0 {
        top: 0;
        bottom: 0
      }

      .inset-x-0 {
        right: 0;
        left: 0
      }

      .left-0 {
        left: 0
      }

      .top-0 {
        top: 0
      }

      .right-0 {
        right: 0
      }

      .right-2 {
        right: .5rem
      }

      .-top-100 {
        top: -25rem
      }

      .top-40 {
        top: 10rem
      }

      .bottom-0 {
        bottom: 0
      }

      .shadow-xl {
        --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color)
      }

      .shadow,
      .shadow-xl {
        box-shadow: 0 0 transparent, 0 0 transparent, var(--tw-shadow);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent), var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow)
      }

      .shadow {
        --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
        --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)
      }

      .fill-white {
        --tw-fill-opacity: 1;
        fill: rgba(255, 255, 255, var(--tw-fill-opacity))
      }

      .text-center {
        text-align: center
      }

      .text-gray-500 {
        --tw-text-opacity: 1;
        color: rgba(107, 114, 128, var(--tw-text-opacity))
      }

      .text-gray-800 {
        --tw-text-opacity: 1;
        color: rgba(31, 41, 55, var(--tw-text-opacity))
      }

      .text-white {
        --tw-text-opacity: 1;
        color: rgba(255, 255, 255, var(--tw-text-opacity))
      }

      .text-gray-700 {
        --tw-text-opacity: 1;
        color: rgba(55, 65, 81, var(--tw-text-opacity))
      }

      .text-gray-600 {
        --tw-text-opacity: 1;
        color: rgba(75, 85, 99, var(--tw-text-opacity))
      }

      .dark .dark\:text-gray-300 {
        --tw-text-opacity: 1;
        color: rgba(209, 213, 219, var(--tw-text-opacity))
      }

      .dark .dark\:hover\:text-white:hover {
        --tw-text-opacity: 1;
        color: rgba(255, 255, 255, var(--tw-text-opacity))
      }

      .truncate {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
      }

      .capitalize {
        text-transform: capitalize
      }

      .underline {
        -webkit-text-decoration-line: underline;
        text-decoration-line: underline
      }

      .w-full {
        width: 100%
      }

      .w-auto {
        width: auto
      }

      .w-5 {
        width: 1.25rem
      }

      .w-6 {
        width: 1.5rem
      }

      .w-52 {
        width: 13rem
      }

      .w-1\/2 {
        width: 50%
      }

      .w-12 {
        width: 3rem
      }

      .w-20 {
        width: 5rem
      }

      .w-0 {
        width: 0
      }

      .w-8 {
        width: 2rem
      }

      .w-18 {
        width: 4.5rem
      }

      .w-13 {
        width: 3.25rem
      }

      .z-5 {
        z-index: 5
      }

      .z-20 {
        z-index: 20
      }

      .z-2 {
        z-index: 2
      }

      .z-1 {
        z-index: 1
      }

      .z-0 {
        z-index: 0
      }

      .gap-2 {
        grid-gap: .5rem;
        gap: .5rem
      }

      .gap-1 {
        grid-gap: .25rem;
        gap: .25rem
      }

      .transform {
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-translate-z: 0;
        --tw-rotate: 0;
        --tw-rotate-x: 0;
        --tw-rotate-y: 0;
        --tw-rotate-z: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        --tw-scale-z: 1;
        transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) translateZ(var(--tw-translate-z)) rotate(var(--tw-rotate)) rotateX(var(--tw-rotate-x)) rotateY(var(--tw-rotate-y)) rotate(var(--tw-rotate-z)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) scaleZ(var(--tw-scale-z))
      }

      .transition-colors {
        transition-property: background-color, border-color, color, fill, stroke;
        transition-timing-function: cubic-bezier(.4, 0, .2, 1);
        transition-duration: .15s
      }

      .transition-all {
        transition-property: all;
        transition-timing-function: cubic-bezier(.4, 0, .2, 1);
        transition-duration: .15s
      }

      .transition-opacity {
        transition-property: opacity;
        transition-timing-function: cubic-bezier(.4, 0, .2, 1);
        transition-duration: .15s
      }

      .ease-in-out {
        transition-timing-function: cubic-bezier(.4, 0, .2, 1)
      }

      .duration-200 {
        transition-duration: .2s
      }

      .duration-50 {
        transition-duration: 50ms
      }

      .duration-400 {
        transition-duration: .4s
      }

      .duration-300 {
        transition-duration: .3s
      }

      @keyframes pulse {

        0%,
        to {
          opacity: 1
        }

        50% {
          opacity: .5
        }
      }

      @-webkit-keyframes pulse {

        0%,
        to {
          opacity: 1
        }

        50% {
          opacity: .5
        }
      }

      .animate-pulse {
        -webkit-animation: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;
        animation: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite
      }

      @media (min-width:640px) {
        .sm\:h-49 {
          height: 12.25rem
        }
      }

      @media (min-width:768px) {
        .md\:h-60 {
          height: 15rem
        }

        .md\:w-1\/3 {
          width: 33.333333%
        }
      }

      .nuxt-progress {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        width: 0;
        opacity: 1;
        transition: width .1s, opacity .4s;
        background-color: #000;
        z-index: 999999
      }

      .nuxt-progress.nuxt-progress-notransition {
        transition: none
      }

      .nuxt-progress-failed {
        background-color: red
      }

      .page-enter-active,
      .page-leave-active {
        transition: opacity .5s
      }

      .page-enter,
      .page-leave-to {
        opacity: 0
      }

      .layout-enter-active,
      .layout-leave-active {
        transition: opacity .5s
      }

      .layout-enter,
      .layout-leave-to {
        opacity: 0
      }

      </style>
   
  </head>
  <body><noscript data-n-head="ssr" data-hid="gtm-noscript" data-pbody="true"><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K5ZNMV4&" height="0" width="0" style="display:none;visibility:hidden" title="gtm"></iframe></noscript>
        <div class="max-w-screen-sm mx-auto bg-white">
          <nav class="fixed z-5 top-0 left-0 w-full bg-white border-b-1">
            <div class="max-w-screen-md mx-auto relative flex justify-between">
              <a href="/" class="flex justify-center items-center h-13 w-13 racun-nav_back nuxt-link-active">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                  <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                </svg>
              </a>
              <div class="rounded-full w-13 h-13 p-2">
                <img src="https://sadiskon.files.wordpress.com/2022/03/favicon.png?resize=32%2C32" width="32" height="32" alt="logo Sadiskon.com" class="w-full h-full rounded-full object-cover">
              </div>
             
              <button class="flex justify-center items-center h-13 w-13 racun-nav_toggle">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="h-6 w-6">
                  <path id="menuiconopen" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                  <path id="menuiconclose" class="hidden" stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
              </button>

            <div id="menudropdown" class="hidden absolute right-2 z-20 w-52 py-2 mt-13 bg-white rounded-md border-1 dark:bg-gray-800"><a href="https://www.sadiskon.com" class="racun-nav_link-sds flex px-4 py-3 text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clip-rule="evenodd"></path></svg>
                    Cari Kode Voucher
                </a> <a href="https://www.instagram.com/sadiskon" target="_blank" rel="noopener nofollow" class="racun-nav_link-ig flex px-4 py-3 text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd"></path></svg>
                    Follow Instagram
                </a>
            </div>
              
            </div>
          </nav>
          <div class="mt-12">
            <div class="w-full ft_img_wrap">
             <img src="${racun.featured_image}?resize=488%2C488" width="488" height="488" alt="${racun.title}" class="object-cover w-full">
            </div>
            <div id="content" class="block items-center">
              <div class="flex justify-between itemx-center px-2 py-3">
                <h1 class="text-xl font-semibold text-gray-700 flex flex-grow items-center leading-relaxed">${racun.title}</h1>
                <button class="racun-btn_social-modal w-12 h-12 flex justify-center items-center focus:outline-light-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                  </svg>
                </button>
              </div>
              <hr>
              <div class="racun-content text-lg leading-normal w-full py-2 px-4">
              ${racun.content}
              </div>
            </div>
        </div>
    </div>
    <script>
        var tglBtn = document.querySelector('.racun-nav_toggle')
        tglBtn.addEventListener('click', function(){
            document.getElementById('menuiconopen').classList.toggle('hidden')
            document.getElementById('menuiconclose').classList.toggle('hidden')
            document.getElementById('menudropdown').classList.toggle('hidden')
        })
    </script>
    </body>
    </html>
    `  
    return new Response(template, {
        headers:{
            'content-type': 'text/html;charset=UTF-8'
        }
    });
  }
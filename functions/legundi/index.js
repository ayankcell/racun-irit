export async function onRequestGet({params}) {
    const baseHost = 'https://public-api.wordpress.com/rest/v1.1/sites/racunproduk.wordpress.com'
    const init = {
       headers: {
          'content-type': 'application/json;charset=UTF-8',
       },
    };
    try {
       const response = await fetch(`${baseHost}/posts/?number=1&fields=ID`, init);
       const results = await response.json();
       const totalInWP = parseInt(results.found)

       //Live Data
       const liveData = await fetch('https://racun.irit.link/legundi/stats')
       const livePageStr = await liveData.text()
       const metaRacun = livePageStr.match(/<meta[^>]+name="sds:totalracun" content="([^")]*)"/g)
       const totalLive = parseInt(metaRacun.toString().match(/\d+/))

       //bandingkan data live dan di WP
       if(totalInWP > totalLive){
           const deployHook = await fetch('https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/f12b6adc-cdf0-44c2-965d-f1a0175c7e87',{method:'POST'})
           console.log( await deployHook.text() )
       }
      
       return new Response( 'racun.irit.link' , { headers: { 'content-type': 'text/plain;charset=UTF-8' } });
    } catch (error) {
       return new Response(error.toString(),{headers:{'content-type':'text/plain;charset=UTF-8'}})
    }
 
 }

 export class ElementHandler {
    element(element) {
      // An incoming element, such as `div`
      console.log(`Incoming element: ${element.tagName}`);
    }
  }
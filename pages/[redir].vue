<template>
    <div>
    </div>
</template>
<script setup lang="ts">
const route = useRoute()
const path = route.params.redir

/** get long url from path / slug */
const { data } = await useAsyncData('redirecton', () => queryContent(path).findOne())

/** error 404 when no valid redirect path */
if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

const targetUrl = data.value?.targetUrl +'?utm_source=irit.link&utm_medium=referral'

navigateTo(
    targetUrl,{
        redirectCode: 307,
        external: true
    }
)
</script>
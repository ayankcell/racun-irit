<template>
    <div>
    </div>
</template>
<script setup lang="ts">
const route = useRoute()
const path = route.params.redir

/** get long url from path / slug */
const { data } = await useAsyncData('redirecton', () => queryContent(path).findOne())
const targetUrl = data.value?.targetUrl +'?utm_source=irit.link&utm_medium=referral'

navigateTo(
    targetUrl,{
        redirectCode: 307,
        external: true
    }
)
</script>
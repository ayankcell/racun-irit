<template>
    <div>
        Status Live, last updated: {{racun[0].modified}}
    </div>
</template>
<script>
export default {
    layout: 'blank',
    async asyncData({$http}){
        const racunAll = await $http.$get('/posts/?number=1&fields=ID,modified')
        return{
            racun: racunAll.posts,
            found: racunAll.found
        }
    },
    head(){
        return{
            meta:[
                {name: 'sds:totalracun', content: this.found}
            ]
        }
    }
}
</script>
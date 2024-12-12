<template>
    <div></div>
</template>
<script>
export default {
    props:['tagID'],
    async asyncData({$http, props}){

        //  $http.$get(`/tags/${merchantID}`)
        console.log(props)
        
        return {

        }
    }
}
</script>
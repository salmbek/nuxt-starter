<template>
  <div>
    <loadingComponent/>
    <div id="ux">
    <Nuxt />
    </div>
  </div>
</template>
<script>
import loadingComponent from "@/components/loadingComponent"
  export default {
    components:{
      loadingComponent
    }
  }
</script>
<style>
</style>

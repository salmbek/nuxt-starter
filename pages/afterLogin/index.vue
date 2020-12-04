<template>
<div>
  <headerComponent/>
  <div id="main">
  <loginPageComponent />
  
  <footerComponent />
  </div>
  </div>
</template>

<script>
import headerComponent from '@/components/headerComponent'
import loginPageComponent from '@/components/loginPageComponent'
import footerComponent from '@/components/footerComponent'

export default {
  components: {
    headerComponent,
    loginPageComponent,
    footerComponent
    
  }
}
</script>

<style>

</style>
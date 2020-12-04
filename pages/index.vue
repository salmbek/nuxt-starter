<template>
<div>
  <headerComponent/>
  <div id="main">
  <introSectionComponent/>
  <footerComponent />
  </div>
  </div>
</template>

<script>
import headerComponent from '@/components/headerComponent'
import introSectionComponent from '@/components/introSectionComponent'
import footerComponent from '@/components/footerComponent'
export default {
  components: {
    headerComponent,
    introSectionComponent,
    footerComponent
  }
}
</script>

<style>

</style>
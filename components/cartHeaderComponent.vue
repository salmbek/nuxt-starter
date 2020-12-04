<template>
  <nav class="navbar">
        <div id="logo">
            <nuxt-link to="/" class="navbar-brand">MyLogo</nuxt-link>
        </div>
        <nuxt-link to="/" class="btn text-light cart-link my-2 mr-3 my-sm-0">
            <i class="fa fa-shopping-cart"></i>
        </nuxt-link>

    </nav>

</template>

<script>
export default {

}
</script>

<style scoped>
.navbar{
    background: black;
}
.navbar-brand{
    color: white;
}

</style>
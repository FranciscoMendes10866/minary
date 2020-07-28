<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import('./components/Navbar')
  }
}
</script>

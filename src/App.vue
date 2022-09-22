<template>
  <div class="site">
    <div class="container">
      <Header />
      <router-view/>
    </div>
  </div>
</template>


<script>
import Header from '@/components/Header';
export default {
 components: {
  Header
 }
}
</script>


<style lang="scss">
//сброс стилей
@import "normalize-scss/sass/normalize/import-now";
//главный scss
@import 'assets/scss/style.scss';
</style>

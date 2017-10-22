<template>
  <div class="panel">
        <router-view></router-view>
      <!--<display-blogs></display-blogs>-->
  </div>
</template>
<style scoped>
  .panel {
    margin-top: 1rem;
    width: 78%;
    background-color: #fff;
    padding-bottom: 20px;
  }
  @media screen and (max-width: 768px){
    .panel {
      width:72%;
    }
  }
</style>
<script>
//  import DisplayBlogs from "./displayblogs";
  export default {
//    components: {DisplayBlogs},
    name:'vueRouterPanel'
  }
</script>

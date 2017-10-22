<template>
  <div class="left-menu">
    <vue-info-card></vue-info-card>
    <vue-calender></vue-calender>
    <vue-search-bar></vue-search-bar>
    <vue-tag-list></vue-tag-list>
    <vue-blog-time></vue-blog-time>
    <vue-read-times></vue-read-times>
  </div>
</template>
<style scoped>
  .left-menu {
    background-color: white;
    width: 20%;
    margin-top: 1rem;
    padding-top: 1px;
    padding-bottom: 1px;
  }
  @media screen and (max-width: 768px){
    .left-menu {
      width: 26%;
    }
  }
</style>
<script>
  import VueCalender from "./calender";
  import VueInfoCard from "./personalinformation";
  import VueSearchBar from "./searchbar";
  import VueTagList from "./taglist";
  import VueBlogTime from "./blogtime";
  import VueReadTimes from "./readtimes";
  export default {
    components: {VueReadTimes, VueBlogTime, VueTagList, VueSearchBar, VueInfoCard, VueCalender},
    name:'leftMenu'
  }
</script>

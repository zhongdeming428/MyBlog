<template>
  <!--划分时间段内的博客数-->
  <div class="blog-time">
    <h3>博客档案</h3>
    <ul>
      <li v-for="item in time" >
        <router-link :to="'/time/'+item.time">{{item.time+'('+item.blogCount+')'}}</router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
  .blog-time {
    width: 90%;
    margin:1.2rem auto;
    border-radius: 8px;
    padding-top: 0.6rem;
    background-color: #9ff;
    padding-bottom: 0.6rem;
  }
  ul {
    text-align: left;
    display: block;
    width: 80%;
    margin:1.2rem auto;
  }
  li {
    display: block;
    margin-top: 0.6rem;
  }
  a {
    text-decoration: none;
  }
</style>
<script>
  export default {
      name:'vueBlogTime',
      computed:{
          time(){
              var time = [];
              time = this.$store.state.blogStats.time;
              return time;
          }
      }
  }
</script>

<template>
  <!--按阅读次数对博客排序-->
  <div class="read-times-order">
    <h3>阅读排行</h3>
    <ul>
      <li>
        <!--<router-link :to="'/readtimes/'+item.blog.blogTitle">{{item.blog.blogTitle+'('+item.count+')'}}</router-link>-->
        <h5>暂不支持!</h5>
      </li>
    </ul>
  </div>
</template>
<style scoped>
  .read-times-order {
    width: 90%;
    margin:1.2rem auto;
    background-color: #9ff;
    padding-bottom: 0.6rem;
    -webkit-border-radius: 9px;
    -moz-border-radius: 9px;
    border-radius: 9px;
    padding-top: 0.6rem;
  }
  ul {
    display: block;
    width: 80%;
    text-align: left;
    margin:auto;
    margin:1.2rem auto;
  }
  a {
    text-decoration: none;
  }
</style>
<script>
  export default {
      name :'vueReadTimes',
      computed:{
          readTimes(){
//              let counts = this.$store.state.blogStats.readtimes;
//              return counts;
          }
      }
  }
</script>

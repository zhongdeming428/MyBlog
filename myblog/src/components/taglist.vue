<template>
  <div class="tag-list">
    <h3>我的标签</h3>
    <ul>
      <li v-for="tag in tags">
        <router-link :to="'/tags/'+tag.tagName">{{tag.tagName}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
      name:'vueTagList',
      computed:{
          tags(){
                let tags = this.$store.state.blogStats.tags;
                return tags;
          }
      }
  }
</script>
<style scoped>
  .tag-list {
    width: 90%;
    margin:auto;
    background-color: #9ff;
    padding-bottom: 0.6rem;
    border-radius: 8px;
    padding-top: 0.6rem;
  }
  ul {
    display: block;
    width: 80%;
    margin:1.6rem auto;
    text-align: left;
  }
  li {
    display: block;
    margin-top:0.6rem;
  }
  a {
    text-decoration: none;
  }
</style>

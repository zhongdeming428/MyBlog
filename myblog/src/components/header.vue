<template>
  <div class="header-wrapper">
    <div class="header-main">
        <h2>
          <router-link to="/index">
            钟德鸣
          </router-link>
        </h2>
    </div>
    <div class="header-tips">
      <span>随笔 {{count}}</span>
      <span>访问 {{visitCount}}</span>
      <span v-show="!isLogIn"><a href="javascript:void(0)" @click="showLoginModal"> 登录 </a></span>
      <span><a href="javascript:void(0)" @click="writeComment">写评论</a></span>
      <span><a href="javascript:void(0)" @click="displayComments">看评论</a></span>
      <span v-show="isLogIn"><router-link to="/writeblog?modify=false">写博客</router-link></span>
    </div>
  </div>
</template>
<style scoped>
  .header-wrapper {
    width: 100%;
    margin-top: 0px;
    background: url(http://bpic.588ku.com/back_pic/00/05/67/31562759dd13a5f.jpg);
    opacity: 0.8;
  }
  .header-main {
    height: 4.5rem;
    padding: 3rem;
  }
  a{
    color: #fff;
    text-decoration: none;
  }
  .header-main h2 {
    transform: rotate(-20deg);
    margin-left: 0px;
    font-size: 3rem;
    width: 10rem;
    color: white;
    line-height: 4rem;
    height:4rem;
    border:2px solid #b7d6f4;
    background-color: #3d78c1;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }
  .header-tips {
    height:1.5rem;
    padding-right: 1rem;
    line-height: 1.5rem;
    background-color: darkblue;
    opacity: 0.5;
    color: #fff;
    text-align: right;
  }
  .header-tips > span {
    margin:auto 2px;
  }
</style>
<script>
  export default {
      name:'header',
      computed:{
          count() {
            let blogs = this.$store.state.blogStats.rawBlogs;
            let count = blogs.length;
            return count;
          },
          visitCount(){
              let tmp = this.$store.state.visitCount;
              return tmp;
          },
          isLogIn(){
              let isLogIn = this.$store.state.isLogIn;
              return isLogIn;
          }
      },
    methods:{
          showLoginModal(){
            this.$store.commit('modalControl',true);
          },
          writeComment(){
              this.$store.commit('writeComment',true);
          },
          displayComments(){
              this.$store.dispatch('fetchComments',this);
              this.$store.commit('displayComments',true);
          }
    }
  }
</script>

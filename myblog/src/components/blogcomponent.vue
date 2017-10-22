<template>
  <!--未展开的blog-->
  <!--属于displayblogs组件的子组件-->
  <div class="blog">
    <h2>
      <router-link :to="'/blog/'+blog.blogTitle">
        {{blog.blogTitle|filterTitle}}
      </router-link>
    </h2>
    <p class="blog-content">{{blog.blogContent|filterContent}}</p>
    <p class="blog-time">{{blog.blogTime}}</p>
  </div>
</template>
<style scoped>
  .blog {
    width: 98%;
    margin:20px auto;
    border:1px solid #c3c3c3;
    background-color: #9ff;
    border-radius: 5px;
    padding-top: 5px;
  }
  .blog-content {
    margin:5px auto;
    width: 98%;
    text-align: left;
  }
  .blog-time {
    padding-right: 5px;
    text-align: right;
    font-size: 0.9rem;
    color: #c3c3c3;
    border-top:1px solid #7fd9ed;
    width: 98%;
    height: 1.5rem;
    line-height: 1.5rem;
    margin:auto;
  }
  h2 {
    width: 100%;
    text-align: left;
    font-size: 1.6rem;
    margin: 0.6rem;
  }
  h2>a {
    text-decoration: none;
    color: cornflowerblue;
  }
  @media screen and (max-width: 768px){
    .blog {
      border-color: aliceblue;
      margin:1.2rem auto;
    }
  }
</style>
<script>
  export default {
      name:'vueBlog',
      props:['blog'],
      filters:{
          filterTitle:function (value) {
            if(value.length > 25){
                return value.substring(0,16) + '......';
            }
            return value;
          },
          filterContent:function (value) {
            if(value.length > 200){
                return value.substring(0,220) + '......';
            }
            return value;
          }
      }
  }
</script>

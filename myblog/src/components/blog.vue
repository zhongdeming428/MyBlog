<template>
  <div class="blog">
    <h4>{{blog.blogTitle}}</h4>
    <div class="blog-content" v-html="blog.blogHtml"></div>
    <div class="blog-property">
      <a href="javascript:void(0)" @click="deleteBlog" v-show="isLogin">删除</a>
      <router-link v-show="isLogin" to="/writeblog?modify=true">编辑</router-link>
      {{blog.blogTime}}
    </div>
  </div>
</template>
<style scoped>
    .blog {
      width: 96%;
      margin:20px auto;
      border-radius: 5px;
      padding: 5px;
    }
    @media screen and (max-width: 768px){
      .blog {
        margin:1.2rem auto;
      }
    }
  h4 {
    font-size: 2rem;
    padding-left: 20px;
    text-align: left;
    margin-top: 10px;
  }
  .blog-content {
    text-align: left;
    padding-left: 20px;
    padding-top: 10px;
  }
  .blog-property {
    text-align: right;
    font-size: 0.9rem;
    color: #c3c3c3;
  }
</style>
<script>
  export default {
      data(){
        let blog = this.getParam(this.$route);
        let isLogin = this.$store.state.isLogIn;
        this.$store.commit('updateBlog',blog);
        return {
          blog, isLogin
        }
      },
      methods:{
        getParam(route){
          let temp = route.path.substring(1,route.path.lastIndexOf('/'));
          if(temp === 'blog'){
            let title = route.params.title;
            let objArr = this.$store.state.blogStats.rawBlogs;
            for(let i=0;i<objArr.length;i++){
              if(objArr[i].blogTitle === title){
                return objArr[i];
              }
            }
          }
        },
        deleteBlog(){
            this.$http.post('/PHP/deleteBlog.php',{title:this.blog.blogTitle},{
                emulateJSON:true
            }).then((data)=>{
                if(data.data === '1'){
                    alert('删除成功！');
                    let temp = document.location.href.substring(0,document.location.href.lastIndexOf('/'));
                    temp = temp.substring(0,temp.lastIndexOf('/'));
                    document.location.href = temp;
                }
                else {
                    alert('删除失败！');
                }
            },
              ()=>{
                alert('删除失败！');
            });
        }
      }
    }
</script>

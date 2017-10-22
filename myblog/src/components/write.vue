<template>
  <div class="container">
    <div class="editor">
      <editor :blog="blog"></editor>
    </div>
    <div class="post">
      <div class="post-title" v-show="this.$route.query.modify === 'false'">
        <label for="title">标题：</label><input type="text" id="title" v-model="title"/>
      </div>
      <div class="post-tag">
        <label for="tag">标签：</label><input type="text" id="tag" v-model="tags"/><span>多个标签之间使用逗号分隔</span>
      </div>
      <button @click="post">提 交</button>
    </div>
  </div>
</template>
<style scoped>
  .container {
    height: 100%;
  }
  .editor {
    height: 75%;
  }
  span {
    font-size: 0.5rem;
  }
  .post {
    width: 92%;
    margin:auto;
  }
  .post>div {
    text-align: left;
    margin-top:10px;
  }
  .post>button {
    float: left;
    margin-top:10px;
    border:none;
    cursor: pointer;
    color: white;
    background-color: #62b1e9;
    width: 3.2rem;
    height:1.8rem;
  }
  .post-title > input {
    width: 60%;
  }
  .post-tag > input {
    width: 38%;
  }
</style>
<script>
  import Editor from "./writeblog";
  import Funcs from './../assets/js/function'
  export default {
    components: {Editor},
    name:'writeblog',
    data(){
        let title = '',
            tags = '',
            blog = null;
        if(this.$route.query.modify === 'true'){
            blog = this.$store.state.updateBlog;
            tags = blog.blogTags.join(',');
            title = blog.blogTitle;
        }
        else{
            blog = {
              blogTitle:'',
              blogContent:'',
              blogTime:'',
              blogHtml:'',
              blogReadTimes:0,
              blogTags:[]
            };
        }
        return {
            title,
            tags,
            blog
        }
    },
    methods:{
        post(){
            let now = new Date;
            let year = now.getFullYear();
            let month = now.getMonth() + 1;
            let day = now.getDate();
            let postObj = {};
            if(this.title === ''){
                alert('标题不能为空！');
                return;
            }
            postObj.title = this.title;
            postObj.tags = this.tags;
            postObj.html = Funcs.encodeSQ(this.$store.state.uploadContent);
            postObj.content = Funcs.encodeSQ(this.$store.state.editorText);
            postObj.time = year + '-' + month + '-' + day;
            if(this.$route.query.modify === 'false'){
              this.$http.post('/PHP/addblog.php',postObj,{
                emulateJSON:true
              }).then((data)=>{
                if(data.data === '1'){
                  alert("发表成功！");
//                    this.$router.push('/index');
                  document.location.href = document.location.href.substring(0,document.location.href.lastIndexOf('/'));
                }
                else if(data.data === '0'){
                  alert('发表新博客失败！');
                }
                else {
                  alert(data.data);
                };
              },(error)=>{
                alert(error);
              });
            }
            else {
                this.$http.post('/PHP/modifyBlog.php',postObj,{
                    emulateJSON:true
                }).then((data)=>{
                    if (data.data === '1'){
                        alert('编辑成功！');
                        document.location.href = document.location.href.substring(0,document.location.href.lastIndexOf('/'));
                    }
                    else{
                        alert('编辑失败！');
                    }
                },(error)=>{
                    alert('error!');
                });
            }
        }
    }
  }
</script>

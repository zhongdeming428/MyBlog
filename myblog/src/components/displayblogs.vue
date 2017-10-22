<template>
  <!--首页展示所有博客-->
  <!--通过props与子组件blogcomponent通信-->
  <div class="display-blogs">
    <vue-blog v-for="blog in blogs" :blog="blog" :key="blog.blogTime"></vue-blog>
  </div>
</template>
<style scoped>
  .display-blogs {

  }
</style>
<script>
  import VueBlog from "./blogcomponent";
  export default {
    components: {VueBlog},
    name:'displayBlogs',
    computed:{
        blogs (){
              let temp = [];
              let proxy = this.$store.state.blogStats.blogs;
              for(let i=0;i<proxy.length;i++){
                  let obj = {};
                  obj.blogTitle = proxy[i].blogTitle;
                  obj.blogContent = proxy[i].blogContent;
                  obj.blogTime = proxy[i].blogTime;
                  obj.blogReadTimes = 0;
                  obj.blogTags = proxy[i].blogTags;
                  temp.push(obj);
              }
              return temp;
        }
    },
    watch:{
        '$route':'getData'
    },
    methods: {
      getData (to){
        if ((/\/[a-zA-Z0-9]+\//).test(to.path)) {
          let param = to.path.match(/\/[a-zA-Z0-9]+\//);
          param = param[0].substring(1, param[0].length - 1);
          switch (param) {
            case 'tags':
              this.getBlogByTag(this.$route.params.tag);
              break;
            case 'time':
              this.getBlogByTime(this.$route.params.time);
              break;
            case 'readtimes':
              this.getBlogByReadTimes(this.$route.params.title);
              break;
            default:
              console.log('default');
          }
        }
        else{
            let param = to.path.substring(to.path.lastIndexOf('/'));
            switch(param){
              case '/index':this.$store.commit('modifyBlogs',this.$store.state.blogStats.rawBlogs);
              break;
            }
        }
      },
      getBlogByTag (tagName){
        var arr = this.$store.state.blogStats.tags;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].tagName === tagName) {
            arr = arr[i].blogs;
            break;
          }
        }
        this.$store.commit('modifyBlogs',arr);
      },
      getBlogByTime (time){
          let arr = this.$store.state.blogStats.time;
          let rawBlogs = this.$store.state.blogStats.rawBlogs;
          let resultArr = [];
          for(let i = 0; i<arr.length;i++){
            if(arr[i].time === time){
                arr = arr[i].blogTitle;
                break;
            }
          }
          for(let i=0;i<arr.length;i++){
              for(let j=0;j<rawBlogs.length;j++){
                  if(rawBlogs[j].blogTitle === arr[i]){
                      resultArr.push(rawBlogs[j]);
                  }
              }
          }
          this.$store.commit('modifyBlogs',resultArr);
      },
      getBlogByReadTimes(blogTitle){
          let arr = this.$store.state.blogStats.rawBlogs;
          let newArr = [];
          for (let i=0;i<arr.length;i++){
              if(arr[i].blogTitle === blogTitle){
                  newArr.push(arr[i]);
                  break;
              }
          }
          this.$store.commit('modifyBlogs',newArr);
      }
    }
  }
</script>

<template>
  <div class="dialog" v-show="writeComment">
    <h4>写评论</h4>
    <div id="part-1">
      <label for="name">昵称:</label>
      <input type="text"
             id="name"
             placeholder="Your name ..."
             v-model="name"/>
    </div>
    <div id="part-2">
      <label for="content">评论:</label>
      <textarea type="text"
                id="content"
                placeholder="Write Some Comments ..."
                cols="50"
                rows="10"
                v-model="content"/>
    </div>
    <div>
      <button @click="sendComment">提交</button>
      <!--<button type="reset">重置</button>-->
      <button @click="close">取消</button>
    </div>
  </div>
</template>
<style scoped>
  .dialog {
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: white;
    width: 600px;
    height:400px;
    box-shadow: 0 0 15px #c3c3c3;
  }
  .dialog > h4 {
    margin:20px;
  }
  #part-1 {
    margin-top:40px !important;
  }
  #part-1, #part-2 {
    width:90%;
    margin:20px 0px;
    text-align: left;
    padding-left: 10%;
  }
</style>
<script>
  export default {
      name:'writeComment',
      data(){
          return {
            name:'',
            content:''
          };

      },
      methods:{
          close(){
              this.$store.commit('writeComment',false);
          },
          sendComment(){
              let name = this.name;
              let content = this.content;
              if(name === ''){
                  alert('必须填写昵称！');
                  return false;
              }
              let obj = {name, content};
              this.$http.post('./PHP/addComment.php',obj,{
                  emulateJSON:true
              }).then(data=>{
                  if(data.data < 0){
                      alert('评论失败！');
                  }
                  else {
                      alert('发表评论成功！');
                      this.name = '';
                      this.content = '';
                      this.close();
                  }
              },error=>{
                  window.console.log(error);
              });
          }
      },
      computed:{
        writeComment(){
          let tmp = this.$store.state.writeComment;
          return tmp;
        }
      }
  };
</script>

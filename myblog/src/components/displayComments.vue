<template>
  <div id="display-board" v-show="displayComments">
    <h4>评论列表</h4>
    <table>
      <thead>
        <tr>
          <td width="20%">昵称</td><td width="80%">评论</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items">
          <td>{{item.name}}</td><td>{{item.content}}</td>
        </tr>
      </tbody>
    </table>
    <button @click="close">关闭</button>
  </div>
</template>
<style scoped>
  #display-board {
    width: 70%;
    background-color: white;
    box-shadow: 0 0 15px #c3c3c3;
    position: absolute;
    top:10%;
    left:50%;
    transform: translateX(-50%);
  }
  h4 {
    margin: 20px auto;
  }
  table {
    color: white;
    word-break:break-all;
    word-wrap:break-word;
    width: 80%;
    margin:30px auto;
  }
  tr {
    border-bottom: 1px solid white;
  }
  thead > tr >td {
    padding: 5px;
    height:40px;
    vertical-align: middle;
    text-align: left;
    background-color: #ced5e9;
  }
  tbody > tr > td {
    max-width: 500px;
    background-color: #ced5e9;
    height:50px;
    text-align: left;
    padding: 5px;
    vertical-align: middle;
  }
  tbody > tr > td:hover {
    background-color: #95B8E7;
  }
  button {
    margin-bottom: 30px;
  }
</style>
<script>
  export default {
      name:'displayComments',
      computed:{
          displayComments(){
            let displayComments = this.$store.state.displayComments;
            return displayComments;
          },
          items(){
              return this.$store.state.comments;
          }
      },
      methods:{
            close(){
              this.$store.commit('displayComments',false);
            }
      }
  }
</script>

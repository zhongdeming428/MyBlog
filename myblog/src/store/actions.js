let actions = {
  modifyBlogs: function (context, obj) {
    context.commit('modifyStats', obj);
  },
  fetchComments(context,obj){
    obj.$http.get('./PHP/fetchComment.php')
      .then(data=>{
        console.log(data.data);
        context.commit('modifyComments',data.data);
      },error=>{
        console.log(error);
      });
  }
};
export default actions;

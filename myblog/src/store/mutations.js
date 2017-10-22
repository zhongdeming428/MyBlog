let mutations = {
  modifyStats:function (state,obj) {
    state.blogStats = obj;
  },
  modifyBlogs:function (state,obj) {
    state.blogStats.blogs = obj;
  },
  modalControl:function (state,boolValue) {
    state.modalIsShow = boolValue;
  },
  changeLogIn:function (state,boolValue) {
    state.isLogIn = boolValue;
  },
  changeContent:function (state,newValue) {
    state.uploadContent = newValue;
  },
  modifyEditorText(state,newVal){
    state.editorText = newVal;
  },
  updateBlog(state,newVal){
    state.updateBlog = newVal;
  },
  updateVisitCount(state,newVal){
    state.visitCount = newVal;
  },
  writeComment(state,newVal){
    state.writeComment = newVal;
  },
  displayComments(state,newVal){
    state.displayComments = newVal;
  },
  modifyComments(state,newVal){
    state.comments = newVal;
  }
};
export default mutations;

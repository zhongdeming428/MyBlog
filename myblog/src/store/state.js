let state = {
    visitCount:0,
    displayComments:false,
    writeComment:false,
    modalIsShow:false,
    isLogIn:false,
    editorText:'no text',
    uploadContent:'',
    comments:[{name:'Loading...',content:'加载中...'}],
    blogStats:{
      blogs: [
        {
          blogTitle: "暂无内容",
          blogContent: "暂无内容",
          blogTime: "XXXX年XX月XX日",
          blogReadTimes: 0,
          blogCommentCount: 0,
          blogTags: []
        },
        {
          blogTitle: "特殊内容",
          blogContent: "特殊内容",
          blogTime: "2017年08月11日",
          blogReadTimes: 52871,
          blogCommentCount: 999,
          blogTags: []
        }
      ],
      rawBlogs:[
        {
          blogTitle: "暂无内容",
          blogContent: "暂无内容",
          blogTime: "XXXX年XX月XX日",
          blogReadTimes: 0,
          blogCommentCount: 0,
          blogTags: []
        },
        {
          blogTitle: "特殊内容",
          blogContent: "特殊内容",
          blogTime: "2017年08月11日",
          blogReadTimes: 52871,
          blogCommentCount: 999,
          blogTags: []
        }
      ],
      tags: [
        {
          tagName: "暂无标签",
          blogs: [
            {
              blogTitle: "暂无内容",
              blogContent: "暂无内容",
              blogTime: "XXXX年XX月XX日",
              blogReadTimes: 0,
              blogCommentCount: 0,
              blogTags: []
            }
          ]
        },
        {
          tagName: "2",
          blogs: [
            {
              blogTitle: "特殊内容",
              blogContent: "特殊内容",
              blogTime: "2017年08月11日",
              blogReadTimes: 52871,
              blogCommentCount: 999,
              blogTags: []
            }
          ]
        }
      ],
      time: [
        {
          blogCount: 1,
          time: "2017-08",
          blogTitle:["特殊内容"]
        }
      ],
      readtimes:[
        {
          count:1,
          blog:{
            blogTitle: "暂无内容",
            blogContent: "暂无内容",
            blogTime: "XXXX年XX月XX日",
            blogReadTimes: 0,
            blogCommentCount: 0,
            blogTags: []
          }
        }
      ],
      updateBlog:{
        blogTitle:'modified',
        blogContent:'modifiedContent',
        blogTime:'XXXX-XX-XX',
        blogReadTimes:0,
        blogTags:[],
        blogHtml:''
      }
  }
};
export default state;

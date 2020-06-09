// pages/found/found.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"发现",
    content:"我的自定义内容",
    hotlist:[
      {
        avatar:"https://superchat51.com:10090/forever_file/f9b6583596051d076a606268acc11822.png",
        name:"张三1",
        content:"发表的什么想法啊这是你1111的我的哈"
      },
      {
        avatar:"https://superchat51.com:10090/forever_file/63fbadb1c0e11deab9f4c5d0ecdf50a8.png",
        name:"张三2",
        content:"发表的什么想法啊这是你22222的我的哈"
      },
      {
        avatar:"",
        name:"张三3",
        content:"发表的什么想法啊这是3333你的我的哈"
      },
      {
        avatar:"",
        name:"张三4",
        content:"发表的什么想法啊这是444的我的哈"
      },
      {
        avatar:"",
        name:"张三5",
        content:"发表的什么想法啊这是你的我5555的哈"
      },
      {
        avatar:"",
        name:"张三6",
        content:"发表的什么想法啊这是你的666我的哈"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onReady: function () {

  },
  onShow: function () {

  },
  gotohot :function(){
    wx.showToast({
      title: '点击了热点',
    })
  },
  gotojoin:function(){
    wx.showModal({
      title:'提示',
      content:'这是一个模态弹框',
      cancelColor: '#ff0000',
    })
  },
  gotomypublish:function(){
    wx.showActionSheet({
      itemList: ['图片','文字','我的动态'],
      success:function(res){
        if(!res.cancel){
          console.log(res.tapIndex),
         wx.showToast({
           title: '点击了' + String(res.tapIndex),
         }) 
        }
      }
  })  
  }

})

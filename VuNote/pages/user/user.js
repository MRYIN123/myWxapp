// pages/user/user.js
const app = getApp()
Page({
  data: {
    userinfo:app.globalData.userInfo,
    userlist:[
      {
        title:"我的收藏"
      },
      {
        title:"我的发布"
      },
      {
        title:"设置"
      },
      {
        title:"使用帮助",
      }

    ]
  },


  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  // 个人资料
  gotoUserInfo: function () {
    wx.navigateTo({
      url: '../user/editInfo',
    })
  },
  gotoNext:function(event){
    var res = event.currentTarget.dataset.id;
    console.log(res);
    if(res === '我的收藏'){
      wx.showToast({
        title: res,
      })
    }else if (res == '我的发布'){
      wx.showToast({
        title: res,
      })
    }else if (res == '设置'){
      wx.showToast({
        title: res,
      })     
    }else if (res == '使用帮助'){
      wx.navigateTo({
        url: '../user/appInfo',
      })
    }
  }
})
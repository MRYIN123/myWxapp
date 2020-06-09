// pages/user/editInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sex:false,
    name:'名字',
    birth:'2020-20-01',
    sign:'签名啊',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
changesex:function() {
  this.sex = !this.sex;
    let str = this.sex ? '男' : '女';
    console.log(str);
},
  changeBirthday: function () {
    wx.showToast({
      title: '改变生日',
    })
  },
  saveinfo:function(){
    wx.showToast({
      title: '保存数据成功',
    })
  }


})
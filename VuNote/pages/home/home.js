// pages/home/home.js
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },

  data: {
    imgurls:[
      'https://www.blocknew.net/img/portfolio/thumbnails/4.jpg',
      'https://www.blocknew.net/img/portfolio/thumbnails/5.jpg',
      'https://www.blocknew.net/img/portfolio/thumbnails/6.jpg'
    ],
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 600,
    movielist:[
      {
        corver:'https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2578721161.jpg',
        title:'黑黑黑的夜',
        content:'城市被孤单照亮',
        time:'2020-08-29'
      },
      {
        corver:'https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2585460940.jpg',
        title:'忙忙忙到晚',
        content:'不如出去走一趟',
        time:'2020-08-29'
      },
      {
        corver:'https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2578722076.jpg',
        title:'我走过夜夜夜的黑',
        content:'做的梦梦梦最真',
        time:'2020-08-29'
      },
      {
        corver:'https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2577340942.jpg',
        title:'遇见最好的自己',
        content:'然后狠狠拥抱你',
        time:'2020-08-29'
      },
      {
        corver:'https://img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2578705064.jpg',
        title:'Nia Long',
        content:'这是一部好电影，哈哈哈555555，你知道吗？快来看看',
        time:'2020-08-29'
      }],
  },

  changeIndicatorDots() {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },

  changeAutoplay() {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMovie();
  },
  onReady: function () {

  },
  onShow: function () {

  },
  //加载数据
  loadMovie(){
    var thispage = this;
      console.log('更新数据'),
      console.log(thispage.data.movielist)
    // wx.request({
    //   url: 'https://douban-api.uieee.com/v2/movie/in_theaters',
    //   method:'GET',
    //   header:{'content-type':'application/json'},
    //   success:function(res){
    //     console.log(res);
    //   },
    //   fail:function(){

    //   },
    //   complete:function(){

    //   }
    // })
    
  },
  gotodetail(){
    wx.navigateTo({
      url: '../home/homeDetail',
    })
  }
})


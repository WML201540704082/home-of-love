Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数组
    swiperList:[{
      image_src:'../../images/yimengshan.jpg',
      image_id:0
    },
    // {
    //   image_src:'../../images/zhanqiao.jpg',
    //   image_id:1
    // }
  ]
  },

  // 跳转最新动态
  jumpBar_newDynamic: function(){
    wx.navigateTo({
      url: './newDynamic/newDynamic',
    })
  },
  // 跳转救助公告栏
  jumpBar_helpNotice: function(){
    wx.navigateTo({
      url: './helpNotice/helpNotice',
    })
  },
  // 社区救助公益资源
  jumpBar_communityHelp: function(){
    wx.navigateTo({
      url: './communityHelp/communityHelp',
    })
  },
  // 救助顾问(志愿者)注册
  jumpBar_helpAdviser: function(){
    wx.navigateTo({
      url: './helpAdviser/helpAdviser',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
// pages/index/communityHelp/communityHelp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loction_src:'../../../icons/location.png',
    companyList:[{
      index:1,
      name:'上海市奉贤区医学会',
      content:'医疗政策咨询',
      address:'奉贤区南桥镇南桥镇大寺路15号'
    },{
      index:2,
      name:'上海市奉贤区癌症康复协会',
      content:'大病公众募款、医疗政策咨询',
      address:'奉贤区南桥镇南桥镇古华路793号2楼'
    },{
      index:3,
      name:'上海兰公馆护理院',
      content:'医疗政策咨询、健康服务',
      address:'奉贤区青村镇南奉公路4999号二楼'
    },{
      index:4,
      name:'上海恒福致贤护理站',
      content:'医疗政策咨询、健康服务',
      address:'奉贤区西渡街道西渡街道鸿宝一村73幢377号104室'
    },{
      index:5,
      name:'上海市奉贤区体育总会',
      content:'运动锻炼指导、职业技能（素养）培训辅导、政策咨询',
      address:'奉贤区南桥镇南桥镇古华南路100号'
    },{
      index:6,
      name:'上海市奉贤区南桥镇社区体育协会',
      content:'运动锻炼指导、健康服务',
      address:'奉贤区南桥镇南桥镇南星路333号'
    },{
      index:7,
      name:'上海奉贤区奉浦体育俱乐部',
      content:'运动锻炼指导',
      address:'奉贤区奉浦街道奉浦街道陈桥路618号'
    },{
      index:8,
      name:'上海奉贤区健贤运动能力促进中心',
      content:'运动锻炼指导',
      address:'奉贤区南桥镇南桥镇周家弄32号6楼'
    },{
      index:9,
      name:'上海市奉贤区心理咨询师协会',
      content:'心理慰藉服务、心理咨询',
      address:'奉贤区南桥镇航南公路5699号9层1010室'
    },{
      index:10,
      name:'上海有爱社区工作服务中心',
      content:'心理慰藉服务、心理咨询',
      address:'奉贤区南桥镇南桥镇江海路87号208室'
    },{
      index:11,
      name:'上海奉贤区青年社会组织服务中心',
      content:'心理慰藉服务、心理咨询',
      address:'奉贤区南桥镇解放东路8号A2楼2楼'
    },{
      index:12,
      name:'上海奉贤区进贤社会工作服务中心',
      content:'心理慰藉服务、心理咨询',
      address:'奉贤区奉浦街道奉浦社区环城东路399号丽洲大厦2506室'
    },{
      index:13,
      name:'上海奉贤区光明居家养老服务中心',
      content:'居家养护服务（医疗/个人护理）、健康服务',
      address:'奉贤区南桥镇南桥镇光明文化路4号'
    },{
      index:14,
      name:'上海奉贤区江海居家养老服务中心',
      content:'居家养护服务（医疗/个人护理）、健康服务',
      address:'奉贤区南桥镇南桥镇江南路469号'
    },{
      index:15,
      name:'上海奉贤区奉浦街道居家养老服务中心',
      content:'居家养护服务（医疗/个人护理）、健康服务',
      address:'奉贤区奉浦街道奉浦国顺路555号'
    },{
      index:16,
      name:'上海奉贤区贤万家社区为老服务中心',
      content:'居家养护服务（医疗/个人护理）、健康服务',
      address:'奉贤区南桥镇南桥镇城乡路188号亿星大厦704、705室'
    },{
      index:17,
      name:'上海奉贤区聚贤公益服务社',
      content:'居家养护服务（医疗/个人护理）、健康服务',
      address:'奉贤区南桥镇南桥镇兴江路13号'
    },{
      index:18,
      name:'上海奉贤区众康居家养老服务社',
      content:'居家养护服务（医疗/个人护理）、健康服务',
      address:'奉贤区南桥镇南桥镇解放中路35号'
    },{
      index:19,
      name:'上海奉贤区南郊综合协管服务中心',
      content:'就业信息推荐、就业咨询',
      address:'奉贤区南桥镇新建西路160号B座205室'
    },{
      index:20,
      name:'上海市奉贤中华职业教育社',
      content:'职业技能（素养）培训辅导、教育服务',
      address:'奉贤区南桥镇南桥镇南奉公路9503号'
    },{
      index:21,
      name:'上海市奉贤区残疾人集中就业企业协会',
      content:'职业技能（素养）培训辅导、教育服务',
      address:'奉贤区南桥镇南桥镇新建西路213号'
    },{
      index:22,
      name:'上海南洋科技进修学院',
      content:'职业技能（素养）培训辅导、教育服务',
      address:'奉贤区南桥镇南桥镇南桥路262号'
    },{
      index:23,
      name:'上海市奉贤新世纪培训中心',
      content:'职业技能（素养）培训辅导、教育服务',
      address:'奉贤区奉浦街道奉浦开发区八字桥路626号'
    },{
      index:24,
      name:'上海市奉贤前程进修学校',
      content:'职业技能（素养）培训辅导、教育服务',
      address:'奉贤区南桥镇南桥镇江南路西'
    },{
      index:25,
      name:'上海市奉贤建设培训中心',
      content:'职业技能（素养）培训辅导、教育服务',
      address:'奉贤区南桥镇南桥镇电大路11号'
    },{
      index:26,
      name:'上海奉贤区奉民爱心服务社		',
      content:'资源链接、支持网络构建',
      address:'奉贤区南桥镇南桥镇新建西路213号'
    },{
      index:27,
      name:'上海奉贤区思齐社会工作服务中心',
      content:'资源链接、支持网络构建',
      address:'奉贤区南桥镇南桥镇气象路8号C楼'
    },{
      index:28,
      name:'上海奉贤区启贤青少年社会工作服务中心 ',
      content:'资源链接、支持网络构建',
      address:'奉贤区南桥镇南桥镇解放东路8号A2楼2楼'
    }]
  },

  // 申请
  apply: function() {
    wx.navigateToMiniProgram({
      appId: 'wx34b0738d0eef5f78',
      path: 'pages/forms/publish?token=SHNxTT',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  },
  // 提供公益资源
  provide: function() {
    wx.navigateToMiniProgram({
      appId: 'wx34b0738d0eef5f78',
      path: 'pages/forms/publish?token=Ucn3Ki',
      extraData: {
        foo: 'bar'
      },
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
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
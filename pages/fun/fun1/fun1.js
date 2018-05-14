// pages/fun/fun1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "data": [
      {
        "name": "view",
      }, {
        "name": "scroll-view"
      },
      {
        "name": "swiper",
      },
      {
        "name": "moveable-view"
      },
      {
        "name": "cover-view",
      }, {
        "name": "icon"
      }, {
        "name": "text",
      }, {
        "name": "rich-text"
      }, {
        "name": "progress",
      }, {
        "name": "button"
      }, {
        "name": "checkbox",
      }, {
        "name": "form"
      }, {
        "name": "ali",
      }, {
        "name": "tencent"
      }, {
        "name": "ali",
      }, {
        "name": "tencent"
      },



    ]
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

  },
  itemClick: function (data) {
    console.log(data)
    var navUrl = "";
    switch (data.currentTarget.dataset.name) {
      case "view":
        navUrl = "view/view"
        break;
      case "scroll-view":
        navUrl = "scroll-view/scroll-view"
        break;
      case "swiper":
        navUrl = "swiper/swiper"
        break;
      case "moveable-view":
        navUrl = "movealbe-view/moveable-view"
        break;
      case "cover-view":
        navUrl = "cover-view/cover-view"
        break;
      case "icon":
        navUrl = "icon/icon"
        break;
      case "text":
        navUrl = "text/text"
        break;
      case "rich-text":
        navUrl = "rich-text/rich-text"
        break;
      case "progress":
        navUrl = "progress/progress"
        break;
        case "button":
        navUrl = "button/button"
        break
        case "checkbox":
        navUrl = "checkbox/checkbox"
        break;
        case "form":
        navUrl = "form/form"
        break;
    }
    wx.navigateTo({
      url: navUrl,
    })
  }
})
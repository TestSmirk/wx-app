// pages/fun/fun2/fun2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      "canvas",
      "aa"
    ]
  },
  itemclick:function(d){
    console.log(d)
    var navUrl = "item/item"
    switch (d.currentTarget.dataset){
      case "canvas":
      navUrl = "item/item"
      break;
    }
    wx.navigateTo({
      url: navUrl,
    })
  }
})
// pages/fun/fun2/item/item.js
var imgArr=[] 
var imageUri = "/image/type-button-7.jpg"
var t = 0,
  e = 0,
  o = wx.getSystemInfoSync().pixelRatio,
  a = 0,
  c = 0,
  n = 0,
  s = 0,
  i = 0,
  l = 0,
  r = wx.createCanvasContext("mycanvas_0"),
  g = 0;
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    imageSrc: imageUri,
    returnImage: "",
    isShowImg: !1,
    cropperInitW: 750,
    cropperInitH: 750,
    cropperW: 750,
    cropperH: 750,
    cropperL: 0,
    cropperT: 0,
    scaleP: 0,
    imageW: 1092,
    imageH: 1092,
    cutW: 200,
    cutH: 200,
    cutL: 0,
    cutT: 0,
    opeartionText: "选择一张图片",
    opeartionTextCode: 0,
    imageDrawed: !1
  },
  getSquaredImageByIndex: function (t, e, a) {
    if (console.log("x_" + a + "="), console.log("x/3_" + a + "=" + parseInt(a / 3)), console.log("y_" + a +
      "="), a >= 9) return wx.hideLoading(), void ("android" == e.data.platform ? wx.showModal({
        title: "生成成功",
        content: "现在可以去发朋友圈啦！九张图片已经按照顺序生成完毕。\n\nTips：如果您的相册按时间排序，选择的时候请从后往前选择！",
        showCancel: !1
      }) : wx.showModal({
        title: "生成成功",
        content: "九张图片已经按照顺序生成完毕，现在可以去发朋友圈啦！",
        showCancel: !1
      }));
    "android" == e.data.platform ? r.drawImage(t) : 0 == a && r.drawImage(t);
    var c = e.data.cutW / e.data.cropperW * (e.data.imageW / o),
      n = e.data.cutH / e.data.cropperH * (e.data.imageH / o),
      s = e.data.cutL / e.data.cropperW * (e.data.imageW / o),
      i = e.data.cutT / e.data.cropperH * (e.data.imageH / o);
    r.draw(!0, function () {
      var o = s + a % 3 * .333 * c,
        l = i + .333 * parseInt(a / 3) * n;
      wx.canvasToTempFilePath({
        x: o,
        y: l,
        width: .333 * c,
        height: .333 * n,
        destWidth: 300,
        destHeight: 300,
        canvasId: "mycanvas_0",
        success: function (o) {
          console.log(o)
          wx.saveImageToPhotosAlbum({
            filePath: o.tempFilePath
          }), wx.showLoading({
            title: "第" + (a + 1) + "张完成"
          });
           console.log(o.tempFilePath)
          e.getSquaredImageByIndex(t, e, a + 1)
        },
        fail: function (t) {
          console.log(t)
          wx.hideLoading(), wx.showModal({
            title: "生成图片失败",
            content: JSON.stringify(t)
          })
        },
        complete: function (t) {
          console.log("complete= " + t)
        }
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },
  click:function(){
    this.getSquaredImageByIndex(this.data.imageSrc, this, 0)
  }

})
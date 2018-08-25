Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: '',

    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 1000,
    circular: true,

    navUrls: '',

    linksImgUrls: [
      'https://i.jpg.dog/img/aba6bc7b706004625a04c5009e429939.png',
      'https://i.jpg.dog/img/028979711a10a3e5a3e78fb7970dbb86.png'
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://locally.uieee.com/slides',
      method: 'GET',
      success: (res) => {
        this.setData({
          imgUrls: res.data
        })
      }
    })

    wx.request({
      url: 'https://locally.uieee.com/categories',
      method: 'GET',
      success: (res) => {
        console.log(res)
        this.setData({
          navUrls: res.data
        })
      }
    })

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
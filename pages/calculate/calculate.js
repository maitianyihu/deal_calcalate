// pages/calculate/calculate.js
var result;
var  a;
var  b;
var  d;
Page({

  /**
   * 页面的初始数据
   */
  data: {
      calculate:result,
      aValue:a,
      bValue:b,
      cValue:d,

  },
  //开始计算
  btnClick(){
    
    if(a == null || b==null ||d == null){
      wx.showToast({
        title: '请输入完整的计算量!',
        icon:"none",
      })
      return;
    }
    var c = a/b;
    var e = c*d/(d-0.9);
    f = e/d;
    result = f;
    this.setData({
      calculate:result
    });
  },

  //获取A输入框数值
  getAInputValue(event){
    console.log(event);
     a = event.detail.value;
  },
   //获取A输入框数值
   getBInputValue(event){
    console.log(event);
    b = event.detail.value;
  },
   //获取A输入框数值
   getCInputValue(event){
    console.log(event);
    d = event.detail.value;
  },

  clearA(){
    this.setData({
      aValue:null
    });
  },
  clearC(){
    this.setData({
      cValue:null
    });
  },
  clearB(){
    this.setData({
      bValue:null
    });
  }
})
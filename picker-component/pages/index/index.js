const getData = [
  {
    id: "0",
    name: "广东",
    list: [
      {
        id: "1",
        name: "佛山"
      },
      {
        id: "2",
        name: "东莞"
      }
    ]
  },
  {
    id: "3",
    name: "福建",
    list:[
      {
        id: "4",
        name: "厦门"
      }
    ]
  }
]
Page({
  data:{
    cityData: getData,
    multiArray: [{id:"0",name: "北京"},{id:"0",name:"北京"}]
  },

  onLoad(){

  },

  // 获取子组件省市二级联动数据
  bindConfirm(e) {
    console.log(e.detail)
    this.setData({
      multiArray: e.detail
    })
  },

})
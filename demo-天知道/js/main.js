/*
  请求地址:http://wthrcdn.etouch.cn/weather_mini
  请求方法:get
  请求参数:city(城市名)
  响应内容:天气信息

  1. 点击回车
  2. 查询数据
  3. 渲染数据
  */
 var app = new Vue({
     el:"#app",
     data:{
         city:'',
         weatherList:[]//用来存放拿取到的信息
     },
    methods:{
        searchWeather:function(){
            // console.log("查询天气请求发起");
            // console.log(this.city);
            var that=this;//因为在通过axios后this的值会改变，导致拿不到data里面的值，所以要用一个that将现在的this保存起来。
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city).then(//通过axios发起查询天气的请求
                function(response){
                        // console.log(response.data.data.forecast);
                        that.weatherList=response.data.data.forecast;
                }
            ).catch(function(error){})
        },
        changeCity:function(city){
            this.city=city;
            this.searchWeather(city);
        }
    }
 })
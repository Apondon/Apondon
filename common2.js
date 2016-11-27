//禁止页面右键菜单
$(function(){ 
    $(document).bind("contextmenu",function(e){ 
        return false; 
    }); 
});
//判断浏览器类型
$(function() { 
    // Firefox 2 and above 
    if ($.browser.mozilla && $.browser.version >= "1.8" ){ 
        // do something 
    }   
    // Safari 
    if( $.browser.safari ){ 
        // do something 
    }   
    // Chrome 
    if( $.browser.chrome){ 
        // do something 
    }   
    // Opera 
    if( $.browser.opera){ 
        // do something 
    }   
    // IE6 and below 
    if ($.browser.msie && $.browser.version <= 6 ){ 
        alert("ie6")
    }   
    // anything above IE6 
    if ($.browser.msie && $.browser.version > 6){ 
        alert("ie6以上")
    } 
});
//输入框文字输入和失去焦点
//<input type='text' class='text'/>
$(function() { 
    $("input.text").val("Enter your search text here."); 
    textFill( $('input.text1') ); 
}); 
function textFill(input){ //input focus text function 
    var originalvalue = input.val(); 
    input.focus( function(){ 
        if( $.trim(input.val()) == originalvalue ){
            input.val('');
        } 
    }).blur( function(){ 
        if( $.trim(input.val()) == '' ){
            input.val(originalvalue);
        } 
    }); 
};
//判断元素是否存在
$(function() { 
    if ($('#XY').length){ 
       alert('元素存在!')
    }else{
       alert('元素不存在!')
    }
});
//设置元素在页面中央
//调用
//$(element).center();
 jQuery.fn.center = function () { 
  this.css("position","absolute"); 
  this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px"); 
  this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px"); 
  return this; 
};
/*
mousewheel事件封装
*/ 
(function () {
    /*
     * 事件监听工具兼容处理
     * 参数：
     *   dom:传入的节点对象
     *   eventName:事件名  如：click、mousedown...
     */
    function on(dom,eventName,fn){
        if(dom.addEventListener){    //标准模式下
            dom.addEventListener(eventName,fn);
        }else{   //IE低版本模式下
            dom.attachEvent("on" + eventName,fn);
        }
    }
    /*
     fn是一个函数定义
     */
    $.fn.lplmousewheel = function(fn){
        //this[0]    原生的节点对象
        //document   原生的节点对象
        function handler(e){
            if(e.wheelDelta==120||e.detail==-3){
                e.direction = "up";
            }else{
                e.direction = "down";
            }
            fn(e);
        }
        on(this[0],"mousewheel",handler)
        on(this[0],"DOMMouseScroll",handler)
    }
}())

/*回到顶部按钮
element为绑定回到顶部事件的元素
*/
// Back to top
$(element).click(function (e) {
  e.preventDefault();
  $(document.body).animate({scrollTop: 0}, 800);
}); 

/*预加载图片
如果你的页面使用了大量不能初始可见的图片
（例如绑定在 hover 上），预加载它们是十分有用的
传入参数为要加载的图片
*/ 
$.preloadImages = function () {
  for (var i = 0; i < arguments.length; i++) {
    $('<img>').attr('src', arguments[i]);
  }
};
 
$.preloadImages('image1', 'image2');

/*检查图片是否加载完毕
有时你或许要检查图片是否完全加载完毕，才能在脚本中进行后续操作
*/ 
$('img').load(function () {
  console.log('image load successful');
});

/*自动修复损坏的图片
如果你发现自己网站的图片链接挂了，
一个一个替换很麻烦。这段简单的代码可以帮上大忙
即使你没有任何损坏的链接，增加这段代码也不会有什么影响
img/broken.png为替换的图片
*/ 
$('img').on('error', function () {
  $(this).prop('src', 'img/broken.png');
});


/*Hover 上的 Class 切换
如果用户的鼠标悬停在页面上某个可点击元素时，
你想要改变这个元素的视觉表现。可以使用下面这段代码，
当用户悬停时，为该元素增加一个 class；当用户鼠标离开后移除这个 class：
*/
$('.btn').hover(function () {
  $(this).addClass('hover');
}, function () {
  $(this).removeClass('hover');
});
//你仅需增加必须的 CSS。如果需要更简单的方式，还可以使用 toggleClass 方法：

$('.btn').hover(function () {
  $(this).toggleClass('hover');
});
//注意：CSS 或许是这个例子更快速的解决方式


/*禁用 input 字段
有时你也许想让表单的提交按钮或其文本输入框变得不可用，
直到用户执行了一个特定行为（例如确认 “我已经阅读该条款” 的复选框）。
增加 disabled attribute 到你的 input，就可以实现自己想要的效果
*/
$('input[type="submit"]').prop('disabled', true); 

// 当你想把 disabled 的值改为 false 时，仅需在该 input 上再运行一次 prop 方法
$('input[type="submit"]').prop('disabled', false);

/*停止链接加载
有时你不想链接跳转到某个页面或重加载该页面，
而希望可以做一些其他事情，比如触发其他脚本。
*/ 
$('a.no-link').click(function (e) {
  e.preventDefault();
});


/*淡入淡出/滑动开关
淡入淡出与滑动是我们经常使用 jQuery 做成的动画效果。
或许你只是想在用户点击某物时展现一个元素，
使用 fadeIn 和 slideDown 都很棒。
但如果想让该元素在第一次点击时显现，
第二次点击时消失，下面的代码可以很好地完成这个工作
.btn为触发事件的元素.element为事件发生的元素
*/ 
// Fade
$('.btn').click(function () {
  $('.element').fadeToggle('slow');
});
 
// Slide
$('.btn').click(function () {
  $('.element').slideToggle('slow');
});

/*简单的手风琴效果
这是一个快速实现手风琴效果的简单方法
*/ 
// Close all panels
$('#accordion').find('.content').hide();
// Accordion
$('#accordion').find('.accordion-header').click(function () {
  var next = $(this).next();
  next.slideToggle('fast');
  $('.content').not(next).slideUp('fast');
  return false;
});

/*使两个 Div 高度一样
有时你也许想让两个 div 拥有同样高度，不管它们里面有什么内容
*/ 
$('.div').css('min-height', $('.main-div').height());
/*
该例设置了 min-height，意味着它可以比主要 div 更大，
但永远不能更小。但有一个更加灵活的方法是遍历一组元素的设置，
然后将高度设为元素中的最高值
*/ 
var $columns = $('.column');
var height = 0;
$columns.each(function () {
  if ($(this).height() &gt; height) {
    height = $(this).height();
  }
});
$columns.height(height);
//如果你想让所有列都有相同高度
var $rows = $('.same-height-columns');
$rows.each(function () {
  $(this).find('.column').height($(this).height());
});


/*在新标签/窗口打开站外链接
在一个新标签或者新窗口中打开外置链接，
并确保站内链接会在相同的标签或窗口中打开
注意：window.location.origin 在 IE 10 中不可用
*/ 
$('a[href^="http"]').attr('target', '_blank');
$('a[href^="//"]').attr('target', '_blank');
$('a[href^="' + window.location.origin + '"]').attr('target', '_self');


/*通过文本找到元素
通过使用 jQuery 中的 contains() 选择器，
你可以找到某个元素中的文本。如果文本不存在，该元素将会隐藏
*/ 
var search = $('#search').val();
$('div:not(:contains("' + search + '"))').hide();

/*视觉改变触发
当用户焦点在另外一个标签上，或重新回到标签时，触发 JavaScript
*/ 
$(document).on('visibilitychange', function (e) {
  if (e.target.visibilityState === "visible") {
    console.log('Tab is now in view!');
  } else if (e.target.visibilityState === "hidden") {
    console.log('Tab is now hidden!');
  }
});


/*Ajax 调用的错误处理
当某次 Ajax 调用返回 404 或 500 错误，
就会执行错误处理。但如果没有定义该处理，
其他 jQuery 代码或许会停止工作。
可以通过下面这段代码定义一个全局 Ajax 错误处理
*/ 
$(document).ajaxError(function (e, xhr, settings, error) {
  console.log(error);
});

/*jsonp请求百度搜索接口实现搜索框功能
wb为jsonp回调函数关键字
(搜索功能未添加)
*/ 
var $input = $('#input');
$input.on('keyup',function(){
  if($input.val() == ""){
    $('div.searchcon').css("display","none");
  } else {
    $('div.searchcon').css("display","block");
  };
  // 请求数据
  $.ajax({
    url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",
    type: "post",
    data : {wd:$input.val()},//表单序列化处理发送到服务器的数据
    jsonp:"cb",
    dataType:"jsonp",
    success:function(res){
      // console.log(res);
      var arr = res.s;
      $('div.searchcon ul').empty();
      for(var i in arr){
        $('<li>' + arr[i] + '</li>').appendTo('div.searchcon ul');
      }
    }
  })
  /* 
    搜索功能实现
   window.location.href="https://www.baidu.com/s?wd="+$input.val();
  */
});
/*购物车基本功能封装*/
// 获取本地cookie并创建json对象
function getCookieObj(){
  var goodsStr = $.cookie('goodsdes');
  if(!goodsStr){//检测该cookie是否存在不存在则创建新的cookie对象
    $.cookie('goodsdes','[]');
    goodsStr = $.cookie('goodsdes');
  }
  var goodsObj = JSON.parse(goodsStr);
  return goodsObj;
}
// 向购物车中添加新商品
function addGoods(goods){//详情页传来的goods对象
  var newgoodsObj = getCookieObj();//初始为空
  newgoodsObj.push(goods);//将商品信息添入新创建的cookie对象
  var goodsStr = JSON.stringify(newgoodsObj);
  $.cookie('goodsdes',goodsStr);
  //console.log($.cookie('goodsdes'));
}
// 判断购物车内是否存在该商品
function checkgoods(id){//id为新商品的pid
  var newgoodsObj = getCookieObj();
  var flag = false;
  for(var i = 0;i<newgoodsObj.length;i++){
    console.log(newgoodsObj[i].pid);
    if(newgoodsObj[i].pid == id){
      flag = true;
      break;
    }
  }
  return flag;
}
// 修改购物车内商品数量
function changeGoodsNumById(id,num){
  var goodsObj =  getCookieObj();
  for(var i = 0;i<goodsObj.length;i++){
    if(goodsObj[i].pid == id){
      goodsObj[i].count = parseInt(goodsObj[i].count) + parseInt(num);
      break;
    }
  }
  var goodsStr = JSON.stringify(goodsObj);
  $.cookie('goodsdes',goodsStr);
}
// 获取商品总数量
function getCartNum(){
  var goodsObj = getCookieObj();
  var sum = 0;
  for(var i = 0;i<goodsObj.length;i++){
    sum += goodsObj[i].count;
  }
  return sum;
}
// 删除购物车内商品
function  deleteGoodsById(id){
  var goodsObj =  getCookieObj();  
  for(var i = 0;i<goodsObj.length;i++){
    if(goodsObj[i].pid==id){
      //  i为该数组元素下标
      goodsObj.splice(i,1);
      break;
    }
  }
  var goodsStr = JSON.stringify(goodsObj);
  $.cookie("goodsdes",goodsStr);
} 

/*面向对象轮播图
<!--轮播图模块-->
<div class="lbt" id="lbt1">
    <!--轮播项-->
    <div class="lbt-content" >
    </div>
    <!--轮播切换控制-->
    <ul class="lbt-tab">
    </ul>
    <div class="lbt-btn lbt-btnLeft">&lt;</div>
    <div class="lbt-btn lbt-btnRight">&gt;</div>    
</div>
*/ 
/*
  轮播类
  参数：
    id:轮播模块标识
    url:请求资源的路径
 */
function LunBo(id,url){
  this.lbt = $("#"+id);   //轮播图模块
  this.vWidth = this.lbt.width();   //可视区域 宽度
  this.lbt_content = this.lbt.children(".lbt-content"); //轮播项模块
  this.lbt_tab = this.lbt.children(".lbt-tab"); //轮播项控制按钮模块
  this.lbt_btn = this.lbt.children(".lbt-btn");  //左右轮播按钮
  this.lbt_btnLeft = this.lbt.children(".lbt-btnLeft"); //左侧控制按钮
  this.lbt_btnRight = this.lbt.children(".lbt-btnRight"); //右侧控制按钮
  this.url = url;//异步请求资源的地址
  this.index = 0; //控制索引
  this.termId; //表示定时器标识
  this.init();  //对象创建完后，初始化数据以及功能
  
}

/*
  每个构造函数都会附加【一个】原型对象。
  这个原型对象  其实   就是一个普通的对象（键/值对儿）
  特点：可以被所有通过构造函数实例化（new LunBo()）的对象共享
 */
LunBo.prototype = {
    /*初始化轮播图资源和功能*/
    init:function(){
      //在这里this代表当前LunBo类型的对象
      console.log(this)
      var that = this;
      $.get(this.url,function(a){
        //在这里this代表和异步相关的规定
        that.crateLunoItemToContent(a);
        that.lbtBindEvent();
        that.lbtBtnBindEvent(a);
        that.autoPlay();
        that.liBindEvent();
        
      })
    },
    /*根据数据动态拼接结构填充到内容项容器中*/
    crateLunoItemToContent:function(data){
      
      for(var i = 0;i<data.length;i++){
        var html = '<div class="lbt-content-item">'+
              '<a href="'+data[i].targetUrl+'">'+
                '<img src="'+data[i].imgUrl+'" alt="" />'+
              '</a>'+
              '</div>';
        $(html).appendTo(this.lbt_content);
        if(i==0){
          $("<li class='active'>"+(i+1)+"</li>").appendTo(this.lbt_tab)
        }else{
          $("<li>"+(i+1)+"</li>").appendTo(this.lbt_tab)
        }
        
      }
      //为了实现左右滑动轮播，所以需要在轮播项中再次追加一个轮播项（第一个）
      var html = '<div class="lbt-content-item">'+
              '<a href="'+data[0].targetUrl+'">'+
                '<img src="'+data[0].imgUrl+'" alt="" />'+
              '</a>'+
              '</div>';
      $(html).appendTo(this.lbt_content);  //
      //根据所动态生成的轮播项计算轮播项容器的总宽度
      var w = this.vWidth*(data.length+1);
      this.lbt_content.width(w)
    },
    /*鼠标浮动和离开轮播模块时，显示和隐藏左右控制按钮*/
    lbtBindEvent:function(){
      var that  = this;
      /*鼠标浮动事件*/
      this.lbt.mouseenter(function(){
        that.lbt_btn.fadeIn(500); 
        clearInterval(that.termId);  //清楚定时器
      });
      /*鼠标离开事件*/
      this.lbt.mouseleave(function(){
        that.lbt_btn.fadeOut(500);
        that.autoPlay(); //重新开启定时器
      })
    },
    /*实现左右按钮控制轮播*/
    lbtBtnBindEvent:function(data){
      var that = this;
      /*右边按钮控制轮播*/
      this.lbt_btnRight.click(function(){
        that.index++;
        var x = that.index*that.vWidth;    //-x
        that.lbt_content.stop(false,true);
        if(that.index==data.length){
          that.index = 0; //从头开始
          that.lbt_content.animate({left:-x},200,function(){
            that.lbt_content.css({left:0})
          });
        }else{
          that.lbt_content.animate({left:-x},200);
        }
        
        //更改对应切换按钮的样式
        that.lbt_tab.children().eq(that.index).addClass("active").siblings().removeClass("active")
      });
      
      /*左边按钮控制轮播*/
      this.lbt_btnLeft.click(function(){
        that.index--;
        that.lbt_content.stop(false,true);
        if(that.index<0){
          that.lbt_content.css({
            left:-data.length*that.vWidth
          })
          that.index = data.length-1;
        }
        var x = that.index*that.vWidth;    //-x
        that.lbt_content.animate({left:-x},200);
        
        //更改对应切换按钮的样式
        that.lbt_tab.children().eq(that.index).addClass("active").siblings().removeClass("active");
        
      })
      
    }
    ,
    /*自动轮播*/
    autoPlay:function(){
      var that = this;
      this.termId = setInterval(function(){
        that.lbt_btnRight .trigger("click")
      },2000)
    },
    
    liBindEvent:function(){
      var that = this;
      this.lbt_tab.children().mouseenter(function(){
        that.lbt_content.stop(false,true)
         //this   
         that.index = $(this).index();
         
          var x = that.index*that.vWidth;    //-x
        that.lbt_content.animate({left:-x},200);
        //更改对应切换按钮的样式
        that.lbt_tab.children().eq(that.index).addClass("active").siblings().removeClass("active");
      })
    }
  
}
/*
放大镜功能函数
*/ 
$('div.smallbox').on('mousemove',function(e){
    var x = e.clientX - $(this).offset().left - $('span.fl-span').width()/2 +$(window).scrollLeft();
    var y = e.clientY - $(this).offset().top - $('span.fl-span').height()/2 +$(window).scrollTop();
    console.log($(this).offset().top);
    if(x<0){
      x = 0;
    }else if(x>$('.smallbox').width()-$('.fl-span').width()){
      x = $('.smallbox').width()-$('.fl-span').width();
    }
    if(y<0){
      y = 0;
    }else if(y>$('.smallbox').height()-$('.fl-span').height()){
      y = $('.smallbox').height()-$('.fl-span').height();
    }
    $('span.fl-span').css({
      left:x,
      top:y
    });
    $('div.fdj-r img').css({
      left:-2*x,
      top:-2*y
    }); 
});

/*瀑布流功能函数*/
$(window).scroll(function(){
  var dHeight = $(document).height();  //整个文档的高度
    var sHeight = $(window).scrollTop();  //滚动条距离顶部的距离
    var cHeight = $("body").height();  //可视区域的高度
     
    if(sHeight+cHeight==dHeight){  //滚动条到达底部
      $.get("handler.php",function(data){
        //JSON   ["01.jpg","02.jpg",1]
        var dataObj = JSON.parse(data);
        //循环遍历把每一个图片插入高度最小的列中
        for(var i = 0;i<dataObj.length;i++){
          var col = getMinHeightCol(); //获取最小的列  原生js对象
          //创建包装好的图片节点追加到最小列中
          $('<div class="box"><img src="images/'+dataObj[i]+'"  /></div>').appendTo($(col))
          
        }
      })
    } 
})

/*获取高度最小的列*/
function getMinHeightCol(){
    var cols = $(".col");
    var min = $(cols[0]).height(); //默认第一个为最小
    var minIndex = 0;  //最小的索引     
    for(var i = 0;i<4;i++){
      if(min>$(cols[i]).height()){
        min = $(cols[i]).height();  //谁小把小的王冠给谁
        minIndex = i; //索引也是一样
      }
    }

    return cols[minIndex];
}
//选项卡
/*
 	思路：
 		第一步：当页面加载完后，获取所要操作的jquery对象
 		第二步：为一组li的jquer对象添加一个点击事件
 		第三步：改变当前被点击的li的样式（active）,其他的兄弟li的jquery对象样式还原
 			 根据当前lijquery的索引 让对应的tab切换项显示出来（atvice),其他的兄弟tab切换项隐藏
 			  
 */
$(function(){
	$("li").click(function(){
		//this
		$(this).addClass("active").siblings().removeClass("active");
		//jqurey对象.index();
		var index = $(this).index();
		//jquery对象.eq(索引)  获取一组jquery对象中索引指定单个jquery对象
		$(".tab-content-item").eq(index).addClass("active").siblings().removeClass("active")
		
	})
})

//导航栏
$('li').on('click',function() {
	$(this).addClass('select').siblings().removeClass('select');
})
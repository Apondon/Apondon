/**组件库*/

/*---给元素绑定事件---*/
//用id获取元素的代码简化(该部分代码可单独使用)
var getId = function(id) {
	return document.getElementById(id);
}
//var getId=function(id){return document.getElementById(id);}
//绑定事件函数
//参数id为元素id名，event为绑定的事件，fn为事件的回调函数
/*事件:onChange()内容改变 onClick()鼠标点击 onDoubleClick()鼠标双击 onKeydown()键盘按键按下
onKeyup()键盘按键弹起 onMouseover()鼠标滑过 onMousemove()鼠标移动 onMousedown()鼠标按键按下
onMouseup()鼠标按键弹起 onResize()窗口或框架重新调整大小
*onReset()重置按钮按下 onSubmit()提交按钮按下 这两个需要绑定在form元素上
---oncontextmenu取消右键菜单
*/ 
//用id获取元素的代码简化(该部分代码可单独使用)
var getId = function(id) {
	return document.getElementById(id);
}
//绑定事件函数
var addEvent = function(id,event,fn) {//元素id，事件，响应事件的回调函数
	var el = getId(id)||document;//获取元素id,document为了容错
	if (el.addEventListener) {//给元素绑定事件非ie
		el.addEventListener(event,fn,false);//事件，函数，默认值false为 冒泡true为 捕获
	}else if(el.attachEvent){//给元素绑定事件 ie低版本
		el.attachEvent('on'+event,fn);//绑定事件函数ie ie低版本只支持冒泡
	}
}


/**取消冒泡*/
//ie浏览器只支持冒泡
//if判断的写法
function stopBubble(e){
	var e = window.event||evt;
	if(e.stopPropagation){
		e.stopPropagation();//其他浏览器阻止冒泡
	}else{
		e.cancelBubble = true;//ie阻止冒泡
	}	
} 
//三目运算写法
function stopBubble(e){
	var e = window.event||evt;
	e.stopPropagation?e.stopPropagation():e.cancelBubble = true;
}
//取消事件冒泡
Util = {
	/**
	 * 取消事件冒泡
	 * @param {Object}
	 *            e 事件对象
	 */
	stopBubble : function(e) {
		if (e && e.stopPropagation) {
			e.stopPropagation();
		} else {
			// ie
			window.event.cancelBubble = true;
		}
	}
};

//dom2级事件函数绑定
function oEventBinding(obj,event,fn){
	if(obj.addEventListener){
		obj.addEventListener(event,fn,false);
	}else{
		obj.attachEvent('on'+event,fn);
	}
}

//dom2级函数解除绑定
//匿名函数无法移除，应改为移除变量的模式
function oEventRemove(obj,event,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(event,fn);
	}else{
		obj.detachEvent('on'+event,fn);
	}
}


/***********阻止元素默认行为*************/ 


//阻止右键菜单
document.oncontextmenu = function(){
	return false;
}
//取消超链接默认行为的三目运算写法
function oDefaultBehiver(e){
	var e = e||window.event;
	e.preventDefault?e.preventDefault():e.returnValue=false;
	//e.returnValue=false 可以识别IE8及以下版本浏览器
	//e.preventDefault() 其他浏览器可以识别
}
//禁止图片默认行为
document.ondragchange = function(){
	return false;
}
/*****************************************/ 

/*--cookie相关-Start-***--*/

//设置时间
function nDate(day){
	var date = new Date();
	date.setTime(date.getTime()+day*24*3600*1000);
	return date.toGMTString();
}
//设置cookie
function SetCookie(key,value,day){
	var str = key+"="+value;
	if(day){
		document.cookie = str+";expires="+day;
		//console.log(document.cookie);
	}
}
//获取cookie
function GetCookie(key){
	var str = document.cookie;//取出cookie
		console.log(str);
		var startIndex = str.indexOf(key)+key.length+1;//开始截取cookie字符串的位置
		var endIndex = str.indexOf(";",startIndex);//结束截取cookie字符串的位置
		if (endIndex==-1){//判断是否是最后一个cookie字符串
			return str.substring(startIndex);//若是找不到";"则为最后一个cookie字符串
			console.log(str.substring(startIndex));//打印该key对应的value值
		}else{
			return str.substring(startIndex,endIndex);//否则不是最后一个cookie字符串
			console.log(str.substring(startIndex,endIndex));
		}
}
//根据key删除指定的cookie
function delCookie(key){
	document.cookie = key + "=;expires=" + new Date(0);
}

/*--cookie相关-End-***--*/


/*---1.判断闰年---
*该函数用if判断来确定当前年份是否为闰年
*传入参数years为年份
*/
function nLeapYear(years){
	if (years % 4 == 0 && years % 100 != 0 || years % 400 ==0) {
		return true;
	}
}

/*---2.斐波那契数列(递归)---
*该函数用递归方法实现求斐波那契数列n项
*传入参数n为项数
*/
function nFibonacci(n){
	if(n <= 1 || n == 2){
		return 1;
	}
	return nFibonacci(n-1) + nFibonacci(n-2);
}

/*---3.数组的去重排序---
*比较和判断传入的数组内是否有重复项
*传入参数arr为一个数组
*/
function aArraySort(arr){	
	var arrSort= new Array();//新建空数组
	for(var i=0; i<arr.length;i++) {//length为传入数组的length
		if(arrSort.indexOf(arr[i])===-1){//判断是否有重复项
		arrSort.push(arr[i]);
		}
	}
	console.log(arrSort);
	//return arrSort;
} 

/*---4.冒泡排序---
*对一个数组进行冒泡排序
*传入的参数arr为需进行排序的数组
*/ 
function aBubbleSort(arr){
	for(var i=0;i<arr.length;i++){//趟数
		for(var j=0;j<arr.length-i;j++){//每趟比较的次数
			if(arr[j]>arr[j+1]){
				var temp=arr[j+1];//定义一个变量保存小值
				arr[j+1]=arr[j];  
				arr[j]=temp;
			}
		}
	}
	return arr;
}

/*---5.表单控件---
*获得焦点内容清空
*失去焦点内容填充
*传入参数obj为控件对象
*/ 

function oOnfocus(obj){
	obj.onfocus = function(){
		obj.value = "";
	}
}

function oOnblur(obj){
	obj.onblur = function(){
		obj.value = "Input something...";
	}
}
/*---表单验证---*/
//1.验证内容是否为空
//参数str为待验证表单输入的内容
function oTab(obj){
	if(obj.value == null || obj.value == obj.defaultValue){
		console.log("input something first");
	}
}
// 除去输入内容前后的空格
// val为输入的内容
function clearSpace(val){
	val = val.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,'');
}

//验证日期
/*实例：计算该日是当年第几天
*month为获得的月份
*year为获得的年份
*/
function mySum(){
	var sum = 0;
	switch(month){
		case 12 : sum += 30;
		case 11: sum += 31;
		case 10: sum += 30;
		case 9: sum += 31;
		case 8: sum += 31;
		case 7: sum += 30;
		case 6: sum += 31;
		case 5: sum += 30;
		case 4: sum += 31;
		case 3: sum += (!(year%4) && year%100 || !(year%400))? 29 : 28;
		case 2: sum += 31;
		case 1: sum += date;
	};
	return sum;
};
// 禁止表单输入
<input type="text" disabled/>
<input type="text" disabled="disabled"/>
<input type="text" readonly/>

// 禁止复制粘贴
var banCopyPaste = document.getElementById("banCopyPaste");
banCopyPaste.oncopy = function(){
	return false;
}
banCopyPaste.onpaste = function(){
	return false;
}

// 密码强度判断
function checkStrong(sValue) {
    var modes = 0;
    //正则表达式验证符合要求的
    if (sValue.length < 1) return modes;
    if (/\d/.test(sValue)) modes++; //数字
    if (/[a-z]/.test(sValue)) modes++; //小写
    if (/[A-Z]/.test(sValue)) modes++; //大写  
    if (/\W/.test(sValue)) modes++; //特殊字符
    
   //逻辑处理
    switch (modes) {
        case 1:
            return 1;
            break;
        case 2:
            return 2;
            break;
        case 3:
        	return 3;
        	break;
        case 4:
            return sValue.length < 12 ? 3 : 4
            break;
    }
}

/*6.计算元素在页面上的绝对位置
*传入参数obj为需计算位置的元素对象
*/
function oElmentOffset(obj){
	var Top = 0,Left = 0;
	while(obj){//obj == null时，obj为body
		Left+=obj.offsetLeft;//相对已定位父元素距离左侧的距离
		Top+=obj.offsetTOp;//相对已定位父元素距离顶部距离
		obj= obj.offsetParent;//向上寻找父元素
	}
	console.log(Left);
	console.log(Top);
}

/*---5.返回顶部---
*点击某按钮实现返回顶部效果
*传入参数obj为该按钮对象
*传入参数top为距离浏览器顶部的距离
*/

//var obj = getId('id');//获取回到顶部按钮对象
window.onscroll = function(){//为窗口添加滚动条事件
	function oBackTop(obj){
		//获取滚动条到顶部的距离(||为了解决兼容性)
		 var _srolltop = document.body.scrollTop || document.documentElement.scrollTop;
		if(_srolltop>500){//判断按钮显示条件
			obj.style.display = "block";//按钮显示
			obj.onclick = function(){//按钮注册事件
				document.body.scrollTop=document.documentElement.scrollTop=0;//回到顶部(=为了解决兼容性)
			}
		}else{
			obj.style.display = "none";//按钮隐藏
		}
	}
	oBackTop(obj);//回到顶部函数执行
}

/*回到顶部具体执行函数
function oBackTop(obj){
	if(top>1000){
		obj.style.display = "block";
		obj.onclick = function(){
			document.body.scrollTop=document.documentElement.scrollTop=0;
		}
	}else{
		obj.style.display = "none";
	}
}*/

/*鼠标拖拽事件*/
//找到要注册拖拽事件的节点
// function drag(obj){
// 	obj.onmousedown = function(evt){
// 		var e = evt || event;
// 		var offsetX  =  e.offsetX;//x偏移量
// 		var offsetY = e.offsetY;//y偏移量 
// 		document.onmousemove = function(evt){
// 			var e = evt || event;
// 			obj.style.top = e.clientY - offsetY+"px";
// 			obj.style.left = e.clientX - offsetX+"px";
// 		}
// 		document.onmouseup = function(){
// 			//不再监听 onmousemove 事件
// 			document.onmousemove = "";
// 		}
// 	}
// }

// 元素拖拽
function drag(obj){
	obj.onmousedown = function(evt){
		var e = evt || window.event;
		var disX = e.offsetX;
		var disY = e.offsetY;
		document.onmousemove = function(evt){
			var e = evt || window.event;
			var L = e.clientX - disX;
			var T = e.clientY - disY;
			if(L < 0){//安全边距
				L = 0;
			}else if (L > document.documentElement.clientWidth - obj.offsetWidth){
				L = document.documentElement.clientWidth - obj.offsetWidth;
			}
			if(T < 0){
				T = 0;
			}else if(T > document.documentElement.clientHeight - obj.offsetHeight){
				T = document.documentElement.clientHeight - obj.offsetHeight;
			}
			obj.style.left = L + 'px';
			obj.style.top = T + 'px';
		}
		document.onmouseup = function(){
			document.onmousemove = null;
		}
	}
}


//获取样式表中指定属性
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,1)[attr];
	}
}

//改变透明度
function fade(obj,target,alpha){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var speed = target - alpha;
		speed = speed > 0 ? 1 : -1;
		if(target == alpha){
			clearInterval(obj.timer);
		}else{
			alpha += speed;
		}
	obj.style.filter = "alpha(opacity =" + alpha + ")";
	obj.style.opacity = alpha/100;
	},50);
};

//改变宽度 变速运动
function change(obj,target){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var speed = (target - obj.offsetWidth) / 5;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if(obj.offsetWidth == target){
			clearInterval(obj.timer);
		}else{
			obj.style.width = obj.offsetWidth + speed + 'px';
		}
	},50);
};

//匀速运动
function startMove(obj,target){
	clearInterval(obj.timer); //开始新计时器之前 ，先将上一次的计时器关闭
	obj.timer = setInterval(function (){
		var speed = target - obj.offsetLeft > 0 ? 7 : -7;
		//设定目标值
		if(Math.abs(obj.offsetLeft - target) < 7){//匀速运动停止条件
			clearInterval(obj.timer);
			obj.style.left = target +"px";
		}else{
			obj.style.left = obj.offsetLeft + speed + "px";
		}
		
	},30);
};

//复杂运动框架 按顺序运动
function sportInOrder(obj,attr,target,fn) {
	
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var cur = 0;
		if(attr == "opacity"){//判断是否是透明度
			cur = parseInt(parseFloat(getStyle(obj,attr))*100);
		}else{
			cur = parseInt(getStyle(obj,attr));
		}
		var speed = (target - cur)/8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		if (cur == target) {
			clearInterval(obj.timer);
			if(fn){
				fn();
			};
		}else{
			if(attr == "opacity"){//透明度改变的处理
				obj.style.filter = "alpha(opacity=" + ( cur + speed ) + ")";
				obj.style.opacity = (cur + speed) / 100;
			}else{//像素改变的处理
				obj.style[attr] = cur + speed +'px';
			}
			
		}
	},50);
};
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
};

//复杂运动框架 同时运动
function sportCommon(obj,json,fn) {

	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var flag = true;//默认为true记录运动是否都完成
		for( var i in json ){
			var cur = 0;
			if(attr == "opacity"){//判断是否是透明度
				cur = parseInt(parseFloat(getStyle(obj,attr))*100);
			}else{
				cur = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - cur)/8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if (!cur == json[attr]) {//若有运动未完成则开关为false
				flag = false;
			}
			if(attr == "opacity"){//透明度改变的处理
				obj.style.filter = "alpha(opacity=" + ( cur + speed ) + ")";
				obj.style.opacity = (cur + speed) / 100;
			}else{//像素改变的处理
				obj.style[attr] = cur + speed +'px';
			}	
		}
		if(flag){//判断运动状态是否都完成
			clearInterval(obj.timer);
				if(fn){
					fn();
				};
		};	
	},50);
};
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
};


/*实例：返回顶部
*点击某按钮实现返回顶部效果
*传入参数obj为该按钮对象
*/
window.onscroll = function(){//为窗口添加滚动条事件
	function oBackTop(obj){
		//获取滚动条到顶部的距离(||为了解决兼容性)
		 var _srolltop = document.body.scrollTop || document.documentElement.scrollTop;
		if(_srolltop>500){//判断按钮显示条件
			obj.style.display = "block";//按钮显示
			obj.onclick = function(){//按钮注册事件
				document.body.scrollTop=document.documentElement.scrollTop=0;//回到顶部(=为了解决兼容性)
			};
		}else{
			obj.style.display = "none";//按钮隐藏
		};
	};
	oBackTop(obj);//回到顶部函数执行
};

/*实例：计算器的计算单元
参数iNum1与iNum2为需进行计算的两个数字
参数sOpr为运算符
*/ 
function calc(iNum1,iNum2,sOpr){
	iResult=0;      
	switch(sOpr){
		case '+': iResult=iNum1+iNum2; break;
		case '-': iResult=iNum1-iNum2; break;
		case '*': iResult=iNum1*iNum2; break;
		case '/': iResult=iNum1/iNum2; break;
		default: iResult=iNum2;	
	};
	bNeedClear=true;
	return iResult;	
};
//js对象深度克隆
function clone(obj){
	var buf;
	if(obj instanceof Array){
		buf = [];//创建空数组
		var i = obj.length;
		while(i--){
			buf[i] = clone(obj[i]);
		}
		return buf;
	}else if(obj instanceof Object){
		buf = {};//创建空对象
		for(var k in obj){//为该对象添加属性
			buf[k] = clone(obj[k]);
		}
		return buf;
	}else{
		return obj;
	}
}


/*写一段代码。判断一个字符串中出现次数最多的字符串，并统计出现的次数*/        
function toGetTheMostCharsByArray(s){ 
    var r={}; 
    for(var i=0;i<s.length;i++){ 
        if(!r[s[i]]){ 
            r[s[i]] = 1; 
        }else{ 
            r[s[i]]++; 
        } 
    } 
    var max = { 
        "value "　:s[0], 
        "num" :  r[s[0]] 
    }; 
     
    for(var n in r){//对象使用in关键字，因为没有length 

        if(r[n]>max.num){ 
            max.num = r[n]; 
            max.value = n;  
        } 
    } 
    return max; 
} 
function toGetTheMostCharsByRegex(s){ 
    var a = s.split(''); 
    a.sort(); 
    s = a.join(''); 

    var regex = /(\w)\1+/g ;//\1代表重复的 

    var max = { 
        "value "　:s[0], 
        "num" :  0 
    }; 
     
    s.replace(regex,function(a,b){ 
        if(max.num < a.length){ 
            max.num = a.length; 
            max.value= b; 
        } 
    }); 
    return max; 
} 
// 测试:
var test = "efdfssssfrhth"; 
console.info("使用常规方法　，出现最多的字符串为："+toGetTheMostCharsByArray(test).value+" ，出现次数："+toGetTheMostCharsByArray(test).num); 
console.info("使用字符串匹配，出现最多的字符串为："+toGetTheMostCharsByRegex(test).value+" ，出现次数："+toGetTheMostCharsByRegex(test).num); 


//ajax方法
//参数url资源地址 callback处理响应结果
var ajaxGet = function(url,callback){
	//创建ajax对象
	var _xhr = null;
	//兼容处理发送请求的对象
	if (window.XMLHttpRequest) {
		_xhr = new window.XMLHttpRequest();//标准浏览器及ie7+
	}else if(window.ActiveXObject){
		_xhr = new window.ActiveXObject("Microsoft.XMLHTTP");//ie6及以下
	}

	//连接服务器
	_xhr.open('get',url,true);//true默认异步加载数据
	
	//发送请求
	_xhr.send(null);

	//当服务器端状态发生变化，在浏览器端产生一些效果
	_xhr.onreadystatechange = function(){
		//表示信息接收成功
		if(_xhr.readyState == 4 && _xhr.status == 200){
			//把字符串转换成浏览器可识别的对象
			//_xhr.responseText读取文档内容
			callback(JSON.parse(_xhr.responseText));//处理json对象
		}
	}
}
//ajax方法
//fn1响应成功时的回调函数，fn2响应失败时的回调函数
function oAjax(url,fn1,fn2) {
	var _xHr = null;
	window.XMLHttpRequest ? _xHr = new XMLHttpRequest : _xHr = new ActiveXObject('Microsoft.XMLHTTP');
	_xHr.open('get',url,true);
	_xHr.send();
	_xHr.onreadystatechange = function(){
		if (_xHr.readyState == 4){
			if(_xHr.status == 200){
				if(fn1){
				fn1(_xHr.responseText);
				}
			}else{
				fn2();
			}					
		}
	}
}

//jsonp应用实例

var flight = function(data){
		alert("你查询的航班信息结果是：票价" + data.price + "元,余票" + data.tickets + "张。");
	};
	
	//提供jsonp服务的url地址
	var url = "http://flightQuery.com/jsonp/flightResult.aspx?code=CA1998&callback=flight";

	//创建script标签，设置其属性
	var script = document.createElement("script");
	script.setAttribute("src",url);

	//将script标签加入head中，此时调用开始
	document.getElementsByTagName("head")[0].appendChild(script);

	//假数据模拟请求到的json
	// flight({
	// 	"code":"CA1998",
	// 	"price":1775,
	// 	"tickets":5
	// })
};

/*获取UA
UA  -- uesr-agent -- 用户代理，是服务器判断请求的种类
*/
function whatBrowser(){
	document.Browser.Name.value = navigator.appName;
	document.Browser.Version.value = navigator.appVersion;
	document.Browser.Code.value = navigator.appCodeName;
	document.Browser.Agent.value = navigator.userAgent;
}

/*
try{
	code...
}catch(e){
	console.log(e.name+":"e.message);
};
SyntaxError是解析代码时发生的语法错误
ReferenceError是引用一个不存在的变量时发生的错误
RangeError是当一个值超出有效范围时发生的错误
主要有几种情况，一是数组长度为负数，二是Number对象的方法参数超出范围，以及函数堆栈超过最大值
TypeError是变量或参数不是预期类型时发生的错误。
比如，对字符串、布尔值、数值等原始类型的值使用new命令，就会抛出这种错误，因为new命令的参数应该是一个构造函数
URIError是URI相关函数的参数不正确时抛出的错误，
主要涉及encodeURI()、decodeURI()、encodeURIComponent()、decodeURIComponent()、escape()和unescape()这六个函数。
eval函数没有被正确执行时，会抛出EvalError错误。
该错误类型已经不再在ES5中出现了，只是为了保证与以前代码兼容，才继续保留
*/ 


// css hack
// <style>
// 	.test {
// 		color: #c30;          /* For latest Firefox, chrome, Safari 
// 		color: #090\0;        /* For Opera15- */
// 		color: #00f\9;        /* For IE8+ */
// 		*color: #f00;         /* For IE7 */
// 		_color: #ff0;         /* For IE6 */
// 	}
// </style>
// <!--[if IE 9]>
// 创建新标签加入dom节点中
// 	<script>
// 		var e=("abbr,article,aside,audio,canvas,datalist,details,"+"figure,footer,header,hgroup,mark,menu,meter,nav,output,"+"progress,section,time,video").split(',');
// 		for(var i=0;i<e .length;i++){
// 			document.createElement(e[i]);
// 		}
// 		console.log(e);
// 	</script>
// <![endif]-->
// <!--[if gt IE 9]>
// <![endif]-->
// <!--[if gte IE 9]>
// <script src="html5shiv.js"></script>
// <![endif]-->

// 根据获得的lrc歌词进行拆分并生成数组
function getLre(res){
	// 根据换行拆分歌词
	var textArr = res.split('\r\n');
	var lrcArr = [];
	// 提取有用部分并拆分
	for(var i in textArr){
		var timeReg = textArr[i].match(/\[\d{2}:\d{2}((\.|\:)\d{2})/g);
		// /\[\d{2}:\d{2}((\.|\:)\d{2})\]/g 获取时间
		if(timeReg != null){
			// 截取歌词
			var txtLre = textArr[i].split(timeReg)[1];
			// 截取分钟
			var nMinute = parseInt(timeReg[0].split("[")[1].split(":")[0]);
			// 截取秒钟
			var nSecond = parseInt(timeReg[0].split(":")[1].split(".")[0]);
			var nResTime = nMinute*60 + nSecond;
			lrcArr.push([nResTime,txtLre]);
		}
	}

	return lrcArr;	
}
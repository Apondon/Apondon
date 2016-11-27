<!--[if lt IE 10]-->
$(function(){
//文本域的事件监听
	$("input[type!='password'][passwordMask!='true'],textarea").bind({
	"focus":function(){
			var placeholderVal = $(this).attr("placeholder");
			var realVal = $(this).val();
			if($.trim(realVal)==placeholderVal){
				$(this).val("");
			}
		},
	"blur":function(){
		var placeholderVal = $(this).attr("placeholder");
		var realVal = $(this).val();
		if($.trim(realVal)==""){
			$(this).val(placeholderVal);
		}
		}
	});

	//初始化除password框之外的文本域
	$("input[type!='password'],textarea").each(function(i,n){
		$(this).val($(this).attr("placeholder"));
	});

	//密码框失去焦点，显示文本框
	$("input[type='password']").blur(function(){
		var next = $(this).next("input[type='text'][passwordMask='true']");
		var val = $(this).val();
		if($.trim(val)==""){
			$(next).show();
			$(this).hide();
		}
	});

	//文本框获得焦点，显示密码框
	$("input[type='text'][passwordMask='true']").focus(function(){
		var prev = $(this).prev("input[type='password']");
		$(this).hide();
		$(prev).show().focus();
	});

	//页面初始化密码框为文本框
	$("input[type='text'][passwordMask='true']").each(function(i,n){
		var prev = $(this).prev("input[type='password']");
		$(prev).hide();
		$(this).show();
	});

});

// 方法二
$(function(){
if(!placeholderSupport()){   // 判断浏览器是否支持 placeholder
    $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
    }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();
};
})
function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
}

// placeholder组件
PlaceHolder组件
 * $(input).placeholder({
 *   word:     // @string 提示文本
 *   color:    // @string 文本颜色
 *   evtType:  // @string focus|keydown 触发placeholder的事件类型
 * })


 // ie 6-8
 $(document).ready(function()    {      
    $("input").focusin(function() {
        if($(this).val() =="请输入"){  
            $(this).val("");
        }
    });
    $("input").focusout(function() {
        if($(this).val() ==""){ 
            $(this).val("请输入");
        }
    });
});


 // input
 //<input class="input_text input-big" type="text" placeholder="验证码" onBlur="if(this.value==''){this.value='验证码:'}" onClick="if(this.value=='验证码:'){this.value='';}" value="验证码:" style="width:150px;">

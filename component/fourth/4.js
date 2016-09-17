define(['text!./4.html','css!./4.css'],function(content){
    function setMe(){
    	$('#main').html(content);
    	$('#myShow').on('click',function(){
    	   $('#main').html(content);
           var divObj1=$('<div id="My"><div><textarea></textarea><br/><input type="text" /><br/><button id="cancel">取消</button><button id="submit">提交</button></div></div>');
           $('#main').append(divObj1);
    	})
    }
    return {
    	setMe:setMe
    }
})
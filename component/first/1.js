define(['text!./1.html','css!./1.css'],function(content){
	function setHome(){
		$('#main').html(null);
		$.ajax({
			type:"get",
			url:"http://duif.applinzi.com/leyuan/home_data.php",
			async:true,
			success:function(res){
			   var data=JSON.parse(res);
	           console.log(data.reclist);
	           setData(data.slider);
	           setData2(data.arealist);
	           setData3(data.reclist);
			}
		});
	}
	function setData(arr){
		var divObj=$('<div></div>');
		divObj.addClass('banner');
		$('#main').append(divObj);
		var div2Obj=$(' <div class="clear diandian"><span class="point"></span><span class="point"></span><span class="point"></span></div>');
		$('#main').append(div2Obj);
		for(var i=0;i<arr.length;i++){
			
			var imgObj=$('<img />');
			imgObj.attr({
				'src':arr[i].img
			})
			console.log(imgObj)
			$('.banner').append(imgObj);
		}
		var num=0;
		var timer=setInterval(function(){
            if(num>=3){
            	num=0;
            }
			$('.banner').animate({
				'left':-100*num+'%'
			});
			$('.point').css({
				'background':'white'
			})
			$('.point').eq(num).css({
				'background':'red',
				'borderColor':'grey'
			})
			num++;
		},1500)
		
	}
	function setData2(arr){
        var divObj=$('<div><a><img /></a><a><img /></a></div>');
        $('#main').append(divObj);
        divObj.addClass('two');
        divObj.addClass('clear');
        for(var i=0;i<arr.length;i++){
        	divObj.find('a').eq(i).find('img').attr({
	        	'src':arr[i].img
	        })
        }
        
	}
	function setData3(arr){
       var divObj=$('<div id="introduce"><p>精彩推荐</p></div><div id="list"></div>');
       $('#main').append(divObj);
       for(var i=0;i<arr.length;i++){
       	   var imgObj=$('<img src="'+arr[i].img+'"/>');
       	   $('#list').append(imgObj);
       }   
	}
	return {
       setHome:setHome
	}
})
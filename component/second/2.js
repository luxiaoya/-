define(['text!./2.html','css!./2.css'],function(content){
	function setGame(){
		$('#main').html(content);
		$.ajax({
			type:"get",
			url:"http://duif.applinzi.com/leyuan/leyuan_data.php?address=全城",
			async:true,
			success:function(res){    
	           var data=JSON.parse(res);
	           setData(data.data);
	           console.log(data.data);
	           setData2(data.data);
			}
		});
	}
	function setData(arr){
		
		for(var i=0;i<arr.length;i++){
			var imgObj=$('<div><img src="'+arr[i].img+'"/><span>'+arr[i].name+'</span><span>'+arr[i].dist+'公里</span><span>'+arr[i].address+'</span></div>'); 
	        imgObj.addClass('imgs');
	        $('#main').append(imgObj);
		}       
	}
	function setData2(arr){
	   var arrCity=[];
	   arrCity.push(arr[0].address);
       for(var i=1;i<arr.length;i++){
       	  for(var j=0;j<arrCity.length;j++){
       	  	if(arrCity[j]==arr[i].address){
       	  		var icon=false;
       	  		break;
       	  	}else{
       	  		icon=true;
       	  	}	
          }
          if(icon){
          	 arrCity.push(arr[i].address);  
          }	
         
       }
       console.log(arrCity)
       for(var m=0;m<arrCity.length;m++){
	       	var divObj=$('<div>'+arrCity[m]+'</div>');
	       	$('#citys').append(divObj);
       }
	}
	function setTitle(){
		var icon2=false;
		$('#cityLi').on('click',function(){
            icon2=!icon2;
            console.log(icon2);
			if(icon2){
				$('#citys').css({
					'display':'block'
				})
				
			}else{
                $('#citys').css({
					'display':'none'
				})
			}
		})
		
	}
	return {
       setGame:setGame,
       setTitle:setTitle
	}
})
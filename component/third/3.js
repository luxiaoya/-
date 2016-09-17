define(['text!./3.html','css!./3.css'],function(content){
    function setCard(){
    	$('#main').html(content);
    }
    return {
        setCard:setCard
    }
})
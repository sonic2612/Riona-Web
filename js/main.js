 $(document).ready(function(){
  $("#btn1").on("click" , eventBlockOne);
  $("#btn2").on("click" , eventBlockTwo);
  $("#btn3").on("click" , eventBlockThree);
  $(".how-menu").on("click" , function(){
  	$(".how-menu").css({
  		"display" : "none",
  	});
  	$("nav").css({
  		"display" : "block",
  	});
  });
  $(".hide-menu").on("click" , function(){
  	$("nav").css({
  		"display" : "none",
  	});
  	$(".how-menu").css({
  		"display" : "inline-block",
  	});
  });
 });

 


  function eventBlockOne(){
	$(this).css({
		"background" : "#8ec1cd" ,
		});
	$("#btn2, #btn3").css({
		"background" : "#ccc" ,
		});
	$(".btn-event-second, .btn-event-third").hide();
	$(".btn-event-first").css({
			"display" : "block" ,
	});
}


 function eventBlockTwo(){
	$(this).css({
		"background" : "#8ec1cd" ,
		});
	$("#btn1, #btn3").css({
		"background" : "#ccc" ,
		});
	$(".btn-event-first, .btn-event-third").hide();
	$(".btn-event-second").css({
			"display" : "block" ,
	});
}

 function eventBlockThree(){
 	$(this).css({
		"background" : "#8ec1cd" ,
		});
 	$("#btn1, #btn2").css({
		"background" : "#ccc" ,
		});
	$(".btn-event-first, .btn-event-second").hide();
	$(".btn-event-third").css({
			"display" : "block" ,
	});
}

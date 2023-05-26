$(document).ready(function (){

	function showResult(){
		var count=0;
		var i=1;
		while(i<=10){
			if(document.getElementById(i.toString()).checked){
				count++;
			};
			i++;
		};
		if(count>=0 && count<=5){
			$('#countresult').html("<h4>You have scored "+count+" out of 10</h4><h6>Need to work hard on basics.</h6>");
		}
		else if(count==6 || count==7){
			$('#countresult').html("<h4>You have scored "+count+" out of 10</h4><h6>Need to revise the topics again.</h6>");
		}
		else if(count==8 || count==9){
			$('#countresult').html("<h4>You have scored "+count+" out of 10</h4><h6>Almost there, brush up the topics for next time.</h6>");
		}
		else{
			$('#countresult').html("<h4>You have scored "+count+" out of 10</h4><h6>So, it was a piece of cake for you.</h6>");
			setTimeout(function() {
				confetti.start()
			}, 1000);
			setTimeout(function() {
				confetti.stop()
			}, 5000);
		};
	};

	$("#strbtn").click(function(){

		function countdownTimer(){
			let minute=Math.floor(secondsFirst/60);
			let seconds=secondsFirst%60;
			if (seconds==0 || seconds<10){
				secondHand.innerHTML="0" + seconds;
				secondsFirst--;
			}
			else{
				secondHand.innerHTML=seconds;
				secondsFirst--;
			}
			minuteHand.innerHTML="0"+minute;
			if (secondsFirst==-1){
				clearInterval(timer);
				showResult();
				$('.question-div,#copyrightDiv,#clock,#navigation').css({
					display:"none",
				});
				$('#myModal').modal('show');
			};
		};

		var secondsFirst=180;
		var minuteHand=document.querySelector("#minutes");
		var secondHand=document.querySelector("#seconds");
		var timer=setInterval(countdownTimer,1000);

		$("#finish").click(function(){
			clearInterval(timer);
			secondHand.innerHTML="00";
			minuteHand.innerHTML="00";
			showResult();
			$('.question-div,#copyrightDiv,#clock,#navigation').css({
				display:"none",
			});
		});
	});

	$('#staticBackdrop').modal('show');
	$('.question-div,#copyrightDiv,#clock,#navigation').css({
		display:"none",
	});
	$(".close").click(function(){
		$('.question-div,#copyrightDiv,#clock,#navigation').css({
			display:"block",
		});
	});
	$(".close").attr('disabled',true);
	var checkBtn=$("#checkButton");
	checkBtn.click(function(){
		if(checkBtn.prop("checked")!=true){
			$(".close").attr('disabled',true);
		}
		else{
			$(".close").removeAttr('disabled');
		};
	});

	$("#modalBtn1").click(function(){
		location.reload();
	});

	$("body").on("contextmenu",function(e){
		return false;
	});
	$("body").bind("cut copy paste",function(e){
		e.preventDefault();
	});


});

$(function(){
	var content = "<div id='player_selection>'";
	for (var i = 0; i < 3; i++) {
		var index = i + 1;
		content += '<div>Player ' + index + ': <input type="text" id="name' + i + '"></div>';
	}
	content += "</div>";
	content += "<input type='submit' value='Submit' id='player_btn' class='modalBtn'>";
	modal.open({content: "<div>Enter Players' name </div>" + content});
	
	$("#player_btn").live("click", function(){
		var player1 = $.extend(true, {}, Player);
		player1.init($("#name0").val(), 0);
		var player2 = $.extend(true, {}, Player);
		player2.init($("#name1").val(), 1);
		var player3 = $.extend(true, {}, Player);
		player3.init($("#name2").val(), 2);
		var wheel = Wheel();
		wheel.init();
		wheel.setPlayers(player1, player2, player3);
	
		$.ajax({
		  url: "js/questions.json",
		  success: function(response) {
			wheel.ajaxCallback(response);
		  }
		});
		
		modal.close();
		$("#category_btn").live("click", function(){
			var category = $("#category_selection").val();
			var points = wheel.popupQuestion(category);
			wheel.gameOver(points);
			modal.close();
		});
	});
	setTimeout(function() {
		window.scrollTo(0, 1);
	}, 0);
});
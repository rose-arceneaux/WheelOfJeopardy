$(function(){
	var player1 = $.extend(true, {}, Player);
	player1.init("Jean", 0);
	var player2 = $.extend(true, {}, Player);
	player2.init("Momo", 1);
	var player3 = $.extend(true, {}, Player);
	player3.init("Superman", 2);
	
	var wheel = Wheel();
	wheel.init();
	wheel.setPlayers(player1, player2, player3);
	
	var categories = [];
	$.ajax({
	  url: "js/questions.json",
	  success: function(response) {
		var data = response.session;
		var questions, category_id, category_title;
		for (var i in data.r1Categories) {
			jeopardy.jeopardy_r1[i] = [];
			category_id = data.r1Categories[i].catId;
			category_title = data.r1Categories[i].catTitle;
			categories.push(category_title);
			jeopardy.category_list[category_title] = category_id;
			questions = data.r1Categories[i].questions;
			for (var j in questions) {
				jeopardy.jeopardy_r1[i][j] = $.extend(true, {}, Question);
				jeopardy.jeopardy_r1[i][j].setQuestion(questions[j].id, questions[j].text, questions[j].answer, category_id, j);
			}
		}
		jeopardy.segments = categories;
		jeopardy.update();
		
		wheel.setCategories(categories);
		wheel.update();
	  }
	});
	
	$("#category_btn").live("click", function(){
		var category = $("#category_selection").val();
		var points = wheel.popupQuestion(category);
		wheel.gameOver(points);
		modal.close();
	});
	setTimeout(function() {
		window.scrollTo(0, 1);
	}, 0);
});
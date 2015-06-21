$(function(){
	var categories = [
		"TV Shows",
		"Capitals",
		"Movies",
		"History",
		"Music",
		"Quotes"
	];
	
	var specialTurns = [
		"Free Turn",
		"Bankrupt",
		"Lose Turn",
		"Player's Choice",
		"Opponents' Choice",
		"Spin Again"
	];
	wheel.init();
	wheel.categories = categories;
	wheel.segments = specialTurns.concat(categories);
	wheel.update();
	
	jeopardy.init();
	jeopardy.segments = categories;
	jeopardy.update();
	
	setTimeout(function() {
		window.scrollTo(0, 1);
	}, 0);
});
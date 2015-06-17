$(function(){
	wheel.init();

	var segments = [
		"TV Shows",
		"Free Turn",
		"Capitals",
		"Lose Turn",
		"Movies",
		"Bankrupt",
		"History",
		"Player's Choice",
		"Music",
		"Opponents' Choice",
		"Quotes",
		"Spin Again"
	];
	wheel.segments = segments;
	wheel.update();

	setTimeout(function() {
		window.scrollTo(0, 1);
	}, 0);
});
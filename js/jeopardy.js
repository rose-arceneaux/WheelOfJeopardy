var jeopardy = {
	segments : [],
	selector: "div#jeopardy",
	price: {
		start: 200,
		end: 1000,
		increment: 200
	},
	jeopardy_r1: [],
	jeopardy_r2: [],
	category_list: {},
	current: "jeopardy_r1",
	currentCategory: "r1Categories",
	max_questions: 48,
	questions_answered: 0,

	popupCategory: function(player_choice){
		var title, content, segments = jeopardy.segments;
		if(player_choice) {
			title = "Player's Choice";
		}
		else {
			title = "Opponent's Choice";
		}
		content = "<select id='category_selection'>";
		for (var i = 0; i < segments.length; i++) {
			content += "<option value='" + segments[i] + "'>" + segments[i] + "</option>";
		}
		content += "</select>";
		content += "<input type='submit' value='Submit' id='category_btn' class='modalBtn'>";
		modal.open({content: "<div>" + title + "</div>" + content});
	},
	popupQuestion: function(c) {
		var answer;
		var category_id = jeopardy.category_list[c];
		var questions = jeopardy[jeopardy.current];
		for (var i in questions) {
			if (questions[i][0].category_id == category_id) {
				for (var j in questions[i]) {
					if (!questions[i][j].is_answered) {
						answer = prompt(questions[i][j].question_text);
						if (answer && answer.length > 0 && answer == questions[i][j].answer) {
							alert("Correct! You gain $" + eval(questions[i][j].easiness * this.price.start));
							questions[i][j].is_answered = true;
							jeopardy.removeQuestion(i, j);
							return eval(questions[i][j].easiness * this.price.start);
						}
						else if (answer != questions[i][j].answer) {
							alert("Sorry. The correct response was " + questions[i][j].answer + ". You lose $" + eval(questions[i][j].easiness * this.price.start));
							questions[i][j].is_answered = true;
							jeopardy.removeQuestion(i, j);
							return eval(questions[i][j].easiness * -this.price.start);
						}
						break;
					}
				}
			}
		}
		return -1;
	},
	removeQuestion: function(col, row) {
		jeopardy.questions_answered++;
		var cat_selector = " div.jCell:eq(" + row + ")";
		var element_selector = " span:eq(" + col + ")";
		$(jeopardy.selector + cat_selector + element_selector).text(' ');
	},
	noMoreQuestions: function() {
		return jeopardy.max_questions <= jeopardy.questions_answered;
	},
	getCategories: function() {
		var segments = jeopardy.segments;
		var html = "<div class='jRow' id = 'jeopardyCategories'>";
		for (var i = 0; i < segments.length; i++) {
			html += "<span>" + segments[i]+"</span>";
		}
		html += "</div>";
		return html;
	},
	getJeopardy: function(){
		var price = jeopardy.price;
		var numElements = jeopardy.segments.length + 1;
		var html = "";
		for (var i = price.start; i <= price.end; i+=price.increment) {
			html += "<div class='jCell'>";
			html += new Array(numElements).join("<span>$ " + i +"</span>");
			html += "</div>";
		}
		return html;
	},
	update: function() {
		var html = jeopardy.getCategories() + jeopardy.getJeopardy();
		$(jeopardy.selector).html(html);
	}
};

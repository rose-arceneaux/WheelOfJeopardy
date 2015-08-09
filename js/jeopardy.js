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
	max_questions: 48,
	questions_answered: 0,

	popupQuestion: function(c) {
		var answer;
		var category_id = jeopardy.category_list[c];
		var questions = jeopardy[jeopardy.current];
		for (var i in questions) {
			if (questions[i][0].category_id == category_id) {
				for (var j in questions[i]) {
					if (!questions[i][j].is_answered) {
						answer = prompt(questions[i][j].question_text);
						if (answer && answer.length > 0){ //(answer == questions[i][j].answer) {
							questions[i][j].is_answered = true;
							jeopardy.removeQuestion(i, j);
							return eval(questions[i][j].easiness * this.price.start);
						}
						else {
							return 0;
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
var Question = {
	id: "",
	category_id: "",
	question_text: "",
	answer: "",
	easiness: 1,
	is_answered: false,
	setQuestion: function(id, question, answer, category_id, easiness) {
		this.id = id;
		this.question_text = question;
		this.answer = answer;
		this.category_id = category_id;
		this.easiness = easiness;
	},
	validateAnswer: function(answer, start) {
		var return_arr = [],
			correctness = (this.answer === answer);
		return_arr[0] = correctness;
		if (correctness){
			this.is_answered = true;
			return_arr[1] = this.getPoints(start);
		}
		return return_arr;
	},
	getPoints: function(start) {
		return start * this.easiness; 
	}
};
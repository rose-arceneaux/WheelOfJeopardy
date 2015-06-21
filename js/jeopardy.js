var jeopardy = {
	segments : [],
	selector: "div#jeopardy",
	price: {
		start: 200,
		end: 1000,
		increment: 200
	},
	init : function(optionList) {
		try {
			jeopardy.initJeopardy();
		} catch (exceptionData) {
			alert('Jeopardy is not loaded ' + exceptionData);
		}

	},
	initJeopardy: function() {
	},
	handleCategory: function(c) {
		alert(c);
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
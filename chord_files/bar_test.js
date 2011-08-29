// Read example from : http://mbostock.github.com/d3/tutorial/bar-1.html
var barChart;
var dummy_data = [];

var w = 600;
var h = 220;

var year = 2009;
for(var i = 0; i < data[year].length; i++) {
	dummy_data.push( getPeopleWorkingIn(i, year) );
}

drawBarChart(dummy_data);

function drawBarChart(data) {

	var fillColours = ["#7A0700", "#30547F", "#466964", "#6C8C84", "#A7C4BB", "#86A677", "#5B6B2B", "#BDBB55", "#E5D27F", "#FFF187", "#EB9800", "#E55322", "#961227"];

	var y = d3.scale.linear()
		.domain([0, d3.max(data)])
		.range(["0px", h+'px']);

	var x = d3.scale.ordinal()
		.domain(data)
		.rangeBands([0, w]);

	barChart = d3.select("#barChart")
	  .append("svg:svg")
		.attr("class", "chart")
		.attr("width", w)
		.attr("height", h)
		.style("margin-left", "32px") // Tweak alignment…
	  .append("svg:g")

	barChart.selectAll("rect")
		.data(data)
	  .enter().append("svg:rect")
		.attr("x", x)
		.attr("y", function(d) { return h - parseInt(y(d), 10); })
		.attr("width", x.rangeBand())
		.attr("height", y)
		.each(function(datum, index) {
			d3.select(this).attr("fill", fillColours[index]);
		})

	barChart.selectAll("text.bar")
		.data(data)
	  .enter().append("svg:text")
		.attr("class", "bar")
		.attr("y", function(d) { return h - parseInt(y(d), 10); })
		.attr("x", function(d) { return x(d) + x.rangeBand() / 2 + 10; }) /* TODO: calculate the length of text */
		.attr("dy", 15)
		.attr("dx", ".35em")
		.attr("text-anchor", "end")
		.text(function(d) {
			var len = String(d).length;
			var str = String(d).substr(0, len-3);
			return str + 'k';
		});

	barChart.append("svg:line")
		.attr("x1", 0)
		.attr("x2", w)
		.attr("y1", h)
		.attr("y2", h)
		.attr("stroke", "#000");

}

function redrawBarChart(year) {
	var tempData = [];
	for(var i = 0; i < data[year].length; i++) {
		tempData.push( getPeopleWorkingIn(i, year) );
	}

	var y = d3.scale.linear()
		.domain([0, d3.max(tempData)])
		.range(["0px", h+'px']);
	
	var x = d3.scale.ordinal()
		.domain(tempData)
		.rangeBands([0, w]);

	// Update…
	barChart.selectAll("rect")
	    .data(tempData)
	  .transition()
	    .duration(1000)
		.attr("y", function(d) { return h - parseInt(y(d), 10); })
		.attr("height", y)

	barChart.selectAll("text.bar")
		.data(tempData)
	  .transition()
	    .duration(1000)
		.attr("y", function(d) { return h - parseInt(y(d), 10); })
		.attr("dy", 15)
		.text(function(d) {
			var len = String(d).length;
			var str = String(d).substr(0, len-3);
			return str + 'k';
		});
}
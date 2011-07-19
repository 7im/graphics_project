
//var dummy_data = [7000, 7000, 1000, 4000, 7000, 7000, 12000, 3374000, 234000, 21000, 7000, 10000, 0, 6000];
// Read example from : http://mbostock.github.com/d3/tutorial/bar-1.html
var dummy_data = [];

var year = 2009;
for(var i = 0; i < data[year].length; i++) {
	dummy_data.push( getPeopleWorkingIn(i, year) );
}

var fillColours = ["#7A0700", "#30547F", "#466964", "#6C8C84", "#A7C4BB", "#86A677", "#5B6B2B", "#BDBB55", "#E5D27F", "#FFF187", "#EB9800", "#E55322", "#961227"];

var h = 220;
var y = d3.scale.linear()
	.domain([0, d3.max(dummy_data)])
	.range(["0px", h+'px']);

var x = d3.scale.ordinal()
	.domain(dummy_data)
	.rangeBands([0, 120]);

var chart = d3.select("#barChart")
  .append("svg:svg")
	.attr("class", "chart")
	.attr("width", 440)
	.attr("height", h)
	.style("margin-left", "32px") // Tweak alignment…
  .append("svg:g")
	.attr("transform", "translate(10,0)");

/*
chart.selectAll("line")
	.data(x.ticks(10))
  .enter().append("svg:line")
	.attr("x1", x)
	.attr("x2", x)
	.attr("y1", 0)
	.attr("y2", 120)
	.attr("stroke", "#ccc");

chart.selectAll("text.rule")
	.data(x.ticks(10))
  .enter().append("svg:text")
	.attr("x", x)
	.attr("y", 0)
	.attr("dy", -3)
	.attr("text-anchor", "middle")
	.text(String);
*/

chart.selectAll("rect")
	.data(dummy_data)
  .enter().append("svg:rect")
	.attr("x", x)
	.attr("y", function(d) { return h - parseInt(y(d), 10); })
	.attr("width", x.rangeBand())
	.attr("height", y)
	.each(function(datum, index) {
		d3.select(this).attr("fill", fillColours[index]);
	})

chart.selectAll("text.bar")
	.data(dummy_data)
  .enter().append("svg:text")
	.attr("class", "bar")
	.attr("y", function(d) { return h - parseInt(y(d), 10); })
	.attr("x", function(d) { return x(d) + x.rangeBand() / 2; })
	.attr("dy", 15)
	.attr("dx", ".35em")
	.attr("text-anchor", "end")
	.text(String);

chart.append("svg:line")
	.attr("x1", 0)
	.attr("x2", 120)
	.attr("y1", h)
	.attr("y2", h)
	.attr("stroke", "#000");

var line_data = [ 8, 44, 30, 54 ];

function getPeopleWorkingFrom(index, year) {
	var total = 0;
	for(var i = 0; i < data[year][index].length; i++) {
		total += data[year][index][i];
	}
	return total;
}

function getPeopleWorkingIn(index, year) {
	var total = 0;
	for(var i = 0; i < data[year].length; i++) {
		total += data[year][i][index];
	}
	return total;
}

var londonDataIndex = 7;
var peopleWorkingInLondon = getPeopleWorkingIn(londonDataIndex, "2009");

/*
var line_data = [];
for(var year = 2004; year <= 2009; year++) {
	line_data.push( getPeopleWorkingIn(londonDataIndex, year) );
}
*/

var x = d3.scale.linear().domain([0,line_data.length]).range([0,600]);
	y = d3.scale.linear();
	years = d3.scale.linear();

var zeroData = [];
for (i = 0; i <= line_data.length; i++) {
	zeroData.push({"Value": 0})
}

var lineChart = d3.select("#lineChart")
  .append("svg:svg")
	.attr("width", 500)
	.attr("height", 250)
  .append("svg:g")
	.attr("transform", "translate(0,200)");
	
var line = d3.svg.line()
	.x(function(d,i) { return x(i) })
	.y(function(d) { return -1 * y(d) })	
	.interpolate("basis")

// y-axis	
lineChart.append("svg:line")
	.attr("x1", x(line_data.length))
	.attr("y1", y(0))
	.attr("x2", x(line_data.length))
	.attr("y2", -1 * y(100))
	.attr("stroke", "#ccc")

// x-axis	
lineChart.append("svg:line")
	.attr("x1", x(0))
	.attr("y1", y(0))
	.attr("x2", x(line_data.length))
	.attr("y2", y(0))
	.attr("stroke", "#ccc")
/*

// x tick marks
lineChart.selectAll(".yearLabel")
	.data([2, 40, 150])
  .enter().append("svg:text")
	.attr("class", "yearLabel graphLabel")
	.attr("x", function(d) { return years(d) })
	.attr("y", 20 + y(0))
	.text(function(d) { return d })

// 2011 marker line	
lineChart.append("svg:line")
	.attr("x1", years(2011))
	.attr("y1", y(0))
	.attr("x2", years(2011))
	.attr("y2", -1 * y(100))
	.attr("stroke", "#999")
	.attr("stroke-dasharray", "3, 6")

// y tick marks	
lineChart.selectAll(".pctLabel")
	.data([50, 100])
  .enter().append("svg:text")
	.attr("class", "pctLabel graphLabel")
	.attr("x", 25 + x(line_data.length))
	.attr("y", function(d) { return -1 * y(d) })
	.attr("dy", 5)
	.text(function(d) { return d + "%" })

*/

var lineColor = colors[i];

lineChart.append("svg:path")
	.attr("id", "line")
	.attr("d", line(zeroData))
	.attr("stroke",  lineColor)
	.attr("fill", "none")
	.attr("stroke-width", 5)
	
d3.select("#line").attr('d', line(line_data));
	
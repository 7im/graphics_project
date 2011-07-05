
var dummy_data = [4, 10, 20, 12, 13, 47, 53, 28, 98, 35, 76, 83, 10, 39, 85, 69, 9];


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
var dummy_data = [];
for(var year = 2004; year <= 2009; year++) {
	dummy_data.push( getPeopleWorkingIn(londonDataIndex, year) );
}
*/

var x = d3.scale.linear().domain([0,16]).range([0,600])
	y = d3.scale.linear().domain([0,100]).range([0,200]),
	years = d3.scale.linear().domain([1950,2030]).range([0,600]);

var zeroData = [];
for (i=0; i<17; i++) {
	zeroData.push({"Value": 0})
}

var lineChart = d3.select("#lineChart")
  .append("svg:svg")
	.attr("width", 600)
	.attr("height", 250)
  .append("svg:g")
	.attr("transform", "translate(0,200)");
	
var line = d3.svg.line()
	.x(function(d,i) { return x(i) })
	.y(function(d) { return -1 * y(d) })	
	.interpolate("basis")

// y-axis	
lineChart.append("svg:line")
	.attr("x1", x(16))
	.attr("y1", y(0))
	.attr("x2", x(16))
	.attr("y2", -1 * y(100))
	.attr("stroke", "#000")

// x-axis	
lineChart.append("svg:line")
	.attr("x1", x(0))
	.attr("y1", y(0))
	.attr("x2", x(16))
	.attr("y2", y(0))
	.attr("stroke", "#000")
	
// x tick marks
lineChart.selectAll(".yearLabel")
	.data([1950, 2011, 2030])
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
	.attr("x", 25 + x(16))
	.attr("y", function(d) { return -1 * y(d) })
	.attr("dy", 5)
	.text(function(d) { return d + "%" })

// graph label
lineChart.append("svg:text")
	.attr("x", x(8.5))
	.attr("text-anchor", "middle")
	.attr("y", 40 + y(0))
	.text("People working in London")
	.attr("fill", "black")		
	.attr("font-size", "11pt")
	.attr("letter-spacing", "3pt")
	.attr("font-family", "Arial")	

// urban population graph line
lineChart.append("svg:path")
	.attr("id", "line")
	.attr("d", line(zeroData))
	.attr("stroke", "#000")
	.attr("fill", "none")
	.attr("stroke-width", 1)
	
d3.select("#line").attr('d', line(dummy_data));
	
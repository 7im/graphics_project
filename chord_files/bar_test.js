
//var dummy_data = [7000, 7000, 1000, 4000, 7000, 7000, 12000, 3374000, 234000, 21000, 7000, 10000, 0, 6000];
// Read example from : http://mbostock.github.com/d3/tutorial/bar-1.html
var dummy_data = [4, 10, 20, 12, 13];

var y = d3.scale.linear()
    .domain([0, d3.max(dummy_data)])
    .range(["0px", "220px"]);

var x = d3.scale.ordinal()
    .domain(dummy_data)
    .rangeBands([0, 120]);


var chart = d3.select("#barChart")
  .append("svg:svg")
    .attr("class", "chart")
    .attr("width", 440)
    .attr("height", 240)
    .style("margin-left", "32px") // Tweak alignment…
  .append("svg:g")
    .attr("transform", "translate(10,15)");

/*chart.selectAll("line")
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
    .text(String);*/

chart.selectAll("rect")
    .data(dummy_data)
  .enter().append("svg:rect")
    .attr("x", x)
    .attr("width", x.rangeBand())
    .attr("height", y);

chart.selectAll("text.bar")
    .data(dummy_data)
  .enter().append("svg:text")
    .attr("class", "bar")
    .attr("y", y)
    .attr("x", function(d) { return x(d) + x.rangeBand() / 2; })
    .attr("dy", -3)
    .attr("dx", ".35em")
    .attr("text-anchor", "end")
    .text(String);

chart.append("svg:line")
    .attr("x1", 0)
    .attr("x2", 120)
    .attr("stroke", "#000");



/*function drawBarChart (data, width, height) {


var w = width || 200,
    h = height || 200;

var fill = d3.scale.ordinal()
    .domain(d3.range(4))
    //.range(["#000000", "#FFDD89", "#957244", "#F26223"]);
    .range(["7A0700", "#30547F", "#466964", "#6C8C84", "#A7C4BB", "#86A677", "#5B6B2B", "#BDBB55", "#E5D27F", "#FFF187", "#EB9800", "#E55322", "#961227"]);


var x = d3.scale.linear()
    .domain([0, 1])
    .range([0, w]);

var y = d3.scale.linear()
    .domain([0, 100])
    .rangeRound([0, h]);

var bar = d3.select("#barChart")
  .append("svg:svg")
    .attr("class", "chart")
    .attr("width", w * data.length - 1)
    .attr("height", h);

bar.selectAll("rect")
    .data(data)
  .enter().append("svg:rect")
    .attr("x", function(d, i) { return x(i) - .5; })
    .attr("y", function(d) { return h - y(d) - .5; })
    .attr("width", w)
    .attr("height", function(d) { return y(d); });

  return bar;
};

drawBarChart(dummy_data);*/
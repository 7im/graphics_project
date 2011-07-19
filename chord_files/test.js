// From http://mkweb.bcgsc.ca/circos/guide/tables/

var chordLabel = ["North East", "North West", "Merseyside", "Yorkshire & Humberside", "East Midlands", "West Midlands", "Eastern", "London", "South East", "South West", "Wales", "Scotland", "Northern Ireland"];
var data = {
	"2009": [
	    [1077000, 2000, 0, 16000, 2000, 2000, 1000, 2000, 3000, 1000, 1000, 8000, 0, 4000],
	    [240000, 2110000, 62000, 23000, 7000, 15000, 2000, 2000, 8000, 4000, 13000, 8000, 0, 6000],
	    [2000, 82000, 465000, 3000, 1000, 1000, 0, 1000, 2000, 1000, 5000, 2000, 0, 2000],
	    [15000, 24000, 1000, 2257000, 36000, 4000, 1000, 4000, 12000, 9000, 1000, 2000, 0, 5000],
	    [1000, 20000, 0, 63000, 1875000, 54000, 24000, 13000, 48000, 9000, 1000, 4000, 0, 4000],
	    [3000, 24000, 1000, 2000, 42000, 2263000, 2000, 9000, 16000, 22000, 5000, 6000, 0, 1000],
	    [1000, 1000, 0, 2000, 19000, 6000, 1073000, 322000, 1323000, 7000, 2000, 6000, 0, 6000],
	    [7000, 7000, 1000, 4000, 7000, 7000, 12000, 3374000, 234000, 21000, 7000, 10000, 0, 6000],
	    [1000, 1000, 0, 4000, 14000, 10000, 5000, 411000, 3628000, 30000, 3000, 6000, 0, 9000],
	    [0, 3000, 0, 2000, 1000, 13000, 3000, 15000, 57000, 2389000, 7000, 3000, 0, 5000],
	    [0, 27000, 4000, 0, 1000, 13000, 0, 3000, 5000, 18000, 1207000, 4000, 0, 2000],
	    [11000, 1000, 1000, 1000, 2000, 3000, 1000, 3000, 4000, 2000, 3000, 2429000, 0, 18000],
	    [0, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0, 1000, 741000, 8000]
	  ],
	"2008": [
	    [1108000, 2000, 0, 14000, 2000, 2000, 2000, 1000, 3000, 1000, 2000, 8000, 0, 0],
      [242000, 2162000, 64000, 16000, 4000, 15000, 2000, 4000, 7000, 5000, 15000, 6000, 0, 0],
      [1000, 74000, 466000, 2000, 1000, 2000, 0, 2000, 3000, 1000, 6000, 2000, 0, 0],
      [12000, 26000, 0, 2318000, 34000, 6000, 1000, 4000, 10000, 9000, 1000, 3000, 0, 0],
      [1000, 18000, 1000, 63000, 1896000, 55000, 27000, 11000, 57000, 5000, 1000, 2000, 0, 1000],
      [6000, 21000, 0, 4000, 51000, 2309000, 2000, 5000, 15000, 20000, 9000, 3000, 0, 0],
      [2000, 2000, 1000, 3000, 22000, 7000, 1069000, 321000, 1353000, 9000, 1000, 8000, 0, 0],
      [3000, 7000, 0, 4000, 4000, 5000, 7000, 3347000, 245000, 28000, 9000, 9000, 0, 0],
      [1000, 2000, 0, 5000, 12000, 12000, 5000, 413000, 3670000, 37000, 3000, 8000, 0, 1000],
      [1000, 2000, 0, 0, 2000, 11000, 5000, 12000, 57000, 2431000, 8000, 3000, 0, 0],
      [1000, 26000, 4000, 1000, 1000, 12000, 1000, 2000, 5000, 18000, 1242000, 5000, 0, 0],
      [10000, 2000, 1000, 2000, 1000, 1000, 2000, 3000, 4000, 3000, 3000, 2467000, 0, 1000],
      [0, 0, 0, 0, 0, 0, 0, 1000, 1000, 0, 0, 1000, 759000, 0]
	  ],
  "2007": [
      [1113000, 2000, 0, 14000, 2000, 3000, 0, 3000, 4000, 2000, 2000, 7000, 0, 0],
      [238000, 2188000, 61000, 17000, 8000, 17000, 3000, 5000, 6000, 5000, 10000, 9000, 0, 0],
      [2000, 78000, 479000, 2000, 1000, 1000, 0, 0, 2000, 1000, 6000, 2000, 0, 0],
      [12000, 23000, 1000, 2307000, 37000, 7000, 2000, 4000, 13000, 8000, 0, 3000, 0, 0],
      [1000, 21000, 0, 59000, 1902000, 52000, 25000, 13000, 52000, 3000, 1000, 2000, 0, 0],
      [3000, 21000, 1000, 2000, 41000, 2327000, 3000, 8000, 16000, 21000, 10000, 4000, 0, 0],
      [3000, 0, 0, 2000, 16000, 8000, 1062000, 302000, 1347000, 6000, 3000, 11000, 0, 0],
      [5000, 10000, 1000, 4000, 6000, 8000, 13000, 3262000, 243000, 30000, 14000, 16000, 0, 1000],
      [2000, 2000, 0, 4000, 10000, 9000, 7000, 415000, 3640000, 37000, 4000, 7000, 0, 0],
      [1000, 1000, 0, 1000, 2000, 13000, 4000, 10000, 57000, 2416000, 6000, 2000, 0, 2000],
      [1000, 27000, 4000, 1000, 2000, 13000, 1000, 3000, 5000, 17000, 1244000, 5000, 0, 0],
      [12000, 1000, 0, 1000, 1000, 1000, 1000, 4000, 4000, 4000, 3000, 2463000, 0, 1000],
      [0, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0, 0, 764000, 0]
  ], 
  "2006": [
      [1092000, 2000, 0, 16000, 1000, 2000, 1000, 2000, 6000, 1000, 3000, 7000, 0, 0],
      [231000, 2190000, 52000, 18000, 9000, 19000, 2000, 3000, 8000, 6000, 12000, 9000, 0, 0],
      [1000, 75000, 481000, 2000, 1000, 1000, 0, 1000, 3000, 1000, 6000, 1000, 0, 0],
      [14000, 20000, 1000, 2304000, 30000, 3000, 2000, 5000, 12000, 10000, 0, 3000, 0, 0],
      [2000, 15000, 0, 57000, 1907000, 53000, 24000, 11000, 50000, 3000, 1000, 3000, 0, 0],
      [2000, 23000, 1000, 3000, 40000, 2335000, 2000, 6000, 18000, 24000, 8000, 3000, 0, 0],
      [2000, 2000, 0, 1000, 18000, 7000, 1067000, 289000, 1333000, 6000, 1000, 5000, 0, 1000],
      [3000, 8000, 0, 3000, 8000, 4000, 13000, 3221000, 242000, 27000, 12000, 14000, 0, 0],
      [1000, 1000, 0, 4000, 10000, 8000, 5000, 401000, 3627000, 40000, 3000, 4000, 0, 1000],
      [1000, 2000, 0, 0, 1000, 11000, 5000, 12000, 57000, 2372000, 11000, 3000, 0, 1000],
      [1000, 30000, 5000, 1000, 1000, 13000, 1000, 3000, 5000, 18000, 1227000, 4000, 0, 0],
      [10000, 2000, 0, 2000, 2000, 2000, 1000, 3000, 4000, 2000, 3000, 2440000, 0, 1000],
      [0, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0, 0, 739000, 0]
  ],
  "2005": [
      [1085000, 2000, 0, 14000, 2000, 2000, 1000, 2000, 4000, 1000, 2000, 8000, 0, 0],
      [228000, 2176000, 50000, 17000, 8000, 17000, 1000, 3000, 6000, 7000, 14000, 9000, 0, 0],
      [1000, 78000, 482000, 1000, 1000, 0, 1000, 0, 2000, 1000, 6000, 1000, 0, 0],
      [13000, 21000, 2000, 2272000, 32000, 5000, 3000, 4000, 12000, 10000, 1000, 4000, 0, 0],
      [0, 15000, 0, 43000, 1878000, 56000, 23000, 10000, 43000, 4000, 1000, 2000, 0, 0],
      [3000, 18000, 1000, 4000, 35000, 2349000, 2000, 6000, 13000, 18000, 7000, 3000, 0, 0],
      [2000, 2000, 0, 2000, 15000, 4000, 1055000, 273000, 1367000, 6000, 2000, 4000, 0, 1000],
      [2000, 5000, 1000, 5000, 6000, 5000, 9000, 3188000, 239000, 22000, 8000, 11000, 0, 1000],
      [2000, 2000, 0, 4000, 12000, 8000, 5000, 350000, 3663000, 32000, 2000, 6000, 0, 1000],
      [1000, 2000, 0, 2000, 2000, 11000, 3000, 10000, 49000, 2353000, 8000, 3000, 0, 0],
      [1000, 27000, 4000, 0, 1000, 10000, 1000, 3000, 5000, 17000, 1227000, 3000, 0, 0],
      [9000, 2000, 0, 1000, 2000, 2000, 2000, 3000, 4000, 3000, 2000, 2390000, 0, 1000],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 723000, 0]
  ],
  "2004": [
      [1068000, 2000, 0, 14000, 1000, 3000, 1000, 2000, 3000, 1000, 2000, 7000, 0, 0],
      [228000, 2159000, 55000, 17000, 7000, 18000, 2000, 4000, 8000, 5000, 11000, 10000, 0, 0],
      [0, 78000, 483000, 0, 0, 2000, 0, 0, 2000, 1000, 3000, 1000, 0, 0],
      [16000, 20000, 1000, 2239000, 29000, 5000, 1000, 5000, 10000, 10000, 0, 4000, 0, 0],
      [2000, 17000, 1000, 48000, 1826000, 60000, 30000, 9000, 41000, 6000, 1000, 3000, 0, 0],
      [4000, 21000, 0, 5000, 40000, 2316000, 2000, 5000, 15000, 18000, 7000, 4000, 0, 0],
      [1000, 1000, 0, 3000, 15000, 6000, 1038000, 296000, 1341000, 6000, 1000, 3000, 0, 0],
      [2000, 4000, 0, 5000, 3000, 4000, 8000, 3172000, 236000, 16000, 5000, 9000, 0, 2000],
      [1000, 3000, 0, 3000, 13000, 11000, 5000, 368000, 3597000, 34000, 2000, 6000, 0, 1000],
      [1000, 3000, 0, 1000, 2000, 12000, 2000, 15000, 56000, 2313000, 7000, 4000, 0, 1000],
      [1000, 29000, 3000, 0, 1000, 11000, 1000, 3000, 6000, 17000, 1212000, 6000, 0, 0],
      [9000, 2000, 1000, 2000, 2000, 2000, 1000, 3000, 5000, 3000, 2000, 2369000, 0, 1000],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 701000, 0]
  ]
};

var currentYear = 2009;
var currentData = data[currentYear];
var chordChart = drawChord(currentData);
var colors = ["#7A0700", "#30547F", "#466964", "#6C8C84", "#A7C4BB", "#86A677", "#5B6B2B", "#BDBB55", "#E5D27F", "#FFF187", "#EB9800", "#E55322", "#961227"];

function drawChord (dataMatrix, width, height) {

	var chord = d3.layout.chord()
	  .padding(.05)
	  .sortSubgroups(d3.descending)
	  .matrix(dataMatrix);
	
	var w = width || 650,
	    h = height || 600,
	    r0 = Math.min(w, h) * .36,
	    r1 = r0 * 1.1;
	
	var fill = d3.scale.ordinal()
	    .domain(d3.range(4))
	    //.range(["#000000", "#FFDD89", "#957244", "#F26223"]);
	    .range(["#7A0700", "#30547F", "#466964", "#6C8C84", "#A7C4BB", "#86A677", "#5B6B2B", "#BDBB55", "#E5D27F", "#FFF187", "#EB9800", "#E55322", "#961227"]);
	
	var svg = d3.select("#chart")
	  .append("svg:svg")
	    .attr("width", w)
	    .attr("height", h)
	  .append("svg:g")
	    .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");
	
	svg.append("svg:g")
	  .selectAll("path")
	    .data(chord.groups)
	  .enter().append("svg:path")
	    .attr("fill", function(d) { return fill(d.index); })
	    .attr("stroke", function(d) { return fill(d.index); })
	    .attr("d", d3.svg.arc().innerRadius(r0).outerRadius(r1))
	    .on("mouseover", fade(.1))
	    .on("mouseout", fade(1));
	
	var ticksLabel = svg.append("svg:g")
	  .selectAll("g")
	    .data(chord.groups)
	  .enter().append("svg:g")
	  .selectAll("g");
	  
	var ticks = ticksLabel.data(groupTicks)
	  .enter().append("svg:g")
	    .attr("transform", function(d) {
	      return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
	          + "translate(" + r1 + ",0)";
	    });
	
	ticks.append("svg:line")
	    .attr("x1", 1)
	    .attr("y1", 0)
	    .attr("x2", 5)
	    .attr("y2", 0)
	    .attr("stroke", "#000");
	
	ticks.append("svg:text")
	    .attr("x", 8)
	    .attr("dy", ".35em")
	    .attr("text-anchor", function(d) {
	      return d.angle > Math.PI ? "end" : null;
	    })
	    .attr("transform", function(d) {
	      return d.angle > Math.PI ? "rotate(180)translate(-16)" : null;
	    })
	    .text(function(d) { return d.label; });
	    
	ticksLabel
	  .data(groupLabels)
	  .enter()
	    .append("svg:g")
	    .attr("transform", function(d) {
	      return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
	          + "translate(" + (r1*1.25) + ",0)";
	    }).append("svg:text")
	    .attr("x", 8)
	    .attr("dy", "1.35em")
	    .attr("text-anchor", function(d) {
	      return d.angle > Math.PI ? "end" : null;
	    })
	    .attr("transform", function(d) {
	      return d.angle > Math.PI ? "rotate(90)translate("+(d.label.length*1.5)+")" : "rotate(90)translate("+(d.label.length*-3)+")";
	    })
	    .text(function(d) { return d.label; });
	
	svg.append("svg:g")
	    .attr("class", "chord")
	  .selectAll("path")
	    .data(chord.chords)
	  .enter().append("svg:path")
	    .attr("fill", function(d) { return fill(d.target.index); })
	    .attr("d", d3.svg.chord().radius(r0))
	    .attr("opacity", 1);

	return svg;
};

/** Returns an array of tick angles and labels, given a group. */
function groupTicks(d) {
  var k = (d.endAngle - d.startAngle) / d.value;
  return d3.range(0, d.value, 200000).map(function(v, i) {
    return {
      angle: v * k + d.startAngle,
      label: i % 4 ? null : v / 1000 + "k"
    };
  });
}

function groupLabels(d) {
  var k = (d.endAngle - d.startAngle) / d.value;
  return [{
    angle: d.value/2 * k + d.startAngle,
    label: chordLabel[d.index]
  }];
}

/** Returns an event handler for fading a given chord group. */
function fade(opacity) {
  return function(g, i) {
    chordChart.selectAll("g.chord path")
        .filter(function(d) {
          return d.source.index != i && d.target.index != i;
        })
      .transition()
        .attr("opacity", opacity);
  };
}
  
function redrawChord(dataMatrix, width, height) {
	document.getElementById('chart').innerHTML = '';
	chordChart = drawChord(dataMatrix, width, height);
};

document.getElementById('chart_year').onchange = function() {
	var value = this.value;
  currentYear = this.value;
	redrawChord(data[value]);	
};

document.getElementById('enlargeChart').onclick = function() {
  redrawChord(data[currentYear], 1200, 1024);
  return false;
};
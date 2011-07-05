$(document).ready(function() {
	
	var row = 0,
		cell = 0,
		values = [[]], // empty nested array
		data = {
			nodes:[],
			links: []
		},
		i = 0,
		j = 0,
		value;
	
	// values
	$('td.s1').each(function(index) {
		if(index % 3 === 0 && index != 0) {
			row++;
			cell = 0;
			values[row] = [];
		}
		values[row][cell] = parseInt(this.innerHTML, 10);
		cell++;
	});

	
	// console.log(values);
	// return;

	// work node names
	$('tr:first td:gt(0)').each(function(index) {
		data.nodes[data.nodes.length] = { nodeName: this.innerHTML, group: index*150 };
	});
	
	for(i = 0; i < values.length; i++) {
		for(j = 0; j < 3; j++) {
			value = values[i][j];
			if(value != 0) {
				data.links[data.links.length] = { source: i, target: j, value: (value) };
			}
		}
	}
	
	// console.log(data);
	 // return;
	
	/*
	// return;
	var vis = new pv.Panel().width(1240).height(700).bottom(130);

	var arc = vis.add(pv.Layout.Arc)
		.nodes(data.nodes)
		.links(data.links);

	
	arc.directed = true;
	
	arc.link.add(pv.Line);
	
	arc.node.add(pv.Dot)
		.size(function(d) { return d.linkDegree + 10})
		.fillStyle(pv.Colors.category19().by(function(d){
			return d.group;
		}))
		.lineWidth(0); // removing strokes
	
	arc.label.add(pv.Label)
	
	vis.render();
	*/
	
var w = 1000,
    h = 400,
    colors = pv.Colors.category19();

var vis = new pv.Panel()
    .width(w)
    .height(h)
    .fillStyle("white")
    .event("mousedown", pv.Behavior.pan())
    .event("mousewheel", pv.Behavior.zoom());

var force = vis.add(pv.Layout.Force)
    .nodes(data.nodes)
    .links(data.links);

force.link.add(pv.Line);

force.node.add(pv.Dot)
    .size(function(d) (d.linkDegree + 4) * Math.pow(this.scale, -1.5))
    .fillStyle(function(d) d.fix ? "brown" : colors(d.group))
    .strokeStyle(function() this.fillStyle().darker())
    .lineWidth(1)
    .title(function(d) d.nodeName)
    .event("mousedown", pv.Behavior.drag())
    .event("drag", force);

// vis.render();	
setInterval(function() vis.render(), 35);	
						   
});
$(document).ready(function() {
	
	var row = 0,
		cell = 0,
		values = [[]], // empty nested array
		data = {
			nodes:[],
			links: []
		},
		$residenceNodes,
		residenceNodeCount = 0,
		i = 0,
		j = 0,
		value;
	
	// values
	$('td.s1').each(function(index) {
		if(index % 14 === 0 && index != 0) {
			row++;
			cell = 0;
			values[row] = [];
		}
		values[row][cell] = parseInt(this.innerHTML, 10);
		cell++;
	});
	
	// residence node names
	$residenceNodes = $('td.s0');
	residenceNodeCount = $residenceNodes.length;
	$residenceNodes.each(function(index) {
		data.nodes[data.nodes.length] = { nodeName: this.innerHTML, group: index*50 };
	});

	// work node names
	$('tr:first td:gt(0)').each(function(index) {
		data.nodes[data.nodes.length] = { nodeName: this.innerHTML, group: index*50 };
	});
	
	for(i = 0; i < values.length; i++) {
		for(j = 0; j < 14; j++) {
			value = values[i][j];
			if(value != 0) {
				data.links[data.links.length] = { source: i, target: (j + residenceNodeCount), value: (value / 800) };
			}
		}
	}
	
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

vis.render();
						   
});
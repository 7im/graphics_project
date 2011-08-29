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
	//rowIndex = $('td.s1').length/14 - 1;
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
	//$residenceNodes.each(function(index) {
	for ( var index = (residenceNodeCount-1); index>-1; index-- ) {
		data.nodes[data.nodes.length] = { nodeName: $residenceNodes.eq(index).text(), group: index*50 };
	}
	//});

	// work node names
	$('tr:first td:gt(0)').each(function(index) {
		data.nodes[data.nodes.length] = { nodeName: this.innerHTML, group: index*50 };
	});
	
	for(i = 0; i < values.length; i++) {
		for(j = 0; j < 14; j++) {
			value = values[i][j];
			if(value != 0) {
				//data.links[data.links.length] = { source: i, target: (j + residenceNodeCount), value: (value / 80000) };
				data.links[data.links.length] = { source: (residenceNodeCount-i-1), target: (j + residenceNodeCount), value: (value / 80000) };
			}
		}
	}
	
	// return;
	var vis = new pv.Panel().width(1240).height(700).bottom(130);

	var arc = vis.add(pv.Layout.Arc)
		.nodes(data.nodes)
		.links(data.links);
	
	/*
	pv.Line.prototype.defaults.strokeStyle = "#ff0000";
	pv.Line.prototype.defaults.lineWidth = 2;
	*/
	
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
						   
});
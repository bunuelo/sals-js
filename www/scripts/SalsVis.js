sals.vis = {};

sals.vis.vis_graph__new = function() {
    // create an array with nodes
    var nodes = new vis.DataSet([
	{id: 1, label: 'Node 1'},
	{id: 2, label: 'Node 2'},
	{id: 3, label: 'Node 3'},
	{id: 4, label: 'Node 4'},
	{id: 5, label: 'Node 5'}
    ]);
    
    // create an array with edges
    var edges = new vis.DataSet([
	{from: 1, to: 3},
	{from: 1, to: 2},
	{from: 2, to: 4},
	{from: 2, to: 5}
    ]);
    
    // create a network
    var dom_element = document.createElement("div");
    dom_element.style.width  = 512;
    dom_element.style.height = 512;
    var data = {
	nodes: nodes,
	edges: edges
    };
    var options = {};
    var network = new vis.Network(dom_element, data, options);
    console.log("SalsVis: returning new graph!!!!");
    return dom_element;
};

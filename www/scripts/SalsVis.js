sals.vis = {};

sals.vis.vis_graph__new = function(width, height, graph) {
    var graph__nodes    = sals.graph.graph__nodes(graph);
    var graph__edges    = sals.graph.graph__edges(graph);
    var vis_nodes_array = [];
    var vis_edges_array = [];
    //var vis_nodes_array = [
    //	{id: 1, label: 'Node 1'},
    //	{id: 2, label: 'Node 2'},
    //	{id: 3, label: 'Node 3'},
    //	{id: 4, label: 'Node 4'},
    //	{id: 5, label: 'Node 5'}
    //];
    //var vis_edges_array = [
    //	{from: 1, to: 3},
    //	{from: 1, to: 2},
    //	{from: 2, to: 4},
    //	{from: 2, to: 5}
    //];
    
    sals.frame.frame__foreach_key(graph__nodes, function(graph__node__uid) {
	var graph__node        = sals.frame.frame__get_element(graph__nodes, graph__node__uid);
	var graph__node__label = sals.graph.graph_node__label(graph__node);
	var vis_node           = {
	    id    : graph__node__uid,
	    label : graph__node__label
	};
	vis_nodes_array.push(vis_node);
    });
    
    // create an array with nodes
    var nodes = new vis.DataSet(vis_nodes_array);
    
    // create an array with edges
    var edges = new vis.DataSet(vis_edges_array);
    
    // create a network
    var dom_element = document.createElement("div");
    dom_element.style.width  = "" + width  + "px";
    dom_element.style.height = "" + height + "px";
    var data = {
	nodes: nodes,
	edges: edges
    };
    var options = {};
    var network = new vis.Network(dom_element, data, options);
    return dom_element;
};

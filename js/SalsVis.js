sals.vis = {};

// vis_graph

sals.vis.vis_graph__new = function(width, height, graph) {
    var graph__nodes    = sals.graph.graph__nodes(graph);
    var graph__edges    = sals.graph.graph__edges(graph);
    var vis_nodes_array = [];
    var vis_edges_array = [];
    sals.frame.frame__foreach_key(graph__nodes, function(graph__node__uid) {
	var graph__node        = sals.frame.frame__get_element(graph__nodes, graph__node__uid);
	var graph__node__label = sals.graph.graph_node__label(graph__node);
	var vis_node           = {
	    id    : graph__node__uid,
	    label : graph__node__label,
	    shape : "ellipse"
	};
	vis_nodes_array.push(vis_node);
    });
    
    sals.frame.frame__foreach_key(graph__edges, function(graph__edge__uid) {
	var graph__edge                 = sals.frame.frame__get_element(graph__edges, graph__edge__uid);
	var graph__edge__label          = sals.graph.graph_edge__label(graph__edge);
	var graph__edge__from_node      = sals.graph.graph_edge__from_node(graph__edge);
	var graph__edge__from_node__uid = sals.frame.frame__uid(graph__edge__from_node);
	var graph__edge__to_node        = sals.graph.graph_edge__to_node(graph__edge);
	var graph__edge__to_node__uid   = sals.frame.frame__uid(graph__edge__to_node);
	var vis_edge = {
	    from   : graph__edge__from_node__uid,
	    to     : graph__edge__to_node__uid,
	    label  : graph__edge__label,
	    arrows : "to"
	};
	vis_edges_array.push(vis_edge);
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
	nodes : nodes,
	edges : edges
    };
    var options = {
	physics : {
	    stabilization : false // don't wait until network stabilizes before updating UI
	},
	layout : {
	    improvedLayout : false
	}
    };
    var network = new vis.Network(dom_element, data, options);
    return dom_element;
};

// sals_vis_graph

sals.vis.sals_vis_graph__new = function(width, height, graph) {
    var dom_element = document.createElement("div");
    dom_element.style.background = "#000000";
    dom_element.style.width      = "" + width  + "px";
    dom_element.style.height     = "" + height + "px";
    var background_dom_element = document.createElement("div");
    background_dom_element.left = 2;
    background_dom_element.top  = 2;
    background_dom_element.style.background = "#ffffff";
    background_dom_element.style.width      = "" + (width  - 2)  + "px";
    background_dom_element.style.height     = "" + (height - 2) + "px";
    dom_element.appendChild(background_dom_element);
    var vis_graph = sals.vis.vis_graph__new(width - 2, height - 2, graph);
    vis_graph.offsetLeft = 0;
    vis_graph.offsetTop  = 0;
    background_dom_element.appendChild(vis_graph);
    return dom_element;
};


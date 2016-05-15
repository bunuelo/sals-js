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
	    shape : "ellipse",
	    color : {
		border     : 'rgba(0,0,0,1)',
		background : 'rgba(255,255,255,1)',
		highlight  : {
		    border     : 'rgba(0,0,0,1)',
		    background : 'rgba(255,255,255,1)'
		},
		hover : {
		    border     : 'rgba(0,0,0,1)',
		    background : 'rgba(255,255,255,1)'
		}
	    },
	    font : {color : 'rgba(0,0,0,1)',
		    face  : "Times New Roman"}
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
	    arrows : "to",
	    color  : {
		color     : "rgba(0,0,0,1)",
		highlight : "rgba(0,0,0,1)",
		hover     : "rgba(0,0,0,1)",
	    },
	    font   : {color : "rgba(0,0,0,1)",
		      face  : "Times New Roman"},
	    length : 192
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
	    stabilization : {
		iterations : 100
	    }
	},
	layout : {
	    improvedLayout : false
	}
    };
    var network = new vis.Network(dom_element, data, options);
    // add event listeners
    network.on('select', function(params) {
        var event_description = 'Selection: ' + params.nodes;
	console.log("event_description = " + event_description);
    });
    network.on('stabilized', function (params) {
        var event_description = 'Stabilization took ' + params.iterations + ' iterations.';
	console.log("event_description = " + event_description);
    });
    network.on('animationFinished', function() {
        var event_description = finishMessage;
	console.log("event_description = " + event_description);
    });
    network.fit();
    return dom_element;
};

sals.vis.graph__to_vis_graph_dom_element = function(graph, width, height) {
    var border                 = 1;
    var self                   = document.createElement("div");
    self.style.backgroundColor = "#000000";
    self.style.width           = width + "px";
    self.style.height          = height + "px";
    (function() {
	var white_rectangle                   = document.createElement("div");
	white_rectangle.style.backgroundColor = "#ffffff";
	white_rectangle.style.position        = "absolute";
	white_rectangle.style.left            = 8+border+'px';
	white_rectangle.style.top             = 8+border+'px';
	white_rectangle.style.width           = (width - (border * 2)) + "px";
	white_rectangle.style.height          = (height - (border * 2)) + "px";
	self.appendChild(white_rectangle);
	(function() {
	    var vis_graph = sals.vis.vis_graph__new(width - (border * 2), height - (border * 2), graph);
	    vis_graph.style.position = "absolute";
	    vis_graph.style.left     = 0 + "px";
	    vis_graph.style.top      = 0 + "px";
	    vis_graph.style.width    = (width - (border * 2)) + "px";
	    vis_graph.style.height   = (height - (border * 2)) + "px";
	    white_rectangle.appendChild(vis_graph);
	})();
    })();
    return self;
};

// sals_vis_graph

sals.vis.sals_vis_graph__new = function(width, height, graph) {
    return sals.vis.graph__to_vis_graph_dom_element(graph, width, height);
};


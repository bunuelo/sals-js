sals.graph = {};

// graph_node

sals.graph.graph_node__new = function(label) {
    var self = sals.frame.frame__new();
    sals.frame.frame__add_element(self, "label", label);
    return self;
};

sals.graph.graph_node__label = function(self) {
    return sals.frame.frame__get_element(self, "label");
};

// graph_edge

sals.graph.graph_edge__new = function(label, from_node, to_node) {
    var self = sals.frame.frame__new();
    sals.frame.frame__add_element(self, "label",     label);
    sals.frame.frame__add_element(self, "from_node", from_node);
    sals.frame.frame__add_element(self, "to_node",   to_node);
    return self;
};

sals.graph.graph_edge__label = function(self) {
    return sals.frame.frame__get_element(self, "label");
};

sals.graph.graph_edge__from_node = function(self) {
    return sals.frame.frame__get_element(self, "from_node");
};

sals.graph.graph_edge__to_node = function(self) {
    return sals.frame.frame__get_element(self, "to_node");
};

// graph

sals.graph.graph__new = function() {
    var self = sals.frame.frame__new();
    sals.frame.frame__add_element(self, "nodes", sals.frame.frame__new());
    sals.frame.frame__add_element(self, "edges", sals.frame.frame__new());
    return self;
};

sals.graph.graph__nodes = function(self) {
    return sals.frame.frame__get_element(self, "nodes");
};

sals.graph.graph__edges = function(self) {
    return sals.frame.frame__get_element(self, "edges");
};

sals.graph.graph__add_node = function(self, node) {
    var nodes = sals.graph.graph__nodes(self);
    var node__uid = sals.frame.frame__uid(node);
    sals.frame.frame__add_element(nodes, node__uid, node);
};

sals.graph.graph__add_edge = function(self, edge) {
    var edges = sals.graph.graph__edges(self);
    var edge__uid = sals.frame.frame__uid(edge);
    sals.frame.frame__add_element(edges, edge__uid, edge);
};

sals.graph.graph__add_frame_recursively_with_frame_uid_map = function(self, frame, frame_uid_map) {
    var frame__uid = sals.frame.frame__uid(frame);
    if (sals.frame.frame__contains_key(frame_uid_map, frame__uid)) {
	return sals.frame.frame__get_element(frame_uid_map, frame__uid);
    } else {
	var frame__node = sals.graph.graph_node__new("Frame");
	sals.frame.frame__add_element(frame_uid_map, frame__uid, frame__node);
	sals.graph.graph__add_node(self, frame__node);
	sals.frame.frame__foreach_key(frame, function(frame__key) {
	    var frame__value = sals.frame.frame__get_element(frame, frame__key);
	    var frame__value__node;
	    if (sals.frame.frame__is_type(frame__value)) {
		frame__value__node = sals.graph.graph__add_frame_recursively_with_frame_uid_map(self, frame__value, frame_uid_map);
	    } else {
		frame__value__node = sals.graph.graph_node__new("" + frame__value);
		sals.graph.graph__add_node(self, frame__value__node);
	    }
	    var edge = sals.graph.graph_edge__new("" + frame__key, frame__node, frame__value__node);
	    sals.graph.graph__add_edge(self, edge);
	});
	return frame__node;
    }
    
    var node_b = sals.graph.graph_node__new("B");
    var edge_c = sals.graph.graph_edge__new("C", node_a, node_b);
    sals.graph.graph__add_node(graph, node_b);
    sals.graph.graph__add_edge(graph, edge_c);
};

sals.graph.graph__add_frame_recursively = function(self, frame) {
    var frame_uid_map = sals.frame.frame__new();
    sals.graph.graph__add_frame_recursively_with_frame_uid_map(self, frame, frame_uid_map);
};

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

sals.graph.graph_edge__new = function(label) {
    var self = sals.frame.frame__new();
    sals.frame.frame__add_element(self, "label", label);
    return self;
};

sals.graph.graph_edge__label = function(self) {
    return sals.frame.frame__get_element(self, "label");
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


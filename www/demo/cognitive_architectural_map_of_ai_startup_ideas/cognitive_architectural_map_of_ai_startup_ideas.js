console.log("Loading cognitive_architectural_map_of_ai_startup_ideas.js");

if (typeof(sals["demo"]) == "undefined") {
    sals.demo = {};
}

sals.demo.ai_startup_idea = {};

sals.demo.ai_startup_idea.new_ai_startup_idea_dom_element = function(width, height) {
    var graph = sals.graph.graph__new();
    var node_a = sals.graph.graph_node__new("A");
    sals.graph.graph__add_node(graph, node_a);
    var node_b = sals.graph.graph_node__new("B");
    sals.graph.graph__add_node(graph, node_b);
    var edge_c_a_b = sals.graph.graph_edge__new("C", node_a, node_b);
    sals.graph.graph__add_edge(graph, edge_c_a_b);
    return sals.vis.graph__to_vis_graph_dom_element(graph, width, height);
};

window.onload = function() {
    console.log("Executing window.onload");
    var success_callback = function() {
	try {
	    var width  = 256;
	    var height = 256;
	    var element = sals.demo.ai_startup_idea.new_ai_startup_idea_dom_element(width, height);
	    document.body.appendChild(element);
	} catch (error) {
	    sals.core.log_error(error);
	}
    };
    try {
	sals.core.initialize(success_callback);
    } catch (error) {
	sals.core.log_error(error);
    }
};


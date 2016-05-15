console.log("Loading cognitive_architectural_map_of_ai_startup_ideas.js");

if (typeof(sals["demo"]) == "undefined") {
    sals.demo = {};
}

sals.demo.ai_startup_idea = {};

sals.demo.ai_startup_idea.graph__add_concept_line = function(graph, relationship, x0, y0, x1, y1, concepts) {
    var concept__height = 400;
    var concepts__pin = true;
    var node_concept_map = {};
    (function() {
	for (var index = 0; index < concepts.length; index ++) {
	    var x                       = x0 + (x1 - x0) * index / (concepts.length - 1);
	    var y                       = y0 + (y1 - y0) * index / (concepts.length - 1);
	    var concept                 = concepts[index];
	    var concept__node           = sals.graph.graph_node__new(concept);
	    var concept__node__vis_node = {
		color  : {
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
		font  : {color : 'rgba(0,0,0,1)'}
	    };
	    if (concepts__pin) {
		sals.vis.object__soft_merge_recursive(concept__node__vis_node, {
		    fixed : true,
		    x     : x,
		    y     : y
		});
	    }
	    concept__node["vis_node"] = concept__node__vis_node;
	    node_concept_map[concept] = concept__node;
	    sals.graph.graph__add_node(graph, concept__node);
	}
	for (var index = 0; index < concepts.length - 1; index ++) {
	    var lower_concept       = concepts[index];
	    var lower_concept__node = node_concept_map[lower_concept];
	    var upper_concept       = concepts[index + 1];
	    var upper_concept__node = node_concept_map[upper_concept];
	    var edge                              = sals.graph.graph_edge__new(relationship, lower_concept__node, upper_concept__node);
	    var edge__vis_edge                    = {
		color  : {
		    color     : "rgba(0,0,0,1)",
		    highlight : "rgba(0,0,0,1)",
		    hover     : "rgba(0,0,0,1)",
		},
		font   : {color : "rgba(0,0,0,1)"},
		length : concept__height
	    };
	    edge["vis_edge"] = edge__vis_edge;
	    sals.graph.graph__add_edge(graph, edge);
	}
    })();
};

sals.demo.ai_startup_idea.new_ai_startup_idea_dom_element = function(width, height) {
    var markets = [
	"Cloud Service\nProduct Market",
	"Education\nProduct Market",
	"Medicine\nProduct Market",
	"Consumer\nProduct Market",
    ];
    var emotion_machine_layers = [
	"Emotion Machine\nBuilt-In Reactive Layer",
	"Emotion Machine\nLearned Reactive Layer",
	"Emotion Machine\nDeliberative Layer",
	"Emotion Machine\nReflective Layer",
	"Emotion Machine\nSelf-Reflective Layer",
	"Emotion Machine\nSelf-Conscious Layer"
    ];
    var graph = sals.graph.graph__new();
    sals.demo.ai_startup_idea.graph__add_concept_line(graph, "Up One\nEmotion Machine Layer",    0, 0,    0, (emotion_machine_layers.length * 400), emotion_machine_layers);
    sals.demo.ai_startup_idea.graph__add_concept_line(graph, "Next Product Market",           1000, 0, 1000,                (markets.length * 400), markets);
    return sals.vis.graph__to_vis_graph_dom_element(graph, width, height);
};

window.onload = function() {
    console.log("Executing window.onload");
    var success_callback = function() {
	try {
	    var width   = window.innerWidth;
	    var height  = window.innerHeight;
	    var element = sals.demo.ai_startup_idea.new_ai_startup_idea_dom_element(width - 16, height - 16);
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


console.log("Loading cognitive_architectural_map_of_ai_startup_ideas.js");

if (typeof(sals["demo"]) == "undefined") {
    sals.demo = {};
}

sals.demo.ai_startup_idea = {};

sals.demo.ai_startup_idea.new_ai_startup_idea_dom_element = function(width, height) {
    var market__height = 400;
    (function() {
	var emotion_machine_layer__height = 400;
	var emotion_machine_layers = [
	    "Emotion Machine\nBuilt-In Reactive Layer",
	    "Emotion Machine\nLearned Reactive Layer",
	    "Emotion Machine\nDeliberative Layer",
	    "Emotion Machine\nReflective Layer",
	    "Emotion Machine\nSelf-Reflective Layer",
	    "Emotion Machine\nSelf-Conscious Layer"
	];
	var emotion_machine_layers__pin = true;
	var node_emotion_machine_layer_map = {};
	var graph = sals.graph.graph__new();
	(function() {
	    for (var index = 0; index < emotion_machine_layers.length; index ++) {
		var emotion_machine_layer                 = emotion_machine_layers[index];
		var emotion_machine_layer__node           = sals.graph.graph_node__new(emotion_machine_layer);
		var emotion_machine_layer__node__vis_node = {
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
		if (emotion_machine_layers__pin) {
		    sals.vis.object__soft_merge_recursive(emotion_machine_layer__node__vis_node, {
			fixed : true,
			x     : 0,
			y     : (((emotion_machine_layers.length - 1) * emotion_machine_layer__height) - (index * emotion_machine_layer__height))
		    });
		}
		emotion_machine_layer__node["vis_node"] = emotion_machine_layer__node__vis_node;
		node_emotion_machine_layer_map[emotion_machine_layer] = emotion_machine_layer__node;
		sals.graph.graph__add_node(graph, emotion_machine_layer__node);
	    }
	    for (var index = 0; index < emotion_machine_layers.length - 1; index ++) {
		var lower_emotion_machine_layer       = emotion_machine_layers[index];
		var lower_emotion_machine_layer__node = node_emotion_machine_layer_map[lower_emotion_machine_layer];
		var upper_emotion_machine_layer       = emotion_machine_layers[index + 1];
		var upper_emotion_machine_layer__node = node_emotion_machine_layer_map[upper_emotion_machine_layer];
		var edge                              = sals.graph.graph_edge__new("Up One\nEmotion Machine Layer", lower_emotion_machine_layer__node, upper_emotion_machine_layer__node);
		var edge__vis_edge                    = {
		    color  : {
			color     : "rgba(0,0,0,1)",
			highlight : "rgba(0,0,0,1)",
			hover     : "rgba(0,0,0,1)",
		    },
		    font   : {color : "rgba(0,0,0,1)"},
		    length : emotion_machine_layer__height
		};
		edge["vis_edge"] = edge__vis_edge;
		sals.graph.graph__add_edge(graph, edge);
	    }
	})();
    })();
    (function() {
	var market__height = 400;
	var markets = [
	    "Cloud Service\nProduct Market",
	    "Education\nProduct Market",
	    "Medicine\nProduct Market",
	    "Consumer\nProduct Market",
	];
	var markets__pin = true;
	var node_market_map = {};
	var graph = sals.graph.graph__new();
	(function() {
	    for (var index = 0; index < markets.length; index ++) {
		var market                 = markets[index];
		var market__node           = sals.graph.graph_node__new(market);
		var market__node__vis_node = {
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
		if (markets__pin) {
		    sals.vis.object__soft_merge_recursive(market__node__vis_node, {
			fixed : true,
			x     : 1000,
			y     : (((markets.length - 1) * market__height) - (index * market__height))
		    });
		}
		market__node["vis_node"] = market__node__vis_node;
		node_market_map[market] = market__node;
		sals.graph.graph__add_node(graph, market__node);
	    }
	})();
    })();
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


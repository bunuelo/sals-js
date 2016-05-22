console.log("Loading cognitive_architectural_map_of_ai_startup_ideas.js");

if (typeof(sals["demo"]) == "undefined") {
    sals.demo = {};
}

sals.demo.ai_startup_idea = {};

{ // propogate_node_data BEGIN
    
    sals.demo.ai_startup_idea.propogate_node_data__new = function() {
	var self = sals.frame.frame__new();
	sals.frame.frame__add_element(self, "source_frame", sals.frame.frame__new());
	return self;
    };
    
    sals.demo.ai_startup_idea.propogate_node_data__source_frame = function(self) {
	return sals.frame.frame__get_element(self, "source_frame");
    };
    
    sals.demo.ai_startup_idea.propogate_node_data__set_source_frame = function(self, value) {
	return sals.frame.frame__set_element(self, "source_frame", value);
    };
    
    sals.demo.ai_startup_idea.propogate_node_data__add_source_value = function(self, source_key, value) {
	var source_frame = sals.demo.ai_startup_idea.propogate_node_data__source_frame(self);
	sals.frame.frame__add_element(source_frame, source_key, value);
    };
    
    sals.demo.ai_startup_idea.propogate_node_data__set_source_value = function(self, source_key, value) {
	var source_frame = sals.demo.ai_startup_idea.propogate_node_data__source_frame(self);
	sals.frame.frame__set_element(source_frame, source_key, value);
    };
    
    sals.demo.ai_startup_idea.propogate_node_data__remove_source_value = function(self, source_key) {
	var source_frame = sals.demo.ai_startup_idea.propogate_node_data__source_frame(self);
	return sals.frame.frame__remove_element(source_frame, source_key);
    };
    
    sals.demo.ai_startup_idea.propogate_node_data__get_source_value = function(self, source_key) {
	var source_frame = sals.demo.ai_startup_idea.propogate_node_data__source_frame(self);
	return sals.frame.frame__get_element(source_frame, source_key);
    };
    
    sals.demo.ai_startup_idea.propogate_node_data__to_vis_node = function(self, source_key) {
	var vis_node                  = {};
	var propogate_node_data_frame = sals.demo.ai_startup_idea.propogate_node_data__get_source_value(self, source_key);
	var position_pin_active       = sals.frame.frame__get_element(propogate_node_data_frame, "position_pin_active");
	var color_pin_active          = sals.frame.frame__get_element(propogate_node_data_frame, "color_pin_active");
	var x                         = sals.frame.frame__get_element(propogate_node_data_frame, "x");
	var y                         = sals.frame.frame__get_element(propogate_node_data_frame, "y");
	var r                         = sals.frame.frame__get_element(propogate_node_data_frame, "r");
	var g                         = sals.frame.frame__get_element(propogate_node_data_frame, "g");
	var b                         = sals.frame.frame__get_element(propogate_node_data_frame, "b");
	if (position_pin_active) {
	    sals.vis.object__soft_merge_recursive(vis_node, {
		fixed : true,
		x     : x,
		y     : y
	    });
	}
	if (color_pin_active) {
	    (function() {
		var rgb_string = "rgba(" + sals['math']['floor'](255 * r) + "," + sals['math']['floor'](255 * g) + "," + sals['math']['floor'](255 * b) + ",1)";
		//sals.core.log("rgb_string = " + rgb_string);
		sals.vis.object__soft_merge_recursive(vis_node, {
		    color  : {
			background : rgb_string,
			highlight  : {
			    background : rgb_string
			},
			hover : {
			    background : rgb_string
			}
		    }
		});
	    })();
	}
	sals.vis.object__soft_merge_recursive(vis_node, {
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
	});
	return vis_node;
    };
    
} // propogate_node_data END

sals.demo.ai_startup_idea.graph__add_concept_line = function(graph,
							     node_concept_map,
							     relationship,
							     concepts,
							     position_pin_active,
							     x0, y0, x1, y1,
							     color_pin_active,
							     r0, g0, b0, r1, g1, b1) {
    var concept__height = 400;
    (function() {
	for (var index = 0; index < concepts.length; index ++) {
	    (function() {
		var concept       = concepts[index];
		var concept__node = sals.graph.graph_node__new(concept);
		(function() { // propograte_node_data initialized and used here.
		    var x                         = x0 + (x1 - x0) * (index + 1) / (concepts.length + 1);
		    var y                         = y0 + (y1 - y0) * (index + 1) / (concepts.length + 1);
		    var r                         = (concepts.length != 1) ? (r0 + (r1 - r0) * index / (concepts.length - 1)) : r0;
		    var g                         = (concepts.length != 1) ? (g0 + (g1 - g0) * index / (concepts.length - 1)) : g0;
		    var b                         = (concepts.length != 1) ? (b0 + (b1 - b0) * index / (concepts.length - 1)) : b0;
		    var propogate_node_data       = sals.demo.ai_startup_idea.propogate_node_data__new();
		    var propogate_node_data_frame = sals.frame.frame__new();
		    sals.demo.ai_startup_idea.propogate_node_data__add_source_value(propogate_node_data, concept, propogate_node_data_frame);
		    sals.frame.frame__add_element(propogate_node_data_frame, "position_pin_active", position_pin_active);
		    sals.frame.frame__add_element(propogate_node_data_frame, "color_pin_active",    color_pin_active);
		    sals.frame.frame__add_element(propogate_node_data_frame, "x",                   x);
		    sals.frame.frame__add_element(propogate_node_data_frame, "y",                   y);
		    sals.frame.frame__add_element(propogate_node_data_frame, "r",                   r);
		    sals.frame.frame__add_element(propogate_node_data_frame, "g",                   g);
		    sals.frame.frame__add_element(propogate_node_data_frame, "b",                   b);
		    concept__node["propogate_node_data"] = propogate_node_data;
		})();
		(function() {
		    var propogate_node_data     = concept__node["propogate_node_data"];
		    var concept__node__vis_node = sals.demo.ai_startup_idea.propogate_node_data__to_vis_node(propogate_node_data, concept);
		    //sals.core.log("final_concept__node__vis_node.json = " + JSON.stringify(concept__node__vis_node));
		    concept__node["vis_node"] = concept__node__vis_node;
		})();
		node_concept_map[concept] = concept__node;
		sals.graph.graph__add_node(graph, concept__node);
	    })();
	}
	if (relationship !== null) {
	    for (var index = 0; index < concepts.length - 1; index ++) {
		(function() {
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
		})();
	    }
	}
    })();
};

sals.demo.ai_startup_idea.propogation__sum = function(graph_node, relationship, source_key) {
    
};

sals.demo.ai_startup_idea.propogation__count = function(graph_node, relationship, source_key) {
    
};

sals.demo.ai_startup_idea.propogation__iterate = function(graph) {
    sals.core.log("iterate HERE.");
    (function() {
	var done = false;
	while (! done) {
	    done = true;
	    (function() {
		var propogate_node_data_frame = sals.demo.ai_startup_idea.propogate_node_data__get_source_value(self, source_key);
		var position_pin_active       = sals.frame.frame__get_element(propogate_node_data_frame, "position_pin_active");
		var color_pin_active          = sals.frame.frame__get_element(propogate_node_data_frame, "color_pin_active");
		var x                         = sals.frame.frame__get_element(propogate_node_data_frame, "x");
		var y                         = sals.frame.frame__get_element(propogate_node_data_frame, "y");
		var r                         = sals.frame.frame__get_element(propogate_node_data_frame, "r");
		var g                         = sals.frame.frame__get_element(propogate_node_data_frame, "g");
		var b                         = sals.frame.frame__get_element(propogate_node_data_frame, "b");
		(function() {
		    var node_done = false;
		    // modify variables here.
		    (function() {
			var nx = x;
			var ny = y;
			var position_done = ((sals.math.abs(nx - x) < 0.1) && 
					     (sals.math.abs(ny - y) < 0.1));
			var nr = r;
			var ng = g;
			var nb = b;
			var color_done = ((sals.math.abs(nr - r) < 0.1) && 
					  (sals.math.abs(ng - g) < 0.1) && 
					  (sals.math.abs(nb - b) < 0.1));
			node_done = (color_done && position_done);
		    })();
		    if (! node_done) {
			done = false;
		    }
		})();
	    })();
	}
    })();
    sals.frame.frame__add_element(propogate_node_data_frame, "position_pin_active", position_pin_active);
    sals.frame.frame__add_element(propogate_node_data_frame, "color_pin_active",    color_pin_active);
    sals.frame.frame__add_element(propogate_node_data_frame, "x",                   x);
    sals.frame.frame__add_element(propogate_node_data_frame, "y",                   y);
    sals.frame.frame__add_element(propogate_node_data_frame, "r",                   r);
    sals.frame.frame__add_element(propogate_node_data_frame, "g",                   g);
    sals.frame.frame__add_element(propogate_node_data_frame, "b",                   b);
};

sals.demo.ai_startup_idea.new_ai_startup_idea_dom_element = function(width, height) {
    var cloud_service_market = "Cloud Service\nMarket";
    var education_market     = "Education\nMarket";
    var medicine_market      = "Medicine\nMarket";
    var consumer_market      = "Consumer\nMarket";
    var markets = [
	cloud_service_market,
	education_market,
	medicine_market,
	consumer_market
    ];
    var built_in_reactive_layer = "Emotion Machine\nBuilt-In Reactive Layer";
    var learned_reactive_layer  = "Emotion Machine\nLearned Reactive Layer";
    var deliberative_layer      = "Emotion Machine\nDeliberative Layer";
    var reflective_layer        = "Emotion Machine\nReflective Layer";
    var self_reflective_layer   = "Emotion Machine\nSelf-Reflective Layer";
    var self_conscious_layer    = "Emotion Machine\nSelf-Conscious Layer";
    var layers = [
	built_in_reactive_layer,
	learned_reactive_layer,
	deliberative_layer,
	reflective_layer,
	self_reflective_layer,
	self_conscious_layer
    ];
    var anthropology_field            = "Cognitive Science\nAnthropology Field";
    var neuroscience_field            = "Cognitive Science\nNeuroscience Field";
    var psychology_field              = "Cognitive Science\nPsychology Field";
    var linguistics_field             = "Cognitive Science\nLinguistics Field";
    var philosophy_field              = "Cognitive Science\nPhilosophy Field";
    var computer_science_field        = "Cognitive Science\nComputer Science Field";
    var artificial_intelligence_field = "Cognitive Science\nArtificial Intelligence Field";
    var fields = [
	anthropology_field,
	neuroscience_field,
	psychology_field,
	linguistics_field,
	philosophy_field,
	computer_science_field,
	artificial_intelligence_field
    ];
    var neural_communication_theory               = "Neural Communication\nTheory";
    var rate_endoded_neural_communication_theory  = "Rate Encoded\nNeural Communication\nTheory";
    var spike_endoded_neural_communication_theory = "Spike Encoded\nNeural Communication\nTheory";
    var theories = [
	neural_communication_theory,
	rate_endoded_neural_communication_theory,
	spike_endoded_neural_communication_theory,
    ];
    var artificial_neural_network_technology                           = "Artificial\nNeural Network\nTechnology";
    var feedforward_backpropogate_artificial_neural_network_technology = "Feedforward Backpropogate\nArtificial Neural Network\nTechnology";
    var deep_learning_technology                                       = "Deep Learning\nTechnology";
    var recurrent_artificial_neural_network_technology                 = "Recurrent\nArtificial Neural Network\nTechnology";
    var bidirectional_recurrent_artificial_neural_network_technology   = "Bidirectional Recurrent\nArtificial Neural Network\nTechnology";
    var convolutional_artificial_neural_network_technology             = "Convolutional\nArtificial Neural Network\nTechnology";
    var self_organizing_maps_artificial_neural_network_technology      = "Self-Organizing Maps\nArtificial Neural Network\nTechnology";
    var state_space_planning_technology                                = "State-Space Planning\nTechnology";
    var plan_space_planning_technology                                 = "Plan-Space Planning\nTechnology";
    var monte_carlo_tree_search_technology                             = "Monte Carlo Tree Search\nTechnology";
    var probabilistic_reasoning_technology                             = "Probabilistic Reasoning\nTechnology";
    var reinforcement_learning_technology                              = "Reinforcement Learning\nTechnology";
    var technologies = [
	artificial_neural_network_technology,
	feedforward_backpropogate_artificial_neural_network_technology,
	deep_learning_technology,
	recurrent_artificial_neural_network_technology,
	bidirectional_recurrent_artificial_neural_network_technology,
	convolutional_artificial_neural_network_technology,
	self_organizing_maps_artificial_neural_network_technology,
	state_space_planning_technology,
	plan_space_planning_technology,
	monte_carlo_tree_search_technology,
	probabilistic_reasoning_technology,
	reinforcement_learning_technology
    ];
    var wearable_technology_product                       = "Wearable Technology\nProduct";
    var health_monitor_wearable_technology_product        = "Health Monitor\nWearable Technology\nProduct";
    var fitbit_health_monitor_wearable_technology_product = "Fitbit\nHealth Monitor\nWearable Technology\nProduct";
    var products = [
	wearable_technology_product,
	health_monitor_wearable_technology_product,
	fitbit_health_monitor_wearable_technology_product,
    ];
    var parent_technology_relationship            = "parent\ntechnology";
    var parent_theory_relationship                = "parent\ntheory";
    var can_be_used_to_implement_relationship     = "can be\nused to\nimplement";
    var used_in_layer_relationship                = "used in\nlayer";
    var theory_of_field_relationship              = "theory of\nfield";
    var computational_implementation_relationship = "computational\nimplementation";
    // product relationships
    var parent_product_relationship               = "parent\nproduct";
    var sold_in_market_relationship               = "sold\nin\nmarket";
    var edges = [
	[plan_space_planning_technology, can_be_used_to_implement_relationship, reflective_layer],
	[state_space_planning_technology, can_be_used_to_implement_relationship, deliberative_layer],
	[monte_carlo_tree_search_technology, parent_technology_relationship, state_space_planning_technology],
	[state_space_planning_technology, can_be_used_to_implement_relationship, plan_space_planning_technology],
	[reinforcement_learning_technology, can_be_used_to_implement_relationship, deliberative_layer],
	[reinforcement_learning_technology, can_be_used_to_implement_relationship, learned_reactive_layer],
	[deep_learning_technology, parent_technology_relationship, feedforward_backpropogate_artificial_neural_network_technology],
	[feedforward_backpropogate_artificial_neural_network_technology, parent_technology_relationship, artificial_neural_network_technology],
	[recurrent_artificial_neural_network_technology, parent_technology_relationship, feedforward_backpropogate_artificial_neural_network_technology],
	[bidirectional_recurrent_artificial_neural_network_technology, parent_technology_relationship, recurrent_artificial_neural_network_technology],
	[convolutional_artificial_neural_network_technology, parent_technology_relationship, feedforward_backpropogate_artificial_neural_network_technology],
	[self_organizing_maps_artificial_neural_network_technology, parent_technology_relationship, artificial_neural_network_technology],
	[artificial_neural_network_technology, used_in_layer_relationship, learned_reactive_layer],
	[artificial_neural_network_technology, used_in_layer_relationship, built_in_reactive_layer],
	[rate_endoded_neural_communication_theory, computational_implementation_relationship, feedforward_backpropogate_artificial_neural_network_technology],
	// theories
	[neural_communication_theory, theory_of_field_relationship, neuroscience_field],
	[rate_endoded_neural_communication_theory, theory_of_field_relationship, neuroscience_field],
	[rate_endoded_neural_communication_theory, parent_theory_relationship, neural_communication_theory],
	[spike_endoded_neural_communication_theory, theory_of_field_relationship, neuroscience_field],
	[spike_endoded_neural_communication_theory, parent_theory_relationship, neural_communication_theory],
	// products
	[health_monitor_wearable_technology_product, parent_product_relationship, wearable_technology_product],
	[fitbit_health_monitor_wearable_technology_product, parent_product_relationship, health_monitor_wearable_technology_product],
	[wearable_technology_product, sold_in_market_relationship, consumer_market],
    ];
    var node_concept_map = {};
    var graph            = sals.graph.graph__new();
    sals.demo.ai_startup_idea.graph__add_concept_line(graph,
						      node_concept_map,
						      "Up One\nEmotion Machine\nLayer",
						      layers,
						      true,
						      -1000,  1000, -1000, -1000,
						      true,
						      1, 0.5, 0.5, 1, 0.5, 0.5);
    sals.demo.ai_startup_idea.graph__add_concept_line(graph,
						      node_concept_map,
						      null,
						      fields,
						      true,
						      -1000, -1000,  1000, -1000,
						      true,
						      0.5, 1, 0.5, 0.5, 1, 0.5);
    sals.demo.ai_startup_idea.graph__add_concept_line(graph,
						      node_concept_map,
						      null,
						      markets,
						      true,
						      1000, -1000,  1000,  1000,
						      true,
						      0.5, 0.5, 1, 0.5, 0.5, 1);
    (function() {
	for(var index = 0; index < technologies.length; index ++) {
	    var technology       = technologies[index];
	    var technology__node = sals.graph.graph_node__new(technology);
	    technology__node["vis_node"] = {
		x : 0,
		y : 0
	    };
	    sals.graph.graph__add_node(graph, technology__node);
	    node_concept_map[technology] = technology__node;
	}
    })();
    (function() {
	for(var index = 0; index < theories.length; index ++) {
	    var theory       = theories[index];
	    var theory__node = sals.graph.graph_node__new(theory);
	    theory__node["vis_node"] = {
		x : 0,
		y : 0
	    };
	    sals.graph.graph__add_node(graph, theory__node);
	    node_concept_map[theory] = theory__node;
	}
    })();
    (function() {
	for(var index = 0; index < products.length; index ++) {
	    var product       = products[index];
	    var product__node = sals.graph.graph_node__new(product);
	    product__node["vis_node"] = {
		x : 0,
		y : 0
	    };
	    sals.graph.graph__add_node(graph, product__node);
	    node_concept_map[product] = product__node;
	}
    })();
    (function() {
	for(var index = 0; index < edges.length; index ++) {
	    var edge       = edges[index];
	    var edge__subject              = edge[0];
	    var edge__subject__graph_node  = node_concept_map[edge__subject];
	    var edge__relation             = edge[1];
	    var edge__object               = edge[2];
	    var edge__object__graph_node   = node_concept_map[edge__object];
	    var edge__graph_edge           = sals.graph.graph_edge__new(edge__relation, edge__subject__graph_node, edge__object__graph_node);
	    var edge__graph_edge__vis_edge = {
		color  : {
		    color     : "rgba(0,0,0,1)",
		    highlight : "rgba(0,0,0,1)",
		    hover     : "rgba(0,0,0,1)",
		},
		font   : {color : "rgba(0,0,0,1)"},
		length : 320
	    };
	    edge__graph_edge["vis_edge"] = edge__graph_edge__vis_edge;
	    sals.graph.graph__add_edge(graph, edge__graph_edge);
	}
    })();
    sals.demo.ai_startup_idea.propogation__iterate(graph);
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


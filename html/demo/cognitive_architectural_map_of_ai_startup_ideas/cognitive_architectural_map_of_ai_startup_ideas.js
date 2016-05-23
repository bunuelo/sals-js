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
    
    sals.demo.ai_startup_idea.propogate_node_data__try_get_source_value = function(self, source_key) {
	var source_frame = sals.demo.ai_startup_idea.propogate_node_data__source_frame(self);
	return sals.frame.frame__try_get_element(source_frame, source_key);
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
	sals.vis.object__soft_merge_recursive(vis_node, {
	    fixed : position_pin_active,
	    x     : x,
	    y     : y
	});
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
							     source_key,
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
		    var x                   = x0 + (x1 - x0) * (index + 1) / (concepts.length + 1);
		    var y                   = y0 + (y1 - y0) * (index + 1) / (concepts.length + 1);
		    var r                   = (concepts.length != 1) ? (r0 + (r1 - r0) * index / (concepts.length - 1)) : r0;
		    var g                   = (concepts.length != 1) ? (g0 + (g1 - g0) * index / (concepts.length - 1)) : g0;
		    var b                   = (concepts.length != 1) ? (b0 + (b1 - b0) * index / (concepts.length - 1)) : b0;
		    var propogate_node_data = concept__node["propogate_node_data"];
		    if (typeof(propogate_node_data) == "undefined") {
			propogate_node_data = sals.demo.ai_startup_idea.propogate_node_data__new();
			concept__node["propogate_node_data"] = propogate_node_data;
		    }
		    var propogate_node_data_frame = sals.frame.frame__new();
		    sals.demo.ai_startup_idea.propogate_node_data__add_source_value(propogate_node_data, source_key, propogate_node_data_frame);
		    sals.frame.frame__add_element(propogate_node_data_frame, "position_pin_active", position_pin_active);
		    sals.frame.frame__add_element(propogate_node_data_frame, "color_pin_active",    color_pin_active);
		    sals.frame.frame__add_element(propogate_node_data_frame, "x",                   x);
		    sals.frame.frame__add_element(propogate_node_data_frame, "y",                   y);
		    sals.frame.frame__add_element(propogate_node_data_frame, "r",                   r);
		    sals.frame.frame__add_element(propogate_node_data_frame, "g",                   g);
		    sals.frame.frame__add_element(propogate_node_data_frame, "b",                   b);
		})();
		(function() {
		    var propogate_node_data     = concept__node["propogate_node_data"];
		    var concept__node__vis_node = sals.demo.ai_startup_idea.propogate_node_data__to_vis_node(propogate_node_data, source_key);
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

sals.demo.ai_startup_idea.propogation__foreach = function(graph, graph_node, source_key, value_name, value_func) {
    var neighbors         = sals.graph.graph__get_node_neighbors(graph, graph_node);
    var neighbors__length = neighbors.length;
    var neighbors__index  = 0;
    while (neighbors__index < neighbors__length) {
	(function() {
	    var neighbor            = neighbors[neighbors__index];
	    var propogate_node_data = neighbor["propogate_node_data"];
	    if (typeof(propogate_node_data) != "undefined") {
		(function() {
		    var propogate_node_data_frame = sals.demo.ai_startup_idea.propogate_node_data__try_get_source_value(propogate_node_data, source_key);
		    if (propogate_node_data_frame !== null) {
			var value = sals.frame.frame__get_element(propogate_node_data_frame, value_name)
			value_func(value);
		    }
		})();
	    }
	})();
	neighbors__index ++;
    }
};

sals.demo.ai_startup_idea.propogation__sum = function(graph, graph_node, source_key, value_name) {
    var sum = 0;
    sals.demo.ai_startup_idea.propogation__foreach(graph, graph_node, source_key, value_name,
						   function(value) {
						       sum += value;					       
						   });
    return sum;
};

sals.demo.ai_startup_idea.propogation__count = function(graph, graph_node, source_key, value_name) {
    var count = 0;
    sals.demo.ai_startup_idea.propogation__foreach(graph, graph_node, source_key, value_name,
						   function(value) {
						       count ++;					       
						   });
    return count;
};

sals.demo.ai_startup_idea.propogation__iterate = function(graph, source_key) {
    sals.core.log("iterate HERE.");
    (function() {
	var done = false;
	while (! done) {
	    sals.core.log("iterate not done HERE.");
	    done = true;
	    (function() {
		var graph_nodes               = sals.frame.frame__values(sals.graph.graph__nodes(graph));
		var graph_nodes__length       = graph_nodes.length;
		var graph_nodes__index        = 0;
		sals.core.log("iterate graph_nodes__length = " + graph_nodes__length);
		while (graph_nodes__index < graph_nodes__length) {
		    (function() {
			sals.core.log("iterate graph_node HERE.");
			var graph_node          = graph_nodes[graph_nodes__index];
			var propogate_node_data = graph_node["propogate_node_data"];
			if (typeof(propogate_node_data) == "undefined") {
			    propogate_node_data = sals.demo.ai_startup_idea.propogate_node_data__new();
			    graph_node["propogate_node_data"] = propogate_node_data;
			}
			var propogate_node_data_frame = sals.demo.ai_startup_idea.propogate_node_data__try_get_source_value(propogate_node_data, source_key);
			if (propogate_node_data_frame === null) {
			    propogate_node_data_frame = sals.frame.frame__new();
			    sals.demo.ai_startup_idea.propogate_node_data__add_source_value(propogate_node_data, source_key, propogate_node_data_frame);
			    sals.frame.frame__add_element(propogate_node_data_frame, "position_pin_active", false);
			    sals.frame.frame__add_element(propogate_node_data_frame, "color_pin_active",    false);
			    sals.frame.frame__add_element(propogate_node_data_frame, "x",                   0);
			    sals.frame.frame__add_element(propogate_node_data_frame, "y",                   0);
			    sals.frame.frame__add_element(propogate_node_data_frame, "r",                   0.5);
			    sals.frame.frame__add_element(propogate_node_data_frame, "g",                   0.5);
			    sals.frame.frame__add_element(propogate_node_data_frame, "b",                   0.5);
			}
			var position_pin_active = sals.frame.frame__get_element(propogate_node_data_frame, "position_pin_active");
			var color_pin_active    = sals.frame.frame__get_element(propogate_node_data_frame, "color_pin_active");
			var x                   = sals.frame.frame__get_element(propogate_node_data_frame, "x");
			var y                   = sals.frame.frame__get_element(propogate_node_data_frame, "y");
			var r                   = sals.frame.frame__get_element(propogate_node_data_frame, "r");
			var g                   = sals.frame.frame__get_element(propogate_node_data_frame, "g");
			var b                   = sals.frame.frame__get_element(propogate_node_data_frame, "b");
			(function() {
			    var node_done = false;
			    // modify variables here.
			    (function() {
				var position_done;
				if (position_pin_active) {
				    position_done = true;
				} else {
				    (function() {
					var nx;
					var ny;
					if (position_pin_active) {
					    nx = x;
					    ny = y;
					} else {
					    (function() {
						var x_sum   = sals.demo.ai_startup_idea.propogation__sum(  graph, graph_node, source_key, "x");
						var x_count = sals.demo.ai_startup_idea.propogation__count(graph, graph_node, source_key, "x");
						var y_sum   = sals.demo.ai_startup_idea.propogation__sum(  graph, graph_node, source_key, "y");
						var y_count = sals.demo.ai_startup_idea.propogation__count(graph, graph_node, source_key, "y");
						nx          = (x_count == 0) ? x : (x_sum / x_count);
						ny          = (y_count == 0) ? y : (y_sum / y_count);
					    })();
					}
					position_done = ((sals.math.abs(nx - x) < 1) && 
							 (sals.math.abs(ny - y) < 1));
					x = nx;
					y = ny;
				    })();
				}
				var color_done;
				if (color_pin_active) {
				    color_done = true;
				} else {
				    (function() {
					var nr;
					var ng;
					var nb;
					if (color_pin_active) {
					    nr = r;
					    ng = g;
					    nb = b;
					} else {
					    (function() {
						var r_sum   = sals.demo.ai_startup_idea.propogation__sum(  graph, graph_node, source_key, "r") + 0.1;
						var r_count = sals.demo.ai_startup_idea.propogation__count(graph, graph_node, source_key, "r");
						var g_sum   = sals.demo.ai_startup_idea.propogation__sum(  graph, graph_node, source_key, "g") + 0.1;
						var g_count = sals.demo.ai_startup_idea.propogation__count(graph, graph_node, source_key, "g");
						var b_sum   = sals.demo.ai_startup_idea.propogation__sum(  graph, graph_node, source_key, "b") + 0.1;
						var b_count = sals.demo.ai_startup_idea.propogation__count(graph, graph_node, source_key, "b");
						nr          = (r_count == 0) ? r : (r_sum / r_count);
						ng          = (g_count == 0) ? g : (g_sum / g_count);
						nb          = (b_count == 0) ? b : (b_sum / b_count);
						if (nr > 255) {nr = 255;}
						if (ng > 255) {ng = 255;}
						if (nb > 255) {nb = 255;}
					    })();
					}
					color_done = ((sals.math.abs(nr - r) < 0.001) && 
						      (sals.math.abs(ng - g) < 0.001) && 
						      (sals.math.abs(nb - b) < 0.001));
					r = nr;
					g = ng;
					b = nb;
				    })();
				}
				node_done = (color_done && position_done);
			    })();
			    if (! node_done) {
				done = false;
			    } else {
				(function() {
				    var vis_node = sals.demo.ai_startup_idea.propogate_node_data__to_vis_node(propogate_node_data, source_key);
				    //sals.core.log("vis_node = " + JSON.stringify(vis_node));
				    graph_node["vis_node"] = vis_node;
				})();
			    }
			})();
			sals.frame.frame__set_element(propogate_node_data_frame, "position_pin_active", position_pin_active);
			sals.frame.frame__set_element(propogate_node_data_frame, "color_pin_active",    color_pin_active);
			sals.frame.frame__set_element(propogate_node_data_frame, "x",                   x);
			sals.frame.frame__set_element(propogate_node_data_frame, "y",                   y);
			sals.frame.frame__set_element(propogate_node_data_frame, "r",                   r);
			sals.frame.frame__set_element(propogate_node_data_frame, "g",                   g);
			sals.frame.frame__set_element(propogate_node_data_frame, "b",                   b);
		    })();
		    graph_nodes__index ++;
		}
	    })();
	}
    })();
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
						      "Map 1",
						      node_concept_map,
						      "Up One\nEmotion Machine\nLayer",
						      layers,
						      true,
						      -1000,  1000, -1000, -1000,
						      true,
						      1, 0.5, 0.5, 1, 0.5, 0.5);
    sals.demo.ai_startup_idea.graph__add_concept_line(graph,
						      "Map 1",
						      node_concept_map,
						      null,
						      fields,
						      true,
						      -1000, -1000,  1000, -1000,
						      true,
						      0.5, 1, 0.5, 0.5, 1, 0.5);
    sals.demo.ai_startup_idea.graph__add_concept_line(graph,
						      "Map 1",
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
    sals.demo.ai_startup_idea.propogation__iterate(graph, "Map 1");
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


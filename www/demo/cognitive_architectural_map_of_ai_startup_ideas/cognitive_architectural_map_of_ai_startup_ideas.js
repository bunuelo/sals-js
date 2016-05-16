console.log("Loading cognitive_architectural_map_of_ai_startup_ideas.js");

if (typeof(sals["demo"]) == "undefined") {
    sals.demo = {};
}

sals.demo.ai_startup_idea = {};

sals.demo.ai_startup_idea.graph__add_concept_line = function(graph, node_concept_map, relationship, x0, y0, x1, y1, concepts) {
    var concept__height = 400;
    var concepts__pin = true;
    (function() {
	for (var index = 0; index < concepts.length; index ++) {
	    var x                       = x0 + (x1 - x0) * (index + 1) / (concepts.length + 1);
	    var y                       = y0 + (y1 - y0) * (index + 1) / (concepts.length + 1);
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
	if (relationship !== null) {
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
	}
    })();
};

sals.demo.ai_startup_idea.new_ai_startup_idea_dom_element = function(width, height) {
    var cloud_service_product_market = "Cloud Service\nProduct Market";
    var education_product_market     = "Education\nProduct Market";
    var medicine_product_market      = "Medicine\nProduct Market";
    var consumer_product_market      = "Consumer\nProduct Market";
    var markets = [
	cloud_service_product_market,
	education_product_market,
	medicine_product_market,
	consumer_product_market
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
    var rate_endoded_neural_communication_theory  = "Rate Encoded\nNeural Communication\nTheory";
    var spike_endoded_neural_communication_theory = "Spike Encoded\nNeural Communication\nTheory";
    var theories = [
	rate_endoded_neural_communication_theory,
	spike_endoded_neural_communication_theory,
    ];
    var neural_network_technology                           = "Neural Network\nTechnology";
    var feedforward_backpropogate_neural_network_technology = "Feedforward Backpropogate\nNeural Network\nTechnology";
    var deep_learning_technology                            = "Deep Learning\nTechnology";
    var recurrent_neural_network_technology                 = "Recurrent\nNeural Network\nTechnology";
    var convolutional_neural_network_technology             = "Convolutional\nNeural Network\nTechnology";
    var self_organizing_maps_neural_network_technology      = "Self-Organizing Maps\nNeural Network\nTechnology";
    var state_space_planning_technology                     = "State-Space Planning\nTechnology";
    var plan_space_planning_technology                      = "Plan-Space Planning\nTechnology";
    var monte_carlo_tree_search_technology                  = "Monte Carlo Tree Search\nTechnology";
    var probabilistic_reasoning_technology                  = "Probabilistic Reasoning\nTechnology";
    var reinforcement_learning_technology                   = "Reinforcement Learning\nTechnology";
    var technologies = [
	neural_network_technology,
	feedforward_backpropogate_neural_network_technology,
	deep_learning_technology,
	recurrent_neural_network_technology,
	convolutional_neural_network_technology,
	self_organizing_maps_neural_network_technology,
	state_space_planning_technology,
	plan_space_planning_technology,
	monte_carlo_tree_search_technology,
	probabilistic_reasoning_technology,
	reinforcement_learning_technology
    ];
    var parent_technology_relationship        = "parent technology";
    var used_to_implement_relationship        = "used to implement";
    var used_in_layer_relationship            = "used in layer";
    var theory_of_field_relationship          = "theory of field";
    var implementation_of_theory_relationship = "implementation of theory";
    var edges = [
	[plan_space_planning_technology, used_to_implement_relationship, reflective_layer],
	[state_space_planning_technology, used_to_implement_relationship, deliberative_layer],
	[monte_carlo_tree_search_technology, parent_technology_relationship, state_space_planning_technology],
	[state_space_planning_technology, used_to_implement_relationship, plan_space_planning_technology],
	[reinforcement_learning_technology, used_to_implement_relationship, deliberative_layer],
	[reinforcement_learning_technology, used_to_implement_relationship, learned_reactive_layer],
	[deep_learning_technology, parent_technology_relationship, neural_network_technology],
	[feedforward_backpropogate_neural_network_technology, parent_technology_relationship, neural_network_technology],
	[recurrent_neural_network_technology, parent_technology_relationship, feedforward_backpropogate_neural_network_technology],
	[convolutional_neural_network_technology, parent_technology_relationship, feedforward_backpropogate_neural_network_technology],
	[self_organizing_maps_neural_network_technology, parent_technology_relationship, neural_network_technology],
	[neural_network_technology, used_in_layer_relationship, learned_reactive_layer],
	[neural_network_technology, used_in_layer_relationship, built_in_reactive_layer],
	[neural_network_technology, implementation_of_theory_relationship, rate_endoded_neural_communication_model],
	// theories
	[rate_endoded_neural_communication_theory, theory_of_field_relationship, neuroscience_field],
	[spike_endoded_neural_communication_theory, theory_of_field_relationship, neuroscience_field],
    ];
    var node_concept_map = {};
    var graph            = sals.graph.graph__new();
    sals.demo.ai_startup_idea.graph__add_concept_line(graph, node_concept_map, "Up One\nEmotion Machine\nLayer", -1000,  1000, -1000, -1000, layers);
    sals.demo.ai_startup_idea.graph__add_concept_line(graph, node_concept_map, null,                             -1000, -1000,  1000, -1000, fields);
    sals.demo.ai_startup_idea.graph__add_concept_line(graph, node_concept_map, null,                              1000, -1000,  1000,  1000, markets);
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
		length : 200
	    };
	    edge__graph_edge["vis_edge"] = edge__graph_edge__vis_edge;
	    sals.graph.graph__add_edge(graph, edge__graph_edge);
	}
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


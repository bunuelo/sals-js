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
	(function() { // red stripe
	    var red_stripe_enabled = false;
	    var red_stripe_r       = 0.75;
	    var red_stripe_g       = 1.0;
	    var red_stripe_b       = 0.75;
	    var red_stripe_radius  = 0.1;
	    if ((r >= (red_stripe_r - red_stripe_radius)) && (r <= (red_stripe_r + red_stripe_radius)) &&
		(g >= (red_stripe_g - red_stripe_radius)) && (g <= (red_stripe_g + red_stripe_radius)) &&
		(b >= (red_stripe_b - red_stripe_radius)) && (b <= (red_stripe_b + red_stripe_radius))) {
		if (red_stripe_enabled) {
		    r = 1.0;
		    g = 0.0;
		    b = 0.0;
		}
	    }
	})();
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
			//sals.core.log("iterate graph_node HERE.");
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
						var x_count = sals.demo.ai_startup_idea.propogation__count(graph, graph_node, source_key, "x") + 1;
						var y_sum   = sals.demo.ai_startup_idea.propogation__sum(  graph, graph_node, source_key, "y");
						var y_count = sals.demo.ai_startup_idea.propogation__count(graph, graph_node, source_key, "y") + 1;
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
						var white_weight = 0.0;
						var r_sum   = sals.demo.ai_startup_idea.propogation__sum(  graph, graph_node, source_key, "r") + white_weight;
						var r_count = sals.demo.ai_startup_idea.propogation__count(graph, graph_node, source_key, "r") + white_weight;
						var g_sum   = sals.demo.ai_startup_idea.propogation__sum(  graph, graph_node, source_key, "g") + white_weight;
						var g_count = sals.demo.ai_startup_idea.propogation__count(graph, graph_node, source_key, "g") + white_weight;
						var b_sum   = sals.demo.ai_startup_idea.propogation__sum(  graph, graph_node, source_key, "b") + white_weight;
						var b_count = sals.demo.ai_startup_idea.propogation__count(graph, graph_node, source_key, "b") + white_weight;
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
    var edges                = [];
    
    var parent_technology_relationship        = "parent\ntechnology";
    var parent_theory_relationship            = "parent\ntheory";
    var can_be_implemented_with_relationship = "can be\nimplemented with";
    var theory_of_field_relationship          = "theory of\nfield";
    var technology_implements_theory          = "technology\nimplements\ntheory";
    // product relationships
    var parent_product_relationship           = "parent\nproduct";
    var parent_market_relationship            = "parent\nmarket";
    var sold_in_market_relationship           = "sold\nin\nmarket";
    var technology_at_development_stage       = "at\ndevelopment stage";
    
    // market BEGIN
    var major_markets = [];
    var minor_markets = [];
    {
	var business_to_business_market = "Business-to-Business\nMarket";
	major_markets.push(business_to_business_market);
    }
    {
	var education_market = "Education\nMarket";
	major_markets.push(education_market);
	{
	    var elementary_and_middle_school_market = "Elementary and Middle School\nMarket";
	    minor_markets.push(elementary_and_middle_school_market);
	    edges.push([elementary_and_middle_school_market, parent_market_relationship, education_market]);
	}
	{
	    var high_school_market = "High School\nMarket";
	    minor_markets.push(high_school_market);
	    edges.push([high_school_market, parent_market_relationship, education_market]);
	}
	{
	    var professional_education_market = "Professional Education\nMarket";
	    minor_markets.push(professional_education_market);
	    edges.push([professional_education_market, parent_market_relationship, education_market]);
	}
	{
	    var skill_training_market = "Skill Training\nMarket";
	    minor_markets.push(skill_training_market);
	    edges.push([skill_training_market, parent_market_relationship, education_market]);
	}
	{
	    var cognitive_development_market = "Cognitive Development\nMarket";
	    minor_markets.push(cognitive_development_market);
	    edges.push([cognitive_development_market, parent_market_relationship, education_market]);
	    {
		var executive_cognitive_development_market = "Executive\nCognitive Development\nMarket";
		minor_markets.push(executive_cognitive_development_market);
		edges.push([executive_cognitive_development_market, parent_market_relationship, cognitive_development_market]);
	    }
	    {
		var social_cognitive_development_market = "Social\nCognitive Development\nMarket";
		minor_markets.push(social_cognitive_development_market);
		edges.push([social_cognitive_development_market, parent_market_relationship, cognitive_development_market]);
	    }
	    {
		var emotional_cognitive_development_market = "Emotional\nCognitive Development\nMarket";
		minor_markets.push(emotional_cognitive_development_market);
		edges.push([emotional_cognitive_development_market, parent_market_relationship, cognitive_development_market]);
	    }
	}
	{
	    var cognitive_development_market = "Learning Disabilities\nMarket";
	    minor_markets.push(cognitive_development_market);
	    edges.push([cognitive_development_market, parent_market_relationship, education_market]);
	}
    }
    {
	var medicine_market = "Medicine\nMarket";
	major_markets.push(medicine_market);
	{
	    var mental_health_market = "Mental Health\nMarket";
	    minor_markets.push(mental_health_market);
	    edges.push([mental_health_market, parent_market_relationship, medicine_market]);
	    {
		var autistic_spectrum_market = "Autistic Spectrum\nMarket";
		minor_markets.push(autistic_spectrum_market);
		edges.push([autistic_spectrum_market, parent_market_relationship, mental_health_market]);
	    }
	    {
		var autistic_spectrum_market = "Autistic Spectrum\nMarket";
		minor_markets.push(autistic_spectrum_market);
		edges.push([autistic_spectrum_market, parent_market_relationship, mental_health_market]);
	    }
	    {
		var neurodevelopmental_disorders_market = "Neurodevelopmental Disorders\nMarket";
		minor_markets.push(neurodevelopmental_disorders_market);
		edges.push([neurodevelopmental_disorders_market, parent_market_relationship, mental_health_market]);
	    }
	    {
		var schizophrenia_spectrum_disorders_market = "Schizophrenia Spectrum Disorders\nMarket";
		minor_markets.push(schizophrenia_spectrum_disorders_market);
		edges.push([schizophrenia_spectrum_disorders_market, parent_market_relationship, mental_health_market]);
	    }
	    {
		var bipolar_disorders_market = "Bipolar Disorders\nMarket";
		minor_markets.push(bipolar_disorders_market);
		edges.push([bipolar_disorders_market, parent_market_relationship, mental_health_market]);
	    }
	    {
		var depressive_disorders_market = "Depressive Disorders\nMarket";
		minor_markets.push(depressive_disorders_market);
		edges.push([depressive_disorders_market, parent_market_relationship, mental_health_market]);
	    }
	    {
		var anxiety_disorders_market = "Anxiety Disorders\nMarket";
		minor_markets.push(anxiety_disorders_market);
		edges.push([anxiety_disorders_market, parent_market_relationship, mental_health_market]);
	    }
	    {
		var obsessive_compulsive_disorders_market = "Obsessive-Compulsive Disorders\nMarket";
		minor_markets.push(obsessive_compulsive_disorders_market);
		edges.push([obsessive_compulsive_disorders_market, parent_market_relationship, mental_health_market]);
	    }
	    {
		var trauma_related_disorders_market = "Trauma-Related Disorders\nMarket";
		minor_markets.push(trauma_related_disorders_market);
		edges.push([trauma_related_disorders_market, parent_market_relationship, mental_health_market]);
	    }
	    {
		var dissociative_disorders_market = "Dissociative Disorders\nMarket";
		minor_markets.push(dissociative_disorders_market);
		edges.push([dissociative_disorders_market, parent_market_relationship, mental_health_market]);
	    }
	    {
		var somatic_symptom_disorders_market = "Somatic Symptom Disorders\nMarket";
		minor_markets.push(somatic_symptom_disorders_market);
		edges.push([somatic_symptom_disorders_market, parent_market_relationship, mental_health_market]);
	    }
	    {
		var feeding_and_eating_disorders_market = "Feeding and Eating Disorders\nMarket";
		minor_markets.push(feeding_and_eating_disorders_market);
		edges.push([feeding_and_eating_disorders_market, parent_market_relationship, mental_health_market]);
	    }
	    {
		var sleep_wake_disorders_market = "Sleep-Wake Disorders\nMarket";
		minor_markets.push(sleep_wake_disorders_market);
		edges.push([sleep_wake_disorders_market, parent_market_relationship, mental_health_market]);
	    }
	    {
		var sexual_dysfunctions_market = "Sexual Dysfunctions\nMarket";
		minor_markets.push(sexual_dysfunctions_market);
		edges.push([sexual_dysfunctions_market, parent_market_relationship, mental_health_market]);
	    }
	    {
		var gender_dysphoria_market = "Gender Dysphoria\nMarket";
		minor_markets.push(gender_dysphoria_market);
		edges.push([gender_dysphoria_market, parent_market_relationship, mental_health_market]);
	    }
	    {
		var disruptive_impulse_control_and_conduct_disorders_market = "Disruptive,\nImpulse Control\nand Conduct Disorders\nMarket";
		minor_markets.push(disruptive_impulse_control_and_conduct_disorders_market);
		edges.push([disruptive_impulse_control_and_conduct_disorders_market, parent_market_relationship, mental_health_market]);
	    }
	    {
		var substance_use_and_addictive_disorders_market = "Substance Use\nand Addictive Disorders\nMarket";
		minor_markets.push(substance_use_and_addictive_disorders_market);
		edges.push([substance_use_and_addictive_disorders_market, parent_market_relationship, mental_health_market]);
	    }
	    {
		var neurocognitive_disorders_market = "Neurocognitive Disorders\nMarket";
		minor_markets.push(neurocognitive_disorders_market);
		edges.push([neurocognitive_disorders_market, parent_market_relationship, mental_health_market]);
	    }
	    {
		var personality_disorders_market = "Personality Disorders\nMarket";
		minor_markets.push(personality_disorders_market);
		edges.push([personality_disorders_market, parent_market_relationship, mental_health_market]);
	    }
	}
	{
	    var physical_health_market = "Physical Health\nMarket";
	    minor_markets.push(physical_health_market);
	    edges.push([physical_health_market, parent_market_relationship, medicine_market]);
	    {
		var diabetes_market = "Diabetes\nMarket";
		minor_markets.push(diabetes_market);
		edges.push([diabetes_market, parent_market_relationship, physical_health_market]);
	    }
	    {
		var emergency_medicine_market = "Emergency Medicine\nMarket";
		minor_markets.push(emergency_medicine_market);
		edges.push([emergency_medicine_market, parent_market_relationship, physical_health_market]);
	    }
	    {
		var prosthetic_limb_market = "Prosthetic Limb\nMarket";
		minor_markets.push(prosthetic_limb_market);
		edges.push([prosthetic_limb_market, parent_market_relationship, physical_health_market]);
	    }
	    {
		var physical_rehabilitation_market = "Physical Rehabilitation\nMarket";
		minor_markets.push(physical_rehabilitation_market);
		edges.push([physical_rehabilitation_market, parent_market_relationship, physical_health_market]);
	    }
	    {
		var cancer_market = "Cancer\nMarket";
		minor_markets.push(cancer_market);
		edges.push([cancer_market, parent_market_relationship, physical_health_market]);
	    }
	    {
		var hiv_aids_market = "HIV/AIDS\nMarket";
		minor_markets.push(hiv_aids_market);
		edges.push([hiv_aids_market, parent_market_relationship, physical_health_market]);
	    }
	}
    }
    {
	var entertainment_market = "Entertainment\nMarket";
	major_markets.push(entertainment_market);
	{
	    var feature_film_market = "Feature Film\nMarket";
	    minor_markets.push(feature_film_market);
	    edges.push([feature_film_market, parent_market_relationship, entertainment_market]);
	}
	{
	    var tv_market = "TV\nMarket";
	    minor_markets.push(tv_market);
	    edges.push([tv_market, parent_market_relationship, entertainment_market]);
	}
	{
	    var game_market = "Game\nMarket";
	    minor_markets.push(game_market);
	    edges.push([game_market, parent_market_relationship, entertainment_market]);
	}
	{
	    var theme_park_market = "Theme Park\nMarket";
	    minor_markets.push(theme_park_market);
	    edges.push([theme_park_market, parent_market_relationship, entertainment_market]);
	}
    }
    {
	var consumer_product_market = "Consumer Product\nMarket";
	major_markets.push(consumer_product_market);
	{
	    var automobile_market = "Automobile\nMarket";
	    minor_markets.push(automobile_market);
	    edges.push([automobile_market, parent_market_relationship, consumer_product_market]);
	}
	{
	    var mobile_app_market = "Mobile App\nMarket";
	    minor_markets.push(mobile_app_market);
	    edges.push([mobile_app_market, parent_market_relationship, consumer_product_market]);
	}
	{
	    var home_entertainment_market = "Home Entertainment\nMarket";
	    minor_markets.push(home_entertainment_market);
	    edges.push([home_entertainment_market, parent_market_relationship, consumer_product_market]);
	}
	{
	    var personal_health_market = "Personal Health\nMarket";
	    minor_markets.push(personal_health_market);
	    edges.push([personal_health_market, parent_market_relationship, consumer_product_market]);
	}
    }
    // market END
    
    
    // field BEGIN
    var fields = [];
    {
	var anthropology_field = "Anthropology\n(Cognitive Science)";
	fields.push(anthropology_field);
    }
    {
	var neuroscience_field = "Neuroscience\n(Cognitive Science)";
	fields.push(neuroscience_field);
    }
    {
	var psychology_field = "Psychology\n(Cognitive Science)";
	fields.push(psychology_field);
    }
    {
	var linguistics_field = "Linguistics\n(Cognitive Science)";
	fields.push(linguistics_field);
    }
    {
	var philosophy_field = "Philosophy\n(Cognitive Science)";
	fields.push(philosophy_field);
    }
    {
	var computer_science_field = "Computer Science\n(Cognitive Science)";
	fields.push(computer_science_field);
    }
    {
	var artificial_intelligence_field = "Artificial Intelligence\n(Cognitive Science)";
	fields.push(artificial_intelligence_field);
    }
    // field END
    
    // development_stage BEGIN
    var development_stages = [];
    {
	var philosophy_development_stage = "Philosophy\nDevelopment Stage";
	development_stages.push(philosophy_development_stage);
    }
    {
	var mathematical_theory_development_stage = "Mathematical Theory\nDevelopment Stage";
	development_stages.push(mathematical_theory_development_stage);
    }
    {
	var computational_implementation_development_stage = "Computational Implementation\nDevelopment Stage";
	development_stages.push(computational_implementation_development_stage);
    }
    {
	var toy_problem_development_stage = "Toy Problem\nDevelopment Stage";
	development_stages.push(toy_problem_development_stage);
    }
    {
	var research_application_development_stage = "Research Application\nDevelopment Stage";
	development_stages.push(research_application_development_stage);
    }
    {
	var successful_startup_development_stage = "Successful Startup\nDevelopment Stage";
	development_stages.push(successful_startup_development_stage);
    }
    // development_stage END
    
    // theory BEGIN
    var theories = [];
    {
	var neural_communication_theory = "Neural Communication\nTheory";
	theories.push(neural_communication_theory);
	edges.push([neural_communication_theory, theory_of_field_relationship, neuroscience_field]);
    }
    {
	var rate_encoded_neural_communication_theory = "Rate Encoded\nNeural Communication\nTheory";
	theories.push(rate_encoded_neural_communication_theory);
	edges.push([rate_encoded_neural_communication_theory, theory_of_field_relationship, neuroscience_field]);
	edges.push([rate_encoded_neural_communication_theory, parent_theory_relationship, neural_communication_theory]);
    }
    {
	var spike_encoded_neural_communication_theory = "Spike Encoded\nNeural Communication\nTheory";
	theories.push(spike_encoded_neural_communication_theory);
	edges.push([spike_encoded_neural_communication_theory, theory_of_field_relationship, neuroscience_field]);
	edges.push([spike_encoded_neural_communication_theory, parent_theory_relationship, neural_communication_theory]);
    }
    {
	var social_emotional_learning_theory = "Social Emotional Learning\nTheory";
	theories.push(social_emotional_learning_theory);
	edges.push([social_emotional_learning_theory, theory_of_field_relationship, neuroscience_field]);
	edges.push([social_emotional_learning_theory, theory_of_field_relationship, psychology_field]);
    }
    {
	var vertical_control_horizontal_communication_theory = "Vertical Control\nHorizontal Communication\nTheory"
	theories.push(vertical_control_horizontal_communication_theory);
	edges.push([vertical_control_horizontal_communication_theory, theory_of_field_relationship, neuroscience_field]);
	edges.push([vertical_control_horizontal_communication_theory, theory_of_field_relationship, psychology_field]);
    }
    {
	var mirror_neuron_theory = "Mirror Neuron\nTheory"
	theories.push(mirror_neuron_theory);
	edges.push([mirror_neuron_theory, theory_of_field_relationship, neuroscience_field]);
    }
    {
	var mindset_self_concept_theory = "Mindset Self-Concept\nTheory"
	theories.push(mindset_self_concept_theory);
	edges.push([mindset_self_concept_theory, theory_of_field_relationship, psychology_field]);
    }
    {
	var theory_of_mind_theory = "Theory of Mind\nTheory"
	theories.push(theory_of_mind_theory);
	edges.push([theory_of_mind_theory, theory_of_field_relationship, neuroscience_field]);
	edges.push([theory_of_mind_theory, theory_of_field_relationship, psychology_field]);
    }
    {
	var metacognition_theory = "Metacognition\nTheory"
	theories.push(metacognition_theory);
	edges.push([metacognition_theory, theory_of_field_relationship, neuroscience_field]);
	edges.push([metacognition_theory, theory_of_field_relationship, psychology_field]);
    }
    {
	var computational_metacognition_theory = "Computational Metacognition\nTheory"
	theories.push(computational_metacognition_theory);
	edges.push([computational_metacognition_theory, theory_of_field_relationship, artificial_intelligence_field]);
    }
    {
	var computational_planning_theory = "Computational Planning\nTheory"
	theories.push(computational_planning_theory);
	edges.push([computational_planning_theory, theory_of_field_relationship, artificial_intelligence_field]);
    }
    {
	var cognitive_architecture_theory = "Cognitive Architecture\nTheory"
	theories.push(cognitive_architecture_theory);
	edges.push([cognitive_architecture_theory, theory_of_field_relationship, artificial_intelligence_field]);
	edges.push([cognitive_architecture_theory, theory_of_field_relationship, psychology_field]);
	edges.push([cognitive_architecture_theory, theory_of_field_relationship, neuroscience_field]);
    }
    {
	var alpha_go_cognitive_architecture_theory = "DeepMind's AlphaGo\nCognitive Architecture\nTheory"
	theories.push(alpha_go_cognitive_architecture_theory);
	edges.push([alpha_go_cognitive_architecture_theory, parent_theory_relationship, cognitive_architecture_theory]);
	edges.push([alpha_go_cognitive_architecture_theory, technology_at_development_stage, toy_problem_development_stage]);
    }
    {
	var linear_algebra_theory = "Linear Algebra\nTheory";
	theories.push(linear_algebra_theory);
	edges.push([linear_algebra_theory, theory_of_field_relationship, computer_science_field]);
    }
    {
	var graph_theory = "Graph\nTheory";
	theories.push(graph_theory);
	edges.push([graph_theory, theory_of_field_relationship, computer_science_field]);
    }
    // theory END
    
    // technology BEGIN
    var technologies = [];
    {
	var artificial_neural_network_technology = "Artificial\nNeural Network\nTechnology";
	technologies.push(artificial_neural_network_technology);
	edges.push([artificial_neural_network_technology, technology_at_development_stage, successful_startup_development_stage]);
    }
    {
	var feedforward_backpropogate_artificial_neural_network_technology = "Feedforward Backpropogate\nArtificial Neural Network\nTechnology";
	technologies.push(feedforward_backpropogate_artificial_neural_network_technology);
	edges.push([feedforward_backpropogate_artificial_neural_network_technology, parent_technology_relationship, artificial_neural_network_technology]);
	edges.push([feedforward_backpropogate_artificial_neural_network_technology, technology_implements_theory, rate_encoded_neural_communication_theory]);
    }
    {
	var spiking_artificial_neural_network_technology = "Spiking\nArtificial Neural Network\nTechnology";
	technologies.push(spiking_artificial_neural_network_technology);
	edges.push([spiking_artificial_neural_network_technology, parent_technology_relationship, artificial_neural_network_technology]);
	edges.push([spiking_artificial_neural_network_technology, technology_implements_theory, spike_encoded_neural_communication_theory]);
    }
    {
	var recurrent_artificial_neural_network_technology = "Recurrent\nArtificial Neural Network\nTechnology";
	technologies.push(recurrent_artificial_neural_network_technology);
	edges.push([recurrent_artificial_neural_network_technology, parent_technology_relationship, feedforward_backpropogate_artificial_neural_network_technology]);
    }
    {
	var bidirectional_recurrent_artificial_neural_network_technology = "Bidirectional Recurrent\nArtificial Neural Network\nTechnology";
	technologies.push(bidirectional_recurrent_artificial_neural_network_technology);
	edges.push([bidirectional_recurrent_artificial_neural_network_technology, parent_technology_relationship, recurrent_artificial_neural_network_technology]);
    }
    {
	var linear_algebra_technology = "Linear Algebra\nTechnology";
	technologies.push(linear_algebra_technology);
	edges.push([linear_algebra_technology, technology_implements_theory, linear_algebra_theory]);
    }
    {
	var graph_technology = "Graph\nTechnology";
	technologies.push(graph_technology);
	edges.push([graph_technology, can_be_implemented_with_relationship, linear_algebra_technology]);
	edges.push([graph_technology, technology_implements_theory, graph_theory]);
    }
    {
	var semantic_graph_reasoning_technology = "Semantic Graph Reasoning\nTechnology";
	technologies.push(semantic_graph_reasoning_technology);
	edges.push([semantic_graph_reasoning_technology, parent_technology_relationship, graph_technology]);
    }
    {
	var commonsense_reasoning_technology = "Commonsense Reasoning\nTechnology";
	technologies.push(commonsense_reasoning_technology);
	edges.push([commonsense_reasoning_technology, parent_technology_relationship, semantic_graph_reasoning_technology]);
	edges.push([commonsense_reasoning_technology, technology_at_development_stage, research_application_development_stage]);
    }
    {
	var story_understanding_technology = "Story Understanding\nTechnology";
	technologies.push(story_understanding_technology);
	edges.push([story_understanding_technology, parent_technology_relationship, commonsense_reasoning_technology]);
	edges.push([story_understanding_technology, technology_at_development_stage, toy_problem_development_stage]);
    }
    {
	var convolutional_artificial_neural_network_technology = "Convolutional\nArtificial Neural Network\nTechnology";
	technologies.push(convolutional_artificial_neural_network_technology);
	edges.push([convolutional_artificial_neural_network_technology, parent_technology_relationship, feedforward_backpropogate_artificial_neural_network_technology]);
    }
    {
	var self_organizing_maps_artificial_neural_network_technology = "Self-Organizing Maps\nArtificial Neural Network\nTechnology";
	technologies.push(self_organizing_maps_artificial_neural_network_technology);
	edges.push([self_organizing_maps_artificial_neural_network_technology, parent_technology_relationship, artificial_neural_network_technology]);
    }
    {
	var state_space_planning_technology = "State-Space Planning\nTechnology";
	technologies.push(state_space_planning_technology);
    }
    {
	var plan_space_planning_technology = "Plan-Space Planning\nTechnology";
	technologies.push(plan_space_planning_technology);
	edges.push([plan_space_planning_technology, can_be_implemented_with_relationship, state_space_planning_technology]);
    }
    {
	var monte_carlo_tree_search_technology = "Monte Carlo Tree Search\nTechnology";
	technologies.push(monte_carlo_tree_search_technology);
	edges.push([monte_carlo_tree_search_technology, parent_technology_relationship, state_space_planning_technology]);
    }
    {
	var probabilistic_reasoning_technology = "Probabilistic Reasoning\nTechnology";
	technologies.push(probabilistic_reasoning_technology);
    }
    {
	var reinforcement_learning_technology = "Reinforcement Learning\nTechnology";
	technologies.push(reinforcement_learning_technology);
    }
    {
	var alpha_go_technology = "DeepMind's AlphaGo\nTechnology";
	technologies.push(alpha_go_technology);
	edges.push([alpha_go_technology, technology_implements_theory, alpha_go_cognitive_architecture_theory]);
    }
    {
	var sensor_input_technology = "Sensor Input\nTechnology";
	technologies.push(sensor_input_technology);
    }
    {
	var visual_input_technology = "Visual Input\nTechnology";
	technologies.push(visual_input_technology);
	edges.push([visual_input_technology, parent_technology_relationship, sensor_input_technology]);
	edges.push([visual_input_technology, can_be_implemented_with_relationship, convolutional_artificial_neural_network_technology]);
    }
    {
	var signal_processing_technology = "Signal Processing\nTechnology";
	technologies.push(signal_processing_technology);
	edges.push([signal_processing_technology, can_be_implemented_with_relationship, recurrent_artificial_neural_network_technology]);
	edges.push([signal_processing_technology, can_be_implemented_with_relationship, bidirectional_recurrent_artificial_neural_network_technology]);
	edges.push([signal_processing_technology, technology_at_development_stage, successful_startup_development_stage]);
    }
    {
	var auditory_input_technology = "Auditory Input\nTechnology";
	technologies.push(auditory_input_technology);
	edges.push([auditory_input_technology, parent_technology_relationship, sensor_input_technology]);
	edges.push([auditory_input_technology, can_be_implemented_with_relationship, signal_processing_technology]);
    }
    {
	var speech_recognition_technology = "Speech Recognition\nTechnology";
	technologies.push(speech_recognition_technology);
	edges.push([speech_recognition_technology, parent_technology_relationship, auditory_input_technology]);
    }
    {
	var motor_control_technology = "Motor Control\nTechnology";
	technologies.push(motor_control_technology);
	edges.push([motor_control_technology, can_be_implemented_with_relationship, recurrent_artificial_neural_network_technology]);
    }
    // technology END
    
    // layer BEGIN
    var layers = [];
    {
	var built_in_reactive_layer = "Emotion Machine\nBuilt-In Reactive Layer\nTechnology";
	layers.push(built_in_reactive_layer);
	edges.push([built_in_reactive_layer, can_be_implemented_with_relationship, motor_control_technology]);
	edges.push([built_in_reactive_layer, can_be_implemented_with_relationship, sensor_input_technology]);
	edges.push([built_in_reactive_layer, can_be_implemented_with_relationship, alpha_go_technology]);
	edges.push([built_in_reactive_layer, can_be_implemented_with_relationship, artificial_neural_network_technology]);
    }
    {
	var learned_reactive_layer = "Emotion Machine\nLearned Reactive Layer\nTechnology";
	layers.push(learned_reactive_layer);
	edges.push([learned_reactive_layer, can_be_implemented_with_relationship, alpha_go_technology]);
	edges.push([learned_reactive_layer, can_be_implemented_with_relationship, reinforcement_learning_technology]);
	edges.push([learned_reactive_layer, can_be_implemented_with_relationship, artificial_neural_network_technology]);
	edges.push([learned_reactive_layer, can_be_implemented_with_relationship, commonsense_reasoning_technology]);
    }
    {
	var deliberative_layer = "Emotion Machine\nDeliberative Layer\nTechnology";
	layers.push(deliberative_layer);
	edges.push([deliberative_layer, can_be_implemented_with_relationship, alpha_go_technology]);
	edges.push([deliberative_layer, can_be_implemented_with_relationship, state_space_planning_technology]);
	edges.push([deliberative_layer, can_be_implemented_with_relationship, commonsense_reasoning_technology]);
	edges.push([deliberative_layer, can_be_implemented_with_relationship, story_understanding_technology]);
    }
    {
	var reflective_layer = "Emotion Machine\nReflective Layer\nTechnology";
	layers.push(reflective_layer);
	edges.push([reflective_layer, can_be_implemented_with_relationship, alpha_go_technology]);
	edges.push([reflective_layer, can_be_implemented_with_relationship, plan_space_planning_technology]);
	edges.push([reflective_layer, can_be_implemented_with_relationship, story_understanding_technology]);
    }
    {
	var self_reflective_layer = "Emotion Machine\nSelf-Reflective Layer\nTechnology";
	layers.push(self_reflective_layer);
	edges.push([self_reflective_layer, can_be_implemented_with_relationship, story_understanding_technology]);
    }
    {
	var self_conscious_layer = "Emotion Machine\nSelf-Conscious Layer\nTechnology";
	layers.push(self_conscious_layer);
	edges.push([self_conscious_layer, can_be_implemented_with_relationship, story_understanding_technology]);
    }
    // layer END
    
    var products = [];
    {
	var executive_cognitive_development_product = "Executive\nCognitive Development\nProduct";
	minor_markets.push(executive_cognitive_development_product);
	edges.push([executive_cognitive_development_product, sold_in_market_relationship, executive_cognitive_development_market]);
    }
    {
	var social_cognitive_development_product = "Social\nCognitive Development\nProduct";
	minor_markets.push(social_cognitive_development_product);
	edges.push([social_cognitive_development_product, sold_in_market_relationship, social_cognitive_development_market]);
    }
    {
	var emotional_cognitive_development_product = "Emotional\nCognitive Development\nProduct";
	minor_markets.push(emotional_cognitive_development_product);
	edges.push([emotional_cognitive_development_product, sold_in_market_relationship, emotional_cognitive_development_market]);
    }
    {
	var wearable_technology_product = "Wearable Technology\nProduct";
	products.push(wearable_technology_product);
	edges.push([wearable_technology_product, sold_in_market_relationship, personal_health_market]);
    }
    {
	var health_monitor_wearable_technology_product = "Health Monitor\nWearable Technology\nProduct";
	products.push(health_monitor_wearable_technology_product);
	edges.push([health_monitor_wearable_technology_product, parent_product_relationship, wearable_technology_product]);
    }
    {
	var fitbit_health_monitor_wearable_technology_product = "Fitbit\nHealth Monitor\nWearable Technology\nProduct";
	products.push(fitbit_health_monitor_wearable_technology_product);
	edges.push([fitbit_health_monitor_wearable_technology_product, parent_product_relationship, health_monitor_wearable_technology_product]);
	edges.push([fitbit_health_monitor_wearable_technology_product, can_be_implemented_with_relationship, signal_processing_technology]);
    }
    
    {
	var nutrition_behavior_change_technology = "Nutrition\nBehavior Change\nTechnology";
	technologies.push(nutrition_behavior_change_technology);
	edges.push([nutrition_behavior_change_technology, can_be_implemented_with_relationship, artificial_neural_network_technology]);
	edges.push([nutrition_behavior_change_technology, technology_at_development_stage, successful_startup_development_stage]);
    }
    {
	var nutrition_behavior_change_product = "Nutrition\nBehavior Change\nProduct";
	products.push(nutrition_behavior_change_product);
	edges.push([nutrition_behavior_change_product, can_be_implemented_with_relationship, nutrition_behavior_change_technology]);
	edges.push([nutrition_behavior_change_product, sold_in_market_relationship, feeding_and_eating_disorders_market]);
    }
    {
	var exercise_behavior_change_technology = "Exercise\nBehavior Change\nTechnology";
	technologies.push(exercise_behavior_change_technology);
	edges.push([exercise_behavior_change_technology, can_be_implemented_with_relationship, artificial_neural_network_technology]);
	edges.push([exercise_behavior_change_technology, technology_at_development_stage, successful_startup_development_stage]);
    }
    {
	var exercise_behavior_change_product = "Exercise\nPhysical Behavior Change\nProduct";
	products.push(exercise_behavior_change_product);
	edges.push([exercise_behavior_change_product, can_be_implemented_with_relationship, exercise_behavior_change_technology]);
	edges.push([exercise_behavior_change_product, sold_in_market_relationship, physical_health_market]);
    }
    {
	var smoking_behavior_change_technology = "Smoking\nBehavior Change\nTechnology";
	technologies.push(smoking_behavior_change_technology);
	edges.push([smoking_behavior_change_technology, can_be_implemented_with_relationship, artificial_neural_network_technology]);
	edges.push([smoking_behavior_change_technology, technology_at_development_stage, successful_startup_development_stage]);
    }
    {
	var smoking_behavior_change_product = "Smoking\nPhysical Behavior Change\nProduct";
	products.push(smoking_behavior_change_product);
	edges.push([smoking_behavior_change_product, can_be_implemented_with_relationship, smoking_behavior_change_technology]);
	edges.push([smoking_behavior_change_product, sold_in_market_relationship, substance_use_and_addictive_disorders_market]);
    }
    {
	var substance_abuse_behavior_change_technology = "Substance Abuse\nBehavior Change\nTechnology";
	technologies.push(substance_abuse_behavior_change_technology);
	edges.push([substance_abuse_behavior_change_technology, technology_at_development_stage, successful_startup_development_stage]);
    }
    {
	var substance_abuse_behavior_change_product = "Substance Abuse\nPhysical Behavior Change\nProduct";
	products.push(substance_abuse_behavior_change_product);
	edges.push([substance_abuse_behavior_change_product, can_be_implemented_with_relationship, substance_abuse_behavior_change_technology]);
	edges.push([substance_abuse_behavior_change_product, sold_in_market_relationship, substance_use_and_addictive_disorders_market]);
    }
    
    var node_concept_map               = {};
    var graph                          = sals.graph.graph__new();
    var map_size                       = 2000;
    var layers__pin_colors             = false;
    var fields__pin_colors             = false;
    var development_stages__pin_colors = true;
    var major_markets__pin_colors            = false;
    sals.demo.ai_startup_idea.graph__add_concept_line(graph,
						      "Map 1",
						      node_concept_map,
						      "Up One\nEmotion Machine\nLayer",
						      layers,
						      true,
						      -map_size, -map_size, -map_size,  map_size,
						      layers__pin_colors,
						      1, 1, 0.5, 1, 1, 0.5);
    sals.demo.ai_startup_idea.graph__add_concept_line(graph,
						      "Map 1",
						      node_concept_map,
						      null,
						      fields,
						      true,
						      -map_size, -map_size,  map_size, -map_size,
						      fields__pin_colors,
						      0.5, 0.5, 1, 0.5, 0.5, 1);
    sals.demo.ai_startup_idea.graph__add_concept_line(graph,
						      "Map 1",
						      node_concept_map,
						      null,
						      development_stages,
						      true,
						      -map_size, map_size, map_size, map_size,
						      development_stages__pin_colors,
						      1, 1, 1, 0.5, 1, 0.5);
    sals.demo.ai_startup_idea.graph__add_concept_line(graph,
						      "Map 1",
						      node_concept_map,
						      null,
						      major_markets,
						      true,
						      map_size,  map_size,  map_size, -map_size,
						      major_markets__pin_colors,
						      1, 0.5, 0.5, 1, 0.5, 0.5);
    (function() {
	for(var index = 0; index < minor_markets.length; index ++) {
	    var minor_market       = minor_markets[index];
	    var minor_market__node = sals.graph.graph_node__new(minor_market);
	    minor_market__node["vis_node"] = {
		x : 0,
		y : 0
	    };
	    sals.graph.graph__add_node(graph, minor_market__node);
	    node_concept_map[minor_market] = minor_market__node;
	}
    })();
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
	    var use_poster_size     = false; // use right-click -> save-image-as
	    var poster_size__width  = 4096;
	    var poster_size__height = 4096;
	    var width;
	    var height;
	    if (use_poster_size) {
		width   = poster_size__width;
		height  = poster_size__height;
	    } else { // otherwise, adapt to window (or iframe)
		width   = window.innerWidth;
		height  = window.innerHeight;
	    }
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


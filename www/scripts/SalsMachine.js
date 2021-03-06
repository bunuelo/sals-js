
sals.machine = {};

(function() { // deliberate_action BEGIN
    
    var object_type = sals.object.object_type__new("deliberate_action");
    sals.object_registry.add_type(object_type);
    
    sals.machine.deliberate_action__new = function(transitive_verb, parameter_frame, precondition, postcondition) {
	var self = sals.object.object__new("deliberate_action");
	sals.frame.frame__add_element(self, "transitive_verb", transitive_verb);
	sals.frame.frame__add_element(self, "parameter_frame", parameter_frame);
	sals.frame.frame__add_element(self, "precondition",    precondition);
	sals.frame.frame__add_element(self, "postcondition",   postcondition);
	return self;
    };
    
    sals.machine.deliberate_action__transitive_verb = function(self) {
	return sals.frame.frame__get_element(self, "transitive_verb");
    };
    
    sals.machine.deliberate_action__set_transitive_verb = function(self, transitive_verb) {
	sals.frame.frame__set_element(self, "transitive_verb", transitive_verb);
    };
    
    sals.machine.deliberate_action__parameter_frame = function(self) {
	return sals.frame.frame__get_element(self, "parameter_frame");
    };
    
    sals.machine.deliberate_action__set_parameter_frame = function(self, parameter_frame) {
	sals.frame.frame__set_element(self, "parameter_frame", parameter_frame);
    };
    
    sals.machine.deliberate_action__execute = function(self) {
	var transitive_verb = sals.machine.deliberate_action__transitive_verb(self);
	var parameter_frame = sals.machine.deliberate_action__parameter_frame(self);
	sals.core.log("deliberate_action__execute: transitive_verb = " + sals.primitive.string__to_string(transitive_verb) + ", frame = " + sals.frame.frame__to_string(parameter_frame));
	return true; // keep running.
    };
    
})(); // deliberate_action END

(function() { // deliberate_plan BEGIN
    
    var object_type = sals.object.object_type__new("deliberate_plan");
    sals.object_registry.add_type(object_type);
    
    sals.machine.deliberate_plan__new = function(actions) {
	var self = sals.object.object__new("deliberate_plan");
	sals.frame.frame__add_element(self, "actions", actions);
	return self;
    };
    
    sals.machine.deliberate_plan__new_empty = function() {
	var actions = [];
	return sals.machine.deliberate_plan__new(actions);
    };
    
    sals.machine.deliberate_plan__actions = function(self) {
	return sals.frame.frame__get_element(self, "actions");
    };
    
    sals.machine.deliberate_plan__set_actions = function(self, actions) {
	sals.frame.frame__set_element(self, "actions", actions);
    };
    
    sals.machine.deliberate_plan__step = function(self) {
	var actions = sals.machine.deliberate_plan__actions(self);
	if (actions.length > 0) {
	    var first_action = actions[0];
	    actions          = actions.slice(1);
	    sals.machine.deliberate_plan__set_actions(self, actions);
	    return sals.machine.deliberate_action__execute(first_action);
	} else {
	    sals.core.log("deliberate_plan__step error: actions.length == 0");
	    return false;
	}
    };
    
})(); // deliberate_plan END

(function() { // deliberate_machine BEGIN
    
    var object_type = sals.object.object_type__new("deliberate_machine");
    sals.object_registry.add_type(object_type);
    
    sals.machine.deliberate_machine__new = function(value, frame, plan, environment) {
	var self = sals.object.object__new("deliberate_machine");
	sals.frame.frame__add_element(self, "value",       value);
	sals.frame.frame__add_element(self, "frame",       frame);
	sals.frame.frame__add_element(self, "plan",        plan);
	sals.frame.frame__add_element(self, "environment", environment);
	return self;
    };
    
    sals.machine.deliberate_machine__new_empty = function() {
	var value       = null;
	var frame       = null;
	var plan        = null;
	var environment = null;
	return sals.machine.deliberate_machine__new(value, frame, plan, environment);
    };
    
    sals.machine.deliberate_machine__value = function(self) {
	return sals.frame.frame__get_element(self, "value");
    };
    
    sals.machine.deliberate_machine__set_value = function(self, value) {
	sals.frame.frame__set_element(self, "value", value);
    };
    
    sals.machine.deliberate_machine__frame = function(self) {
	return sals.frame.frame__get_element(self, "frame");
    };
    
    sals.machine.deliberate_machine__set_frame = function(self, frame) {
	sals.frame.frame__set_element(self, "frame", frame);
    };
    
    sals.machine.deliberate_machine__plan = function(self) {
	return sals.frame.frame__get_element(self, "plan");
    };
    
    sals.machine.deliberate_machine__set_plan = function(self, plan) {
	sals.frame.frame__set_element(self, "plan", plan);
    };
    
    sals.machine.deliberate_machine__environment = function(self) {
	return sals.frame.frame__get_element(self, "environment");
    };
    
    sals.machine.deliberate_machine__set_environment = function(self, environment) {
	sals.frame.frame__set_element(self, "environment", environment);
    };
    
    sals.machine.deliberate_machine__step = function(self) {
	var plan = sals.machine.deliberate_machine__plan(self);
	if (plan !== null) {
	    return sals.machine.deliberate_plan__step(plan);
	} else {
	    sals.core.log("deliberate_machine__step error: plan === null");
	    return false;
	}
    };
    
})(); // deliberate_machine END

(function() { // test deliberate_machine utilities BEGIN
    
    sals.machine.test_deliberate_machine__new = function() {
	var machine                                  = sals.machine.deliberate_machine__new_empty();
	var action__to_eat_the_tomato__precondition  = null;
	var action__to_eat_the_tomato__postcondition = null;
	var action__to_eat_the_tomato                = sals.machine.deliberate_action__new("to eat",
											   sals.frame.frame({"" : "the tomato"}),
											   action__to_eat_the_tomato__precondition,
											   action__to_eat_the_tomato__postcondition);
	var plan                                     = sals.machine.deliberate_plan__new([action__to_eat_the_tomato]);
	sals.machine.deliberate_machine__set_plan(machine, plan);
	return machine;
    };
    
    sals.machine.test_deliberate_machine = null;
    
    sals.machine.step_test_deliberate_machine = function(render_state) {
	if (sals.machine.test_deliberate_machine !== null) {
	    // step initialized test machine
	    return sals.machine.deliberate_machine__step(sals.machine.test_deliberate_machine);
	} else {
	    // initialize test machine
	    sals.machine.test_deliberate_machine = sals.machine.test_deliberate_machine__new();
	    return true;
	}
    };
    
})(); // test deliberate_machine utilities END

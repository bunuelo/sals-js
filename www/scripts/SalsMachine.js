
sals.machine = {};

(function() { // deliberate_action BEGIN
    
    var object_type = sals.object.object_type__new("deliberate_action");
    sals.object_registry.add_type(object_type);
    
    sals.machine.deliberate_action__new = function(verb, parameter_frame) {
	var self = sals.object.object__new("deliberate_action");
	sals.frame.frame__add_element(self, "verb",            verb);
	sals.frame.frame__add_element(self, "parameter_frame", parameter_frame);
	return self;
    };
    
    sals.machine.deliberate_action__name = function(self) {
	return sals.frame.frame__get_element(self, "name");
    };
    
    sals.machine.deliberate_action__set_name = function(self, name) {
	sals.frame.frame__set_element(self, "name", name);
    };
    
    sals.machine.deliberate_action__parameter_frame = function(self) {
	return sals.frame.frame__get_element(self, "parameter_frame");
    };
    
    sals.machine.deliberate_action__set_parameter_frame = function(self, parameter_frame) {
	sals.frame.frame__set_element(self, "parameter_frame", parameter_frame);
    };
    
    sals.machine.deliberate_action__execute = function(self) {
	var name            = sals.machine.deliberate_action__name(self);
	var parameter_frame = sals.machine.deliberate_action__parameter_frame(self);
	sals.core.log("deliberate_action__execute: name = " + name + ", frame = " + sals.frame.frame__to_string(parameter_frame));
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
	    sals.machine.deliberate_action__execute(first_action);
	} else {
	    sals.core.log("deliberate_plan__step error: actions.length == 0");
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
	    sals.machine.deliberate_plan__step(plan);
	} else {
	    sals.core.log("deliberate_machine__step error: plan === null");
	}
    };
    
})(); // deliberate_machine END

(function() { // test deliberate_machine utilities BEGIN
    
    sals.machine.test_deliberate_machine__new = function() {
	var machine = sals.machine.deliberate_machine__new_empty();
	var plan    = sals.machine.deliberate_plan__new([sals.machine.deliberate_action__new("to eat", sals.frame.frame({"direct-object" : "the tomato"}))]);
	sals.machine.deliberate_machine__set_plan(machine, plan);
	return machine;
    };
    
    sals.machine.test_deliberate_machine = null;
    
    sals.machine.step_test_deliberate_machine = function(render_state) {
	if (sals.machine.test_deliberate_machine === null) {
	    // test initialize
	    sals.machine.test_deliberate_machine = sals.machine.test_deliberate_machine__new();
	} else {
	    // test update
	    sals.machine.deliberate_machine__step(sals.machine.test_deliberate_machine);
	}
    };
    
})(); // test deliberate_machine utilities END

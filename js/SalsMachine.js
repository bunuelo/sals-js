
sals.machine = {};

(function() { // deliberate_action BEGIN
    
    var object_type = sals.object.object_type__new("deliberate_action");
    sals.object_registry.add_type(object_type);
    
    sals.machine.deliberate_action__new = function(name, parameter_frame) {
	var self = sals.object.object__new("deliberate_action");
	sals.frame.frame__add_element(self, "name",            name);
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
    
})(); // deliberate_action END

(function() { // deliberate_plan BEGIN
    
    var object_type = sals.object.object_type__new("deliberate_plan");
    sals.object_registry.add_type(object_type);
    
    sals.machine.deliberate_plan__new = function(actions) {
	var self = sals.object.object__new("deliberate_plan");
	sals.frame.frame__add_element(self, "actions", actions);
	return self;
    };
    
    sals.machine.deliberate_plan__actions = function(self) {
	return sals.frame.frame__get_element(self, "actions");
    };
    
    sals.machine.deliberate_plan__set_actions = function(self, actions) {
	sals.frame.frame__set_element(self, "actions", actions);
    };
    
})(); // deliberate_plan END

(function() { // deliberate_machine BEGIN
    
    var object_type = sals.object.object_type__new("deliberate_machine");
    sals.object_registry.add_type(object_type);
    
    sals.machine.deliberate_machine__new = function(value, program, stack, environment) {
	var self = sals.object.object__new("deliberate_machine");
	sals.frame.frame__add_element(self, "value",       value);
	sals.frame.frame__add_element(self, "frame",       frame);
	sals.frame.frame__add_element(self, "plan",        plan);
	sals.frame.frame__add_element(self, "environment", environment);
	return self;
    };
    
    sals.machine.deliberate_machine__new_empty = function() {
	var value       = null;
	var program     = null;
	var stack       = null;
	var environment = null;
	return sals.machine.deliberate_machine__new(value, program, stack, environment);
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
    
    sals.machine.deliberate_machine__set_frame = function(self, program) {
	sals.frame.frame__set_element(self, "frame", frame);
    };
    
    sals.machine.deliberate_machine__plan = function(self) {
	return sals.frame.frame__get_element(self, "plan");
    };
    
    sals.machine.deliberate_machine__set_plan = function(self, program) {
	sals.frame.frame__set_element(self, "plan", plan);
    };
    
    sals.machine.deliberate_machine__environment = function(self) {
	return sals.frame.frame__get_element(self, "environment");
    };
    
    sals.machine.deliberate_machine__set_environment = function(self, environment) {
	sals.frame.frame__set_element(self, "environment", environment);
    };
    
    sals.machine.deliberate_machine__step = function(self) {
	sals.core.log("deliberate_machine__step here.");
    };
    
})(); // deliberate_machine END

(function() { // test deliberate_machine utilities BEGIN
    
    sals.machine.test_deliberate_machine = null;
    
    sals.machine.test = function(render_state) {
	if (sals.machine.test_deliberate_machine === null) {
	    // test initialize
	    sals.machine.test_deliberate_machine = sals.machine.deliberate_machine__new_empty();
	} else {
	    // test update
	    sals.machine.test_deliberate_machine__step(sals.machine.test_deliberate_machine);
	}
    };
    
})(); // test deliberate_machine utilities END

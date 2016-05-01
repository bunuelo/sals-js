
sals.planner = {};

(function() { // planner_domain BEGIN
    var object_type = sals.object.object_type__new("planner_domain");
    sals.object_registry.add_type(object_type);
    
    sals.planner.planner_domain__new = function(type, object_type_frame) {
	self = sals.object.object__new("planner_domain");
	sals.frame.frame__add_element(self, "object_type_frame", object_type_frame);
	sals.frame.frame__add_element(self, "action_type_frame", action_type_frame);
	return self;
    };
    
    sals.planner.planner_domain__is_type = function(exp) {
	return sals.object.object__is_type(exp, "planner_domain");
    };
    
    sals.planner.planner_domain__object_type_frame = function(self) {
	sals.object.object_type__assert("planner_domain", self);
	return sals.frame.frame__get_element(self, "object_type_frame");
    };
    
    sals.planner.planner_domain__set_object_type_frame = function(self, value) {
	sals.object.object_type__assert("planner_domain", self);
	return sals.frame.frame__set_element(self, "object_type_frame", value);
    };
    
    sals.planner.planner_domain__action_type_frame = function(self) {
	sals.object.object_type__assert("planner_domain", self);
	return sals.frame.frame__get_element(self, "action_type_frame");
    };
    
    sals.planner.planner_domain__set_action_type_frame = function(self, value) {
	sals.object.object_type__assert("planner_domain", self);
	return sals.frame.frame__set_element(self, "action_type_frame", value);
    };
    
    sals.planner.planner_domain__to_string = function(self) {
	sals.object.object_type__assert("planner_domain", self);
	return sals.frame.frame__to_string(self);
    };
    
})(); // planner_domain END

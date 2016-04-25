
sals.logic = {};

(function() { // predicate_type BEGIN
    var object_type = sals.object.object_type__new("predicate_type");
    sals.object_registry.add_type(object_type);
    
    sals.logic.predicate_type__new = function(verb_transitive, parameter_frame) {
	self = sals.object.object__new("predicate_type");
	sals.frame__add_element(self, "verb_transitive", verb_transitive);
	sals.frame__add_element(self, "parameter_frame", parameter_frame);
	return self;
    };
    
    sals.logic.predicate_type__is_type = function(exp) {
	return sals.object.object__is_type(exp, "predicate_type");
    };
    
    sals.logic.predicate_type__verb_transitive = function(self) {
	return sals.frame__get_element(self, "verb_transitive");
    };
    
    sals.logic.predicate_type__set_verb_transitive = function(self, value) {
	return sals.frame__set_element(self, "verb_transitive", value);
    };
    
    sals.logic.predicate_type__parameter_frame = function(self) {
	return sals.frame__get_element(self, "parameter_frame");
    };
    
    sals.logic.predicate_type__set_parameter_frame = function(self, value) {
	return sals.frame__set_element(self, "parameter_frame", value);
    };
    
})(); // predicate_type END

sals.logic.test_logic = function() {
    console.log("test_logic here.");
};


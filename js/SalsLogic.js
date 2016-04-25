
sals.logic = {};

(function() { // parameter_type BEGIN
    var object_type = sals.object.object_type__new("parameter_type");
    sals.object_registry.add_type(object_type);
    
    sals.logic.parameter_type__new = function(noun_reference) {
	self = sals.object.object__new("parameter_type");
	sals.frame.frame__add_element(self, "noun_reference", noun_reference);
	return self;
    };
    
    sals.logic.parameter_type__is_type = function(exp) {
	return sals.object.object__is_type(exp, "parameter_type");
    };
    
    sals.logic.parameter_type__noun_reference = function(self) {
	return sals.frame.frame__get_element(self, "noun_reference");
    };
    
    sals.logic.parameter_type__set_noun_reference = function(self, value) {
	return sals.frame.frame__set_element(self, "noun_reference", value);
    };
    
})(); // parameter_type END

(function() { // predicate_type BEGIN
    var object_type = sals.object.object_type__new("predicate_type");
    sals.object_registry.add_type(object_type);
    
    sals.logic.predicate_type__new = function(verb_transitive, parameter_type_frame) {
	self = sals.object.object__new("predicate_type");
	sals.frame.frame__add_element(self, "verb_transitive", verb_transitive);
	sals.frame.frame__add_element(self, "parameter_type_frame", parameter_type_frame);
	return self;
    };
    
    sals.logic.predicate_type__is_type = function(exp) {
	return sals.object.object__is_type(exp, "predicate_type");
    };
    
    sals.logic.predicate_type__verb_transitive = function(self) {
	return sals.frame.frame__get_element(self, "verb_transitive");
    };
    
    sals.logic.predicate_type__set_verb_transitive = function(self, value) {
	return sals.frame.frame__set_element(self, "verb_transitive", value);
    };
    
    sals.logic.predicate_type__parameter_type_frame = function(self) {
	return sals.frame.frame__get_element(self, "parameter_type_frame");
    };
    
    sals.logic.predicate_type__set_parameter_type_frame = function(self, value) {
	return sals.frame.frame__set_element(self, "parameter_type_frame", value);
    };
    
})(); // predicate_type END

(function() { // predicate BEGIN
    var object_type = sals.object.object_type__new("predicate");
    sals.object_registry.add_type(object_type);
    
    sals.logic.predicate__new = function(type, parameter_frame) {
	self = sals.object.object__new("predicate");
	sals.frame.frame__add_element(self, "type",            type);
	sals.frame.frame__add_element(self, "parameter_frame", parameter_frame);
	return self;
    };
    
    sals.logic.predicate__is_type = function(exp) {
	return sals.object.object__is_type(exp, "predicate");
    };
    
    sals.logic.predicate__verb_transitive = function(self) {
	return sals.frame.frame__get_element(self, "verb_transitive");
    };
    
    sals.logic.predicate__set_verb_transitive = function(self, value) {
	return sals.frame.frame__set_element(self, "verb_transitive", value);
    };
    
    sals.logic.predicate__parameter_frame = function(self) {
	return sals.frame.frame__get_element(self, "parameter_frame");
    };
    
    sals.logic.predicate__set_parameter_frame = function(self, value) {
	return sals.frame.frame__set_element(self, "parameter_frame", value);
    };
    
})(); // predicate END

sals.logic.test_logic = function() {
    console.log("test_logic here.");
    sals.logic.predicate_type__new("to eat", sals.frame.frame({"" : sals.logic.parameter_type__new("a food")}));
};


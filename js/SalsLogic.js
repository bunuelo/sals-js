
sals.logic = {};

(function() { // proposition BEGIN
    var object_type = sals.object.object_type__new("proposition");
    sals.object_registry.add_type(object_type);
    
    sals.logic.proposition__new = function() {
	self = sals.object.object__new("proposition");
	return self;
    };
    
    sals.logic.proposition__is_type = function(exp) {
	return sals.object.object__is_type(exp, "proposition");
    };
    
})(); // proposition END

(function() { // frame_proposition BEGIN
    var object_type = sals.object.object_type__new("frame_proposition");
    sals.object.object_type__add_parent(object_type, sals.object_registry.get_type("proposition"));
    sals.object_registry.add_type(object_type);
    
    sals.logic.frame_proposition__new = function(path, value) {
	self = sals.object.object__new("frame_proposition");
	sals.frame.frame__add_element(self, "path",  path);
	sals.frame.frame__add_element(self, "value", value);
	return self;
    };
    
    sals.logic.frame_proposition__is_type = function(exp) {
	return sals.object.object__is_type(exp, "frame_proposition");
    };
    
    sals.logic.frame_proposition__path = function(self) {
	return sals.frame.frame__get_element(self, "path");
    };
    
    sals.logic.frame_proposition__set_path = function(self, value) {
	return sals.frame.frame__set_element(self, "path", value);
    };
    
    sals.logic.frame_proposition__value = function(self) {
	return sals.frame.frame__get_element(self, "value");
    };
    
    sals.logic.frame_proposition__set_value = function(self, value) {
	return sals.frame.frame__set_element(self, "value", value);
    };
    
})(); // frame_proposition END

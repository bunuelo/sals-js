
sals.frame_array = {};

(function() { // frame_array BEGIN
    var object_type = sals.object.object_type__new("frame_array");
    sals.object_registry.add_type(object_type);
    
    sals.frame_array.frame_array__new = function(length) {
	self = sals.object.object__new("frame_array");
	sals.frame.frame__add_element(self, "length", length);
	(function() {
	    var index = 0;
	    while (index < length) {
		sals.frame.frame__add_element(self, index, null);
	    }
	})();
	return self;
    };
    
    sals.frame_array.frame_array__new_empty = function() {
	var length = 0;
	return sals.frame_array.frame_array__new(length);
    };
    
    sals.frame_array.frame_array__is_type = function(exp) {
	return sals.object.object__is_type(exp, "frame_array");
    };
    
    sals.frame_array.frame_array__length = function(self) {
	sals.object.object_type__assert("frame_array", self);
	return sals.frame.frame__get_element(self, "length");
    };
    
    sals.frame_array.frame_array__set_length = function(self, value) {
	sals.object.object_type__assert("frame_array", self);
	return sals.frame.frame__set_element(self, "length", value);
    };
    
    sals.frame_array.frame_array__get_element = function(self, index) {
	sals.object.object_type__assert("frame_array", self);
	return sals.frame.frame__get_element(self, index);
    };
    
    sals.frame_array.frame_array__set_element = function(self, index, value) {
	sals.object.object_type__assert("frame_array", self);
	return sals.frame.frame__set_element(self, index, value);
    };
    
    sals.frame_array.frame_array__push = function(self, value) {
	sals.object.object_type__assert("frame_array", self);
	var index = sals.frame_array.frame_array__length(self);
	sals.frame_array.frame_array__set_length(self, index + 1);
	sals.frame_array.frame_array__set_element(self, index, value);
    };
    
    sals.frame_array.frame_array__to_string = function(self) {
	sals.object.object_type__assert("frame_array", self);
	return sals.frame.frame__to_string(self);
    };
    
})(); // frame_array END

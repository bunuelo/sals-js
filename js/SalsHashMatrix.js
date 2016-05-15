
sals.hash_matrix = {};

(function() { // hash_matrix BEGIN
    var object_type = sals.object.object_type__new("hash_matrix");
    sals.object_registry.add_type(object_type);
    
    sals.hash_matrix.hash_matrix__size = 16;
    
    sals.hash_matrix.hash_matrix__new = function() {
	var self  = sals.object.object__new("hash_matrix");
	var frame = sals.frame.frame__new();
	sals.frame.frame__add_element(self, "frame", frame);
	return self;
    };
    
    sals.hash_matrix.hash_matrix__frame = function(self) {
	return sals.frame.frame__get_element(self, "frame");
    };
    
    sals.hash_matrix.hash_matrix__set_frame = function(self, value) {
	sals.frame.frame__set_element(self, "frame", value);
    };
    
    sals.hash_matrix.hash_matrix__get_frame_frame = function(self, i_key) {
	var frame        = sals.hash_matrix.hash_matrix__frame(self);
	var frame__frame = sals.frame.frame__try_get_element(frame, i_key);
	if (frame__frame === null) {
	    frame__frame = sals.frame.frame__new();
	    sals.frame.frame__add_element(self, i_key, frame__frame);
	}
	return frame__frame;
    };
    
    sals.hash_matrix.hash_matrix__get_element = function(self, i_key, j_key) {
	var frame        = sals.hash_matrix.hash_matrix__frame(self);
	var frame__frame = sals.frame.frame__try_get_element(frame, i_key);
	var frame__frame__value;
	if (frame__frame === null) {
	    frame__frame__value = 0;
	} else {
	    frame__frame__value = sals.frame.frame__try_get_element(frame__frame, j_key);
	    if (frame__frame__value === null) {
		frame__frame__value = 0;
	    }
	}
	return frame__frame__value;
    };
    
    sals.hash_matrix.hash_matrix__set_element = function(self, i_key, j_key, value) {
	var frame__frame = sals.hash_matrix.hash_matrix__get_frame_frame(self, i_key);
	if (sals.frame.frame__contains_key(frame__frame, j_key)) {
	    sals.frame.frame__set_element(frame__frame, j_key, value);
	} else {
	    sals.frame.frame__add_element(frame__frame, j_key, value);
	}
    };
    
})(); // hash_matrix END


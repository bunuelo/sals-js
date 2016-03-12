
sals.frame = {};

sals.frame.frame_uid_map = {};

sals.frame.uid__next_value = 0;

sals.frame.uid__new = function() {
    var uid = "uid-" + sals.frame.uid__next_value;
    sals.frame.uid__next_value ++;
    return uid;
};

sals.frame.frame__new = function() {
    var frame__uid = sals.frame.uid__new();
    var frame                = {};
    frame["__meta__"]        = {};
    frame["__meta__"]["uid"] = frame__uid;
    sals.frame.frame_uid_map[frame__uid] = frame;
    return frame;
};

sals.frame.frame__is_type = function(obj) {
    if (obj === null) {
	return false;
    }
    if (typeof(obj) === "object") {
	return true;
    }
    return false;
};

sals.frame.frame__uid = function(self) {
    return self["__meta__"]["uid"];
};

sals.frame.frame__key_count = function(self) {
    return Object.keys(self).length - 1;
};

sals.frame.frame__get_element = function(self, key) {
    if (! (key in self)) {
	throw new Error("sals.frame.frame__get_element ERROR: self does not contain key (" + key + ").");
    }
    return self[key];
};

sals.frame.frame__set_element = function(self, key, value) {
    if (! (key in self)) {
	throw new Error("sals.frame.frame__set_element ERROR: self does not contain key (" + key + ").");
    }
    self[key] = value;
};

sals.frame.frame__add_element = function(self, key, value) {
    if (key in self) {
	throw new Error("sals.frame.frame__add_element ERROR: self already contains key (" + key + ").");
    }
    self[key] = value;
};

sals.frame.frame__contains_key = function(self, key) {
    return (self.hasOwnProperty(key));
};

sals.frame.frame__foreach_key = function(self, element_func) {
    for (key in self) {
	if (key !== "__meta__") {
	    element_func(key);
	}
    }
};

sals.frame.frame__foreach_value = function(self, element_func) {
    for (key in self) {
	element_func(self[key]);
    }
};

sals.frame.frame__to_string_with_uid_frame = function(self, uid_frame) {
    var self__uid = sals.frame.frame__uid(self);
    if (sals.frame.frame__contains_key(uid_frame, frame__uid)) {
	return "<>";
    } else {
	sals.frame.frame__add_element(uid_frame, frame__uid, true);
	var str = "{";
	(function() {
	    var key_index = 0;
	    sals.frame.frame__foreach_key(self, function(key) {
		if (key_index > 0) {
		    str += " ";
		}
		var value     = sals.frame.frame__get_element(self, key);
		var value_str = null;
		if (sals.frame.frame__is_type(value)) {
		    value_str = sals.frame.frame__to_string(value);
		} else {
		    value_str = "" + value;
		}
		str += (key + ":" + value_str);
		key_index ++;
	    });
	    str += "}";
	})();
	return str;
    }
}

sals.frame.frame__to_string = function(self) {
    var uid_frame = sals.frame.new_frame();
    return sals.frame.frame__to_string_with_uid_frame(self, uid_frame);
};

sals.frame.flat_frame__new = function(frame) {
    var self = sals.frame.frame__new();
    sals.frame.frame__foreach_key(frame, function(key) {
	var value = sals.frame.frame__get_element(frame, key);
	if (sals.frame.frame__is_type(value)) {
	    var value__uid = sals.frame.frame__uid(value);
	    sals.frame.frame__set_element(self, key, value__uid);
	} else {
	    sals.frame.frame__set_element(self, key, value);
	}
    });
    return self;
};

sals.frame.flat_frame_uid_map__new = function() {
    var self = sals.frame.frame__new();
    return self;
};

sals.frame.flat_frame_uid_map__contains_uid = function(self, uid) {
    return sals.frame.frame__contains_key(self, uid);
};

sals.frame.flat_frame_uid_map__add_frame = function(self, frame) {
    var frame__uid = sals.frame.frame__uid(frame);
    var flat_frame = sals.frame.flat_frame__new(frame);
    sals.frame.frame__set_element(self, frame__uid, flat_frame);
};

sals.frame.flat_frame_uid_map__try_add_frame_recursively = function(self, frame) {
    var frame__uid = sals.frame.frame__uid(frame);
    if (! sals.frame.flat_frame_uid_map__contains_uid(self, frame__uid)) {
	sals.frame.flat_frame_uid_map__add_frame_recursively(self, frame);
    }
};

sals.frame.flat_frame_uid_map__add_frame_recursively = function(self, frame) {
    sals.frame.flat_frame_uid_map__add_frame(self, frame);
    sals.frame.frame__foreach_key(frame, function(frame_key) {
	var frame_value = sals.frame.frame__get_element(frame, frame_key);
	if (sals.frame.frame__is_type(frame_value)) {
	    sals.frame.flat_frame_uid_map__try_add_frame_recursively(self, frame_value);
	}
    });
};

sals.frame.test = function() {
    var frame1 = sals.frame.frame__new();
    var frame2 = sals.frame.frame__new();
    sals.frame.frame__set_element(frame1, "child", frame2);
    sals.frame.frame__set_element(frame2, "test", 4);
    var flat_frame_uid_map = sals.frame.flat_frame_uid_map__new();
    sals.frame.flat_frame_uid_map__add_frame_recursively(flat_frame_uid_map, frame1);
    return sals.frame.frame__to_string(flat_frame_uid_map);
};

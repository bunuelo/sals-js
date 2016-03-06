
sals.frame = {};

sals.frame.frame_uid_map = {};

sals.frame.uid__next_value = 0;

sals.frame.uid__new = function() {
    var uid = "" + sals.frame.uid__next_value;
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
    if (typeof(obj) === "object") {
	return true;
    }
    return false;
};

sals.frame.frame__get_element = function(self, key) {
    return self[key];
};

sals.frame.frame__set_element = function(self, key, value) {
    self[key] = value;
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

sals.frame.frame__to_string = function(self) {
    var str = "{";
    sals.frame.frame__foreach_key(self, function(key) {
	var value     = sals.frame.frame__get_element(self, key);
	var value_str = null;
	if (sals.frame.frame__is_type(value)) {
	    value_str = sals.frame.frame__to_string(value);
	} else {
	    value_str = "" + value;
	}
	str += (key + ":" + value_str);
    });
    str += "}";
    return str;
};

sals.frame.test = function() {
    var frame1 = sals.frame.frame__new();
    var frame2 = sals.frame.frame__new();
    sals.frame.frame__set_element(frame1, "child", frame2);
    sals.frame.frame__set_element(frame2, "test", 4);
    return sals.frame.frame__to_string(frame1);
};

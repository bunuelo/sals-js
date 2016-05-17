
sals.object = {};

// object BEGIN

sals.object.object__new = function(type) {
    var self = sals.frame.frame__new();
    sals.frame.frame__add_meta_element(self, "type", type);
    return self;
};

sals.object.object__type = function(exp) {
    if (exp === null) {
	return null;
    } else {
	if (! sals.frame.frame__contains_meta_key(exp, "type")) {
	    
	} else {
	    return sals.frame.frame__get_meta_element(exp, "type");
	}
    }
};

sals.object.object__is_type = function(exp, type) {
b    return (sals.object.object__type(exp) === type);
};

// object END

// object_type BEGIN

sals.object.object_type__new = function(name) {
    var self      = sals.object.object__new("object_type");
    var parents   = null;
    var functions = sals.frame.frame__new();
    sals.frame.frame__add_element(self, "name",      name);
    sals.frame.frame__add_element(self, "parents",   parents);
    sals.frame.frame__add_element(self, "functions", functions);
    return self;
};

sals.object.object_type__is_type = function(exp) {
    return sals.object.object__is_type(exp, "object_type");
};

sals.object.object_type__name = function(self) {
    return sals.frame.frame__get_element(self, "name");
};

sals.object.object_type__parents = function(self) {
    return sals.frame.frame__get_element(self, "parents");
};

sals.object.object_type__set_parents = function(self, value) {
    return sals.frame.frame__set_element(self, "parents", value);
};

sals.object.object_type__add_parent = function(self, parent) {
    var parents = sals.object.object_type__parents(self);
    var new_cons = sals.cons.cons__new(parent, parents);
    sals.object.object_type__set_parents(self, new_cons);
};

sals.object.object_type__functions = function(self) {
    return sals.frame.frame__get_element(self, "functions");
};

sals.object.object_type__add_function = function(self, function_name, func) {
    var functions = sals.object.object_type__functions(self);
    sals.frame.frame__add_element(functions, function_name, func);
};

sals.object.object_type__get_function = function(self, function_name) {
    var functions = sals.object.object_type__functions(self);
    return sals.frame.frame__get_element(functions, function_name);
};

sals.object.throw_new_object_type_error = function(correct_type, incorrect_type, incorrect_object) {
    var message =
	("{" + (("type"             + ":" + "type_error")                                       + "," +
		("incorrect_object" + ":" + sals.primitive.string__to_string(incorrect_object)) + "," +
		("incorrect_type"   + ":" + sals.primitive.string__to_string(incorrect_type))   + "," +
		("correct_type"     + ":" + sals.primitive.string__to_string(correct_type)))          + "}");
    sals.core.throw_new_error(message);
};

sals.object.object_type__assert = function(correct_type, exp) {
    if (! sals.object.object__is_type(exp, correct_type)) {
	(function() {
	    var incorrect_type = sals.object.object__type(exp);
	    sals.core.throw_new_object_type_error(correct_type, incorrect_type, exp);
	})();
    }
};

// object_type END

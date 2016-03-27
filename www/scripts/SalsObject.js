
sals.object = {};

// object BEGIN

sals.object.object__new = function(type) {
    var self = sals.frame.frame__new();
    sals.frame.frame__add_meta_element(self, "type", type);
    return self;
};

sals.object.object__get_type = function(exp) {
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
    return (sals.object.object__get_type(exp) === type);
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

// object_type END

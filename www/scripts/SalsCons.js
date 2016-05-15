
sals.cons = {};

(function() { // cons BEGIN
    var object_type = sals.object.object_type__new("cons");
    sals.object_registry.add_type(object_type);
    
    sals.cons.cons__new = function(car, cdr) {
	var self = sals.object.object__new("cons");
	sals.frame.frame__add_element(self, "car", car);
	sals.frame.frame__add_element(self, "cdr", cdr);
	return self;
    };
    
    sals.cons.cons__is_type = function(exp) {
	return sals.object.object__is_type(exp, "cons");
    };
    
    sals.cons.cons__car = function(self) {
	return sals.frame.frame__get_element(self, "car");
    };
    
    sals.cons.cons__set_car = function(self, value) {
	return sals.frame.frame__set_element(self, "car", value);
    };
    
    sals.cons.cons__cdr = function(self) {
	return sals.frame.frame__get_element(self, "cdr");
    };
    
    sals.cons.cons__set_cdr = function(self, value) {
	return sals.frame.frame__set_element(self, "cdr", value);
    };
    
})(); // cons END


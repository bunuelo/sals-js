
sals.logic = {};

(function() { // preedicate BEGIN
    var object_type = sals.object.object_type__new("predicate");
    sals.object_registry.add_type(object_type);
    
    sals.logic.predicate__new = function() {
	self = sals.object.object__new("predicate");
	return self;
    };
    
    sals.logic.predicate__is_type = function(exp) {
	return sals.object.object__is_type(exp, "predicate");
    };
    
})(); // predicate END

sals.logic.test_logic = function() {
    console.log("test_logic here.");
};


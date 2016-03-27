
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
    
    sals.logic.frame_proposition__new = function() {
	self = sals.object.object__new("frame_proposition");
	return self;
    };
    
    sals.logic.frame_proposition__is_type = function(exp) {
	return sals.object.object__is_type(exp, "frame_proposition");
    };
    
})(); // frame_proposition END

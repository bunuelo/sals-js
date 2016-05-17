
sals.pattern = {};

(function() { // pattern BEGIN
    var object_type = sals.object.object_type__new("pattern");
    sals.object_registry.add_type(object_type);
    
    sals.pattern.pattern__new = function(array) {
	var self = sals.object.object__new("pattern");
	sals.frame.frame__add_element(self, "array", array);
	return self;
    };
    
    sals.pattern.pattern__array = function(self) {
	return sals.frame.frame__get_element(self, "array");
    };
    
    sals.pattern.pattern__set_array = function(self, value) {
	sals.frame.frame__set_element(self, "array", value);
    };
    
    sals.pattern.pattern__to_string = function(self) {
	var array = sals.pattern.pattern__array(self);
	var to_string = "(pattern";
	var array__length = array.length;
	var array__index  = 0;
	while (array__index < array__length) {
	    to_string += " \"" + array[array__index] + "\"";
	    array__index ++;
	}
	to_string += ")";
	return to_string;
    };
    
    sals.pattern.pattern__new_from_string = function(str) {
	var array = new Array(1);
	array[0] = str;
	return sals.pattern.pattern__new(array);
    };
    
})(); // pattern END

sals.pattern.generate_test_patterns = function() {
    var inputs         = ["the dog is brown",
			  "the fox is red",
			  "the fox is green"];
    var patterns       = [];
    var inputs__length = inputs.length;
    var inputs__index  = 0;
    while (inputs__index < inputs__length) {
	(function() {
	    var input = inputs[inputs__index];
	    sals.core.log("input = " + input);
	    var input__pattern = sals.pattern.pattern__new_from_string(input);
	    patterns.push(input__pattern);
	})();
	inputs__index ++;
    }
    return patterns;
};

sals.pattern.test_pattern = function() {
    sals.core.log("test_pattern HERE.");
    var test_patterns         = sals.pattern.generate_test_patterns();
    var test_patterns__length = test_patterns.length;
    var test_patterns__index  = 0;
    while (test_patterns__index < test_patterns__length) {
	(function() {
	    var test_pattern = test_patterns[test_patterns__index];
	    sals.core.log("test_pattern = " + sals.pattern.pattern__to_string(test_pattern));
	})();
	test_patterns__index ++;
    }
    sals.core.log("test_pattern DONE.");
};

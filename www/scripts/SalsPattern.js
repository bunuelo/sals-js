
sals.pattern = {};

(function() { // pattern_variable BEGIN
    var object_type = sals.object.object_type__new("pattern_variable");
    sals.object_registry.add_type(object_type);
    
    sals.pattern.pattern_variable__new = function(name) {
	var self = sals.object.object__new("pattern_variable");
	sals.frame.frame__add_element(self, "name", name);
	return self;
    };
    
    sals.pattern.pattern_variable__is_type = function(exp) {
	return sals.object.object__is_type(exp, "pattern_variable");
    };
    
    sals.pattern.pattern_variable__name = function(self) {
	return sals.frame.frame__get_element(self, "name");
    };
    
    sals.pattern.pattern_variable__set_name = function(self, value) {
	sals.frame.frame__set_element(self, "name", value);
    };
    
    sals.pattern.pattern_variable__to_string = function(self) {
	var name = sals.pattern.pattern_variable__name(self);
	var to_string = "?" + name;
	return to_string;
    };
    
})(); // pattern_variable END

(function() { // pattern BEGIN
    var object_type = sals.object.object_type__new("pattern");
    sals.object_registry.add_type(object_type);
    
    sals.pattern.pattern__new = function(array) {
	var self = sals.object.object__new("pattern");
	sals.frame.frame__add_element(self, "array", array);
	return self;
    };
    
    sals.pattern.pattern__is_type = function(exp) {
	return sals.object.object__is_type(exp, "pattern");
    };
    
    sals.pattern.pattern__array = function(self) {
	return sals.frame.frame__get_element(self, "array");
    };
    
    sals.pattern.pattern__set_array = function(self, value) {
	sals.frame.frame__set_element(self, "array", value);
    };
    
    sals.pattern.pattern__to_string = function(self) {
	var array = sals.pattern.pattern__array(self);
	var to_string = "[";
	var array__length = array.length;
	var array__index  = 0;
	while (array__index < array__length) {
	    to_string += ((array__index == 0) ? "" : " ") + sals.pattern.expression__to_string(array[array__index]);
	    array__index ++;
	}
	to_string += "]";
	return to_string;
    };
    
    sals.pattern.pattern__new_from_string = function(str) {
	var array = new Array(1);
	array[0] = str;
	return sals.pattern.pattern__new(array);
    };
    
})(); // pattern END

(function() { // pattern_and
    var object_type = sals.object.object_type__new("pattern_and");
    sals.object_registry.add_type(object_type);
    
    sals.pattern.pattern_and__new = function(expressions) {
	var self = sals.object.object__new("pattern_and");
	sals.frame.frame__add_element(self, "expressions", expressions);
	return self;
    };
    
    sals.pattern.pattern_and__is_type = function(exp) {
	return sals.object.object__is_type(exp, "pattern_and");
    };
    
    sals.pattern.pattern_and__expressions = function(self) {
	return sals.frame.frame__get_element(self, "expressions");
    };
    
    sals.pattern.pattern_and__set_expressions = function(self, value) {
	sals.frame.frame__set_element(self, "expressions", value);
    };
    
    sals.pattern.pattern_and__to_string = function(self) {
	var expressions         = sals.pattern.pattern_and__expressions(self);
	var to_string           = "(";
	var expressions__length = expressions.length;
	var expressions__index  = 0;
	while (expressions__index < expressions__length) {
	    (function() {
		var expression         = expressions[expressions__index];
		var expression__string = "" + sals.pattern.pattern__to_string(expression);
		to_string += ((expressions__index == 0) ? "" : " && ") + expression__string;
	    })();
	    expressions__index ++;
	}
	to_string += ")";
	return to_string;
    };
    
})(); // pattern_and END

(function() { // pattern_implies
    var object_type = sals.object.object_type__new("pattern_implies");
    sals.object_registry.add_type(object_type);
    
    sals.pattern.pattern_implies__new = function(antecedent, consequent) {
	var self = sals.object.object__new("pattern_implies");
	sals.frame.frame__add_element(self, "antecedent", antecedent);
	sals.frame.frame__add_element(self, "consequent", consequent);
	return self;
    };
    
    sals.pattern.pattern_implies__is_type = function(exp) {
	return sals.object.object__is_type(exp, "pattern_implies");
    };
    
    sals.pattern.pattern_implies__antecedent = function(self) {
	return sals.frame.frame__get_element(self, "antecedent");
    };
    
    sals.pattern.pattern_implies__set_antecedent = function(self, value) {
	sals.frame.frame__set_element(self, "antecedent", value);
    };
    
    sals.pattern.pattern_implies__consequent = function(self) {
	return sals.frame.frame__get_element(self, "consequent");
    };
    
    sals.pattern.pattern_implies__set_consequent = function(self, value) {
	sals.frame.frame__set_element(self, "consequent", value);
    };
    
    sals.pattern.pattern_implies__to_string = function(self) {
	var antecedent = sals.pattern.pattern_implies__antecedent(self);
	var consequent = sals.pattern.pattern_implies__consequent(self);
	var to_string  = "(" + sals.pattern.expression__to_string(antecedent) + " => " + sals.pattern.expression__to_string(consequent) + ")";
	return to_string;
    };
    
})(); // pattern_implies END

(function() { // pattern_set
    var object_type = sals.object.object_type__new("pattern_set");
    sals.object_registry.add_type(object_type);
    
    sals.pattern.pattern_set__new = function(expressions) {
	var self = sals.object.object__new("pattern_set");
	sals.frame.frame__add_element(self, "expressions", expressions);
	return self;
    };
    
    sals.pattern.pattern_set__is_type = function(exp) {
	return sals.object.object__is_type(exp, "pattern_set");
    };
    
    sals.pattern.pattern_set__expressions = function(self) {
	return sals.frame.frame__get_element(self, "expressions");
    };
    
    sals.pattern.pattern_set__set_expressions = function(self, value) {
	sals.frame.frame__set_element(self, "expressions", value);
    };
    
    sals.pattern.pattern_set__to_string = function(self) {
	var expressions         = sals.pattern.pattern_set__expressions(self);
	var to_string           = "(pattern_set ";
	var expressions__length = expressions.length;
	var expressions__index  = 0;
	while (expressions__index < expressions__length) {
	    (function() {
		var expression         = expressions[expressions__index];
		var expression__string = "" + sals.pattern.pattern__to_string(expression);
		to_string += " " + expression__string;
	    })();
	    expressions__index ++;
	}
	to_string += ")";
	return to_string;
    };
    
})(); // pattern_set END

sals.pattern.expression__to_string = function(expression) {
    if      (sals.pattern.pattern_variable__is_type(expression)) {return sals.pattern.pattern_variable__to_string(expression);}
    else if (sals.pattern.pattern__is_type(expression))          {return sals.pattern.pattern__to_string(expression);}
    else if (sals.pattern.pattern_and__is_type(expression))      {return sals.pattern.pattern_and__to_string(expression);}
    else if (sals.pattern.pattern_implies__is_type(expression))  {return sals.pattern.pattern_implies__to_string(expression);}
    else if (sals.pattern.pattern_set__is_type(expression))      {return sals.pattern.pattern_set__to_string(expression);}
    return "\"" + expression + "\"";
};

// implies(and(X, Y), Z): optimal question asking for implication mining
//
//  q0(y/n) -> q1(y/n) -> q2(y/n) -> q3(y/n)
// 
//  knowledge_actions
// 
//    fact1 and fact2 fit the conjunctive antecedent pattern of an implication, so we question whether the consequent is true.
//      if the answer to the question is yes, we assert the consequent and mark it as depending on the implication and the two facts used to derive it.
//      if the answer to the question is no, this removes evidential support for this implication and all knowledge derived from it.
//        in the case of losing evidential support, a search for new evidential support for a similar conjunctive implication could be initiated in the hopes of not needing to remove all derived knowledge.
// 

sals.pattern.test_pattern = function() {
    sals.core.log("test_pattern HERE.");
    (function() {
	var x       = sals.pattern.pattern__new_from_string("aristotle is a man");
	var y       = sals.pattern.pattern__new_from_string("all mans are mortal");
	var z       = sals.pattern.pattern__new_from_string("aristotle is mortal");
	var and     = sals.pattern.pattern_and__new([x, y]);
	var implies = sals.pattern.pattern_implies__new(and, z);
	sals.core.log("implies = " + sals.pattern.expression__to_string(implies));
    })();
    (function() { // the most general logical relationship pattern
	var gx       = sals.pattern.pattern__new([sals.pattern.pattern_variable__new("X"), "a", sals.pattern.pattern_variable__new("Y")]);
	var gy       = sals.pattern.pattern__new(["all", sals.pattern.pattern_variable__new("Y"), "s are ", sals.pattern.pattern_variable__new("Z")]);
	var gz       = sals.pattern.pattern__new([sals.pattern.pattern_variable__new("X"), sals.pattern.pattern_variable__new("Z")]);
	var gand     = sals.pattern.pattern_and__new([gx, gy]);
	var gimplies = sals.pattern.pattern_implies__new(gand, gz);
	sals.core.log("gimplies = " + sals.pattern.expression__to_string(gimplies));
    })();
    (function() { // a test starting set of patterns from which "aristotle is a mortal" should be derived, using the above learned general rule along with this set of patterns.
	var pattern_set = sals.pattern.pattern_set__new([sals.pattern.pattern__new(["aristotle is a man"]),
							 sals.pattern.pattern__new(["all mans are mortal"])]);
	sals.core.log("pattern_set = " + sals.pattern.expression__to_string(pattern_set));
    })();
    sals.core.log("test_pattern DONE.");
};


sals.primitive = {};

// string

sals.primitive.string__new = function(value) {
    var self = value;
    return self;
};

sals.primitive.string__is_type = function(obj) {
    return (typeof(obj) === "string");
};

sals.primitive.string__contains = function(self, other) {
    return (self.indexOf(other) != -1);
};

sals.primitive.string__replace_all = function(self, search_string, replacement_string) {
    return self.split(search_string).join(replacement_string);
};

sals.primitive.string__to_string = function(self) {
    if (self.length == 0) {
	return "\"\"";
    } else {
	var quote_protect_substring_array = ["\"", "\'", " ", "\t", "\b", "\r", "\n"];
	var quote_protect_replacements    = {"\"" : "\\\"",
					     "\'" : "\\\'",
					     "\t" : "\\t",
					     "\b" : "\\b",
					     "\r" : "\\r",
					     "\n" : "\\n"};
	var need_quote_protect                    = false;
	var quote_protect_substring_array__length = quote_protect_substring_array.length;
	var quote_protect_substring_array__index  = 0;
	while (quote_protect_substring_array__index < quote_protect_substring_array__length) {
	    var quote_protect_substring = quote_protect_substring_array[quote_protect_substring_array__index];
	    if (sals.primitive.string__contains(self, quote_protect_substring)) {
		need_quote_protect = true;
	    }
	    quote_protect_substring_array__index ++;
	}
	if (need_quote_protect) {
	    var protected_string = self;
	    (function() {
		var quote_protect_replacements__keys         = Object.keys(quote_protect_replacements);
		var quote_protect_replacements__keys__length = quote_protect_replacements__keys.length;
		var quote_protect_replacements__keys__index  = 0;
		while (quote_protect_replacements__keys__index < quote_protect_replacements__keys__length) {
		    var quote_protect_replacements__key   = quote_protect_replacements__keys[quote_protect_replacements__keys__index];
		    var quote_protect_replacements__value = quote_protect_replacements[quote_protect_replacements__key];
		    protected_string                      = sals.primitive.string__replace_all(protected_string, quote_protect_replacements__key, quote_protect_replacements__value);
		    quote_protect_replacements__keys__index ++;
		}
	    })();
	    return "\"" + protected_string + "\"";
	} else {
	    return self;
	}
    }
};

// array

sals.primitive.array__new_empty = function() {
    return new Array();
};

sals.primitive.array__new = function(length) {
    var self;
    if (length == 0) {
	self = sals.primitive.array__new_empty();
    } else {
	self = new Array(length);
    }
    return self;
};

sals.primitive.array__length = function(self) {
    return self.length;
};

sals.primitive.array__get_element = function(self, index) {
    return self[index];
};

sals.primitive.array__set_element = function(self, index, value) {
    self[index] = value;
};

sals.primitive.array__push = function(self, value) {
    self.push(value);
};



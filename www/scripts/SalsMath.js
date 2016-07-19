sals.math = {};

sals.math.floor = function(x) {
    return Math.floor(x);
};

sals.math.abs = function(x) {
    return Math.abs(x);
};

// returns floating point number randomly sampled from a uniform distribution over the range from 0 to 1
sals.math.random = function() {
    return Math.random();
};

sals.math.random_int = function(superior_index) {
    var value = sals.math.floor(Math.random() * (superior_index));
    if (value == superior_index) {
	value = superior_index - 1;
    }
    return value;
};

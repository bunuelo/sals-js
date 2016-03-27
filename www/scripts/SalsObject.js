
sals.object = {};

sals.object.object__new = function(type) {
    var self = sals.frame.frame__new();
    sals.frame.frame__add_meta_element(self, "type", type);
    return self;
};


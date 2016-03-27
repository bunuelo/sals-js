
sals.logic = {};

sals.logic.proposition__new = function() {
    self = sals.frame.frame__new();
    sals.frame.frame__add_element(self, "type", "proposition");
    return self;
};


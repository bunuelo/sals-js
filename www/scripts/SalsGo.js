
sals.go = {};

// go_game_board_cell

sals.go.go_game_board_cell__new = function(state, north, south, east, west) {
    var self = sals.frame.frame__new();
    sals.frame.frame__add_element(self, "state", state);
    sals.frame.frame__add_element(self, "north", north);
    sals.frame.frame__add_element(self, "south", south);
    sals.frame.frame__add_element(self, "east",  east);
    sals.frame.frame__add_element(self, "west",  west);
    return self;
};

sals.go.go_game_board_cell__state = function(self) {
    return sals.frame.frame__get_element(self, "state");
};

sals.go.go_game_board_cell__set_state = function(self, state) {
    sals.frame.frame__set_element(self, "state", state);
};

sals.go.go_game_board_cell__to_html = function(self) {
    var state = sals.go.go_game_board_cell__state(self);
    if (state === null) {
	return "<img src=\"images/go_empty_cell.png\" width=32/>";
    } else if (state === "white") {
	return "<img src=\"images/go_stone_white.png\" width=32/>";
    } else if (state === "black") {
	return "<img src=\"images/go_stone_black.png\" width=32/>";
    } else {
	return "INVALID";
    }
};

// go_game_board

sals.go.go_game_board__new = function(width, height) {
    var self = sals.frame.frame__new();
    var rows = sals.frame.frame__new();
    for (var y = 0; y < height; y ++) {
	var row = sals.frame.frame__new();
	for (var x = 0; x < width; x ++) {
	    var go_game_board_cell = sals.go.go_game_board_cell__new(null, null, null, null, null);
	    sals.frame.frame__add_element(row, x, go_game_board_cell);
	}
	sals.frame.frame__add_element(rows, y, row);
    }
    for (var y = 0; y < height; y ++) {
	var row = sals.frame.frame__get_element(rows, y);
	for (var x = 0; x < width; x ++) {
	    var go_game_board_cell        = sals.frame.frame__get_element(row, x);
	    var go_game_board_cell__north = null;
	    var go_game_board_cell__south = null;
	    var go_game_board_cell__east  = null;
	    var go_game_board_cell__west  = null;
	    if (y > 0) {
		var north_row = sals.frame.frame__get_element(rows, y - 1);
		go_game_board_cell__north = sals.frame.frame__get_element(north_row, x);
	    }
	    if (y < height - 1) {
		var south_row = sals.frame.frame__get_element(rows, y + 1);
		go_game_board_cell__south = sals.frame.frame__get_element(south_row, x);
	    }
	    if (x < width - 1) {
		go_game_board_cell__east = sals.frame.frame__get_element(row, x + 1);
	    }
	    if (x > 0) {
		go_game_board_cell__west = sals.frame.frame__get_element(row, x - 1);
	    }
	    sals.frame.frame__set_element(go_game_board_cell, "north", go_game_board_cell__north);
	    sals.frame.frame__set_element(go_game_board_cell, "south", go_game_board_cell__south);
	    sals.frame.frame__set_element(go_game_board_cell, "east",  go_game_board_cell__east);
	    sals.frame.frame__set_element(go_game_board_cell, "west",  go_game_board_cell__west);
	}
    }
    sals.frame.frame__add_element(self, "rows", rows);
    return self;
};

sals.go.go_game_board__height = function(self) {
    var rows            = sals.frame.frame__get_element(self, "rows");
    var rows__key_count = sals.frame.frame__key_count(rows);
    return rows__key_count;
};

sals.go.go_game_board__width = function(self) {
    var rows                 = sals.frame.frame__get_element(self, "rows");
    var first_row            = sals.frame.frame__get_element(rows,  0);
    var first_row__key_count = sals.frame.frame__key_count(first_row);
    return first_row__key_count;
};

sals.go.go_game_board__get_cell = function(self, x, y) {
    var rows = sals.frame.frame__get_element(self, "rows");
    var row  = sals.frame.frame__get_element(rows, y);
    var cell = sals.frame.frame__get_element(row,  x);
    return cell;
};

sals.go.go_game_board__to_html = function(self) {
    var width  = sals.go.go_game_board__width(self);
    var height = sals.go.go_game_board__height(self);
    var html = "HERE: " + width + "x" + height + "<table cellspacing=1 cellpadding=0>";
    for (var y = 0; y < height; y ++) {
	html += "<tr>";
	for (var x = 0; x < width; x ++) {
	    html += "<td>";
	    var cell = sals.go.go_game_board__get_cell(self, x, y);
	    html += sals.go.go_game_board_cell__to_html(cell);
	    html += "</td>";
	}
	html += "</tr>";
    }
    html += "</table>";
    return html;
};

sals.go.go_game__new = function(width, height) {
    var self          = sals.frame.frame__new();
    var go_game_board = sals.go.go_game_board__new(width, height);
    sals.frame.frame__add_element(self, "board", go_game_board);
    return self;
};

sals.go.go_game__board = function(self) {
    return sals.frame.frame__get_element(self, "board");
};

sals.go.go_game__to_html = function(self) {
    var html        = "";
    var board       = sals.go.go_game__board(self);
    var board__html = sals.go.go_game_board__to_html(board);
    html += board__html;
    return html;
};

sals.go.test = function() {
    var go_game = sals.go.go_game__new(18, 18);
    var go_game__board = sals.go.go_game__board(go_game);
    var white_cell = sals.go.go_game_board__get_cell(go_game__board, 4, 4);
    sals.go.go_game_board_cell__set_state(white_cell, "white");
    var black_cell = sals.go.go_game_board__get_cell(go_game__board, 6, 4);
    sals.go.go_game_board_cell__set_state(black_cell, "black");
    return sals.go.go_game__to_html(go_game);
};

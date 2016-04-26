
sals.render = {};

if (window.webkitRequestAnimationFrame) {

    sals.render.on_each_frame = function(callback) {
	var closure_callback = function() { callback(); webkitRequestAnimationFrame(_callback); }
	closure_callback();
    };

} else if (window.mozRequestAnimationFrame) {

    sals.render.on_each_frame = function(callback) {
	var closure_callback = function() { callback(); mozRequestAnimationFrame(_callback); }
	closure_callback();
    };

} else {

    sals.render.on_each_frame = function(callback) {
	setInterval(callback, 1000 / 60);
    }

}

(function () { // render_state BEGIN
    var object_type = sals.object.object_type__new("render_state");
    sals.object_registry.add_type(object_type);
    
    sals.render.render_state__new = function(width, height) {
	var self    = sals.object.object__new("render_state");
	var go_game = sals.go.go_game__new(width, height);
	sals.frame.frame__add_element(self, "go_game",                           go_game);
	sals.frame.frame__add_element(self, "frame_count",                       0);
	sals.frame.frame__add_element(self, "start_nanoseconds_since_1970",      sals.core.nanoseconds_since_1970());
	sals.frame.frame__add_element(self, "last_print_nanoseconds_since_1970", null);
	return self;
    };
    
    sals.render.render_state__go_game = function(self) {
	return sals.frame.frame__get_element(self, "go_game");
    };
    
    sals.render.render_state__frame_count = function(self) {
	return sals.frame.frame__get_element(self, "frame_count");
    };
    
    sals.render.render_state__set_frame_count = function(self, value) {
	return sals.frame.frame__set_element(self, "frame_count", value);
    };
    
    sals.render.render_state__start_nanoseconds_since_1970 = function(self) {
	return sals.frame.frame__get_element(self, "start_nanoseconds_since_1970");
    };
    
    sals.render.render_state__set_start_nanoseconds_since_1970 = function(self, value) {
	return sals.frame.frame__set_element(self, "start_nanoseconds_since_1970", value);
    };
    
    sals.render.render_state__last_print_nanoseconds_since_1970 = function(self) {
	return sals.frame.frame__get_element(self, "last_print_nanoseconds_since_1970");
    };
    
    sals.render.render_state__set_last_print_nanoseconds_since_1970 = function(self, value) {
	return sals.frame.frame__set_element(self, "last_print_nanoseconds_since_1970", value);
    };
    
    sals.render.render_state__get_frames_per_second = function(self) {
	var frame_count                  = sals.render.render_state__frame_count(self);
	var start_nanoseconds_since_1970 = sals.render.render_state__start_nanoseconds_since_1970(self);
	var nanoseconds_since_1970       = sals.core.nanoseconds_since_1970();
	var elapsed_nanoseconds          = nanoseconds_since_1970 - start_nanoseconds_since_1970;
	var frames_per_second            = frame_count * sals.core.nanoseconds_per_second / elapsed_nanoseconds;
	return frames_per_second;
    };

    sals.render.render_state__render = function(self) {
	var frame_count                       = sals.render.render_state__frame_count(self);
	var last_print_nanoseconds_since_1970 = sals.render.render_state__last_print_nanoseconds_since_1970(self);
	var nanoseconds_since_1970            = sals.core.nanoseconds_since_1970();
	if ((last_print_nanoseconds_since_1970 === null) || (nanoseconds_since_1970 - last_print_nanoseconds_since_1970 >= (30 * sals.core.nanoseconds_per_second))) {
	    last_print_nanoseconds_since_1970 = nanoseconds_since_1970;
	    sals.render.render_state__set_last_print_nanoseconds_since_1970(self, last_print_nanoseconds_since_1970);
	    sals.core.log("render_callback: fps = " + sals.render.render_state__get_frames_per_second(self));
	}
	if (sals.machine.step_test_deliberate_machine !== null) {
	    if (! sals.machine.step_test_deliberate_machine(self)) {
		sals.machine.step_test_deliberate_machine = null;
	    }
	}
	frame_count = frame_count + 1;
	sals.render.render_state__set_frame_count(self, frame_count);
    };
    
})(); // render_state END

sals.render.render_state = null;

sals.render.render_callback = function() {
    try {
	sals.render.render_state__render(sals.render.render_state);
    } catch (error) {
	sals.core.log_error(error);
    }
};

sals.render.start_game = function() {
    sals.render.render_state = sals.render.render_state__new(4, 4);
    sals.render.on_each_frame(sals.render.render_callback);
}
sals.three = {};

sals.three.package_loaded = (THREE !== "undefined");

if (sals.three.package_loaded) {
    
    sals.three.sals_three__new = function(width, height) {
	var self        = sals.frame.frame__new();
	sals.frame.frame__add_element(self, "vertical_angle_of_view", 75);
	sals.frame.frame__add_element(self, "aspect_ratio",           width / height);
	sals.frame.frame__add_element(self, "near_plane_distance",    0.1);
	sals.frame.frame__add_element(self, "far_plane_distance",     1000);
	sals.three.sals_three__init_meta(self);
	return self;
    };
    
    sals.three.sals_three__init_meta = function(self) {
	var vertical_angle_of_view = sals.three.sals_three__vertical_angle_of_view(self);
	var aspect_ratio           = sals.three.sals_three__aspect_ratio(self);
	var near_plane_distance    = sals.three.sals_three__near_plane_distance(self);
	var far_plane_distance     = sals.three.sals_three__far_plane_distance(self);
	var three_scene            = new THREE.Scene();
	var three_camera           = new THREE.PerspectiveCamera(vertical_angle_of_view, aspect_ratio, near_plane_distance, far_plane_distance);
	var three_renderer         = new THREE.WebGLRenderer();
	three_renderer.setSize(width, height);
	three_renderer.domElement;
	sals.frame.frame__add_meta_element(self, "three_scene",    three_scene);
	sals.frame.frame__add_meta_element(self, "three_camera",   three_camera);
	sals.frame.frame__add_meta_element(self, "three_renderer", three_renderer);
	sals.frame.frame__add_meta_element(self, "initialized",    true);
    };
    
    sals.three.sals_three__vertical_angle_of_view = function(self) {
	return sals.frame.frame__get_element(self, "vertical_angle_of_view");
    };
    
    sals.three.sals_three__aspect_ratio = function(self) {
	return sals.frame.frame__get_element(self, "aspect_ratio");
    };
    
    sals.three.sals_three__near_plane_distance = function(self) {
	return sals.frame.frame__get_element(self, "near_plane_distance");
    };
    
    sals.three.sals_three__far_plane_distance = function(self) {
	return sals.frame.frame__get_element(self, "far_plane_distance");
    };
    
    sals.three.sals_three__initialized = function(self) {
	return sals.frame.frame__contains_meta_key(self, "initialized");
    };
    
    sals.three.sals_three__assure_initialized = function(self) {
	if (! sals.three.sals_three__initialized(self)) {
	    sals.three.sals_three__init_meta(self);
	}
    };
    
    sals.three.sals_three__three_renderer = function(self) {
	sals.three.sals_three__assure_initialized(self);
	return sals.frame.frame__get_meta_element(self, "three_renderer");
    };
    
    sals.three.sals_three__dom_element = function(self) {
	return sals.three.sals_three__three_renderer(self).domElement;
    };
    
}

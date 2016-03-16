sals.three = {};

sals.three.package_loaded = (THREE !== "undefined");

if (sals.three.package_loaded) {
    
    sals.three.three_element__new = function(width, height) {
	var self                   = {};
	var scene                  = new THREE.Scene();
	var vertical_angle_of_view = 75;
	var aspect_ratio           = width / height;
	var near_plane_distance    = 0.1;
	var far_plane_distance     = 1000;
	var camera                 = new THREE.PerspectiveCamera(vertical_angle_of_view, aspect_ratio, near_plane_distance, far_plane_distance);
	var renderer               = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	return renderer.domElement;
    };
    
}

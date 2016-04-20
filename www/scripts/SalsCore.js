var sals = {};

sals.core = {};

console.log("Loading SalsCore.js");

sals.core.source_file_names = ["scripts/SalsFrame.js",
			       "scripts/SalsObject.js",
			       "scripts/SalsObjectRegistry.js",
			       "scripts/SalsCons.js",
			       "scripts/SalsLogic.js",
			       "scripts/SalsGraph.js",
			       "scripts/SalsVis.js",
			       "scripts/SalsThree.js",
			       "scripts/SalsGo.js"];

sals.core.total_load_count = 0;

sals.core.log_error = function(error) {
    console.log("Sals Error: " + error.message + "\n" + error.stack);
};

sals.core.log = function(message) {
    console.log("Sals Log: " + message);
};

sals.core.error_loading = function() {
    var script_file_name = window.sals_source_file_names[sals.core.total_load_count];
    console.log("Error loading " + script_file_name); 
};

sals.core.success_loading = function(done_loading_files_callback) {
    var script_file_name = sals.core.source_file_names[sals.core.total_load_count];
    console.log("Loaded " + script_file_name);
    sals.core.total_load_count ++;
    sals.core.load_next_file(done_loading_files_callback);
};

sals.core.load_next_file = function(done_loading_files_callback) {
    if (sals.core.total_load_count < sals.core.source_file_names.length) {
	var script_file_name = sals.core.source_file_names[sals.core.total_load_count];
	var script           = document.createElement("script");
	script.src           = script_file_name + "?" + new Date().getTime();
	script.onload        = function() {sals.core.success_loading(done_loading_files_callback)};
	script.onerror       = sals.core.error_loading;
	document.body.appendChild(script);
    } else {
	sals.core.done_loading_files(done_loading_files_callback);
    }
};

sals.core.done_loading_files = function(done_loading_files_callback) {
    console.log("sals.core.done_loading_files: here.");
    done_loading_files_callback();
};

sals.core.initialize = function(success_callback) {
    sals.core.load_next_file(success_callback);
};

var sals = {};

sals.core = {};

console.log("Loading SalsCore.js");

sals.core.source_file_names = ["scripts/SalsFrame.js",
			       "scripts/SalsGraph.js",
			       "scripts/SalsGo.js"];

sals.core.total_load_count = 0;

sals.core.error_loading = function() {
    var script_file_name = window.sals_source_file_names[sals.core.total_load_count];
    console.log("Error loading " + script_file_name); 
};

sals.core.success_loading = function() {
    var script_file_name = sals.core.source_file_names[sals.core.total_load_count];
    console.log("Loaded " + script_file_name);
    sals.core.total_load_count ++;
    sals.core.load_next_file();
};

sals.core.load_next_file = function() {
    if (sals.core.total_load_count < sals.core.source_file_names.length) {
	var script_file_name = sals.core.source_file_names[sals.core.total_load_count];
	var script           = document.createElement("script");
	script.src           = script_file_name;
	script.onload        = sals.core.success_loading;
	script.onerror       = sals.core.error_loading;
	document.body.appendChild(script);
    } else {
	sals.core.done_loading_files();
    }
};

sals.core.done_loading_files = function() {
    try {
	document.body.innerHTML = "Successfully loaded all files." + "<br>" + sals.go.test();
    } catch (error) {
	console.log("SalsCore Error: " + error.stack);
    }
};

sals.core.initialize = function() {
    sals.core.load_next_file();
};

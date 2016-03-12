
console.log("Loading SalsIndex.js");

window.sals_source_file_names = ["scripts/SalsCore.js",
				 "scripts/SalsFrame.js",
				 "scripts/SalsGraph.js",
				 "scripts/SalsGo.js"];

window.sals_total_load_count = 0;

window.sals_error_loading = function() {
    var script_file_name = window.sals_source_file_names[window.sals_total_load_count];
    console.log("Error loading " + script_file_name); 
};

window.sals_success_loading = function() {
    var script_file_name = window.sals_source_file_names[window.sals_total_load_count];
    console.log("Loaded " + script_file_name);
    window.sals_total_load_count ++;
    window.sals_load_next_file();
};

window.sals_load_next_file = function() {
    if (window.sals_total_load_count < window.sals_source_file_names.length) {
	var script_file_name = window.sals_source_file_names[window.sals_total_load_count];
	var script           = document.createElement("script");
	script.src           = script_file_name;
	script.onload        = window.sals_success_loading;
	script.onerror       = window.sals_error_loading;
	document.body.appendChild(script);
    } else {
	window.sals_done_loading_files();
    }
};

window.sals_done_loading_files = function() {
    document.body.innerHTML = "Successfully loaded all files." + "<br>" + sals.go.test();
};

window.onload = function() {
    console.log("Executing window.onload");
    window.sals_load_next_file();
};


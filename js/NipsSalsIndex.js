
console.log("Loading NipsSalsIndex.js");

window.onload = function() {
    console.log("Executing window.onload");
    document.body.innerHTML = "Hi Bob.";
    var script_file_names = ["scripts/NipsSalsCore.js",
			     "scripts/NipsSalsGraph.js"];
    for (var i in script_file_names) {
	(function() {
	    var script_file_name = script_file_names[i];
	    var script           = document.createElement("script");
	    script.src           = script_file_name;
	    script.onload        = function() {console.log("Loaded " + script_file_name);};
	    script.onerror       = function() {console.log("Error loading " + script_file_name);};
	    document.body.appendChild(script);
	})();
    }
};


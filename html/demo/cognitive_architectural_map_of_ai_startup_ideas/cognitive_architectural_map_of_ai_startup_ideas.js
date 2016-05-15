console.log("Loading cognitive_architectural_map_of_ai_startup_ideas.js");

window.onload = function() {
    console.log("Executing window.onload");
    var success_callback = function() {
	try {
	    var element = document.createElement("div");
	    element.innerHTML = "Inner HTML.";
	    document.body.appendChild(element);
	} catch (error) {
	    sals.core.log_error(error);
	}
    };
    try {
	sals.core.initialize(success_callback);
    } catch (error) {
	sals.core.log_error(error);
    }
};

document.body.innerHTML = "<h1>Cognitive Architectural Map of AI Startup Ideas</h1>";

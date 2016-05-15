
console.log("Loading SalsIndex.js");

window.onload = function() {
    console.log("Executing window.onload");
    var success_callback = function() {
	try {
	    var go_game_element = sals.go.test_go_game_element();
	    document.body.appendChild(go_game_element);
	    sals.render.start_game();
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


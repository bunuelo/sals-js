
console.log("Loading SalsIndex.js");

window.onload = function() {
    console.log("Executing window.onload");
    var success_callback = function() {
	try {
	    document.body.innerHTML = "Successfully loaded all files." + "<br>" + sals.go.test();
	} catch (error) {
	    console.log("Sals Error: " + error.message + "\n" + error.stack);
	}
    };
    try {
	sals.core.initialize(success_callback);
    } catch (error) {
	console.log("Sals Error: " + error.message + "\n" + error.stack);
    }
};


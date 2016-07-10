var sals = {};

if (typeof(exports)!="undefined") {exports.sals = sals;}

sals.core = {};

console.log("Loading SalsCore.js");

sals.core.source_file_names = ["/scripts/SalsPrimitive.js",
			       "/scripts/SalsMath.js",
			       "/scripts/SalsFrame.js",
			       "/scripts/SalsObject.js",
			       "/scripts/SalsObjectRegistry.js",
			       "/scripts/SalsFrameArray.js",
			       "/scripts/SalsCons.js",
			       "/scripts/SalsLogic.js",
			       "/scripts/SalsGraph.js",
			       "/scripts/SalsPlanner.js",
			       "/scripts/SalsHashMatrix.js",
			       "/scripts/SalsPattern.js",
			       "/scripts/SalsMachine.js",
			       "/scripts/SalsVis.js",
			       "/scripts/SalsThree.js",
			       "/scripts/SalsGo.js",
			       "/scripts/SalsRender.js"];

sals.core.total_load_count = 0;

sals.core.date__to_string = function(self) {
    // compile date_str BEGIN
    var month = self.getMonth();
    var month_str;
    if (month == 0) {
	month_str = "Jan";
    } else if (month == 1) {
	month_str = "Feb";
    } else if (month == 2) {
	month_str = "Mar";
    } else if (month == 3) {
	month_str = "Apr";
    } else if (month == 4) {
	month_str = "May";
    } else if (month == 5) {
	month_str = "Jun";
    } else if (month == 6) {
	month_str = "Jul";
    } else if (month == 7) {
	month_str = "Aug";
    } else if (month == 8) {
	month_str = "Sep";
    } else if (month == 9) {
	month_str = "Oct";
    } else if (month == 10) {
	month_str = "Nov";
    } else if (month == 11) {
	month_str = "Dec";
    }
    var day      = self.getDate();
    var day_str  = "" + day;
    if (day_str.length == 1) {
	day_str = "0" + day_str;
    }
    var year     = self.getFullYear();
    var year_str = "" + year;
    var date_str = month_str + " " + day_str + " " + year_str;
    // compile date_str END
    // compile time_str BEGIN
    var hour     = self.getHours();
    var hour_number_str;
    var hour_ampm_str;
    if (hour == 0) {
	hour_number_str = "12";
	hour_ampm_str   = "am";
    } else if ((hour >= 1) && (hour <= 11)) {
	hour_number_str = "" + hour;
	hour_ampm_str   = "am";
    } else if (hour == 12) {
	hour_number_str = "12";
	hour_ampm_str   = "pm";
    } else if ((hour >= 13) && (hour <= 23)) {
	hour_number_str = "" + (hour - 12);
	hour_ampm_str   = "pm";
    }
    var minute = self.getMinutes();
    var minute_str;
    if ((minute >= 0) && (minute <= 9)) {
	minute_str = "0" + minute;
    } else if ((minute >= 10) && (minute <= 59)) {
	minute_str = "" + minute;
    }
    var second = self.getSeconds();
    var second_str;
    if ((second >= 0) && (second <= 9)) {
	second_str = "0" + second;
    } else if ((second >= 10) && (second <= 59)) {
	second_str = "" + second;
    }
    var time_str = hour_number_str + ":" + minute_str + ":" + second_str + "" + hour_ampm_str;
    // compile time_str END
    return "" + date_str + " " + time_str;
};

sals.core.date__to_column_string = function(width, self) {
    var str         = sals.core.date__to_string(self);
    var str__length = str.length;
    var index       = width - str__length;
    while (index > 0) {
	str = (" " + str);
	index --;
    }
    return str;
};

sals.core.date_time_string = function() {
    var now__date = new Date();
    return "" + sals.core.date__to_column_string(16, now__date);
};

sals.core.log_error = function(error) {
    console.log(sals.core.date_time_string() + " SALS ERROR: " + error.message + "\n" + error.stack);
};

sals.core.log = function(message) {
    console.log(sals.core.date_time_string() + " SALS LOG: " + message);
};

sals.core.throw_new_error = function(message) {
    //sals.core.log("error: " + message);
    throw new Error(message);
};

sals.core.error_loading = function() {
    var script_file_name = sals.core.source_file_names[sals.core.total_load_count];
    console.log("Error loading " + script_file_name); 
};

sals.core.success_loading = function(done_loading_files_callback) {
    var script_file_name = sals.core.source_file_names[sals.core.total_load_count];
    console.log("Loaded " + script_file_name);
    sals.core.total_load_count ++;
    sals.core.load_next_file(done_loading_files_callback);
};

sals.core.nanoseconds_per_second  = 1000000000;
sals.core.microseconds_per_second = 1000000;
sals.core.milliseconds_per_second = 1000;

sals.core.milliseconds_since_1970 = function() {
    return new Date().getTime();
};

sals.core.nanoseconds_since_1970 = function() {
    return sals.core.milliseconds_since_1970() * 1000000.0;
};

sals.core.load_next_file = function(done_loading_files_callback) {
    if (sals.core.total_load_count < sals.core.source_file_names.length) {
	var script_file_name = sals.core.source_file_names[sals.core.total_load_count];
	var script           = document.createElement("script");
	script.src           = script_file_name + "?" + sals.core.nanoseconds_since_1970();
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

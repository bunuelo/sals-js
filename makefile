default: compile-webpage

compile-webpage:
	mkdir -p ./www/
	mkdir -p ./www/scripts/
	cp ./html/*.html ./www/
	cp ./js/*.js ./www/scripts/


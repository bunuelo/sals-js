default: print-usage

EDITOR = emacs

print-usage:
	@echo "make <command>"
	@echo ""
	@echo "  print-usage: Prints this usage message."
	@echo "  start-editor: Opens source files in text editor."
	@echo "  compile-webpage: Compiles the required source files into the ./www directory."
	@echo "  upload-webpage: Compiles and uploads the ./www director to bomorgan.com"
	@echo ""

start-editor:
	$(EDITOR) makefile html/*.html js/*.js

compile-webpage:
	mkdir -p ./www/
	mkdir -p ./www/scripts/
	cp ./html/*.html ./www/
	cp ./js/*.js ./www/scripts/
	chmod -R a+rx ./www/

upload-webpage: compile-webpage
	rsync -avz ./ bomorgan@bomorgan.com:bomorgan/nips-sals/

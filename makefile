default: print-usage

TEXT_EDITOR        = emacs
GIT_COMMIT_MESSAGE = "editing..."

print-usage:
	@echo "make <command>"
	@echo ""
	@echo "  print-usage: Prints this usage message."
	@echo "  start-editor: Opens source files in text editor."
	@echo "  compile-webpage: Compiles the required source files into the ./www directory."
	@echo "  upload-webpage: Compiles and uploads the ./www director to bomorgan.com"
	@echo ""

start-editor:
	$(TEXT_EDITOR) makefile html/*.html js/*.js

compile-webpage:
	mkdir -p ./www/
	mkdir -p ./www/scripts/
	cp ./html/*.html ./www/
	cp ./js/*.js ./www/scripts/
	chmod -R a+rx ./www/

upload-webpage: compile-webpage
	rsync -avz ./ bomorgan@bomorgan.com:bomorgan/nips-sals/

git-pull:
	git pull

git-push:
	git push

git-commit:
	git commit -am $(GIT_COMMIT_MESSAGE)

git-add:
	git add --all .

git-development-cycle:
	make git-pull; make git-add; make git-commit; make git-push



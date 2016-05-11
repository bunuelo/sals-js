default: less-usage

TEXT_EDITOR        = emacs
GIT_COMMIT_MESSAGE = "editing..."

less-usage:
	make -s print-usage | less

print-usage:
	@echo ""
	@echo "USAGE"
	@echo ""
	@echo "  make <command>"
	@echo ""
	@echo ""
	@echo "COMMANDS"
	@echo ""
	@echo "  print-usage"
	@echo ""
	@echo "    - prints this usage message"
	@echo ""
	@echo ""
	@echo "  start-editor"
	@echo ""
	@echo "    - $(TEXT_EDITOR) is used to edit all source files"
	@echo ""
	@echo ""
	@echo "  compile-webpage"
	@echo ""
	@echo "    - compiles the required source files into the ./www directory"
	@echo ""
	@echo ""
	@echo "  upload-webpage"
	@echo ""
	@echo "    - compiles and uses rsync over ssh to update the remote bomorgan.com/sals"
	@echo "      directory"
	@echo ""
	@echo ""
	@echo "  git-pull"
	@echo ""
	@echo "    - pulls from remote repository"
	@echo ""
	@echo ""
	@echo "  git-push"
	@echo ""
	@echo "    - pushes to remote repository"
	@echo ""
	@echo ""
	@echo "  git-commit"
	@echo ""
	@echo "    - uses \"$(GIT_COMMIT_MESSAGE)\" as git commit message"
	@echo ""
	@echo ""
	@echo "  git-add"
	@echo ""
	@echo "    - add --all files to reflect the current directory exactly"
	@echo ""
	@echo ""
	@echo "  git-development-cycle"
	@echo ""
	@echo "    - git-pull, compile-webpage, git-add, git-commit, git-push"
	@echo ""
	@echo ""
	@echo "DATE"
	@echo ""
	@echo "  This documentation was last edited on April 18, 2016."
	@echo ""
	@echo ""
	@echo "AUTHORS"
	@echo ""
	@echo "  Bo Morgan"
	@echo ""

start-editor:
	$(TEXT_EDITOR) makefile *.md html/*.html js/*.js

compile-webpage:
	mkdir -p ./www/
	mkdir -p ./www/scripts/
	mkdir -p ./www/scripts/third-party/
	mkdir -p ./www/images/
	cp ./html/*.html ./www/
	cp ./js/*.js ./www/scripts/
	cp ./js/third-party/*.js ./www/scripts/third-party
	cp ./images/go_stone_white.png ./www/images/
	cp ./images/go_stone_black.png ./www/images/
	cp ./images/go_empty_cell.png ./www/images/
	chmod -R a+rx ./www/

upload-webpage: compile-webpage
	rsync -avz ./www/ bomorgan@sals.bomorgan.io:sals.bomorgan.io/public/

git-pull:
	git pull

git-push:
	git push

git-commit:
	git commit -am $(GIT_COMMIT_MESSAGE)

git-add:
	git add --all .

git-development-cycle:
	make git-pull; make compile-webpage; make git-add; make git-commit; make git-push



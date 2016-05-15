default: print-usage

TEXT_EDITOR        = emacs
GIT_COMMIT_MESSAGE = "editing..."
REMOTE_DIRECTORY   = bomorgan@sals.bomorgan.io:sals.bomorgan.io/public/

less-usage:
	make -s print-usage | less

print-usage:
	@echo ""
	@echo "USAGE"
	@echo "  make <command>"
	@echo ""
	@echo "COMMANDS"
	@echo ""
	@echo "  print-usage"
	@echo "    - prints this usage message"
	@echo ""
	@echo "  start-editor"
	@echo "    - $(TEXT_EDITOR) is used to edit all source files"
	@echo ""
	@echo "  compile-webpage"
	@echo "    - compiles the required source files into the ./www directory"
	@echo ""
	@echo "  upload-webpage"
	@echo "    - compiles and uses rsync over ssh to update the remote bomorgan.com/sals"
	@echo "      directory"
	@echo ""
	@echo "  git-pull"
	@echo "    - pulls from remote repository"
	@echo ""
	@echo "  git-push"
	@echo "    - pushes to remote repository"
	@echo ""
	@echo "  git-commit"
	@echo "    - uses \"$(GIT_COMMIT_MESSAGE)\" as git commit message"
	@echo ""
	@echo "  git-add"
	@echo "    - add --all files to reflect the current directory exactly"
	@echo ""
	@echo "  git-development-cycle"
	@echo "    - git-pull, compile-webpage, git-add, git-commit, git-push"
	@echo ""
	@echo "DATE"
	@echo "  This documentation was last edited on April 18, 2016."
	@echo ""
	@echo "AUTHORS"
	@echo "  Bo Morgan"
	@echo ""

start-editor:
	$(TEXT_EDITOR) makefile *.md html/*.html js/*.js

compile-webpage:
	mkdir -p ./www/
	mkdir -p ./www/scripts/
	mkdir -p ./www/scripts/third-party/
	mkdir -p ./www/images/
	cp -af ./html/* ./www/
	cp -af ./js/* ./www/scripts/
	cp -af ./js/third-party/* ./www/scripts/third-party
	cp -af ./images/go_stone_white.png ./www/images/
	cp -af ./images/go_stone_black.png ./www/images/
	cp -af ./images/go_empty_cell.png ./www/images/
	chmod -R a+rx ./www/

upload-webpage: compile-webpage
	rsync -avz ./www/ $(REMOTE_DIRECTORY)

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



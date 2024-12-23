include config.mk

push:
	@git commit -m "Makefile Auto-Commit"; \
	git push origin main;

stage:
	@git add .

login:
	@git init; \
	git remote add origin $(REPOSITORY_URL);
include config.mk

# ENV=git_bash
push:
	@commit_code=$$(openssl rand -hex 16 | cut -c 1-32); \
	echo "commit_code=$$commit_code"; \
	git commit -m "$$commit_code"; \
	git push origin main;

stage:
	@git add .

login:
	@git init; \
	git remote add origin $(REPOSITORY_URL);


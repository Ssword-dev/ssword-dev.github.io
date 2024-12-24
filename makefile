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
	git remote add origin $(REPOSITORY_URL).git;

deploy:
	@time=$$(date "+%Y-%m-%d %H:%M:%S"); \
	author=$$(git config user.name); \
	author_email=$$(git config user.email);
	commit_code=$$(openssl rand -hex 16 | cut -c 1-32); \
	echo "commit_code=$$commit_code"; \
	git add .; \
	git add dist/ -f; \
	git commit -m "$$commit_code"; \
	git push origin gh-pages; \
	echo "(deploy) Commit $$commit_code - $$time by $$author ($$author_email)" >> $(GIT_DH);
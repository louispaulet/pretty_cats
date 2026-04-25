APP_DIR := pretty_cats
NPM := npm --prefix $(APP_DIR)

.PHONY: up build lint test deploy

up:
	$(NPM) run dev

build:
	$(NPM) run build

lint:
	$(NPM) run lint

test: lint build

deploy: build
	$(NPM) run deploy

.PHONY: build-RuntimeDependenciesLayer build-lambda-common
.PHONY: build-ExampleFunction

build-ExampleFunction:
	$(MAKE) HANDLER=src/hello/main.ts build-lambda-common

build-lambda-common:
	npm install
	rm -rf dist
	nest build
# unit tests
	npm run test
# e2e tests
	npm run test:e2e
# test coverage
	npm run test:cov
	cp -r dist "$(ARTIFACTS_DIR)/"

build-RuntimeDependenciesLayer:
	mkdir -p "$(ARTIFACTS_DIR)/nodejs"
	cp package.json package-lock.json "$(ARTIFACTS_DIR)/nodejs/"
	npm install --production --prefix "$(ARTIFACTS_DIR)/nodejs/"
	rm "$(ARTIFACTS_DIR)/nodejs/package.json"
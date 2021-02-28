clean:
	rm -rf dist
	rm -rf docs/.vuepress/dist

lint:
	npm run lint

lint-fix:
	npm run lint --fix

test:
	npm run test:unit

coverage:
	npm run cover

build-lib:
	npm run build:lib

build-docs:
	npm run build:docs

build: build-lib build-docs

dev:
	npm run dev

bundle: clean lint-fix test build coverage

publish-dry-run:
	npm publish --access=public --dry-run

publish:
	npm publish --access=public

code2db:
	node web/code2db.js code

install:
	cd web && npm install

dev:
	cd web && npm run dev

build:
	make code2db
	cd web && npm run build

build-only:
	make code2db
	cd web && npm run build-only

rm:
	rm -rf docs/assets && rm -rf docs/index.html && rm -rf  docs/logo.png
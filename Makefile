code2db:
	node web/code2db.js code

install:
	cd web && npm install

dev:
	cd web && npm run dev

build:
	cd web && npm run build

build-only:
	cd web && npm run build-only
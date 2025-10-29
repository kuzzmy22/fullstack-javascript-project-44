# Устанавливает зависимости проекта через npm ci
install:
	npm ci
#Запускать игру без глобальной установки
brain-games:
	node bin/brain-games.js
publish:
	 npm publish --dry-run
make lint:
	npx eslint
brain-calc:
	node bin/brain-calc.js

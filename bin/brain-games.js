#!/usr/bin/env node
// Импортируем функцию приветствия из src/cli.js
// Используем require, так как это CommonJS-синтаксис, соответствующий вашему package.json
const greeting = require('../src/cli.js');

// Вызываем функцию
greeting();

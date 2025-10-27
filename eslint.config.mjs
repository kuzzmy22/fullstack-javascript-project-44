// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';

export default [
  // 1. Применяем стандартные рекомендуемые правила JavaScript
  js.configs.recommended,

  // 2. Настраиваем правила для Node.js среды и ECMAScript
  {
    languageOptions: {
      // Указываем среду: Node.js и браузерные глобальные переменные
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      // Указываем версию ECMAScript
      ecmaVersion: 2022,
      // Разрешаем использование ES-модулей (import/export)
      sourceType: 'module', 
    },
    rules: {
      // Здесь вы можете добавлять свои правила
      'no-console': 'off', // Разрешаем использование console.log()
      'import/extensions': 'off', // Отключаем проверку расширений файлов при импорте (может понадобиться для Hexlet)
      // Добавьте другие правила, если они требуются вашим стандартам кодирования
    },
  },

  // 3. Игнорируем ненужные файлы/папки
  {
    ignores: ['node_modules/', 'dist/'],
  },
];
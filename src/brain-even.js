
const readlineSync = require('readline-sync');
const greeting = require('./cli.js');

// Константа для количества раундов
const ROUNDS_COUNT = 3;

// Предикат для проверки на четность
const isEven = (number) => number % 2 === 0;

// Функция для генерации случайного числа (от 1 до 100)
const getRandomNumber = (min = 1, max = 100) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

// Основная логика игры
const runGame = () => {
  // Получаем имя пользователя
  const userName = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    // 1. Генерируем случайное число
    const number = getRandomNumber();
    const question = number;

    // 2. Определяем правильный ответ
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    // 3. Задаем вопрос пользователю
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    // 4. Проверяем ответ
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      // Неверный ответ или некорректный ввод
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return; // Завершаем игру
    }
  }

  // Если все раунды пройдены успешно
  console.log(`Congratulations, ${userName}!`);
};

module.exports = runGame;

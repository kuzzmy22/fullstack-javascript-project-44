import runGame from './index.js';

// Функция для генерации случайного числа
const getRandomNumber = (min = 1, max = 100) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

// Функция для генерации одного раунда игры
const generateRound = () => {
  const progLength = getRandomNumber(5, 10); // Длина прогрессии
  const startProg = getRandomNumber(1, 10); // Начальный элемент
  const stepProg = getRandomNumber(1, 10); // Шаг прогрессии

  const massivProg = [];

  // Создаем прогрессию
  for (let i = 0; i < progLength; i++) {
    massivProg.push(startProg + i * stepProg);
  }

  // Скрываем один элемент прогрессии
  const hiddenIndex = getRandomNumber(0, progLength - 1);
  const hiddenValue = massivProg[hiddenIndex];
  massivProg[hiddenIndex] = '..';

  // Преобразуем массив в строку для вопроса
  const question = massivProg.join(' ');
  const correctAnswer = hiddenValue.toString();

  return [question, correctAnswer];
};

const runProgGame = () => {
  const description = 'What number is missing in the progression?';
  runGame(description, generateRound);
};

export default runProgGame;
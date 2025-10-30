import runGame from './index.js'; // Импортируем общую логику запуска игры

// Алгоритм Евклида для нахождения НОД (GCD)
const gcd = (a, b) => {
  let numA = a;
  let numB = b;
  while (numB !== 0) {
    const remainder = numA % numB; // Вычисляем остаток
    numA = numB; // Обновляем первое число
    numB = remainder; // Обновляем второе число (остатком)
  }
  return numA; // Когда второе число станет 0, возвращаем первое
};

// Функция для генерации случайного числа (от 1 до 100)
const getRandomNumber = (min = 1, max = 100) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

// Функция, генерирующая вопрос и правильный ответ для одного раунда
const generateRound = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  
  const question = `${num1} ${num2}`;
  // Правильный ответ должен быть строкой, так как runGame ожидает string
  const correctAnswer = gcd(num1, num2).toString(); 
  
  return [question, correctAnswer];
};

// Функция для запуска игры НОД
const runGcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  runGame(description, generateRound);
};

export default runGcdGame;
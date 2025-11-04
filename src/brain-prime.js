import runGame from './index.js'; 

// Функция для генерации случайного числа
const getRandomNumber = (min = 1, max = 100) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

// Функция для проверки, является ли число простым
const isPrime = (n) => {
    // Проверяем, если n меньше 2
    if (n < 2) {
        return false; // Число не является простым
    }
    // Проверяем, если n равно 2
    if (n === 2) {
        return true; // Число является простым
    }
    // Проверяем, если n четное
    if (n % 2 === 0) {
        return false; // Число не является простым
    }
    // Проверяем нечетные числа от 3 до квадратного корня из n
    const sqrtN = Math.sqrt(n);
    for (let i = 3; i <= sqrtN; i += 2) {
        if (n % i === 0) {
            return false; // Число не является простым
        }
    }
    return true; // Если ни одно из условий не выполнено, число является простым
}

// Генерация вопроса и правильного ответа
const generateRound = () => {
    const n = getRandomNumber();
    const question = n;
    const correctAnswer = isPrime(n) ? 'yes' : 'no';
    return [question, correctAnswer];
}

const runPrimeGame = () => {
    const description = '"yes" if given number is prime. Otherwise answer "no".';
    runGame(description, generateRound);
};

export default runPrimeGame;

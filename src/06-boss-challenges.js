/**
 * ==============================================================================
 * МОДУЛЬ 6: БОС-ЗАВДАННЯ (КОМПЛЕКСНІ ПРАКТИЧНІ ЗАДАЧІ)
 * ==============================================================================
 *
 * 🏆 У цих завданнях поєднано все:
 * - Робота з типами даних, null/undefined, рядками, числами.
 * - Логічні оператори &&, ||, ! та тернарні оператори.
 * - Справжні прикладні алгоритми: банкомат, промокоди, антифрод, валідатор форм.
 *
 * 📖 ШВИДКА ДОВІДКА З РОБОТИ ЗІ СТАНОМ:
 * 1. Зміна значень у переданому об'єкті:
 *    - account.balance -= amount (зменшення балансу на суму).
 *    - account.isBlocked = true (встановлення прапорця блокування).
 * 2. Накопичення списку помилок або прапорців:
 *    - const errors = [];
 *    - if (умоваПомилки) errors.push('Текст помилки');
 *    - return { isValid: errors.length === 0, errors };
 */

/**
 * БОС-ЗАВДАННЯ 6.1: Банкомат майбутнього (ATM Core Engine) (Важкий рівень)
 *
 * 🎯 Суть завдання:
 * Реалізувати ядро транзакційного процесингу банкомата для видачі готівки
 * з перевіркою стану картки, PIN-коду, залишку коштів та денного ліміту.
 *
 * 📋 Вимоги до функції:
 * 1. Стан картки:
 *    - Якщо картка вже заблокована (isBlocked === true) або вичерпано спроби введення PIN-коду (pinRetriesLeft <= 0) —
 *      повернути { success: false, code: 'CARD_BLOCKED', message: 'Картка заблокована' }.
 * 2. Перевірка PIN-коду:
 *    - Зіставити введений PIN з правильним (ігноруючи випадкові пробіли по краях).
 *    - Якщо PIN невірний: зменшити лічильник спроб pinRetriesLeft на 1 (якщо спроб не залишилося — заблокувати картку: isBlocked = true).
 *      Повернути { success: false, code: 'WRONG_PIN', retriesLeft: кількістьСпроб, message: 'Невірний PIN-код' }.
 * 3. Валідація суми зняття:
 *    - Вилучити числову суму з requestedAmount (може бути числом або рядком на зразок "500 грн").
 *    - Сума повинна бути додатним цілим числом, кратним 100 грн. Якщо ні —
 *      повернути { success: false, code: 'INVALID_AMOUNT', message: 'Сума повинна бути кратна 100 грн' }.
 *    - Якщо сума перевищує залишок денного ліміту —
 *      повернути { success: false, code: 'LIMIT_EXCEEDED', message: 'Перевищено денний ліміт зняття' }.
 *    - Якщо на балансі недостатньо коштів —
 *      повернути { success: false, code: 'INSUFFICIENT_FUNDS', message: 'Недостатньо коштів на рахунку' }.
 * 4. Успішна видача:
 *    - Списати суму з балансу картки та денного ліміту.
 *    - Повернути об'єкт:
 *      { success: true, code: 'SUCCESS', withdrawn: сума, newBalance: новийБаланс, banknotes100: кількістьКупюрПо100 }.
 *
 * 💡 Приклади:
 * - processAtmWithdrawal(acc, '1234', '1234', '500 грн')
 *   => { success: true, code: 'SUCCESS', withdrawn: 500, newBalance: 4500, banknotes100: 5 }
 * - processAtmWithdrawal(acc, '0000', '1234', 500)
 *   => { success: false, code: 'WRONG_PIN', retriesLeft: 2, message: '...' }
 *
 * @param {object} account
 * @param {any} enteredPin
 * @param {string} correctPin
 * @param {any} requestedAmount
 * @returns {object}
 */
export function processAtmWithdrawal(account, enteredPin, correctPin, requestedAmount) {
  // TODO: Напиши свій розв'язок
  return { success: false, code: 'ERROR', message: '' };
}

/**
 * БОС-ЗАВДАННЯ 6.2: Розумний калькулятор знижок інтернет-магазину (Важкий рівень)
 *
 * 🎯 Суть завдання:
 * Розрахувати фінальну суму замовлення з урахуванням комбінації промокоду, статусу покупця,
 * оптової кількості товарів та акції Black Friday з контролем максимальної знижки (капінгом).
 *
 * 📋 Вимоги до функції:
 * Вхідний об'єкт замовлення: { rawPrice, promoCode, userRole, itemsCount, isBlackFriday }.
 * 1. Валідація ціни: отримати числову базову ціну (підтримуючи рядки виду "1000 грн"). Якщо ціна не є числом або <= 0 — повернути null.
 * 2. Промокод (без урахування регістру):
 *    - 'CAMP20' дає 20%.
 *    - 'SUMMER10' дає 10%.
 *    - 'SUPER50': дає 50% ТІЛЬКИ для ролей 'vip' або 'teacher' (і піднімає максимальний ліміт знижки до 60%); для інших ролей промокод дає лише 15%.
 * 3. Бонус за статус покупця userRole:
 *    - 'student' додає +5%, 'teacher' додає +10%, 'vip' додає +12%.
 * 4. Оптова знижка за itemsCount:
 *    - від 10 одиниць товару: +7%;
 *    - від 5 до 9 одиниць: +3%.
 * 5. Сезонна акція: якщо isBlackFriday === true — додати ще +10%.
 * 6. Обмеження (капінг): сумарний відсоток не може перевищувати 40% (або 60% за умови активації промокоду SUPER50 для пільгових ролей).
 * 7. Обчислити розмір знижки в гривнях (округлити до цілого за правилами Math.round) та фінальну вартість.
 * 8. Повернути об'єкт { originalPrice, discountPercent, discountAmount, finalPrice }.
 *
 * 💡 Приклад:
 * calculateSmartDiscount({ rawPrice: '1000 грн', promoCode: 'CAMP20', userRole: 'student', itemsCount: 6 })
 * => { originalPrice: 1000, discountPercent: 28, discountAmount: 280, finalPrice: 720 }
 *
 * @param {object} order
 * @returns {object | null}
 */
export function calculateSmartDiscount(order) {
  // TODO: Напиши свій розв'язок
  return null;
}

/**
 * БОС-ЗАВДАННЯ 6.3: Інтерактивний суддя JS-пасток (JS Coercion Judge) (Важкий рівень)
 *
 * 🎯 Суть завдання:
 * Проаналізувати пакет тестових виразів на неявне приведення типів у JavaScript
 * та надати статистичний звіт з вердиктом щодо кожного кейсу.
 *
 * 📋 Вимоги до функції:
 * - Приймає масив трійок cases виду [[a, b, op], ...], наприклад [['0', 0, '=='], [null, 0, '>=']].
 * - Якщо передано не масив — повернути { totalCases: 0, trueCount: 0, falseCount: 0, results: [] }.
 * - Для кожної трійки обчислити реальний результат операції в JavaScript за переданим оператором (==, ===, !=, !==, >, <, >=, <=).
 * - Порахувати загальну кількість результатів true та false.
 * - Для кожного кейсу сформувати детальний запис:
 *   { expression: `${String(a)} ${op} ${String(b)}`, evaluated: булевийРезультат, quirkReason: описПричини }.
 * - Повернути підсумковий об'єкт { totalCases, trueCount, falseCount, results }.
 *
 * 💡 Приклад:
 * evaluateJsQuirks([['0', 0, '=='], [null, 0, '>=']])
 * => { totalCases: 2, trueCount: 2, falseCount: 0, results: [...] }
 *
 * @param {Array<[any, any, string]>} cases
 * @returns {object}
 */
export function evaluateJsQuirks(cases) {
  // TODO: Напиши свій розв'язок
  return { totalCases: 0, trueCount: 0, falseCount: 0, results: [] };
}

/**
 * БОС-ЗАВДАННЯ 6.4: Комплексна валідація форми реєстрації (Важкий рівень)
 *
 * 🎯 Суть завдання:
 * Провести комплексну валідацію полів реєстраційної форми користувача та зібрати повний перелік виявлених помилок.
 *
 * 📋 Вимоги до функції:
 * Вхідні дані: { name, email, password, confirmPassword, age, agreeToTerms }.
 * Перевірити всі правила та накопичити повідомлення про помилки в масив:
 * 1. Ім'я: обов'язковий непорожній рядок довжиною щонайменше 2 символи (без пробілів по краях).
 *    Помилка: 'Імʼя занадто коротке'.
 * 2. Email: обов'язково містить символ '@' і крапку '.' після нього.
 *    Помилка: 'Невірний формат email'.
 * 3. Пароль: довжина щонайменше 6 символів.
 *    Помилка: 'Пароль менше 6 символів'.
 * 4. Підтвердження пароля: повинно строго збігатися з паролем.
 *    Помилка: 'Паролі не збігаються'.
 * 5. Вік: ціле число не менше 14 років.
 *    Помилка: 'Вік повинен бути не менше 14 років'.
 * 6. Згода з правилами: прапорець agreeToTerms повинен бути строго true.
 *    Помилка: 'Необхідно погодитися з правилами'.
 * Повернути об'єкт { isValid: boolean, errors: string[] }.
 *
 * 💡 Приклад:
 * validateRegistrationForm({ name: 'Тарас', email: 't@t.com', password: '123', confirmPassword: '321', age: 10, agreeToTerms: false })
 * => { isValid: false, errors: ['Пароль менше 6 символів', 'Паролі не збігаються', ...] }
 *
 * @param {object} formData
 * @returns {{ isValid: boolean, errors: string[] }}
 */
export function validateRegistrationForm(formData) {
  // TODO: Напиши свій розв'язок
  return { isValid: false, errors: [] };
}

/**
 * БОС-ЗАВДАННЯ 6.5: Калькулятор вартості поїздки таксі (Важкий рівень)
 *
 * 🎯 Суть завдання:
 * Розрахувати фінальний чек поїздки в таксі з урахуванням обраного тарифу, часу в заторі,
 * підвищеного попиту (коефіцієнта) та знижкового купона.
 *
 * 📋 Вимоги до функції:
 * 1. Базова формула тарифів:
 *    - 'standard': посадка 40 грн + 10 грн за км + 2 грн за хвилину.
 *    - 'comfort':  посадка 60 грн + 14 грн за км + 3 грн за хвилину.
 *    - 'business': посадка 100 грн + 22 грн за км + 5 грн за хвилину.
 * 2. Підвищений попит: якщо isSurge === true — вся нарахована сума множиться на 1.4.
 * 3. Знижковий купон: якщо hasCoupon === true — від загальної суми віднімається 50 грн,
 *    але підсумкова вартість не може стати меншою за вартість посадки відповідного тарифу.
 * 4. Округлити підсумок до найближчого цілого числа.
 *
 * 💡 Приклади:
 * - calculateRideFare(10, 15, 'standard', false, false) => 170 (40 + 10*10 + 15*2)
 * - calculateRideFare(10, 15, 'standard', true, false)  => 238 (170 * 1.4)
 *
 * @param {number} distanceKm
 * @param {number} timeMinutes
 * @param {string} [tariffType='standard']
 * @param {boolean} [isSurge=false]
 * @param {boolean} [hasCoupon=false]
 * @returns {number | null}
 */
export function calculateRideFare(distanceKm, timeMinutes, tariffType = 'standard', isSurge = false, hasCoupon = false) {
  // TODO: Напиши свій розв'язок
  return null;
}

/**
 * БОС-ЗАВДАННЯ 6.6: Раунд бою в покроковій RPG (Важкий рівень)
 *
 * 🎯 Суть завдання:
 * Змоделювати один раунд покрокової битви між гравцем та монстром:
 * обчислити завдану шкоду з урахуванням броні, критичного удару або лікування.
 *
 * 📋 Вимоги до функції:
 * Параметри персонажів:
 * - Герой: { hp, maxHp, attack, armor, isCrit }
 * - Монстр: { hp, attack, armor }
 * Хід поєдинку:
 * 1. Дія героя (action: 'attack' або 'heal'):
 *    - 'heal': відновлює 30 одиниць здоров'я, але не вище максимального запасу maxHp.
 *    - 'attack': шкода розраховується як атака героя мінус броня монстра (мінімум 5 одиниць).
 *      Якщо у героя активний критичний удар (isCrit === true) — шкода подвоюється. Шкода віднімається від здоров'я монстра.
 * 2. Хід монстра:
 *    - якщо монстр вижив після удару героя (monster.hp > 0), він контратакує героя:
 *      завдає шкоди у розмірі атака монстра мінус броня героя (мінімум 5 одиниць). Шкода віднімається від здоров'я героя.
 * 3. Повернути об'єкт зі станом битви після раунду:
 *    { heroHp, monsterHp, isHeroAlive: heroHp > 0, isMonsterAlive: monsterHp > 0, log: string[] }.
 *
 * 💡 Приклад:
 * rpgCombatTurn({ hp: 50, maxHp: 100, attack: 20, armor: 5 }, { hp: 30, attack: 15, armor: 5 }, 'attack')
 * => { heroHp: 40, monsterHp: 15, isHeroAlive: true, isMonsterAlive: true }
 *
 * @param {object} hero
 * @param {object} monster
 * @param {string} action
 * @returns {object | null}
 */
export function rpgCombatTurn(hero, monster, action) {
  // TODO: Напиши свій розв'язок
  return null;
}

/**
 * БОС-ЗАВДАННЯ 6.7: Безпечне читання вкладених властивостей об'єкта (Важкий рівень)
 *
 * 🎯 Суть завдання:
 * Реалізувати безпечний доступ до глибоко вкладених властивостей об'єкта за текстовим шляхом (наприклад "user.profile.theme"),
 * уникнувши критичної помилки "Cannot read properties of undefined".
 *
 * 📋 Вимоги до функції:
 * - Приймає вихідний об'єкт obj, рядок шляху path (наприклад 'company.address.city') та необов'язкове резервне значення fallback.
 * - Послідовно переходити вглиб структури за вказаними ключами.
 * - Якщо на будь-якому етапі проміжного або фінального читання значення є null або undefined — повернути fallback.
 * - Якщо шукана властивість знайдена — повернути її значення.
 *
 * 💡 Приклади:
 * - safeObjectPathLookup({ user: { profile: { theme: 'dark' } } }, 'user.profile.theme') => 'dark'
 * - safeObjectPathLookup({ user: {} }, 'user.profile.theme', 'light')                     => 'light'
 * - safeObjectPathLookup(null, 'user.name', 'guest')                                      => 'guest'
 *
 * @param {object} obj
 * @param {string} path
 * @param {any} [fallback=null]
 * @returns {any}
 */
export function safeObjectPathLookup(obj, path, fallback = null) {
  // TODO: Напиши свій розв'язок
  return fallback;
}

/**
 * БОС-ЗАВДАННЯ 6.8: Розумний паркомат (Smart Parking Meter) (Важкий рівень)
 *
 * 🎯 Суть завдання:
 * Розрахувати підсумковий чек за паркування автомобіля за часом заїзду та виїзду з урахуванням пільг та тарифної сітки.
 *
 * 📋 Вимоги до функції:
 * 1. Час заїзду та виїзду передається рядками формату "HH:MM" (наприклад "10:00" та "12:30").
 * 2. Якщо час виїзду раніший за час заїзду — повернути null (помилка даних).
 * 3. Розрахувати тривалість перебування у хвилинах.
 * 4. Кількість оплачуваних годин округлюється у більшу сторону (будь-яка неповна година тарифікується як повна).
 * 5. Пільгові умови:
 *    - Резиденти (hasResidentPass === true): паркування повністю безкоштовне (0 грн).
 *    - Власники електромобілів (isElectricCar === true): перші 2 години паркування безкоштовні (відняти 2 години від розрахункових).
 * 6. Базовий тариф: 30 грн за кожну оплачувану годину.
 * 7. Повернути підсумкову суму в гривнях.
 *
 * 💡 Приклади:
 * - smartParkingMeter("10:00", "12:30", false, false) => 90 (3 години * 30 грн)
 * - smartParkingMeter("10:00", "12:30", true, false)  => 30 (електрокар: 1 платна година)
 * - smartParkingMeter("10:00", "12:30", false, true)  => 0  (резидент)
 *
 * @param {string} entryTimeStr
 * @param {string} exitTimeStr
 * @param {boolean} [isElectricCar=false]
 * @param {boolean} [hasResidentPass=false]
 * @returns {number | null}
 */
export function smartParkingMeter(entryTimeStr, exitTimeStr, isElectricCar = false, hasResidentPass = false) {
  // TODO: Напиши свій розв'язок
  return null;
}

/**
 * БОС-ЗАВДАННЯ 6.9: Багатопараметричний фільтр каталогу (Важкий рівень)
 *
 * 🎯 Суть завдання:
 * Перевірити відповідність картки товару встановленим фільтрам пошуку в інтернет-магазині.
 *
 * 📋 Вимоги до функції:
 * - Товар описується об'єктом: { price, inStock, category, rating }.
 * - Об'єкт фільтрів може містити необов'язкові поля: { minPrice, maxPrice, inStockOnly, category, minRating }.
 * - Товар вважається відповідним (функція повертає true), якщо він одночасно задовольняє всі вказані критерії:
 *   - якщо задано minPrice: ціна товару не менша за minPrice;
 *   - якщо задано maxPrice: ціна товару не більша за maxPrice;
 *   - якщо inStockOnly === true: товар є в наявності (inStock === true);
 *   - якщо задано category: категорія збігається без урахування регістру;
 *   - якщо задано minRating: рейтинг товару не нижчий за minRating.
 * - Якщо хоча б один встановлений фільтр не збігається — повернути false.
 *
 * 💡 Приклад:
 * const item = { price: 500, inStock: true, category: 'books', rating: 4.8 };
 * evaluateBooleanSearchFilter(item, { minPrice: 100, inStockOnly: true }) => true
 * evaluateBooleanSearchFilter(item, { maxPrice: 400 })                   => false
 *
 * @param {object} item
 * @param {object} filters
 * @returns {boolean}
 */
export function evaluateBooleanSearchFilter(item, filters) {
  // TODO: Напиши свій розв'язок
  return false;
}

/**
 * БОС-ЗАВДАННЯ 6.10: Банківський антифрод аналізатор транзакцій (Важкий рівень)
 *
 * 🎯 Суть завдання:
 * Провести скоринг фінансової операції на ознаки шахрайства (Anti-fraud)
 * та ухвалити автоматичне рішення щодо її проведення або блокування.
 *
 * 📋 Вимоги до функції:
 * Вхідні дані:
 * - Поточний платіж: { amount, country }.
 * - Історія користувача: { avgAmount, homeCountry, isVerified }.
 * Алгоритм нарахування балів ризику (початковий riskScore = 0):
 * 1. Аномальна сума: якщо сума операції перевищує середній платіж avgAmount більш ніж у 5 разів —
 *    додати +40 балів до ризику та прапорець 'UNUSUAL_AMOUNT'.
 * 2. Нетипова локація: якщо країна операції не збігається з домашньою країною homeCountry —
 *    додати +35 балів до ризику та прапорець 'FOREIGN_LOCATION'.
 * 3. Неверифікований акаунт: якщо користувач не пройшов верифікацію (!isVerified) —
 *    додати +25 балів до ризику та прапорець 'UNVERIFIED_ACCOUNT'.
 * Підсумкове рішення (action):
 * - Якщо riskScore >= 70: action = 'BLOCK' (заблокувати операцію).
 * - Якщо riskScore >= 35: action = 'FLAG_FOR_REVIEW' (відправити на ручну перевірку).
 * - У решті випадків: action = 'APPROVE' (схвалити операцію).
 * Повернути об'єкт { action, riskScore, flags }.
 *
 * 💡 Приклади:
 * - antiFraudTransactionAnalyzer({ amount: 100, country: 'UA' }, { avgAmount: 100, homeCountry: 'UA', isVerified: true })
 *   => { action: 'APPROVE', riskScore: 0, flags: [] }
 * - antiFraudTransactionAnalyzer({ amount: 1000, country: 'US' }, { avgAmount: 100, homeCountry: 'UA', isVerified: false })
 *   => { action: 'BLOCK', riskScore: 100, flags: ['UNUSUAL_AMOUNT', 'FOREIGN_LOCATION', 'UNVERIFIED_ACCOUNT'] }
 *
 * @param {object} transaction
 * @param {object} userHistory
 * @returns {{ action: 'APPROVE' | 'FLAG_FOR_REVIEW' | 'BLOCK', riskScore: number, flags: string[] }}
 */
export function antiFraudTransactionAnalyzer(transaction, userHistory) {
  // TODO: Напиши свій розв'язок
  return { action: 'BLOCK', riskScore: 100, flags: [] };
}

/**
 * ==============================================================================
 * МОДУЛЬ 4: ЛОГІЧНІ ОПЕРАТОРИ (&&, ||, !) ТА SHORT-CIRCUIT
 * ==============================================================================
 *
 * 📖 ТЕОРІЯ:
 *
 * 1. Оператор && (Логічне І):
 *    - Зупиняється на першому Falsy значенні і повертає його.
 *    - Якщо всі істинні — повертає останній операнд.
 * 2. Оператор || (Логічне АБО):
 *    - Зупиняється на першому Truthy значенні і повертає його.
 * 3. Оператор ?? (Nullish Coalescing):
 *    - Повертає праве значення ТІЛЬКИ якщо ліве є null або undefined.
 *    - Зберігає 0, false та ""!
 * 4. Оператор ! (НЕ) та !! (приведення до boolean).
 *
 * 5. Читання полів об'єктів у логічних умовах:
 *    - Доступ до властивості здійснюється через крапку: driver.age >= 18, user.role === 'admin'.
 *    - Якщо властивість може бути відсутньою (undefined): оператор ?? дозволяє підставити резерв (user.points ?? 0).
 */

/**
 * ЗАВДАННЯ 4.1: Безпечний вибір конфігурації (Середній рівень)
 *
 * 🎯 Суть завдання:
 * Отримати фінальне значення конфігурації з урахуванням багаторівневих запасних варіантів (fallback).
 * ⚠️ Критичний нюанс: якщо користувач свідомо передав значення 0 (гучність 0), false (вимкнено) або "" (без суфікса),
 * ці валідні дані НЕ повинні замінюватися значеннями за замовчуванням!
 *
 * 📋 Вимоги до функції:
 * - Надати перевагу userValue, якщо воно визначене (тобто не дорівнює null та undefined).
 * - Якщо userValue відсутнє (null або undefined) — звернутися до defaultValue (якщо воно теж не null/undefined).
 * - Якщо і defaultValue відсутнє — повернути fallbackValue.
 *
 * 💡 Приклади:
 * - resolveConfig(0, 100, 200)             => 0 (значення 0 збережено!)
 * - resolveConfig(false, true, true)       => false (булеве false збережено!)
 * - resolveConfig('', 'default', 'fb')     => '' (порожній рядок збережено!)
 * - resolveConfig(null, 'dark', 'light')   => 'dark' (null замінено на defaultValue)
 * - resolveConfig(undefined, null, 'light') => 'light'
 *
 * @param {any} userValue
 * @param {any} defaultValue
 * @param {any} fallbackValue
 * @returns {any}
 */
export function resolveConfig(userValue, defaultValue, fallbackValue) {
  // TODO: Напиши свій розв'язок
  return null;
}

/**
 * ЗАВДАННЯ 4.2: Багаторівневий шлюз авторизації (Середній-Важкий рівень)
 *
 * 🎯 Суть завдання:
 * Реалізувати гнучку перевірку прав доступу користувача до різних системних ресурсів за допомогою логічних зв'язок.
 *
 * 📋 Вимоги до функції:
 * - Якщо об'єкт user відсутній або прапорець isBanned істинний — негайно відмовити: { isGranted: false, reason: 'User is banned' }.
 * - Правила доступу залежно від resource:
 *   - 'admin-panel': дозволено, якщо role === 'admin' та увімкнена двофакторна автентифікація (twoFactorEnabled).
 *   - 'secret-quest': дозволено для 'admin', або для будь-якого не-гостя (role !== 'guest'), якщо у нього subscriptionLevel === 'vip' АБО накопичено не менше 500 балів (points >= 500).
 *   - 'code-review': вимагає підтверджену електронну адресу (emailVerified) ТА одну з умов: роль 'admin', 'moderator', або рівень підписки 'pro' чи 'vip'.
 *   - 'dashboard': дозволено всім зареєстрованим користувачам (будь-яка роль, крім 'guest').
 *   - Для будь-якого іншого невідомого ресурсу: доступ заборонено.
 * - Повернути об'єкт { isGranted: boolean, reason: isGranted ? 'Access granted' : 'Access denied' }.
 *
 * 💡 Приклади:
 * - verifyAccess({ role: 'admin', isBanned: true }, 'admin-panel') => { isGranted: false, reason: 'User is banned' }
 * - verifyAccess({ role: 'admin', isBanned: false, twoFactorEnabled: true }, 'admin-panel') => { isGranted: true, reason: 'Access granted' }
 * - verifyAccess({ role: 'student', isBanned: false, subscriptionLevel: 'vip' }, 'secret-quest') => { isGranted: true, reason: 'Access granted' }
 *
 * @param {object} user
 * @param {string} resource
 * @returns {{ isGranted: boolean, reason: string }}
 */
export function verifyAccess(user, resource) {
  // TODO: Напиши свій розв'язок
  return { isGranted: false, reason: '' };
}

/**
 * ЗАВДАННЯ 4.3: Конвеєр валідації з ледачим перериванням (Важкий рівень)
 *
 * 🎯 Суть завдання:
 * Побудувати конвеєр валідації з механізмом Short-circuit (короткого замикання):
 * якщо певна перевірка зазнала невдачі, усі наступні кроки взагалі не повинні виконуватися.
 *
 * 📋 Вимоги до функції:
 * - Якщо масив validators порожній або некоректний — повернути { isValid: true, failedAt: null, executedCount: 0 }.
 * - Послідовно запускати кожну перевірку v.check(data), рахуючи кількість виконаних перевірок executedCount.
 * - Якщо результат перевірки хибний (falsy) — негайно зупинити обхід і повернути:
 *   { isValid: false, failedAt: v.name, executedCount }.
 * - Якщо всі перевірки пройшли успішно — повернути { isValid: true, failedAt: null, executedCount }.
 *
 * 💡 Приклад:
 * const v = [{ name: 'email', check: () => false }, { name: 'pass', check: () => true }];
 * validatePipeline(data, v)
 * => { isValid: false, failedAt: 'email', executedCount: 1 } (другий крок не виконувався!)
 *
 * @param {any} data
 * @param {Array<{ name: string, check: (d: any) => boolean }>} validators
 * @returns {{ isValid: boolean, failedAt: string | null, executedCount: number }}
 */
export function validatePipeline(data, validators) {
  // TODO: Напиши свій розв'язок
  return { isValid: false, failedAt: null, executedCount: 0 };
}

/**
 * ЗАВДАННЯ 4.4: Перевірка високосного року (Середній рівень)
 *
 * 🎯 Суть завдання:
 * Реалізувати класичний алгоритм перевірки року на високосність за допомогою логічних зв'язок.
 *
 * 📋 Вимоги до функції:
 * Рік є високосним, якщо:
 * - він ділиться без залишку на 4 І НЕ ділиться на 100,
 * - АБО якщо він ділиться на 400.
 * Повернути true або false.
 *
 * 💡 Приклади:
 * - isLeapYear(2024) => true (ділиться на 4 і не на 100)
 * - isLeapYear(2000) => true (ділиться на 400)
 * - isLeapYear(1900) => false (ділиться на 100 і не на 400)
 * - isLeapYear(2023) => false
 *
 * @param {number} year
 * @returns {boolean}
 */
export function isLeapYear(year) {
  // TODO: Напиши свій розв'язок
  return false;
}

/**
 * ЗАВДАННЯ 4.5: Дозвіл на керування автомобілем (Середній рівень)
 *
 * 🎯 Суть завдання:
 * Перевірити умови допуску до водіння з погляду правил безпеки дорожнього руху.
 *
 * 📋 Вимоги до функції:
 * Повернути true, ТІЛЬКИ якщо водночас виконуються всі 4 критерії:
 * - Вік водія становить щонайменше 18 років (driver.age >= 18).
 * - Водій має водійське посвідчення (driver.hasLicense === true).
 * - Водій не перебуває у стані сп'яніння (driver.isIntoxicated є хибним або відсутнє).
 * - Страховий поліс є дійсним (driver.insuranceValid === true).
 * За будь-якої іншої комбінації повернути false.
 *
 * 💡 Приклади:
 * - canDriveCar({ age: 20, hasLicense: true, isIntoxicated: false, insuranceValid: true }) => true
 * - canDriveCar({ age: 16, hasLicense: true, isIntoxicated: false, insuranceValid: true }) => false
 * - canDriveCar({ age: 25, hasLicense: true, isIntoxicated: true, insuranceValid: true })  => false
 *
 * @param {object} driver
 * @returns {boolean}
 */
export function canDriveCar(driver) {
  // TODO: Напиши свій розв'язок
  return false;
}

/**
 * ЗАВДАННЯ 4.6: Значення за замовчуванням при Falsy (Легкий рівень)
 *
 * 🎯 Суть завдання:
 * Реалізувати класичний вибір значення за замовчуванням на основі логічної правдивості (truthy / falsy).
 *
 * 📋 Вимоги до функції:
 * - Якщо передане значення val є truthy — повернути його.
 * - Якщо val є будь-яким falsy значенням ("", 0, false, null, undefined, NaN) — повернути запасне значення fallback.
 *
 * 💡 Приклади:
 * - defaultIfFalsy('user', 'guest') => 'user'
 * - defaultIfFalsy('', 'guest')     => 'guest'
 * - defaultIfFalsy(0, 10)           => 10
 *
 * @param {any} val
 * @param {any} fallback
 * @returns {any}
 */
export function defaultIfFalsy(val, fallback) {
  // TODO: Напиши свій розв'язок
  return fallback;
}

/**
 * ЗАВДАННЯ 4.7: Логічне виключне АБО (XOR) (Середній рівень)
 *
 * 🎯 Суть завдання:
 * Реалізувати логічну операцію "виключне АБО": результат істинний тоді й лише тоді,
 * коли рівно один з двох операндів є істинним, а інший — хибним.
 *
 * 📋 Вимоги до функції:
 * - Звести обидва аргументи до логічного значення.
 * - Повернути true, якщо один аргумент істинний, а другий хибний.
 * - Якщо обидва аргументи істинні, або обидва хибні — повернути false.
 *
 * 💡 Приклади:
 * - xor(true, false)   => true
 * - xor(false, true)   => true
 * - xor(true, true)    => false (обидва істинні — не виключне!)
 * - xor(false, false)  => false
 *
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
export function xor(a, b) {
  // TODO: Напиши свій розв'язок
  return false;
}

/**
 * ЗАВДАННЯ 4.8: Обчислення складного логічного виразу (Середній рівень)
 *
 * 🎯 Суть завдання:
 * Змоделювати пріоритет операцій у логічних виразах (оператор && має вищий пріоритет за ||).
 *
 * 📋 Вимоги до функції:
 * - Звести a, b, c до булевих значень.
 * - Врахувати пріоритет дій: зв'язка && виконується раніше за || незалежно від порядку запису операндів.
 * - Повернути кінцевий булевий результат.
 *
 * 💡 Приклади:
 * - evaluateLogicalExpression(true, '||', false, '&&', false) => true
 * - evaluateLogicalExpression(false, '&&', true, '||', true)   => true
 *
 * @param {any} a
 * @param {string} op1 - '&&' або '||'
 * @param {any} b
 * @param {string} op2 - '&&' або '||'
 * @param {any} c
 * @returns {boolean}
 */
export function evaluateLogicalExpression(a, op1, b, op2, c) {
  // TODO: Напиши свій розв'язок
  return false;
}

/**
 * ЗАВДАННЯ 4.9: Захищений виклик функції (Guard Pattern) (Середній рівень)
 *
 * 🎯 Суть завдання:
 * Реалізувати захисний патерн (Guard pattern): викликати функцію з переданими аргументами
 * лише за умови, що прапорець дозволу істинний і функція дійсно існує.
 *
 * 📋 Вимоги до функції:
 * - Якщо isAllowed має істинне значення та callback дійсно є функцією — викликати її з усіма додатковими аргументами args та повернути результат.
 * - Якщо доступ заборонено або callback не є функцією — повернути undefined без виконання дій.
 *
 * 💡 Приклади:
 * - guardFunctionCall(true, x => x * 2, 5)  => 10
 * - guardFunctionCall(false, x => x * 2, 5) => undefined
 *
 * @param {boolean} isAllowed
 * @param {Function} callback
 * @param  {...any} args
 * @returns {any}
 */
export function guardFunctionCall(isAllowed, callback, ...args) {
  // TODO: Напиши свій розв'язок
  return undefined;
}

/**
 * ЗАВДАННЯ 4.10: Банківський скоринг на отримання кредиту (Важкий рівень)
 *
 * 🎯 Суть завдання:
 * Застосувати комплексний логічний аналіз для ухвалення рішення щодо видачі кредиту на основі профілю позичальника.
 *
 * 📋 Вимоги до функції:
 * Профіль позичальника містить: { age, creditScore, monthlyIncome, monthlyDebt, hasGuarantor }.
 * Правила кредитного скорингу:
 * 1. Вік позичальника повинен бути в діапазоні від 21 до 65 років включно.
 * 2. Кредитний рейтинг повинен становити не менше 600 балів.
 * 3. Частка боргового навантаження DTI = (monthlyDebt / monthlyIncome) * 100:
 *    - якщо DTI <= 50% — норматив виконано;
 *    - якщо DTI > 50% — кредит дозволено лише за наявності платоспроможного поручителя (hasGuarantor === true).
 * 4. Якщо всі умови задоволено — повернути { approved: true, reason: 'Кредит схвалено' }.
 * 5. Якщо будь-яка умова порушена — повернути { approved: false, reason: '...' } з описом причини.
 *
 * 💡 Приклади:
 * - complexLoanApproval({ age: 30, creditScore: 700, monthlyIncome: 2000, monthlyDebt: 400 }) => { approved: true, reason: 'Кредит схвалено' }
 * - complexLoanApproval({ age: 18, creditScore: 700, monthlyIncome: 2000, monthlyDebt: 400 }) => { approved: false, reason: '...' }
 *
 * @param {object} applicant
 * @returns {{ approved: boolean, reason: string }}
 */
export function complexLoanApproval(applicant) {
  // TODO: Напиши свій розв'язок
  return { approved: false, reason: '' };
}

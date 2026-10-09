/**
 * ==============================================================================
 * МОДУЛЬ 2: ЯВНЕ ТА НЕЯВНЕ ПРИВЕДЕННЯ ТИПІВ (TYPE COERCION)
 * ==============================================================================
 *
 * 📖 ТЕОРІЯ:
 *
 * 1. 6 FALSY ЗНАЧЕНЬ У JAVASCRIPT:
 *    - false, 0, -0, "" (порожній рядок), null, undefined, NaN
 *    - УСІ інші значення є TRUTHY: "0", "false", " ", [], {} !
 *
 * 2. Явне приведення:
 *    - Boolean(x) або !!x -> boolean
 *    - Number(x) або +x   -> number
 *    - String(x)          -> string
 *
 * 3. Неявне приведення:
 *    - '10' - 2 === 8 (оператори -, *, / приводять до чисел)
 *    - '10' + 2 === '102' (оператор + з рядком робить конкатенацію!)
 *    - null у числі дає 0: Number(null) === 0
 *    - undefined у числі дає NaN: Number(undefined) === NaN
 *
 * 4. Об'єкти у відповідях (Як повернути об'єкт з функції):
 *    - Якщо завдання вимагає повернути об'єкт з полями:
 *      return { isTruthy: true, originalType: 'string', stringRepresentation: '0' };
 *    - Отримати тип: typeof value повертає назву типу у вигляді рядка ('number', 'string' тощо).
 *
 * 5. Масиви (Array) — базові поняття:
 *    - Масив зберігає перелік значень: [1, 2, 'рядок', false].
 *    - Перевірка, чи значення є масивом: Array.isArray(items).
 *    - Порожній масив записується як [].
 */

/**
 * ЗАВДАННЯ 2.1: Детальний аналізатор булевої сутності (Легкий рівень)
 *
 * 🎯 Суть завдання:
 * Будь-яке значення у JavaScript при потраплянні в логічний контекст поводиться як
 * істинне (truthy) або хибне (falsy). Функція повинна провести повний аналіз переданого аргументу.
 *
 * 📋 Вимоги до функції:
 * Повернути об'єкт з трьома властивостями:
 * - isTruthy (boolean): чи є значення істинним у булевому контексті.
 * - originalType (string): назва початкового типу даних (наприклад, 'number', 'string', 'object').
 * - stringRepresentation (string): текстове представлення значення при перетворенні на рядок.
 *
 * 💡 Приклади:
 * - inspectBoolean("0")  => { isTruthy: true, originalType: 'string', stringRepresentation: '0' }
 * - inspectBoolean(0)    => { isTruthy: false, originalType: 'number', stringRepresentation: '0' }
 * - inspectBoolean([])   => { isTruthy: true, originalType: 'object', stringRepresentation: '' }
 * - inspectBoolean(null) => { isTruthy: false, originalType: 'object', stringRepresentation: 'null' }
 *
 * @param {any} value - будь-яке значення для аналізу
 * @returns {{ isTruthy: boolean, originalType: string, stringRepresentation: string }}
 */
export function inspectBoolean(value) {
  // TODO: Напиши свій розв'язок
  return { isTruthy: false, originalType: '', stringRepresentation: '' };
}

/**
 * ЗАВДАННЯ 2.2: Фільтр справжнього нуля vs Falsy-пастки (Середній рівень)
 *
 * 🎯 Суть завдання:
 * У веб-формах та базах даних число 0 або рядок "0" часто є цілком валідними даними
 * (наприклад, баланс рахунку, оцінка, кількість), тоді як false, null чи "" позначають відсутність даних.
 *
 * 📋 Вимоги до функції:
 * Повернути true виключно за таких умов:
 * - Передано число 0 (або -0).
 * - АБО передано рядок, який після видалення пробілів по краях дорівнює "0".
 * - Для будь-яких інших значень (у тому числі false, null, undefined, "", [], {}) повернути false.
 *
 * 💡 Приклади:
 * - isRealZeroOrZeroString(0)        => true
 * - isRealZeroOrZeroString("  0  ")  => true
 * - isRealZeroOrZeroString(false)    => false (булеве false не є числом 0!)
 * - isRealZeroOrZeroString(null)     => false
 * - isRealZeroOrZeroString("")       => false
 *
 * @param {any} val
 * @returns {boolean}
 */
export function isRealZeroOrZeroString(val) {
  // TODO: Напиши свій розв'язок
  return false;
}

/**
 * ЗАВДАННЯ 2.3: Очищення списку від Falsy елементів (Легкий-Середній рівень)
 *
 * 🎯 Суть завдання:
 * Очистити список від усіх "хибних" (falsy) значень у JavaScript, зберігши лише ті, що сприймаються як істинні.
 *
 * 📋 Вимоги до функції:
 * - Якщо переданий аргумент не є масивом — повернути порожній масив [].
 * - Відфільтрувати список так, щоб залишилися тільки truthy-елементи (відсіявши false, 0, -0, "", null, undefined, NaN).
 * - Пам'ятайте: непорожні рядки (наприклад, "0" чи "false") та порожні масиви [] є truthy і повинні залишитися.
 * - Повернути новий відфільтрований масив, не змінюючи оригінальний.
 *
 * 💡 Приклад:
 * cleanFalsyList([0, '0', '', 'hello', false, true, null, undefined, NaN])
 * => ['0', 'hello', true]
 *
 * @param {any[]} items
 * @returns {any[]}
 */
export function cleanFalsyList(items) {
  // TODO: Напиши свій розв'язок
  return [];
}

/**
 * ЗАВДАННЯ 2.4: Розумний парсер грошових сум з рядка (Середній рівень)
 *
 * 🎯 Суть завдання:
 * Користувачі вводять суми у довільному форматі: " 1200 грн ", "$400,75", "50.5 EUR".
 * Потрібно надійно вилучити валідне додатне число.
 *
 * 📋 Вимоги до функції:
 * - Якщо передано скінченне невід'ємне число (>= 0) — одразу повернути його.
 * - Якщо вхідні дані не є рядком і не є числом — повернути NaN.
 * - У рядках підтримувати як кому, так і крапку у ролі десяткового роздільника (наприклад, "400,75" -> 400.75).
 * - Знайти та розпарсити числову частину. Від'ємні суми (< 0) є неприпустимими і мають повертати NaN.
 * - Якщо число не вдалося знайти або вхід некоректний — повернути NaN.
 *
 * 💡 Приклади:
 * - parseCurrency(" 1200 грн ") => 1200
 * - parseCurrency("$400,75")    => 400.75
 * - parseCurrency("-50 грн")    => NaN (сума не може бути від'ємною)
 * - parseCurrency("немає ціни") => NaN
 *
 * @param {any} input
 * @returns {number}
 */
export function parseCurrency(input) {
  // TODO: Напиши свій розв'язок
  return NaN;
}

/**
 * ЗАВДАННЯ 2.5: Симулятор неявного приведення типів (Важкий рівень)
 *
 * 🎯 Суть завдання:
 * Дослідити поведінку неявного приведення типів під час виконання бінарних операцій між двома значеннями довільних типів.
 *
 * 📋 Вимоги до функції:
 * Виконати вказану операцію ('+', '-', '*', '/') між операндами a та b і повернути об'єкт аналізу:
 * - result: результат виконання операції між a та b.
 * - resultType: тип отриманого результату (typeof result).
 * - isCoerced (boolean): true, якщо типи операндів a та b відрізнялися між собою.
 * - isDangerous (boolean): true, якщо операція потенційно небезпечна через приховані нюанси JS:
 *   1) якщо хоча б один операнд дорівнює null або undefined;
 *   2) або якщо хоча б один операнд є boolean для операцій крім '+';
 *   3) або якщо результатом обчислення стало NaN.
 *
 * 💡 Приклади:
 * - evalImplicitCoercion('10', '2', '-')
 *   => { result: 8, resultType: 'number', isCoerced: true, isDangerous: false }
 * - evalImplicitCoercion(null, 5, '+')
 *   => { result: 5, resultType: 'number', isCoerced: true, isDangerous: true }
 *
 * @param {any} a
 * @param {any} b
 * @param {string} operator - один з '+', '-', '*', '/'
 * @returns {{ result: any, resultType: string, isCoerced: boolean, isDangerous: boolean }}
 */
export function evalImplicitCoercion(a, b, operator) {
  // TODO: Напиши свій розв'язок
  return { result: null, resultType: '', isCoerced: false, isDangerous: false };
}

/**
 * ЗАВДАННЯ 2.6: Строге приведення до числа (Середній-Важкий рівень)
 *
 * 🎯 Суть завдання:
 * Стандартний Number() у JavaScript має неочевидні пастки: Number(null) === 0, Number(false) === 0, Number("") === 0.
 * Необхідно створити функцію, яка перетворює на число ТІЛЬКИ дійсні числа та строго числові рядки.
 *
 * 📋 Вимоги до функції:
 * - Якщо передано скінченне число — повернути його.
 * - Якщо аргумент не є числовим рядком (наприклад: null, false, true, [], об'єкт або текст з літерами) — повернути NaN.
 * - Якщо рядок після очищення пробілів по краях є порожнім — повернути NaN.
 * - Підтримувати цілі та дробові числа (з можливим знаком мінус).
 *
 * 💡 Приклади:
 * - strictToNumber("42")     => 42
 * - strictToNumber("-15.5")  => -15.5
 * - strictToNumber(false)    => NaN
 * - strictToNumber(null)     => NaN
 * - strictToNumber("   ")    => NaN
 *
 * @param {any} val
 * @returns {number}
 */
export function strictToNumber(val) {
  // TODO: Напиши свій розв'язок
  return NaN;
}

/**
 * ЗАВДАННЯ 2.7: Картка приведення до трьох примітивів (Середній рівень)
 *
 * 🎯 Суть завдання:
 * Створити зведену таблицю перетворення переданого значення у три ключові типи JavaScript.
 *
 * 📋 Вимоги до функції:
 * Повернути об'єкт з трьома полями:
 * - asString: значення, приведене до рядка.
 * - asNumber: значення, приведене до числа (якщо операція викликає виняток, безпечно перехопити його і встановити NaN).
 * - asBoolean: значення, приведене до логічного типу.
 *
 * 💡 Приклади:
 * - coerceToPrimitivesSummary("123") => { asString: "123", asNumber: 123, asBoolean: true }
 * - coerceToPrimitivesSummary(0)     => { asString: "0", asNumber: 0, asBoolean: false }
 *
 * @param {any} val
 * @returns {{ asString: string, asNumber: number, asBoolean: boolean }}
 */
export function coerceToPrimitivesSummary(val) {
  // TODO: Напиши свій розв'язок
  return { asString: '', asNumber: 0, asBoolean: false };
}

/**
 * ЗАВДАННЯ 2.8: Безпечне математичне ділення (Середній рівень)
 *
 * 🎯 Суть завдання:
 * Реалізувати захищене математичне ділення з перевіркою коректності обох операндів.
 *
 * 📋 Вимоги до функції:
 * - Перетворити чисельник та знаменник на числа.
 * - Перевірити, що обидва операнди є коректними скінченними числами.
 * - Знаменник не повинен дорівнювати нулю (захист від Infinity).
 * - Якщо хоча б одна з перевірок не пройдена — повернути null.
 * - Інакше обчислити частку та повернути отримане число.
 *
 * 💡 Приклади:
 * - safeDivision("10", "2") => 5
 * - safeDivision(10, 0)     => null (захист від ділення на 0)
 * - safeDivision("abc", 2)  => null (некоректні дані)
 *
 * @param {any} numerator - чисельник
 * @param {any} denominator - знаменник
 * @returns {number | null}
 */
export function safeDivision(numerator, denominator) {
  // TODO: Напиши свій розв'язок
  return null;
}

/**
 * ЗАВДАННЯ 2.9: Строга перевірка на порожнечу (Середній рівень)
 *
 * 🎯 Суть завдання:
 * У користувацьких інтерфейсах число 0 або стан false несуть важливу інформацію і не є порожнечею.
 * Порожніми вважаються лише відсутні дані або рядки, у яких немає жодного змістовного символу.
 *
 * 📋 Вимоги до функції:
 * Повернути true ТІЛЬКИ якщо:
 * - Значення дорівнює null або undefined.
 * - АБО значення є рядком, який після видалення пробілів є порожнім.
 * Для будь-яких інших значень (число 0, -0, boolean false, масив [], об'єкт {}) повернути false.
 *
 * 💡 Приклади:
 * - isStrictlyEmpty(null)   => true
 * - isStrictlyEmpty("   ")  => true
 * - isStrictlyEmpty(0)      => false (число 0 не є порожнечею!)
 * - isStrictlyEmpty(false)  => false (булеве false не є порожнечею!)
 *
 * @param {any} val
 * @returns {boolean}
 */
export function isStrictlyEmpty(val) {
  // TODO: Напиши свій розв'язок
  return false;
}

/**
 * ЗАВДАННЯ 2.10: Оцінка ризику нестрогого порівняння (Важкий рівень)
 *
 * 🎯 Суть завдання:
 * Наочно показати, чому використання == замість === у JavaScript є небезпечним джерелом прихованих помилок.
 *
 * 📋 Вимоги до функції:
 * Порівняти val1 та val2 і повернути об'єкт { risk, reason }:
 * - risk: 'NONE' — якщо значення строго ідентичні (однаковий тип і однакове значення без неявних перетворень).
 * - risk: 'HIGH_RISK' — якщо значення вважаються рівними за нестрогим порівнянням (==), але мають різні початкові типи.
 *   У reason повернути рядок: `Типи ${typeof val1} та ${typeof val2} рівні тільки через неявне приведення`.
 * - risk: 'LOW_RISK' — якщо значення не рівні навіть при нестрогому порівнянні. У reason зазначити: 'Значення не рівні'.
 *
 * 💡 Приклади:
 * - compareTypeCoercionRisk(42, 42)   => { risk: 'NONE', reason: 'Значення строго рівні без приведення' }
 * - compareTypeCoercionRisk('0', 0)   => { risk: 'HIGH_RISK', reason: '...' }
 * - compareTypeCoercionRisk('cat', 5) => { risk: 'LOW_RISK', reason: '...' }
 *
 * @param {any} val1
 * @param {any} val2
 * @returns {{ risk: 'NONE' | 'HIGH_RISK' | 'LOW_RISK', reason: string }}
 */
export function compareTypeCoercionRisk(val1, val2) {
  // TODO: Напиши свій розв'язок
  return { risk: 'LOW_RISK', reason: '' };
}

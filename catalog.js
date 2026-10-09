import * as m1 from './src/01-io-and-types.js';
import * as m2 from './src/02-coercion.js';
import * as m3 from './src/03-comparisons.js';
import * as m4 from './src/04-logical-operators.js';
import * as m5 from './src/05-ternary.js';
import * as m6 from './src/06-boss-challenges.js';

export const workoutCatalog = [
  // ==============================================================================
  // МОДУЛЬ 1: ВВЕДЕННЯ/ВИВЕДЕННЯ, ЗМІННІ ТА МЕТОДИ РЯДКІВ
  // ==============================================================================
  {
    id: 'm1',
    name: 'Модуль 1: Введення/виведення, змінні та методи рядків',
    shortTitle: 'Модуль 1: I/O та Типи',
    file: '01-io-and-types.js',
    tasks: [
      {
        id: '1.1',
        name: 'parseAgeFromPrompt',
        title: 'Безпечний парсер віку від prompt',
        level: 'Легкий рівень',
        goal: 'Користувач вводить свій вік через prompt(). Необхідно отримати коректне ціле число років або null.',
        requirements: [
          'Якщо натиснуто Cancel (null) або введено лише пробіли — повернути null.',
          'Вік повинен бути цілим невід\'ємним числом (0 і більше).',
          'Якщо введено текст ("abc"), дробове число або від\'ємне — повернути null.'
        ],
        examples: 'parseAgeFromPrompt("16") => 16\nparseAgeFromPrompt("  17  ") => 17\nparseAgeFromPrompt(null) => null\nparseAgeFromPrompt("abc") => null',
        theoryHint: '💡 <b>Парсинг чисел:</b> Для перетворення очищеного рядка на число використайте функцію <code>Number()</code> та метод <code>.trim()</code>. Перевірити, чи число є цілим: <code>Number.isInteger()</code>.',
        starterCode: `export function parseAgeFromPrompt(input) {\n  // TODO: Напиши свій розв'язок\n  return null;\n}`,
        fallbackFn: m1.parseAgeFromPrompt,
        cases: [
          { label: 'Звичайний числовий рядок "16"', inputLabel: '"16"', expected: 16, run: fn => fn('16') },
          { label: 'Число з пробілами "  17  "', inputLabel: '"  17  "', expected: 17, run: fn => fn('  17  ') },
          { label: 'Натиснуто Cancel (null)', inputLabel: 'null', expected: null, run: fn => fn(null) },
          { label: 'Порожній рядок ""', inputLabel: '""', expected: null, run: fn => fn('') },
          { label: 'Нечисловий текст "abc"', inputLabel: '"abc"', expected: null, run: fn => fn('abc') },
          { label: 'Відʼємне число "-5"', inputLabel: '"-5"', expected: null, run: fn => fn('-5') }
        ]
      },
      {
        id: '1.2',
        name: 'cleanUserNickname',
        title: 'Очищення нікнейму користувача',
        level: 'Легкий рівень',
        goal: 'Прибрати зайві пробіли з нікнейму користувача та обмежити довжину до 15 символів.',
        requirements: [
          'Видалити пробіли на початку та в кінці рядка.',
          'Якщо передано null або лише пробіли — встановити дефолтний нікнейм "Anonymous".',
          'Якщо довжина перевищує 15 символів — обрізати рівно до 15.'
        ],
        examples: 'cleanUserNickname("  Neo  ") => "Neo"\ncleanUserNickname("   ") => "Anonymous"\ncleanUserNickname("CyberWarrior2077ExtraLong") => "CyberWarrior207"',
        theoryHint: '💡 <b>Обрізка рядка:</b> Для отримання потрібної кількості початкових символів підійде метод <code>.slice(початок, кінець)</code>, а для видалення пробілів по краях — <code>.trim()</code>.',
        starterCode: `export function cleanUserNickname(rawInput) {\n  // TODO: Напиши свій розв'язок\n  return '';\n}`,
        fallbackFn: m1.cleanUserNickname,
        cases: [
          { label: 'Очищення пробілів "  Neo  "', inputLabel: '"  Neo  "', expected: 'Neo', run: fn => fn('  Neo  ') },
          { label: 'Лише пробіли "   "', inputLabel: '"   "', expected: 'Anonymous', run: fn => fn('   ') },
          { label: 'Значення null', inputLabel: 'null', expected: 'Anonymous', run: fn => fn(null) },
          { label: 'Довгий нікнейм (25 символів)', inputLabel: '"CyberWarrior2077ExtraLong"', expected: 'CyberWarrior207', run: fn => fn('CyberWarrior2077ExtraLong') }
        ]
      },
      {
        id: '1.3',
        name: 'safeSumPrompt',
        title: 'Безпечний калькулятор суми двох значень',
        level: 'Середній рівень',
        goal: 'Додати два числа від користувача із захистом від відміни введення та нечислових даних.',
        requirements: [
          'Якщо будь-який аргумент null або після trim() порожній — повернути "Помилка: введення скасовано".',
          'Перетворити операнди на числа. Якщо хоча б одне не є скінченним числом — повернути "Помилка: невірне число".',
          'Інакше повернути їх математичну суму (number).'
        ],
        examples: 'safeSumPrompt("10", "20") => 30\nsafeSumPrompt(" 15.5 ", " 4.5 ") => 20\nsafeSumPrompt(null, "10") => "Помилка: введення скасовано"',
        theoryHint: '💡 <b>Перевірка чисел:</b> Функція <code>Number.isFinite()</code> перевіряє, що значення є дійсним скінченним числом (відсіює NaN та Infinity).',
        starterCode: `export function safeSumPrompt(promptA, promptB) {\n  // TODO: Напиши свій розв'язок\n  return 0;\n}`,
        fallbackFn: m1.safeSumPrompt,
        cases: [
          { label: 'Сума цілих чисел "10" + "20"', inputLabel: '"10", "20"', expected: 30, run: fn => fn('10', '20') },
          { label: 'Сума дробових чисел " 15.5 " + " 4.5 "', inputLabel: '" 15.5 ", " 4.5 "', expected: 20, run: fn => fn(' 15.5 ', ' 4.5 ') },
          { label: 'Скасування введення (null)', inputLabel: 'null, "10"', expected: 'Помилка: введення скасовано', run: fn => fn(null, '10') },
          { label: 'Нечисловий ввід "abc"', inputLabel: '"abc", "10"', expected: 'Помилка: невірне число', run: fn => fn('abc', '10') }
        ]
      },
      {
        id: '1.4',
        name: 'formatUserGreeting',
        title: 'Форматування привітання користувача',
        level: 'Середній рівень',
        goal: 'Сформувати рядок привітання з визначенням повноліття користувача.',
        requirements: [
          'Імʼя: видалити пробіли. Якщо порожнє — "Гість".',
          'Вік: перевірити діапазон 0..120. Якщо валідний — статус "Повнолітній" (>=18) або "Неповнолітній", інакше вік "не вказано", статус "Гість".',
          'Формат: "Користувач: {name}, Вік: {age}, Статус: {status}"'
        ],
        examples: 'formatUserGreeting("Іван", "18") => "Користувач: Іван, Вік: 18, Статус: Повнолітній"',
        theoryHint: '💡 <b>Шаблонні рядки:</b> Використовуйте зворотні лапки <code>`Користувач: ${name}`</code> для зручної підстановки змінних.',
        starterCode: `export function formatUserGreeting(rawName, rawAge) {\n  // TODO: Напиши свій розв'язок\n  return '';\n}`,
        fallbackFn: m1.formatUserGreeting,
        cases: [
          { label: 'Повнолітній користувач', inputLabel: '"Іван", "18"', expected: 'Користувач: Іван, Вік: 18, Статус: Повнолітній', run: fn => fn('Іван', '18') },
          { label: 'Неповнолітній користувач', inputLabel: '"Максим", "16"', expected: 'Користувач: Максим, Вік: 16, Статус: Неповнолітній', run: fn => fn('Максим', '16') },
          { label: 'Гість без віку', inputLabel: 'null, "invalid"', expected: 'Користувач: Гість, Вік: не вказано, Статус: Гість', run: fn => fn(null, 'invalid') }
        ]
      },
      {
        id: '1.5',
        name: 'normalizeEmail',
        title: 'Нормалізація та валідація email',
        level: 'Середній рівень',
        goal: 'Очистити email, перевести у нижній регістр та провести базову валідацію.',
        requirements: [
          'Видалити крайні пробіли та перевести у нижній регістр (toLowerCase).',
          'Email повинен містити символ @, але не на першому і не на останньому місці.',
          'Після символу @ повинна бути щонайменше одна крапка .',
          'Якщо хоча б одне правило порушено — повернути null.'
        ],
        examples: 'normalizeEmail("  Ivan@Gmail.Com  ") => "ivan@gmail.com"\nnormalizeEmail("invalid-email") => null',
        theoryHint: '💡 <b>Пошук у рядку:</b> Для перевірки наявності символу в тексті використовуйте метод <code>.indexOf()</code> або <code>.includes()</code>.',
        starterCode: `export function normalizeEmail(rawEmail) {\n  // TODO: Напиши свій розв'язок\n  return null;\n}`,
        fallbackFn: m1.normalizeEmail,
        cases: [
          { label: 'Валідний email з пробілами', inputLabel: '"  Ivan@Gmail.Com  "', expected: 'ivan@gmail.com', run: fn => fn('  Ivan@Gmail.Com  ') },
          { label: 'Email без @', inputLabel: '"invalid-email"', expected: null, run: fn => fn('invalid-email') },
          { label: 'Символ @ на початку', inputLabel: '"@domain.com"', expected: null, run: fn => fn('@domain.com') },
          { label: 'Без крапки після @', inputLabel: '"user@domain"', expected: null, run: fn => fn('user@domain') }
        ]
      },
      {
        id: '1.6',
        name: 'parseBooleanConfirm',
        title: 'Універсальний парсер згоди користувача',
        level: 'Легкий-Середній рівень',
        goal: 'Розпізнати згоду користувача з різних форматів введення.',
        requirements: [
          'Якщо вхід вже булевий — повернути його значення.',
          'Якщо текстовий: "так", "yes", "true", "1", "y" (регістронезалежно) -> true.',
          'Якщо "ні", "no", "false", "0", "n" -> false.',
          'В інших випадках повернути defaultState.'
        ],
        examples: 'parseBooleanConfirm("  ТАК  ") => true\nparseBooleanConfirm("no") => false\nparseBooleanConfirm("хз", true) => true',
        theoryHint: '💡 <b>Регістронезалежність:</b> Зведіть вхідний рядок до єдиного регістру за допомогою <code>.toLowerCase()</code> та видаліть зайві пробіли перед порівнянням.',
        starterCode: `export function parseBooleanConfirm(input, defaultState = false) {\n  // TODO: Напиши свій розв'язок\n  return false;\n}`,
        fallbackFn: m1.parseBooleanConfirm,
        cases: [
          { label: 'Булевий true', inputLabel: 'true', expected: true, run: fn => fn(true) },
          { label: 'Рядок "  ТАК  "', inputLabel: '"  ТАК  "', expected: true, run: fn => fn('  ТАК  ') },
          { label: 'Рядок "yes"', inputLabel: '"yes"', expected: true, run: fn => fn('yes') },
          { label: 'Рядок "ні"', inputLabel: '"ні"', expected: false, run: fn => fn('ні') },
          { label: 'Невідомий ввід з fallback=true', inputLabel: '"unknown", true', expected: true, run: fn => fn('unknown', true) }
        ]
      },
      {
        id: '1.7',
        name: 'calculateRectanglePerimeter',
        title: 'Периметр прямокутника з валідацією',
        level: 'Легкий рівень',
        goal: 'Обчислити периметр прямокутника за двома сторонами.',
        requirements: [
          'Перетворити сторони на числа. Обидві сторони мають бути строго більшими за 0.',
          'Якщо сторони невалідні або відʼємні — повернути null.',
          'Інакше повернути 2 * (a + b).'
        ],
        examples: 'calculateRectanglePerimeter("5", "10") => 30\ncalculateRectanglePerimeter("-5", "10") => null',
        theoryHint: '💡 <b>Периметр прямокутника:</b> Згадайте формулу подвоєної суми сторін та перевірте валідність вхідних чисел (мають бути додатними).',
        starterCode: `export function calculateRectanglePerimeter(rawWidth, rawHeight) {\n  // TODO: Напиши свій розв'язок\n  return null;\n}`,
        fallbackFn: m1.calculateRectanglePerimeter,
        cases: [
          { label: 'Цілі сторони "5" та "10"', inputLabel: '"5", "10"', expected: 30, run: fn => fn('5', '10') },
          { label: 'Дробові сторони " 4.5 " та " 5.5 "', inputLabel: '" 4.5 ", " 5.5 "', expected: 20, run: fn => fn(' 4.5 ', ' 5.5 ') },
          { label: 'Значення null', inputLabel: 'null, "10"', expected: null, run: fn => fn(null, '10') },
          { label: 'Відʼємна сторона "-5"', inputLabel: '"-5", "10"', expected: null, run: fn => fn('-5', '10') }
        ]
      },
      {
        id: '1.8',
        name: 'sanitizeSearchQuery',
        title: 'Очищення та скорочення пошукового запиту',
        level: 'Середній рівень',
        goal: 'Нормалізувати множинні пробіли та скоротити довгий запит.',
        requirements: [
          'Видалити пробіли по краях і замінити багаторазові пробіли між словами на один.',
          'Якщо довжина перевищує 50 символів — обрізати до 47 та додати "...".',
          'Якщо вхід некоректний — повернути порожній рядок "".'
        ],
        examples: 'sanitizeSearchQuery("  js   react   css  ") => "js react css"',
        theoryHint: '💡 <b>Стиснення пробілів:</b> Для заміни повторюваних пробілів на один можна використати метод <code>.replace()</code> з регулярним виразом або розбиття рядка.',
        starterCode: `export function sanitizeSearchQuery(query) {\n  // TODO: Напиши свій розв'язок\n  return '';\n}`,
        fallbackFn: m1.sanitizeSearchQuery,
        cases: [
          { label: 'Множинні пробіли', inputLabel: '"  javascript    react   frontend  "', expected: 'javascript react frontend', run: fn => fn('  javascript    react   frontend  ') },
          { label: 'Запит понад 50 символів', inputLabel: '"a".repeat(60)', expectedStr: 'перші 47 символів + "..."', verify: res => res.length === 50 && res.endsWith('...'), run: fn => fn('a'.repeat(60)) }
        ]
      },
      {
        id: '1.9',
        name: 'extractInitials',
        title: 'Генератор ініціалів з повного імені',
        level: 'Середній рівень',
        goal: 'Сформувати рядок ініціалів у верхньому регістрі з ПІБ.',
        requirements: [
          'Розбити імʼя на слова, проігнорувавши зайві пробіли.',
          'Взяти першу літеру кожного слова у верхньому регістрі з крапкою.',
          'Якщо введено порожній рядок — повернути "".'
        ],
        examples: 'extractInitials("  тарас   шевченко  ") => "Т. Ш."\nextractInitials("платон") => "П."',
        theoryHint: '💡 <b>Робота зі словами:</b> Метод <code>.split(" ")</code> розбиває рядок на елементи масиву, які потім можна відфільтрувати від порожніх рядків.',
        starterCode: `export function extractInitials(rawFullName) {\n  // TODO: Напиши свій розв'язок\n  return '';\n}`,
        fallbackFn: m1.extractInitials,
        cases: [
          { label: 'Два слова з пробілами', inputLabel: '"  тарас   шевченко  "', expected: 'Т. Ш.', run: fn => fn('  тарас   шевченко  ') },
          { label: 'Одне слово', inputLabel: '"платон"', expected: 'П.', run: fn => fn('платон') },
          { label: 'Порожній рядок', inputLabel: '""', expected: '', run: fn => fn('') }
        ]
      },
      {
        id: '1.10',
        name: 'smartNumberPromptParser',
        title: 'Розумний числовий парсер з лімітами',
        level: 'Середній рівень',
        goal: 'Розпарсити число з prompt із перевіркою мінімальної та максимальної меж.',
        requirements: [
          'Якщо вхід null або некоректне число — повернути fallback.',
          'Якщо число менше за min або більше за max — повернути fallback.',
          'Інакше повернути розпарсене число.'
        ],
        examples: 'smartNumberPromptParser("42", 0, 1, 100) => 42\nsmartNumberPromptParser("150", 10, 1, 100) => 10',
        theoryHint: '💡 <b>Перевірка діапазону:</b> Перевірте вихід числа за допустимі межі за допомогою операторів порівняння <code><</code> та <code>></code>.',
        starterCode: `export function smartNumberPromptParser(input, fallback, min = -Infinity, max = Infinity) {\n  // TODO: Напиши свій розв'язок\n  return fallback;\n}`,
        fallbackFn: m1.smartNumberPromptParser,
        cases: [
          { label: 'Число в діапазоні (42)', inputLabel: '"42", 0, 1, 100', expected: 42, run: fn => fn('42', 0, 1, 100) },
          { label: 'Вихід за межі (150 > 100)', inputLabel: '"150", 10, 1, 100', expected: 10, run: fn => fn('150', 10, 1, 100) },
          { label: 'Cancel (null) fallback', inputLabel: 'null, 5, 1, 10', expected: 5, run: fn => fn(null, 5, 1, 10) }
        ]
      }
    ]
  },

  // ==============================================================================
  // МОДУЛЬ 2: ЯВНЕ ТА НЕЯВНЕ ПРИВЕДЕННЯ ТИПІВ
  // ==============================================================================
  {
    id: 'm2',
    name: 'Модуль 2: Явне та неявне приведення типів',
    shortTitle: 'Модуль 2: Приведення типів',
    file: '02-coercion.js',
    tasks: [
      {
        id: '2.1',
        name: 'inspectBoolean',
        title: 'Детальний аналізатор булевої сутності',
        level: 'Легкий рівень',
        goal: 'Дослідити значення в логічному контексті та повернути обʼєкт аналізу.',
        requirements: [
          'isTruthy: чи є значення істинним у булевому контексті.',
          'originalType: початковий тип значення (typeof).',
          'stringRepresentation: значення, приведене до рядка (String).'
        ],
        examples: 'inspectBoolean("0") => { isTruthy: true, originalType: "string", stringRepresentation: "0" }\ninspectBoolean(0) => { isTruthy: false, originalType: "number", stringRepresentation: "0" }',
        theoryHint: '💡 <b>Обʼєкт як результат:</b> Сформуйте обʼєкт із трьома властивостями: для істинності використайте явне приведення за допомогою <code>Boolean()</code>, підставивши в дужки потрібне значення, для типу — оператор <code>typeof</code>, а для рядкового представлення — <code>String()</code>.',
        starterCode: `export function inspectBoolean(value) {\n  // TODO: Напиши свій розв'язок\n  return { isTruthy: false, originalType: '', stringRepresentation: '' };\n}`,
        fallbackFn: m2.inspectBoolean,
        cases: [
          { label: 'Рядок "0" (truthy)', inputLabel: '"0"', expected: { isTruthy: true, originalType: 'string', stringRepresentation: '0' }, run: fn => fn('0') },
          { label: 'Число 0 (falsy)', inputLabel: '0', expected: { isTruthy: false, originalType: 'number', stringRepresentation: '0' }, run: fn => fn(0) },
          { label: 'Порожній масив [] (truthy)', inputLabel: '[]', expected: { isTruthy: true, originalType: 'object', stringRepresentation: '' }, run: fn => fn([]) }
        ]
      },
      {
        id: '2.2',
        name: 'isRealZeroOrZeroString',
        title: 'Фільтр справжнього нуля vs Falsy-пастки',
        level: 'Середній рівень',
        goal: 'Повернути true виключно якщо передано число 0 (або -0) чи очищений рядок "0".',
        requirements: [
          'Число 0 або -0 повертає true.',
          'Рядок, який після .trim() дорівнює "0", повертає true.',
          'Для будь-яких інших значень (false, null, undefined, "", []) повернути false.'
        ],
        examples: 'isRealZeroOrZeroString(0) => true\nisRealZeroOrZeroString("  0  ") => true\nisRealZeroOrZeroString(false) => false',
        theoryHint: '💡 <b>Строге порівняння:</b> Уникайте нестрогого оператора <code>==</code>, адже різні типи можуть давати хибну рівність. Перевіряйте типи окремо через <code>typeof</code>.',
        starterCode: `export function isRealZeroOrZeroString(val) {\n  // TODO: Напиши свій розв'язок\n  return false;\n}`,
        fallbackFn: m2.isRealZeroOrZeroString,
        cases: [
          { label: 'Число 0', inputLabel: '0', expected: true, run: fn => fn(0) },
          { label: 'Рядок з пробілами "  0  "', inputLabel: '"  0  "', expected: true, run: fn => fn('  0  ') },
          { label: 'Булеве false (не нуль!)', inputLabel: 'false', expected: false, run: fn => fn(false) },
          { label: 'Значення null', inputLabel: 'null', expected: false, run: fn => fn(null) }
        ]
      },
      {
        id: '2.3',
        name: 'cleanFalsyList',
        title: 'Очищення списку від Falsy елементів',
        level: 'Легкий-Середній рівень',
        goal: 'Відфільтрувати масив, залишивши лише істинні (truthy) елементи.',
        requirements: [
          'Якщо аргумент не є масивом — повернути [].',
          'Видалити всі falsy значення (false, 0, "", null, undefined, NaN).',
          'Повернути новий масив, не змінюючи оригінальний.'
        ],
        examples: 'cleanFalsyList([0, "0", "", false, true]) => ["0", true]',
        theoryHint: '💡 <b>Фільтрація масиву:</b> Перевірте валідність масиву через <code>Array.isArray()</code> та скористайтеся методом фільтрації масиву з логічною перевіркою.',
        starterCode: `export function cleanFalsyList(items) {\n  // TODO: Напиши свій розв'язок\n  return [];\n}`,
        fallbackFn: m2.cleanFalsyList,
        cases: [
          { label: 'Масив з міксом типів', inputLabel: '[0, "0", "", "hello", false, true, null, undefined, NaN]', expected: ['0', 'hello', true], run: fn => fn([0, '0', '', 'hello', false, true, null, undefined, NaN]) },
          { label: 'Не масив (null)', inputLabel: 'null', expected: [], run: fn => fn(null) }
        ]
      },
      {
        id: '2.4',
        name: 'parseCurrency',
        title: 'Розумний парсер грошових сум з рядка',
        level: 'Середній рівень',
        goal: 'Вилучити чисте додатне число із рядка довільного формату валюти.',
        requirements: [
          'Підтримувати як кому, так і крапку як десятковий роздільник.',
          'Відʼємні значення вважати невалідними (повертати NaN).',
          'Якщо вхід некоректний — повернути NaN.'
        ],
        examples: 'parseCurrency(" 1200 грн ") => 1200\nparseCurrency("$400,75") => 400.75\nparseCurrency("-50 грн") => NaN',
        theoryHint: '💡 <b>Дробові числа:</b> У JavaScript десяткова частина відокремлюється крапкою, тому кому в тексті слід замінити на крапку через метод <code>.replace()</code> перед парсингом.',
        starterCode: `export function parseCurrency(input) {\n  // TODO: Напиши свій розв'язок\n  return NaN;\n}`,
        fallbackFn: m2.parseCurrency,
        cases: [
          { label: 'Сума з валютою " 1200 грн "', inputLabel: '" 1200 грн "', expected: 1200, run: fn => fn(' 1200 грн ') },
          { label: 'Дробова сума з комою "$400,75"', inputLabel: '"$400,75"', expected: 400.75, run: fn => fn('$400,75') },
          { label: 'Відʼємна сума "-50 грн"', inputLabel: '"-50 грн"', expectedStr: 'NaN', verify: res => Number.isNaN(res), run: fn => fn('-50 грн') }
        ]
      },
      {
        id: '2.5',
        name: 'evalImplicitCoercion',
        title: 'Симулятор неявного приведення типів',
        level: 'Важкий рівень',
        goal: 'Обчислити операцію між двома значеннями та оцінити ризик неявного приведення.',
        requirements: [
          'result: безпосередній результат операції між a та b.',
          'resultType: typeof result.',
          'isCoerced: true, якщо початкові типи a та b відрізнялися.',
          'isDangerous: true, якщо хоча б один аргумент null/undefined, або boolean при арифметиці крім "+", або результат NaN.'
        ],
        examples: 'evalImplicitCoercion("10", "2", "-") => { result: 8, isCoerced: true, isDangerous: false }\nevalImplicitCoercion(null, 5, "+") => { result: 5, isCoerced: true, isDangerous: true }',
        theoryHint: '💡 <b>Небезпека неявного приведення:</b> Операції на кшталт <code>null + 5</code> неявно перетворюють null на 0. Будьте уважні до несподіваних змін типів.',
        starterCode: `export function evalImplicitCoercion(a, b, operator) {\n  // TODO: Напиши свій розв'язок\n  return { result: null, resultType: '', isCoerced: false, isDangerous: false };\n}`,
        fallbackFn: m2.evalImplicitCoercion,
        cases: [
          { label: 'Віднімання рядків "10" - "2"', inputLabel: '"10", "2", "-"', expected: { result: 8, resultType: 'number', isCoerced: false, isDangerous: false }, run: fn => fn('10', '2', '-') },
          { label: 'Додавання null + 5', inputLabel: 'null, 5, "+"', expected: { result: 5, resultType: 'number', isCoerced: true, isDangerous: true }, run: fn => fn(null, 5, '+') }
        ]
      },
      {
        id: '2.6',
        name: 'strictToNumber',
        title: 'Строге приведення до числа',
        level: 'Середній-Важкий рівень',
        goal: 'Перетворити на число ТІЛЬКИ дійсні числа та строго числові рядки.',
        requirements: [
          'Якщо аргумент не є числовим рядком (null, false, true, "", []) — повернути NaN.',
          'Підтримувати цілі та дробові числа зі знаком мінус.',
          'Рядок із пробілами всередині або текстом має давати NaN.'
        ],
        examples: 'strictToNumber("42") => 42\nstrictToNumber("-15.5") => -15.5\nstrictToNumber(false) => NaN\nstrictToNumber(null) => NaN',
        theoryHint: '💡 <b>Строге приведення:</b> Звичайний виклик <code>Number(null)</code> повертає 0 замість помилки, тому спершу перевірте дійсний тип значення.',
        starterCode: `export function strictToNumber(val) {\n  // TODO: Напиши свій розв'язок\n  return NaN;\n}`,
        fallbackFn: m2.strictToNumber,
        cases: [
          { label: 'Числовий рядок "42"', inputLabel: '"42"', expected: 42, run: fn => fn('42') },
          { label: 'Дробовий рядок "-15.5"', inputLabel: '"-15.5"', expected: -15.5, run: fn => fn('-15.5') },
          { label: 'Булеве false', inputLabel: 'false', expectedStr: 'NaN', verify: res => Number.isNaN(res), run: fn => fn(false) },
          { label: 'Значення null', inputLabel: 'null', expectedStr: 'NaN', verify: res => Number.isNaN(res), run: fn => fn(null) },
          { label: 'Порожній рядок ""', inputLabel: '""', expectedStr: 'NaN', verify: res => Number.isNaN(res), run: fn => fn('') }
        ]
      },
      {
        id: '2.7',
        name: 'coerceToPrimitivesSummary',
        title: 'Картка приведення до трьох примітивів',
        level: 'Середній рівень',
        goal: 'Повернути обʼєкт приведення до String, Number та Boolean.',
        requirements: [
          'asString: String(val)',
          'asNumber: Number(val) (безпечно обробити винятки через try/catch)',
          'asBoolean: Boolean(val)'
        ],
        examples: 'coerceToPrimitivesSummary("123") => { asString: "123", asNumber: 123, asBoolean: true }',
        theoryHint: '💡 <b>Приведення типів:</b> Застосуйте відповідні функції явного перетворення <code>String()</code>, <code>Number()</code> та <code>Boolean()</code>, передавши в них вхідний аргумент.',
        starterCode: `export function coerceToPrimitivesSummary(val) {\n  // TODO: Напиши свій розв'язок\n  return { asString: '', asNumber: 0, asBoolean: false };\n}`,
        fallbackFn: m2.coerceToPrimitivesSummary,
        cases: [
          { label: 'Рядок "123"', inputLabel: '"123"', expected: { asString: '123', asNumber: 123, asBoolean: true }, run: fn => fn('123') },
          { label: 'Число 0', inputLabel: '0', expected: { asString: '0', asNumber: 0, asBoolean: false }, run: fn => fn(0) }
        ]
      },
      {
        id: '2.8',
        name: 'safeDivision',
        title: 'Безпечне математичне ділення',
        level: 'Середній рівень',
        goal: 'Поділити чисельник на знаменник із захистом від Infinity та NaN.',
        requirements: [
          'Обидва аргументи мають бути скінченними числами.',
          'Знаменник не повинен дорівнювати 0.',
          'Якщо умови порушені — повернути null, інакше повернути результат.'
        ],
        examples: 'safeDivision("10", "2") => 5\nsafeDivision(10, 0) => null\nsafeDivision("abc", 2) => null',
        theoryHint: '💡 <b>Ділення на нуль:</b> Памʼятайте, що ділення на нуль у JS повертає <code>Infinity</code>, тому знаменник слід окремо перевірити на нерівність нулю.',
        starterCode: `export function safeDivision(numerator, denominator) {\n  // TODO: Напиши свій розв'язок\n  return null;\n}`,
        fallbackFn: m2.safeDivision,
        cases: [
          { label: 'Ділення "10" / "2"', inputLabel: '"10", "2"', expected: 5, run: fn => fn('10', '2') },
          { label: 'Захист від ділення на 0', inputLabel: '10, 0', expected: null, run: fn => fn(10, 0) },
          { label: 'Нечислові дані "abc"', inputLabel: '"abc", 2', expected: null, run: fn => fn('abc', 2) }
        ]
      },
      {
        id: '2.9',
        name: 'isStrictlyEmpty',
        title: 'Строга перевірка на порожнечу',
        level: 'Середній рівень',
        goal: 'Повернути true лише для null, undefined та порожніх рядків.',
        requirements: [
          'true тільки для null, undefined та рядків, у яких після trim() довжина 0.',
          'Число 0, -0, boolean false, масив [] вважаються НЕ порожніми (false).'
        ],
        examples: 'isStrictlyEmpty(null) => true\nisStrictlyEmpty("   ") => true\nisStrictlyEmpty(0) => false\nisStrictlyEmpty(false) => false',
        theoryHint: '💡 <b>Важливість 0 та false:</b> У формах 0 — це валідна кількість товару, а false — свідомий вибір "ні", тому вони не є порожніми.',
        starterCode: `export function isStrictlyEmpty(val) {\n  // TODO: Напиши свій розв'язок\n  return false;\n}`,
        fallbackFn: m2.isStrictlyEmpty,
        cases: [
          { label: 'Значення null', inputLabel: 'null', expected: true, run: fn => fn(null) },
          { label: 'Рядок з пробілів "   "', inputLabel: '"   "', expected: true, run: fn => fn('   ') },
          { label: 'Число 0 (не порожнє!)', inputLabel: '0', expected: false, run: fn => fn(0) },
          { label: 'Булеве false (не порожнє!)', inputLabel: 'false', expected: false, run: fn => fn(false) }
        ]
      },
      {
        id: '2.10',
        name: 'compareTypeCoercionRisk',
        title: 'Оцінка ризику нестрогого порівняння',
        level: 'Важкий рівень',
        goal: 'Визначити рівень небезпеки неявного приведення типів між двома значеннями.',
        requirements: [
          'risk: "NONE" — якщо значення строго рівні (===).',
          'risk: "HIGH_RISK" — якщо рівні лише за ==, маючи різні типи.',
          'risk: "LOW_RISK" — якщо не рівні навіть за ==.'
        ],
        examples: 'compareTypeCoercionRisk(42, 42) => { risk: "NONE" }\ncompareTypeCoercionRisk("0", 0) => { risk: "HIGH_RISK" }\ncompareTypeCoercionRisk("cat", 5) => { risk: "LOW_RISK" }',
        theoryHint: '💡 <b>Ризик оператора ==:</b> Нестроге порівняння приводить різні типи до спільного, тому завжди аналізуйте, чи співпадають типи значень.',
        starterCode: `export function compareTypeCoercionRisk(val1, val2) {\n  // TODO: Напиши свій розв'язок\n  return { risk: 'LOW_RISK', reason: '' };\n}`,
        fallbackFn: m2.compareTypeCoercionRisk,
        cases: [
          { label: 'Нестрого рівні "0" та 0', inputLabel: '"0", 0', expectedStr: '{ risk: "HIGH_RISK" }', verify: res => res.risk === 'HIGH_RISK', run: fn => fn('0', 0) },
          { label: 'Строго рівні 42 та 42', inputLabel: '42, 42', expectedStr: '{ risk: "NONE" }', verify: res => res.risk === 'NONE', run: fn => fn(42, 42) },
          { label: 'Різні значення "cat" та 5', inputLabel: '"cat", 5', expectedStr: '{ risk: "LOW_RISK" }', verify: res => res.risk === 'LOW_RISK', run: fn => fn('cat', 5) }
        ]
      }
    ]
  },

  // ==============================================================================
  // МОДУЛЬ 3: ОПЕРАТОРИ ПОРІВНЯННЯ ТА СТРОГІСТЬ
  // ==============================================================================
  {
    id: 'm3',
    name: 'Модуль 3: Оператори порівняння та строгість',
    shortTitle: 'Модуль 3: Порівняння',
    file: '03-comparisons.js',
    tasks: [
      {
        id: '3.1',
        name: 'compareDetective',
        title: 'Порівняльний детектив',
        level: 'Легкий-Середній рівень',
        goal: 'Дослідити строге та нестроге порівняння двох значень.',
        requirements: [
          'looseEqual: результат a == b.',
          'strictEqual: результат a === b.',
          'sameType: typeof a === typeof b.',
          'explanation: "Абсолютно ідентичні" | "Рівні тільки з неявним приведенням" | "Різні значення".'
        ],
        examples: 'compareDetective(42, 42) => { strictEqual: true, explanation: "Абсолютно ідентичні" }\ncompareDetective("42", 42) => { looseEqual: true, strictEqual: false }',
        theoryHint: '💡 <b>Перевірка строгості:</b> Спершу перевірте <code>strictEqual</code>, якщо ні — перевірте <code>looseEqual</code>.',
        starterCode: `export function compareDetective(a, b) {\n  // TODO: Напиши свій розв'язок\n  return { looseEqual: false, strictEqual: false, sameType: false, explanation: '' };\n}`,
        fallbackFn: m3.compareDetective,
        cases: [
          { label: 'Строго однакові 42 та 42', inputLabel: '42, 42', expectedStr: 'strictEqual: true', verify: res => res.strictEqual === true, run: fn => fn(42, 42) },
          { label: 'Нестрого однакові "42" та 42', inputLabel: '"42", 42', expectedStr: 'looseEqual: true, strictEqual: false', verify: res => res.looseEqual === true && res.strictEqual === false, run: fn => fn('42', 42) }
        ]
      },
      {
        id: '3.2',
        name: 'isValueInRange',
        title: 'Безпечна перевірка діапазону з автокорекцією',
        level: 'Середній рівень',
        goal: 'Перевірити, чи число входить у діапазон між min та max з автокорекцією меж.',
        requirements: [
          'Перетворити всі значення на числа. Якщо хоча б одне нечислове — false.',
          'Якщо min > max — автоматично поміняти їх місцями.',
          'inclusive = true включає межі, false — виключає.'
        ],
        examples: 'isValueInRange(15, 10, 20) => true\nisValueInRange(15, 20, 10) => true\nisValueInRange(10, 10, 20, false) => false',
        theoryHint: '💡 <b>Впорядкування меж:</b> Якщо початкова межа виявилася більшою за кінцеву, поміняйте їх місцями перед перевіркою потрапляння числа в діапазон.',
        starterCode: `export function isValueInRange(val, min, max, inclusive = true) {\n  // TODO: Напиши свій розв'язок\n  return false;\n}`,
        fallbackFn: m3.isValueInRange,
        cases: [
          { label: 'В межах діапазону 15 в 10..20', inputLabel: '15, 10, 20', expected: true, run: fn => fn(15, 10, 20) },
          { label: 'Перевернуті межі 15 в 20..10', inputLabel: '15, 20, 10', expected: true, run: fn => fn(15, 20, 10) },
          { label: 'Не включно (inclusive=false)', inputLabel: '10, 10, 20, false', expected: false, run: fn => fn(10, 10, 20, false) }
        ]
      },
      {
        id: '3.3',
        name: 'compareSemanticVersions',
        title: 'Порівняння семантичних версій',
        level: 'Важкий рівень',
        goal: 'Порівняти дві версії софту за числовими компонентами major.minor.patch.',
        requirements: [
          'Повернути 1, якщо v1 > v2.',
          'Повернути -1, якщо v1 < v2.',
          'Повернути 0, якщо версії однакові (наприклад "1.5" та "1.5.0").',
          'Повернути null при невалідному форматі.'
        ],
        examples: 'compareSemanticVersions("1.10.0", "1.2.0") => 1\ncompareSemanticVersions("1.2.0", "1.10.0") => -1\ncompareSemanticVersions("1.5", "1.5.0") => 0',
        theoryHint: '💡 <b>Складові версії:</b> Розбийте рядок версії на окремі числові сегменти за допомогою розділювача крапки та методу <code>.split()</code>.',
        starterCode: `export function compareSemanticVersions(v1, v2) {\n  // TODO: Напиши свій розв'язок\n  return null;\n}`,
        fallbackFn: m3.compareSemanticVersions,
        cases: [
          { label: 'Новіша версія "1.10.0" проти "1.2.0"', inputLabel: '"1.10.0", "1.2.0"', expected: 1, run: fn => fn('1.10.0', '1.2.0') },
          { label: 'Старіша версія "1.2.0" проти "1.10.0"', inputLabel: '"1.2.0", "1.10.0"', expected: -1, run: fn => fn('1.2.0', '1.10.0') },
          { label: 'Еквівалентні версії "1.5" та "1.5.0"', inputLabel: '"1.5", "1.5.0"', expected: 0, run: fn => fn('1.5', '1.5.0') },
          { label: 'Невалідний рядок', inputLabel: '"invalid", "1.0"', expected: null, run: fn => fn('invalid', '1.0') }
        ]
      },
      {
        id: '3.4',
        name: 'areStrictlyIdentical',
        title: 'Істинна ідентичність значень',
        level: 'Середній рівень',
        goal: 'Реалізувати алгоритм Object.is: NaN === NaN це true, а +0 === -0 це false.',
        requirements: [
          'NaN та NaN вважати ідентичними (true).',
          '+0 та -0 вважати різними значеннями (false).',
          'У решті випадків повертати a === b.'
        ],
        examples: 'areStrictlyIdentical(NaN, NaN) => true\nareStrictlyIdentical(+0, -0) => false',
        theoryHint: '💡 <b>Різниця знаків нуля:</b> <code>1 / +0 === Infinity</code>, а <code>1 / -0 === -Infinity</code>.',
        starterCode: `export function areStrictlyIdentical(a, b) {\n  // TODO: Напиши свій розв'язок\n  return false;\n}`,
        fallbackFn: m3.areStrictlyIdentical,
        cases: [
          { label: 'Два NaN', inputLabel: 'NaN, NaN', expected: true, run: fn => fn(NaN, NaN) },
          { label: 'Знаки нулів +0 та -0', inputLabel: '+0, -0', expected: false, run: fn => fn(+0, -0) },
          { label: 'Звичайні однакові числа 42 та 42', inputLabel: '42, 42', expected: true, run: fn => fn(42, 42) }
        ]
      },
      {
        id: '3.5',
        name: 'isAlphabeticallyEarlier',
        title: 'Алфавітне порівняння двох рядків',
        level: 'Середній рівень',
        goal: 'Перевірити, чи перший рядок передує другому у словнику.',
        requirements: [
          'Видалити пробіли по краях.',
          'caseSensitive = false порівнює без урахування регістру літер.',
          'Повернути true, якщо strA < strB.'
        ],
        examples: 'isAlphabeticallyEarlier("apple", "banana") => true\nisAlphabeticallyEarlier("Banana", "apple", false) => false',
        theoryHint: '💡 <b>Лексикографічне порівняння:</b> У JS оператор <code><</code> порівнює рядки посимвольно за юнікодом.',
        starterCode: `export function isAlphabeticallyEarlier(strA, strB, caseSensitive = false) {\n  // TODO: Напиши свій розв'язок\n  return false;\n}`,
        fallbackFn: m3.isAlphabeticallyEarlier,
        cases: [
          { label: '"apple" раніше за "banana"', inputLabel: '"apple", "banana"', expected: true, run: fn => fn('apple', 'banana') },
          { label: '"Banana" пізніше за "apple" (ігнор регістру)', inputLabel: '"Banana", "apple", false', expected: false, run: fn => fn('Banana', 'apple', false) }
        ]
      },
      {
        id: '3.6',
        name: 'findClampValue',
        title: 'Функція обмежувача clamp',
        level: 'Середній рівень',
        goal: 'Зафіксувати число в межах [min, max].',
        requirements: [
          'Якщо val < min — повернути min.',
          'Якщо val > max — повернути max.',
          'Інакше повернути val.'
        ],
        examples: 'findClampValue(5, 10, 20) => 10\nfindClampValue(25, 10, 20) => 20\nfindClampValue(15, 10, 20) => 15',
        theoryHint: '💡 <b>Обмеження значення (clamp):</b> Використовуйте комбінацію умов або методи <code>Math.min()</code> та <code>Math.max()</code>, щоб утримати число в заданих межах.',
        starterCode: `export function findClampValue(val, min, max) {\n  // TODO: Напиши свій розв'язок\n  return NaN;\n}`,
        fallbackFn: m3.findClampValue,
        cases: [
          { label: 'Підтягування до мінімуму (5 -> 10)', inputLabel: '5, 10, 20', expected: 10, run: fn => fn(5, 10, 20) },
          { label: 'Зрізання до максимуму (25 -> 20)', inputLabel: '25, 10, 20', expected: 20, run: fn => fn(25, 10, 20) },
          { label: 'Всередині норми (15)', inputLabel: '15, 10, 20', expected: 15, run: fn => fn(15, 10, 20) }
        ]
      },
      {
        id: '3.7',
        name: 'areAllEqualStrict',
        title: 'Строга перевірка рівності кількох значень',
        level: 'Середній рівень',
        goal: 'Перевірити, чи всі передані аргументи строго рівні між собою.',
        requirements: [
          'Приймає довільну кількість аргументів (...args).',
          'Якщо менше 2 аргументів — true.',
          'true, лише якщо всі значення строго рівні ===.'
        ],
        examples: 'areAllEqualStrict(5, 5, 5) => true\nareAllEqualStrict(5, 5, "5") => false',
        theoryHint: '💡 <b>Довільна кількість аргументів:</b> Зберіть передані параметри за допомогою rest-синтаксису <code>(...args)</code> та перевірте, чи всі елементи строго рівні першому.',
        starterCode: `export function areAllEqualStrict(...args) {\n  // TODO: Напиши свій розв'язок\n  return false;\n}`,
        fallbackFn: m3.areAllEqualStrict,
        cases: [
          { label: 'Всі однакові числа (5, 5, 5, 5)', inputLabel: '5, 5, 5, 5', expected: true, run: fn => fn(5, 5, 5, 5) },
          { label: 'Одне значення рядок (5, 5, "5")', inputLabel: '5, 5, "5"', expected: false, run: fn => fn(5, 5, '5') }
        ]
      },
      {
        id: '3.8',
        name: 'compareObjectsShallow',
        title: 'Поверхневе порівняння обʼєктів',
        level: 'Середній-Важкий рівень',
        goal: 'Порівняти два обʼєкти за їхніми ключами та значеннями.',
        requirements: [
          'Якщо однакова адреса або обидва null — перевірити коректність.',
          'Кількість ключів має збігатися.',
          'Кожне значення відповідного ключа має бути строго рівним ===.'
        ],
        examples: 'compareObjectsShallow({ a: 1 }, { a: 1 }) => true\ncompareObjectsShallow({ a: 1 }, { a: "1" }) => false',
        theoryHint: '💡 <b>Властивості обʼєкта:</b> Отримати список усіх ключів для порівняння кількості та значень допоможе метод <code>Object.keys()</code>.',
        starterCode: `export function compareObjectsShallow(objA, objB) {\n  // TODO: Напиши свій розв'язок\n  return false;\n}`,
        fallbackFn: m3.compareObjectsShallow,
        cases: [
          { label: 'Однакові обʼєкти', inputLabel: '{ a: 1, b: 2 }, { a: 1, b: 2 }', expected: true, run: fn => fn({ a: 1, b: 2 }, { a: 1, b: 2 }) },
          { label: 'Різні типи значень (1 vs "1")', inputLabel: '{ a: 1 }, { a: "1" }', expected: false, run: fn => fn({ a: 1 }, { a: '1' }) }
        ]
      },
      {
        id: '3.9',
        name: 'sortStringNumbers',
        title: 'Сортування числових рядків як чисел',
        level: 'Середній рівень',
        goal: 'Відсортувати масив рядків за їхнім числовим значенням.',
        requirements: [
          'Не мутувати початковий масив.',
          'Сортувати за зростанням чисел.',
          'Повернути новий масив рядків.'
        ],
        examples: 'sortStringNumbers(["10", "2", "1", "25"]) => ["1", "2", "10", "25"]',
        theoryHint: '💡 <b>Числове сортування:</b> Зверніть увагу, що метод <code>.sort()</code> за замовчуванням сортує як рядки, тому для чисел йому потрібна функція порівняння.',
        starterCode: `export function sortStringNumbers(strNumbers) {\n  // TODO: Напиши свій розв'язок\n  return [];\n}`,
        fallbackFn: m3.sortStringNumbers,
        cases: [
          { label: 'Сортування ["10", "2", "1", "25"]', inputLabel: '["10", "2", "1", "25"]', expected: ['1', '2', '10', '25'], run: fn => fn(['10', '2', '1', '25']) }
        ]
      },
      {
        id: '3.10',
        name: 'validatePasswordStrength',
        title: 'Валідатор надійності пароля',
        level: 'Важкий рівень',
        goal: 'Перевірити пароль на мінімальну довжину, велику літеру, малу літеру та цифру.',
        requirements: [
          'Довжина від minLen до maxLen (8..32).',
          'Містить щонайменше одну велику літеру [A-Z].',
          'Містить щонайменше одну малу літеру [a-z].',
          'Містить щонайменше одну цифру [0-9].'
        ],
        examples: 'validatePasswordStrength("Secr3tPass!") => { isValid: true }\nvalidatePasswordStrength("short1A") => { isValid: false }',
        theoryHint: '💡 <b>Вимоги до пароля:</b> Перевірте довжину та наявність обовʼязкових символів (великі літери, цифри, спецсимволи) за допомогою регулярних виразів або перевірки символів.',
        starterCode: `export function validatePasswordStrength(password, minLen = 8, maxLen = 32) {\n  // TODO: Напиши свій розв'язок\n  return { isValid: false, reason: '' };\n}`,
        fallbackFn: m3.validatePasswordStrength,
        cases: [
          { label: 'Надійний пароль', inputLabel: '"Secr3tPass!"', expectedStr: '{ isValid: true }', verify: res => res.isValid === true, run: fn => fn('Secr3tPass!') },
          { label: 'Закороткий пароль', inputLabel: '"short1A"', expectedStr: '{ isValid: false }', verify: res => res.isValid === false, run: fn => fn('short1A') }
        ]
      }
    ]
  },

  // ==============================================================================
  // МОДУЛЬ 4: ЛОГІЧНІ ОПЕРАТОРИ ТА SHORT-CIRCUIT
  // ==============================================================================
  {
    id: 'm4',
    name: 'Модуль 4: Логічні оператори (&&, ||, !) та Short-circuit',
    shortTitle: 'Модуль 4: Логічні оператори',
    file: '04-logical-operators.js',
    tasks: [
      {
        id: '4.1',
        name: 'resolveConfig',
        title: 'Безпечний вибір конфігурації',
        level: 'Середній рівень',
        goal: 'Отримати налаштування користувача з пріоритетом userValue ?? defaultValue ?? fallbackValue.',
        requirements: [
          'Зберегти значення 0, false та "" від перезапису!',
          'Замінювати на дефолт лише при null та undefined.'
        ],
        examples: 'resolveConfig(0, 100, 200) => 0\nresolveConfig(null, "dark", "light") => "dark"',
        theoryHint: '💡 <b>Оператор ??:</b> На відміну від ||, оператор <code>??</code> вважає відсутніми даними лише <code>null</code> та <code>undefined</code>.',
        starterCode: `export function resolveConfig(userValue, defaultValue, fallbackValue) {\n  // TODO: Напиши свій розв'язок\n  return null;\n}`,
        fallbackFn: m4.resolveConfig,
        cases: [
          { label: 'Збереження числа 0', inputLabel: '0, 100, 200', expected: 0, run: fn => fn(0, 100, 200) },
          { label: 'Збереження false', inputLabel: 'false, true, true', expected: false, run: fn => fn(false, true, true) },
          { label: 'null замінюється на default', inputLabel: 'null, "dark", "light"', expected: 'dark', run: fn => fn(null, 'dark', 'light') }
        ]
      },
      {
        id: '4.2',
        name: 'verifyAccess',
        title: 'Багаторівневий шлюз авторизації',
        level: 'Середній-Важкий рівень',
        goal: 'Перевірити права доступу користувача до різних ресурсів системи.',
        requirements: [
          'isBanned === true негайно відмовляє в доступі.',
          'admin-panel: роль admin та 2FA.',
          'secret-quest: admin або не-гість із vip чи балами >= 500.',
          'dashboard: будь-який зареєстрований не-гість.'
        ],
        examples: 'verifyAccess({ role: "admin", twoFactorEnabled: true }, "admin-panel") => { isGranted: true }',
        theoryHint: '💡 <b>Комплексний доступ:</b> Складіть умову доступу, обʼєднавши перевірку ролі користувача та активності двохфакторної автентифікації через оператор <code>&&</code>.',
        starterCode: `export function verifyAccess(user, resource) {\n  // TODO: Напиши свій розв'язок\n  return { isGranted: false, reason: '' };\n}`,
        fallbackFn: m4.verifyAccess,
        cases: [
          { label: 'Заблокований адмін', inputLabel: '{ role: "admin", isBanned: true }, "admin-panel"', expectedStr: 'isGranted: false', verify: res => res.isGranted === false, run: fn => fn({ role: 'admin', isBanned: true }, 'admin-panel') },
          { label: 'Адмін з 2FA', inputLabel: '{ role: "admin", twoFactorEnabled: true }, "admin-panel"', expectedStr: 'isGranted: true', verify: res => res.isGranted === true, run: fn => fn({ role: 'admin', isBanned: false, twoFactorEnabled: true }, 'admin-panel') },
          { label: 'VIP студент до квесту', inputLabel: '{ role: "student", subscriptionLevel: "vip" }, "secret-quest"', expectedStr: 'isGranted: true', verify: res => res.isGranted === true, run: fn => fn({ role: 'student', isBanned: false, subscriptionLevel: 'vip' }, 'secret-quest') }
        ]
      },
      {
        id: '4.3',
        name: 'validatePipeline',
        title: 'Конвеєр валідації з ледачим перериванням',
        level: 'Важкий рівень',
        goal: 'Послідовно викликати валідатори, перериваючись на першій же помилці (Short-circuit).',
        requirements: [
          'Рахувати кількість реально виконаних перевірок executedCount.',
          'При помилці негайно повертати { isValid: false, failedAt: name, executedCount }.'
        ],
        examples: 'validatePipeline(data, [{ name: "email", check: () => false }]) => { isValid: false, executedCount: 1 }',
        theoryHint: '💡 <b>Short-circuit у циклі:</b> Коли валідатор повертає false, негайно повертайте обʼєкт через <code>return</code> з циклу.',
        starterCode: `export function validatePipeline(data, validators) {\n  // TODO: Напиши свій розв'язок\n  return { isValid: false, failedAt: null, executedCount: 0 };\n}`,
        fallbackFn: m4.validatePipeline,
        cases: [
          { label: 'Переривання на першому хибному', inputLabel: 'data, [v1(false), v2(true)]', expectedStr: 'failedAt: "email", executedCount: 1', verify: res => res.failedAt === 'email' && res.executedCount === 1, run: fn => fn('test', [{ name: 'email', check: () => false }, { name: 'pass', check: () => true }]) }
        ]
      },
      {
        id: '4.4',
        name: 'isLeapYear',
        title: 'Перевірка високосного року',
        level: 'Середній рівень',
        goal: 'Визначити, чи є рік високосним за григоріанським календарем.',
        requirements: [
          'Ділиться на 4 і не ділиться на 100, АБО ділиться на 400.'
        ],
        examples: 'isLeapYear(2024) => true\nisLeapYear(2000) => true\nisLeapYear(1900) => false',
        theoryHint: '💡 <b>Високосний рік:</b> Використайте оператор залишку від ділення <code>%</code> для перевірки подільності року на 4, 100 та 400.',
        starterCode: `export function isLeapYear(year) {\n  // TODO: Напиши свій розв'язок\n  return false;\n}`,
        fallbackFn: m4.isLeapYear,
        cases: [
          { label: 'Високосний рік 2024', inputLabel: '2024', expected: true, run: fn => fn(2024) },
          { label: 'Високосний рік 2000', inputLabel: '2000', expected: true, run: fn => fn(2000) },
          { label: 'Звичайний рік 1900', inputLabel: '1900', expected: false, run: fn => fn(1900) }
        ]
      },
      {
        id: '4.5',
        name: 'canDriveCar',
        title: 'Дозвіл на керування автомобілем',
        level: 'Середній рівень',
        goal: 'Перевірити комбінацію: вік >= 18, права є, тверезий, страховка дійсна.',
        requirements: [
          'age >= 18',
          'hasLicense === true',
          '!isIntoxicated',
          'insuranceValid === true'
        ],
        examples: 'canDriveCar({ age: 20, hasLicense: true, isIntoxicated: false, insuranceValid: true }) => true',
        theoryHint: '💡 <b>Логічне заперечення:</b> Оператор <code>!</code> дозволяє інвертувати булеве значення властивості.',
        starterCode: `export function canDriveCar(driver) {\n  // TODO: Напиши свій розв'язок\n  return false;\n}`,
        fallbackFn: m4.canDriveCar,
        cases: [
          { label: 'Всі умови виконані', inputLabel: '{ age: 20, hasLicense: true, isIntoxicated: false, insuranceValid: true }', expected: true, run: fn => fn({ age: 20, hasLicense: true, isIntoxicated: false, insuranceValid: true }) },
          { label: 'Замолодий водій (16 років)', inputLabel: '{ age: 16, ... }', expected: false, run: fn => fn({ age: 16, hasLicense: true, isIntoxicated: false, insuranceValid: true }) }
        ]
      },
      {
        id: '4.6',
        name: 'defaultIfFalsy',
        title: 'Значення за замовчуванням при Falsy',
        level: 'Легкий рівень',
        goal: 'Повернути fallback для будь-якого falsy значення.',
        requirements: [
          'Якщо val є truthy — повернути його, інакше повернути fallback.'
        ],
        examples: 'defaultIfFalsy("user", "guest") => "user"\ndefaultIfFalsy("", "guest") => "guest"',
        theoryHint: '💡 <b>Пошук першого значення:</b> Оператор логічного АБО (<code>||</code>) повертає перший truthy операнд серед переданих аргументів.',
        starterCode: `export function defaultIfFalsy(val, fallback) {\n  // TODO: Напиши свій розв'язок\n  return fallback;\n}`,
        fallbackFn: m4.defaultIfFalsy,
        cases: [
          { label: 'Truthy значення "user"', inputLabel: '"user", "guest"', expected: 'user', run: fn => fn('user', 'guest') },
          { label: 'Порожній рядок ""', inputLabel: '"", "guest"', expected: 'guest', run: fn => fn('', 'guest') }
        ]
      },
      {
        id: '4.7',
        name: 'xor',
        title: 'Логічне виключне АБО (XOR)',
        level: 'Середній рівень',
        goal: 'Повернути true тоді й лише тоді, коли рівно один аргумент істинний.',
        requirements: [
          'true при (true, false) та (false, true).',
          'false при (true, true) та (false, false).'
        ],
        examples: 'xor(true, false) => true\nxor(true, true) => false',
        theoryHint: '💡 <b>Виключне АБО (XOR):</b> Умова істинна тоді й тільки тоді, коли рівно одне з двох порівнюваних значень є істинним.',
        starterCode: `export function xor(a, b) {\n  // TODO: Напиши свій розв'язок\n  return false;\n}`,
        fallbackFn: m4.xor,
        cases: [
          { label: 'true та false', inputLabel: 'true, false', expected: true, run: fn => fn(true, false) },
          { label: 'обидва true', inputLabel: 'true, true', expected: false, run: fn => fn(true, true) }
        ]
      },
      {
        id: '4.8',
        name: 'evaluateLogicalExpression',
        title: 'Обчислення складного логічного виразу',
        level: 'Середній рівень',
        goal: 'Змоделювати вираз з урахуванням вищого пріоритету && над ||.',
        requirements: [
          'Операція && виконується раніше за ||.',
          'Звести всі операнди до булевих значень.'
        ],
        examples: 'evaluateLogicalExpression(true, "||", false, "&&", false) => true',
        theoryHint: '💡 <b>Пріоритет:</b> <code>a || b && c</code> виконується як <code>a || (b && c)</code>.',
        starterCode: `export function evaluateLogicalExpression(a, op1, b, op2, c) {\n  // TODO: Напиши свій розв'язок\n  return false;\n}`,
        fallbackFn: m4.evaluateLogicalExpression,
        cases: [
          { label: 'true || false && false', inputLabel: 'true, "||", false, "&&", false', expected: true, run: fn => fn(true, '||', false, '&&', false) },
          { label: 'false && true || true', inputLabel: 'false, "&&", true, "||", true', expected: true, run: fn => fn(false, '&&', true, '||', true) }
        ]
      },
      {
        id: '4.9',
        name: 'guardFunctionCall',
        title: 'Захищений виклик функції (Guard Pattern)',
        level: 'Середній рівень',
        goal: 'Викликати функцію лише якщо isAllowed === true і callback є функцією.',
        requirements: [
          'Повернути результат callback(...args), якщо дозволено.',
          'Інакше повернути undefined без помилки.'
        ],
        examples: 'guardFunctionCall(true, x => x * 2, 5) => 10\nguardFunctionCall(false, x => x * 2, 5) => undefined',
        theoryHint: '💡 <b>Безпечний виклик:</b> Перевірте тип колбеку за допомогою оператора <code>typeof</code> перед тим, як його викликати.',
        starterCode: `export function guardFunctionCall(isAllowed, callback, ...args) {\n  // TODO: Напиши свій розв'язок\n  return undefined;\n}`,
        fallbackFn: m4.guardFunctionCall,
        cases: [
          { label: 'Дозволений виклик', inputLabel: 'true, x => x * 2, 5', expected: 10, run: fn => fn(true, x => x * 2, 5) },
          { label: 'Заборонений виклик', inputLabel: 'false, x => x * 2, 5', expected: undefined, run: fn => fn(false, x => x * 2, 5) }
        ]
      },
      {
        id: '4.10',
        name: 'complexLoanApproval',
        title: 'Банківський скоринг на отримання кредиту',
        level: 'Важкий рівень',
        goal: 'Оцінити заявку на кредит за віком, рейтингом, DTI та поручителем.',
        requirements: [
          'Вік 21..65 років.',
          'Рейтинг creditScore >= 600.',
          'DTI <= 50% (або поручитель hasGuarantor при DTI > 50%).'
        ],
        examples: 'complexLoanApproval({ age: 30, creditScore: 700, monthlyIncome: 2000, monthlyDebt: 400 }) => { approved: true }',
        theoryHint: '💡 <b>Коефіцієнт DTI:</b> Розрахуйте відсоткове співвідношення місячного боргу до місячного доходу та звірте кредитний рейтинг.',
        starterCode: `export function complexLoanApproval(applicant) {\n  // TODO: Напиши свій розв'язок\n  return { approved: false, reason: '' };\n}`,
        fallbackFn: m4.complexLoanApproval,
        cases: [
          { label: 'Схвалений кредит (DTI 20%)', inputLabel: '{ age: 30, creditScore: 700, monthlyIncome: 2000, monthlyDebt: 400 }', expectedStr: 'approved: true', verify: res => res.approved === true, run: fn => fn({ age: 30, creditScore: 700, monthlyIncome: 2000, monthlyDebt: 400 }) },
          { label: 'Відмова через вік (18 років)', inputLabel: '{ age: 18, ... }', expectedStr: 'approved: false', verify: res => res.approved === false, run: fn => fn({ age: 18, creditScore: 700, monthlyIncome: 2000, monthlyDebt: 400 }) }
        ]
      }
    ]
  },

  // ==============================================================================
  // МОДУЛЬ 5: ТЕРНАРНИЙ ОПЕРАТОР ТА УМОВНІ ВИРАЗИ
  // ==============================================================================
  {
    id: 'm5',
    name: 'Модуль 5: Тернарний оператор (? :) та умовні вирази',
    shortTitle: 'Модуль 5: Тернарний оператор',
    file: '05-ternary.js',
    tasks: [
      {
        id: '5.1',
        name: 'calculateDeliveryFee',
        title: 'Калькулятор вартості доставки',
        level: 'Середній рівень',
        goal: 'Розрахувати тариф курʼєра тернарним виразом за відстанню та Prime-статусом.',
        requirements: [
          'Пільгові (замовлення >= 1500 або Prime): до 10 км 0 грн, до 25 км 60 грн, далі 120 грн.',
          'Звичайні: до 5 км 50 грн, до 15 км 90 грн, далі 180 грн.'
        ],
        examples: 'calculateDeliveryFee(1500, 5, false) => 0\ncalculateDeliveryFee(500, 4, false) => 50',
        theoryHint: '💡 <b>Каскадні умови:</b> Побудуйте ланцюжок тернарних операторів від найменшої відстані до найбільшої.',
        starterCode: `export function calculateDeliveryFee(orderTotal, distanceKm, isPrimeMember) {\n  // TODO: Напиши свій розв'язок\n  return null;\n}`,
        fallbackFn: m5.calculateDeliveryFee,
        cases: [
          { label: 'Безкоштовно від 1500 грн', inputLabel: '1500, 5, false', expected: 0, run: fn => fn(1500, 5, false) },
          { label: 'Звичайний клієнт до 5 км', inputLabel: '500, 4, false', expected: 50, run: fn => fn(500, 4, false) }
        ]
      },
      {
        id: '5.2',
        name: 'pluralizeHours',
        title: 'Граматичний плюралізатор годин',
        level: 'Середній рівень',
        goal: 'Схиляти слово "година" в українській мові залежно від переданого числа.',
        requirements: [
          '11..19 -> "годин"',
          'закінчення на 1 -> "година"',
          'закінчення на 2..4 -> "години"',
          'решта -> "годин"'
        ],
        examples: 'pluralizeHours(1) => "1 година"\npluralizeHours(4) => "4 години"\npluralizeHours(12) => "12 годин"',
        theoryHint: '💡 <b>Правила відмінювання:</b> Зверніть увагу на останні цифри числа (десятки та одиниці через залишок <code>%</code>), щоб обрати правильне закінчення слова.',
        starterCode: `export function pluralizeHours(hours) {\n  // TODO: Напиши свій розв'язок\n  return '';\n}`,
        fallbackFn: m5.pluralizeHours,
        cases: [
          { label: '1 година', inputLabel: '1', expected: '1 година', run: fn => fn(1) },
          { label: '4 години', inputLabel: '4', expected: '4 години', run: fn => fn(4) },
          { label: '12 годин (виняток 11-19)', inputLabel: '12', expected: '12 годин', run: fn => fn(12) }
        ]
      },
      {
        id: '5.3',
        name: 'formatStudentGrade',
        title: 'Стрічковий класифікатор оцінки учня',
        level: 'Середній-Важкий рівень',
        goal: 'Класифікувати результат тесту 0..100 балів за міжнародною шкалою ECTS.',
        requirements: [
          '90..100: A (12 б)',
          '82..89: B (10 б)',
          '75..81: C (9 б)',
          '64..74: D (7 б)',
          '60..63: E (5 б)',
          '35..59: FX (3 б, passed: false)',
          '< 35: F (1 б, passed: false)'
        ],
        examples: 'formatStudentGrade(95) => { ects: "A", schoolGrade: 12, passed: true }',
        theoryHint: '💡 <b>Каскадні тернарні:</b> Зручно ланцюжком повертати обʼєкт відповідної категорії.',
        starterCode: `export function formatStudentGrade(score) {\n  // TODO: Напиши свій розв'язок\n  return null;\n}`,
        fallbackFn: m5.formatStudentGrade,
        cases: [
          { label: '95 балів -> A (12)', inputLabel: '95', expectedStr: 'ects: "A", schoolGrade: 12', verify: res => res.ects === 'A' && res.schoolGrade === 12, run: fn => fn(95) },
          { label: '40 балів -> FX (3)', inputLabel: '40', expectedStr: 'ects: "FX", passed: false', verify: res => res.ects === 'FX' && res.passed === false, run: fn => fn(40) }
        ]
      },
      {
        id: '5.4',
        name: 'pluralizeWords',
        title: 'Універсальний плюралізатор для будь-яких слів',
        level: 'Середній рівень',
        goal: 'Узгодити числівник зі словом у трьох граматичних формах: one, few, many.',
        requirements: [
          '1 кристал, 3 кристали, 15 кристалів.',
          'Формат: "${count} ${обранаФорма}".'
        ],
        examples: 'pluralizeWords(1, "кристал", "кристали", "кристалів") => "1 кристал"',
        theoryHint: '💡 <b>Граматика:</b> Враховуйте закінчення на 11-19 (завжди many).',
        starterCode: `export function pluralizeWords(count, one, few, many) {\n  // TODO: Напиши свій розв'язок\n  return '';\n}`,
        fallbackFn: m5.pluralizeWords,
        cases: [
          { label: '1 кристал', inputLabel: '1, "кристал", "кристали", "кристалів"', expected: '1 кристал', run: fn => fn(1, 'кристал', 'кристали', 'кристалів') },
          { label: '3 кристали', inputLabel: '3, ...', expected: '3 кристали', run: fn => fn(3, 'кристал', 'кристали', 'кристалів') },
          { label: '15 кристалів', inputLabel: '15, ...', expected: '15 кристалів', run: fn => fn(15, 'кристал', 'кристали', 'кристалів') }
        ]
      },
      {
        id: '5.5',
        name: 'getUserBadge',
        title: 'Бейдж гравця за досвідом XP',
        level: 'Легкий-Середній рівень',
        goal: 'Присвоїти ранг: Легенда (isPro або XP >= 5000), Майстер (>= 2500), Ветеран (>= 1000), Новачок.',
        requirements: [
          'Повернути відповідний рядок рангу.'
        ],
        examples: 'getUserBadge(6000) => "Легенда"\ngetUserBadge(500, true) => "Легенда"',
        theoryHint: '💡 <b>Пріоритет умов:</b> Спершу перевіряйте найвищий ранг.',
        starterCode: `export function getUserBadge(xp, isPro = false) {\n  // TODO: Напиши свій розв'язок\n  return 'Новачок';\n}`,
        fallbackFn: m5.getUserBadge,
        cases: [
          { label: '6000 XP -> Легенда', inputLabel: '6000, false', expected: 'Легенда', run: fn => fn(6000, false) },
          { label: 'Pro статус дає Легенду одразу', inputLabel: '500, true', expected: 'Легенда', run: fn => fn(500, true) }
        ]
      },
      {
        id: '5.6',
        name: 'formatTemperature',
        title: 'Конвертер температур',
        level: 'Середній рівень',
        goal: 'Конвертувати градуси Цельсія у Фаренгейти (°F) або Кельвіни (K).',
        requirements: [
          'F: Math.round((tempC * 9) / 5 + 32) + "°F"',
          'K: (tempC + 273.15).toFixed(1) + "K"',
          'C: tempC + "°C"'
        ],
        examples: 'formatTemperature(25, "F") => "77°F"',
        theoryHint: '💡 <b>Точність:</b> <code>.toFixed(1)</code> залишає один знак після коми.',
        starterCode: `export function formatTemperature(tempC, unit = 'C') {\n  // TODO: Напиши свій розв'язок\n  return null;\n}`,
        fallbackFn: m5.formatTemperature,
        cases: [
          { label: '25°C у Фаренгейти', inputLabel: '25, "F"', expected: '77°F', run: fn => fn(25, 'F') },
          { label: '0°C у Кельвіни', inputLabel: '0, "K"', expected: '273.2K', run: fn => fn(0, 'K') }
        ]
      },
      {
        id: '5.7',
        name: 'getDiscountModifier',
        title: 'Відсоток знижки постійного клієнта',
        level: 'Середній рівень',
        goal: 'Обчислити відсоток: vip -> 20%, regular -> 15% (>=10 зам.), 10% (>=5 зам.), 5% (<5), інші 0%.',
        requirements: [
          'Повернути числове значення відсотка (наприклад 15).'
        ],
        examples: 'getDiscountModifier("vip", 2) => 20\ngetDiscountModifier("regular", 12) => 15',
        theoryHint: '💡 <b>Динамічна знижка:</b> Використайте тернарний оператор для обрання відсотка знижки відповідно до категорії клієнта.',
        starterCode: `export function getDiscountModifier(customerType, orderCount = 0) {\n  // TODO: Напиши свій розв'язок\n  return 0;\n}`,
        fallbackFn: m5.getDiscountModifier,
        cases: [
          { label: 'VIP клієнт', inputLabel: '"vip", 2', expected: 20, run: fn => fn('vip', 2) },
          { label: 'Regular клієнт (12 замовлень)', inputLabel: '"regular", 12', expected: 15, run: fn => fn('regular', 12) }
        ]
      },
      {
        id: '5.8',
        name: 'formatTrafficLightAction',
        title: 'Диспетчер сигналів світлофора',
        level: 'Середній рівень',
        goal: 'Сформувати команду: red -> "Стій", yellow -> "Приготуйся" (або нерегульоване), green -> "Йди" (або завершуй).',
        requirements: [
          'Врахувати прапорець блимання isFlashing.'
        ],
        examples: 'formatTrafficLightAction("red") => "Стій"\nformatTrafficLightAction("yellow", true) => "Увага (нерегульоване перехрестя)"',
        theoryHint: '💡 <b>Світлофор:</b> Вкладені тернарні оператори чудово підходять для перевірки режиму блимання.',
        starterCode: `export function formatTrafficLightAction(color, isFlashing = false) {\n  // TODO: Напиши свій розв'язок\n  return '';\n}`,
        fallbackFn: m5.formatTrafficLightAction,
        cases: [
          { label: 'Червоне світло', inputLabel: '"red"', expected: 'Стій', run: fn => fn('red') },
          { label: 'Жовте блимаюче', inputLabel: '"yellow", true', expected: 'Увага (нерегульоване перехрестя)', run: fn => fn('yellow', true) }
        ]
      },
      {
        id: '5.9',
        name: 'calcTaxAmount',
        title: 'Розрахунок податку для ФОП',
        level: 'Середній рівень',
        goal: 'Розрахувати податок: пільга -> 0, єдиний податок (isSingleTax) -> 5%, загальна система -> 18%.',
        requirements: [
          'Округлити суму до 2 знаків після коми.'
        ],
        examples: 'calcTaxAmount(10000, false, true) => 500\ncalcTaxAmount(10000, false, false) => 1800',
        theoryHint: '💡 <b>Грошовий формат:</b> Для збереження двох знаків після коми округліть розраховану суму до сотих.',
        starterCode: `export function calcTaxAmount(income, isTaxExempt = false, isSingleTax = false) {\n  // TODO: Напиши свій розв'язок\n  return 0;\n}`,
        fallbackFn: m5.calcTaxAmount,
        cases: [
          { label: 'Єдиний податок 5%', inputLabel: '10000, false, true', expected: 500, run: fn => fn(10000, false, true) },
          { label: 'Загальна система 18%', inputLabel: '10000, false, false', expected: 1800, run: fn => fn(10000, false, false) }
        ]
      },
      {
        id: '5.10',
        name: 'renderThemeClass',
        title: 'Генератор CSS-класу теми оформлення',
        level: 'Середній-Важкий рівень',
        goal: 'Згенерувати імʼя класу теми: theme-dark / theme-light з урахуванням контрастності.',
        requirements: [
          'highContrast === true додає префікс theme-contrast-...',
          'Якщо isDark не визначено — орієнтуватися на systemPref.'
        ],
        examples: 'renderThemeClass(true, true) => "theme-contrast-dark"\nrenderThemeClass(true, false) => "theme-dark"',
        theoryHint: '💡 <b>CSS класи:</b> Повертайте точну назву рядка без помилок у дефісах.',
        starterCode: `export function renderThemeClass(isDark, highContrast = false, systemPref = 'dark') {\n  // TODO: Напиши свій розв'язок\n  return 'theme-light';\n}`,
        fallbackFn: m5.renderThemeClass,
        cases: [
          { label: 'Темна контрастна тема', inputLabel: 'true, true', expected: 'theme-contrast-dark', run: fn => fn(true, true) },
          { label: 'Звичайна темна тема', inputLabel: 'true, false', expected: 'theme-dark', run: fn => fn(true, false) }
        ]
      }
    ]
  },

  // ==============================================================================
  // МОДУЛЬ 6: БОС-ЗАВДАННЯ
  // ==============================================================================
  {
    id: 'm6',
    name: 'Модуль 6: Бос-завдання (Комплексні прикладні задачі)',
    shortTitle: 'Модуль 6: Бос-завдання',
    file: '06-boss-challenges.js',
    tasks: [
      {
        id: '6.1',
        name: 'processAtmWithdrawal',
        title: 'Банкомат майбутнього (ATM Core Engine)',
        level: 'Важкий рівень',
        goal: 'Обробити зняття готівки в банкоматі: перевірка картки, PIN-коду, кратності 100 грн та балансу.',
        requirements: [
          'Невірний PIN зменшує pinRetriesLeft на 1 (при <= 0 блокує картку isBlocked = true).',
          'Сума має бути кратною 100 грн.',
          'Перевірити залишок денного ліміту dailyLimit та баланс balance.',
          'Списати суму та повернути обʼєкт транзакції.'
        ],
        examples: 'processAtmWithdrawal(acc, "1234", "1234", "500 грн") => { success: true, withdrawn: 500, banknotes100: 5 }',
        theoryHint: '💡 <b>Оновлення балансу:</b> Не забудьте одночасно зменшити як поточний баланс, так і денний залишок ліміту на видану суму.',
        starterCode: `export function processAtmWithdrawal(account, enteredPin, correctPin, requestedAmount) {\n  // TODO: Напиши свій розв'язок\n  return { success: false, code: 'ERROR', message: '' };\n}`,
        fallbackFn: m6.processAtmWithdrawal,
        cases: [
          { label: 'Успішне зняття 500 грн', inputLabel: 'acc, "1234", "1234", "500 грн"', expectedStr: 'success: true, withdrawn: 500', verify: res => res.success === true && res.withdrawn === 500, run: fn => fn({ balance: 5000, dailyLimit: 2000, isBlocked: false, pinRetriesLeft: 3 }, '1234', '1234', '500 грн') },
          { label: 'Невірний PIN-код', inputLabel: 'acc, "0000", "1234", 500', expectedStr: 'code: "WRONG_PIN", retriesLeft: 2', verify: res => res.code === 'WRONG_PIN' && res.retriesLeft === 2, run: fn => fn({ balance: 5000, dailyLimit: 2000, isBlocked: false, pinRetriesLeft: 3 }, '0000', '1234', 500) }
        ]
      },
      {
        id: '6.2',
        name: 'calculateSmartDiscount',
        title: 'Розумний калькулятор знижок інтернет-магазину',
        level: 'Важкий рівень',
        goal: 'Розрахувати знижку за промокодом, роллю клієнта, кількістю товарів та акцією Black Friday.',
        requirements: [
          'Промокод CAMP20 -> 20%, SUMMER10 -> 10%, SUPER50 -> 50% для vip/teacher (ліміт до 60%).',
          'Бонус ролі: student +5%, teacher +10%, vip +12%.',
          'Бонус кількості: >=10 шт +7%, >=5 шт +3%.',
          'Black Friday: +10%.',
          'Капінг загальної знижки: 40% (або 60% для SUPER50 у vip/teacher).'
        ],
        examples: 'calculateSmartDiscount({ rawPrice: "1000 грн", promoCode: "CAMP20", userRole: "student", itemsCount: 6 }) => finalPrice: 720',
        theoryHint: '💡 <b>Розрахунок знижки:</b> Обчисліть сумарний відсоток з урахуванням ліміту і визначте фінальну ціну через округлення.',
        starterCode: `export function calculateSmartDiscount(order) {\n  // TODO: Напиши свій розв'язок\n  return null;\n}`,
        fallbackFn: m6.calculateSmartDiscount,
        cases: [
          { label: 'CAMP20 + student + 6 шт', inputLabel: '{ rawPrice: "1000 грн", promoCode: "CAMP20", userRole: "student", itemsCount: 6 }', expectedStr: 'discountPercent: 28, finalPrice: 720', verify: res => res.discountPercent === 28 && res.finalPrice === 720, run: fn => fn({ rawPrice: '1000 грн', promoCode: 'CAMP20', userRole: 'student', itemsCount: 6 }) }
        ]
      },
      {
        id: '6.3',
        name: 'evaluateJsQuirks',
        title: 'Інтерактивний суддя JS-пасток',
        level: 'Важкий рівень',
        goal: 'Оцінити список виразів неявного приведення та повернути статистику true/false.',
        requirements: [
          'Обчислити кожен кейс [a, b, op] у реальному JS.',
          'Порахувати загальну кількість trueCount та falseCount.'
        ],
        examples: 'evaluateJsQuirks([["0", 0, "=="], [null, 0, ">="]]) => { trueCount: 2, falseCount: 0 }',
        theoryHint: '💡 <b>Виконання операцій:</b> Співставте рядок оператора (==, ===, >= тощо) з відповідною дією.',
        starterCode: `export function evaluateJsQuirks(cases) {\n  // TODO: Напиши свій розв'язок\n  return { totalCases: 0, trueCount: 0, falseCount: 0, results: [] };\n}`,
        fallbackFn: m6.evaluateJsQuirks,
        cases: [
          { label: 'Два істинні вирази', inputLabel: '[["0", 0, "=="], [null, 0, ">="]]', expectedStr: 'trueCount: 2, falseCount: 0', verify: res => res.trueCount === 2 && res.falseCount === 0, run: fn => fn([['0', 0, '=='], [null, 0, '>=']]) }
        ]
      },
      {
        id: '6.4',
        name: 'validateRegistrationForm',
        title: 'Комплексна валідація форми реєстрації',
        level: 'Важкий рівень',
        goal: 'Зібрати всі помилки форми (імʼя >= 2 симв, email, пароль >= 6, збіг паролів, вік >= 14, згода).',
        requirements: [
          'Накопичити всі виявлені помилки в масиві errors.',
          'Повернути { isValid: errors.length === 0, errors }.'
        ],
        examples: 'validateRegistrationForm({ ... }) => { isValid: false, errors: ["Пароль менше 6 символів", ...] }',
        theoryHint: '💡 <b>Акумуляція помилок:</b> Створіть масив, додавайте туди повідомлення при виявленні кожного порушення та поверніть статус валідності.',
        starterCode: `export function validateRegistrationForm(formData) {\n  // TODO: Напиши свій розв'язок\n  return { isValid: false, errors: [] };\n}`,
        fallbackFn: m6.validateRegistrationForm,
        cases: [
          { label: 'Форма з помилками', inputLabel: '{ name: "Тарас", email: "t@t.com", password: "123", confirmPassword: "321", age: 10, agreeToTerms: false }', expectedStr: 'isValid: false, кілька помилок', verify: res => res.isValid === false && res.errors.length >= 3, run: fn => fn({ name: 'Тарас', email: 't@t.com', password: '123', confirmPassword: '321', age: 10, agreeToTerms: false }) }
        ]
      },
      {
        id: '6.5',
        name: 'calculateRideFare',
        title: 'Калькулятор вартості поїздки таксі',
        level: 'Важкий рівень',
        goal: 'Розрахувати чек таксі за тарифом, часом у заторі, коефіцієнтом та купоном.',
        requirements: [
          'standard: 40 + 10/км + 2/хв.',
          'comfort: 60 + 14/км + 3/хв.',
          'business: 100 + 22/км + 5/хв.',
          'isSurge множить на 1.4.',
          'hasCoupon віднімає 50 грн (але не нижче посадки).'
        ],
        examples: 'calculateRideFare(10, 15, "standard") => 170\ncalculateRideFare(10, 15, "standard", true) => 238',
        theoryHint: '💡 <b>Коефіцієнт та знижка:</b> Спочатку множте на surge, потім віднімайте купон.',
        starterCode: `export function calculateRideFare(distanceKm, timeMinutes, tariffType = 'standard', isSurge = false, hasCoupon = false) {\n  // TODO: Напиши свій розв'язок\n  return null;\n}`,
        fallbackFn: m6.calculateRideFare,
        cases: [
          { label: 'Базовий тариф standard (10 км, 15 хв)', inputLabel: '10, 15, "standard"', expected: 170, run: fn => fn(10, 15, 'standard', false, false) },
          { label: 'Підвищений попит (x1.4)', inputLabel: '10, 15, "standard", true', expected: 238, run: fn => fn(10, 15, 'standard', true, false) }
        ]
      },
      {
        id: '6.6',
        name: 'rpgCombatTurn',
        title: 'Раунд бою в покроковій RPG',
        level: 'Важкий рівень',
        goal: 'Змоделювати один раунд бою між героєм та монстром (атака, лікування, крит, контратака).',
        requirements: [
          'heal відновлює 30 HP (але не вище maxHp).',
          'attack завдає max(5, hero.attack - monster.armor) * (isCrit ? 2 : 1).',
          'Якщо монстр живий — він контратакує героя: max(5, monster.attack - hero.armor).'
        ],
        examples: 'rpgCombatTurn({ hp: 50, maxHp: 100, attack: 20, armor: 5 }, { hp: 30, attack: 15, armor: 5 }, "attack")',
        theoryHint: '💡 <b>Лікування персонажа:</b> Зверніть увагу, що при відновленні здоровʼя воно не повинно перевищувати максимальний показник maxHp героя.',
        starterCode: `export function rpgCombatTurn(hero, monster, action) {\n  // TODO: Напиши свій розв'язок\n  return null;\n}`,
        fallbackFn: m6.rpgCombatTurn,
        cases: [
          { label: 'Атака героя по монстру', inputLabel: 'hero, monster, "attack"', expectedStr: 'heroHp: 40, monsterHp: 15', verify: res => res.heroHp === 40 && res.monsterHp === 15, run: fn => fn({ hp: 50, maxHp: 100, attack: 20, armor: 5, isCrit: false }, { hp: 30, attack: 15, armor: 5 }, 'attack') }
        ]
      },
      {
        id: '6.7',
        name: 'safeObjectPathLookup',
        title: 'Безпечне читання вкладених властивостей обʼєкта',
        level: 'Важкий рівень',
        goal: 'Прочитати глибоке значення за шляхом "user.profile.theme" без виклику TypeError.',
        requirements: [
          'Розбити path за крапками.',
          'Якщо на будь-якому кроці значення null або undefined — повернути fallback.'
        ],
        examples: 'safeObjectPathLookup({ user: { profile: { theme: "dark" } } }, "user.profile.theme") => "dark"',
        theoryHint: '💡 <b>Безпечний обхід:</b> Використовуйте цикл <code>for (const key of path.split("."))</code>.',
        starterCode: `export function safeObjectPathLookup(obj, path, fallback = null) {\n  // TODO: Напиши свій розв'язок\n  return fallback;\n}`,
        fallbackFn: m6.safeObjectPathLookup,
        cases: [
          { label: 'Успішне читання "user.profile.theme"', inputLabel: '{ user: { profile: { theme: "dark" } } }, "user.profile.theme"', expected: 'dark', run: fn => fn({ user: { profile: { theme: 'dark' } } }, 'user.profile.theme') },
          { label: 'Відсутнє проміжне поле', inputLabel: '{ user: {} }, "user.profile.theme", "light"', expected: 'light', run: fn => fn({ user: {} }, 'user.profile.theme', 'light') }
        ]
      },
      {
        id: '6.8',
        name: 'smartParkingMeter',
        title: 'Розумний паркомат (Smart Parking Meter)',
        level: 'Важкий рівень',
        goal: 'Розрахувати паркування за часом заїзду та виїзду "HH:MM" (30 грн/год, електрокари -2 год, резиденти 0).',
        requirements: [
          'Неповна година округлюється вгору: Math.ceil(хвилини / 60).',
          'isElectricCar віднімає 2 години.',
          'hasResidentPass дає 0 грн.'
        ],
        examples: 'smartParkingMeter("10:00", "12:30") => 90\nsmartParkingMeter("10:00", "12:30", true) => 30',
        theoryHint: '💡 <b>Часовий розрахунок:</b> Переведіть обидва часи у загальну кількість хвилин від початку доби, щоб легко знайти різницю.',
        starterCode: `export function smartParkingMeter(entryTimeStr, exitTimeStr, isElectricCar = false, hasResidentPass = false) {\n  // TODO: Напиши свій розв'язок\n  return null;\n}`,
        fallbackFn: m6.smartParkingMeter,
        cases: [
          { label: 'Звичайна машина 2.5 год -> 3 год * 30 грн', inputLabel: '"10:00", "12:30"', expected: 90, run: fn => fn('10:00', '12:30', false, false) },
          { label: 'Електрокар (-2 год пільги)', inputLabel: '"10:00", "12:30", true', expected: 30, run: fn => fn('10:00', '12:30', true, false) }
        ]
      },
      {
        id: '6.9',
        name: 'evaluateBooleanSearchFilter',
        title: 'Багатопараметричний фільтр каталогу',
        level: 'Важкий рівень',
        goal: 'Перевірити товар за необовʼязковими фільтрами: minPrice, maxPrice, inStockOnly, category, minRating.',
        requirements: [
          'Товар підходить (true), лише якщо задовольняє всі задані фільтри.'
        ],
        examples: 'evaluateBooleanSearchFilter(book, { minPrice: 100, inStockOnly: true }) => true',
        theoryHint: '💡 <b>Необовʼязкові фільтри:</b> Перевіряйте кожну умову лише якщо відповідне поле передано у filters.',
        starterCode: `export function evaluateBooleanSearchFilter(item, filters) {\n  // TODO: Напиши свій розв'язок\n  return false;\n}`,
        fallbackFn: m6.evaluateBooleanSearchFilter,
        cases: [
          { label: 'Товар підходить під фільтри', inputLabel: 'book, { minPrice: 100, inStockOnly: true }', expected: true, run: fn => fn({ price: 500, inStock: true, category: 'books', rating: 4.8 }, { minPrice: 100, inStockOnly: true }) },
          { label: 'Товар не проходить за ціною', inputLabel: 'book, { maxPrice: 400 }', expected: false, run: fn => fn({ price: 500, inStock: true, category: 'books', rating: 4.8 }, { maxPrice: 400 }) }
        ]
      },
      {
        id: '6.10',
        name: 'antiFraudTransactionAnalyzer',
        title: 'Банківський антифрод аналізатор транзакцій',
        level: 'Важкий рівень',
        goal: 'Оцінити ризик платежу за аномальною сумою (> 5x avg), іншою країною та верифікацією.',
        requirements: [
          'Аномальна сума: +40 балів, прапорець UNUSUAL_AMOUNT.',
          'Чужа країна: +35 балів, FOREIGN_LOCATION.',
          'Неверифікований акаунт: +25 балів, UNVERIFIED_ACCOUNT.',
          'Вердикт: >= 70 BLOCK, >= 35 FLAG_FOR_REVIEW, інакше APPROVE.'
        ],
        examples: 'antiFraudTransactionAnalyzer({ amount: 100, country: "UA" }, { avgAmount: 100, homeCountry: "UA", isVerified: true }) => { action: "APPROVE", riskScore: 0 }',
        theoryHint: '💡 <b>Система скорингу:</b> Ініціалізуйте лічильник балів ризику та список прапорців, по черзі перевіряючи кожне підозріле правило.',
        starterCode: `export function antiFraudTransactionAnalyzer(transaction, userHistory) {\n  // TODO: Напиши свій розв'язок\n  return { action: 'BLOCK', riskScore: 100, flags: [] };\n}`,
        fallbackFn: m6.antiFraudTransactionAnalyzer,
        cases: [
          { label: 'Звичайна транзакція (APPROVE)', inputLabel: '{ amount: 100, country: "UA" }, ...', expectedStr: 'action: "APPROVE", riskScore: 0', verify: res => res.action === 'APPROVE' && res.riskScore === 0, run: fn => fn({ amount: 100, country: 'UA' }, { avgAmount: 100, homeCountry: 'UA', isVerified: true }) },
          { label: 'Аномальна чужа транзакція (BLOCK)', inputLabel: '{ amount: 1000, country: "US" }, ...', expectedStr: 'action: "BLOCK", riskScore: 100', verify: res => res.action === 'BLOCK' && res.riskScore === 100, run: fn => fn({ amount: 1000, country: 'US' }, { avgAmount: 100, homeCountry: 'UA', isVerified: false }) }
        ]
      }
    ]
  }
];

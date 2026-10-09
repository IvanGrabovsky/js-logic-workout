import { describe, it, expect } from 'vitest';
import {
  parseAgeFromPrompt,
  cleanUserNickname,
  safeSumPrompt,
  formatUserGreeting,
  normalizeEmail,
  parseBooleanConfirm,
  calculateRectanglePerimeter,
  sanitizeSearchQuery,
  extractInitials,
  smartNumberPromptParser,
} from '../src/01-io-and-types.js';

describe('Модуль 1: Введення/виведення, методи рядків (trim), змінні та типи', () => {
  it('1.1 parseAgeFromPrompt: парсить ціле число та відсікає невалідні значення', () => {
    expect(parseAgeFromPrompt('16')).toBe(16);
    expect(parseAgeFromPrompt('  17  ')).toBe(17);
    expect(parseAgeFromPrompt(null)).toBeNull();
    expect(parseAgeFromPrompt('')).toBeNull();
    expect(parseAgeFromPrompt('abc')).toBeNull();
    expect(parseAgeFromPrompt('-5')).toBeNull();
  });

  it('1.2 cleanUserNickname: очищає пробіли та обмежує довжину до 15 символів', () => {
    expect(cleanUserNickname('  Neo  ')).toBe('Neo');
    expect(cleanUserNickname('   ')).toBe('Anonymous');
    expect(cleanUserNickname(null)).toBe('Anonymous');
    expect(cleanUserNickname('CyberWarrior2077ExtraLong')).toBe('CyberWarrior207');
  });

  it('1.3 safeSumPrompt: безпечно додає числа без конкатенації', () => {
    expect(safeSumPrompt('10', '20')).toBe(30);
    expect(safeSumPrompt(' 15.5 ', ' 4.5 ')).toBe(20);
    expect(safeSumPrompt(null, '10')).toBe('Помилка: введення скасовано');
    expect(safeSumPrompt('abc', '10')).toBe('Помилка: невірне число');
  });

  it('1.4 formatUserGreeting: формує рядок профілю з урахуванням повноліття', () => {
    expect(formatUserGreeting('Іван', '18')).toBe(
      'Користувач: Іван, Вік: 18, Статус: Повнолітній'
    );
    expect(formatUserGreeting('Максим', '16')).toBe(
      'Користувач: Максим, Вік: 16, Статус: Неповнолітній'
    );
    expect(formatUserGreeting(null, 'invalid')).toBe(
      'Користувач: Гість, Вік: не вказано, Статус: Гість'
    );
  });

  it('1.5 normalizeEmail: очищає email та перевіряє базовий формат', () => {
    expect(normalizeEmail('  Ivan@Gmail.Com  ')).toBe('ivan@gmail.com');
    expect(normalizeEmail('invalid-email')).toBeNull();
    expect(normalizeEmail('@domain.com')).toBeNull();
    expect(normalizeEmail('user@domain')).toBeNull();
  });

  it('1.6 parseBooleanConfirm: парсить текстові та булеві підтвердження', () => {
    expect(parseBooleanConfirm(true)).toBe(true);
    expect(parseBooleanConfirm('  ТАК  ')).toBe(true);
    expect(parseBooleanConfirm('yes')).toBe(true);
    expect(parseBooleanConfirm('ні')).toBe(false);
    expect(parseBooleanConfirm('unknown', true)).toBe(true);
  });

  it('1.7 calculateRectanglePerimeter: обчислює периметр з prompt', () => {
    expect(calculateRectanglePerimeter('5', '10')).toBe(30);
    expect(calculateRectanglePerimeter(' 4.5 ', ' 5.5 ')).toBe(20);
    expect(calculateRectanglePerimeter(null, '10')).toBeNull();
    expect(calculateRectanglePerimeter('-5', '10')).toBeNull();
  });

  it('1.8 sanitizeSearchQuery: прибирає множинні пробіли та обмежує довжину', () => {
    expect(sanitizeSearchQuery('  javascript    react   frontend  ')).toBe(
      'javascript react frontend'
    );
    const longQuery = 'a'.repeat(60);
    expect(sanitizeSearchQuery(longQuery).endsWith('...')).toBe(true);
  });

  it('1.9 extractInitials: повертає ініціали з повного імені', () => {
    expect(extractInitials('  тарас   шевченко  ')).toBe('Т. Ш.');
    expect(extractInitials('платон')).toBe('П.');
    expect(extractInitials('')).toBe('');
  });

  it('1.10 smartNumberPromptParser: універсальний числовий парсер з межами', () => {
    expect(smartNumberPromptParser('42', 0, 1, 100)).toBe(42);
    expect(smartNumberPromptParser('150', 10, 1, 100)).toBe(10);
    expect(smartNumberPromptParser(null, 5, 1, 10)).toBe(5);
  });
});

import { describe, it, expect } from 'vitest';
import {
  compareDetective,
  isValueInRange,
  compareSemanticVersions,
  areStrictlyIdentical,
  isAlphabeticallyEarlier,
  findClampValue,
  areAllEqualStrict,
  compareObjectsShallow,
  sortStringNumbers,
  validatePasswordStrength,
} from '../src/03-comparisons.js';

describe('Модуль 3: Оператори порівняння та строгість (10 завдань)', () => {
  it('3.1 compareDetective: виявляє строгість та неявне приведення', () => {
    expect(compareDetective(42, 42).strictEqual).toBe(true);
    expect(compareDetective('42', 42).looseEqual).toBe(true);
    expect(compareDetective('42', 42).strictEqual).toBe(false);
  });

  it('3.2 isValueInRange: перевіряє діапазон та виправляє перевернуті межі', () => {
    expect(isValueInRange(15, 10, 20)).toBe(true);
    expect(isValueInRange(15, 20, 10)).toBe(true);
    expect(isValueInRange(10, 10, 20, false)).toBe(false);
  });

  it('3.3 compareSemanticVersions: семантичне порівняння версій', () => {
    expect(compareSemanticVersions('1.10.0', '1.2.0')).toBe(1);
    expect(compareSemanticVersions('1.2.0', '1.10.0')).toBe(-1);
    expect(compareSemanticVersions('1.5', '1.5.0')).toBe(0);
    expect(compareSemanticVersions('invalid', '1.0')).toBeNull();
  });

  it('3.4 areStrictlyIdentical: правильна обробка NaN та нулів', () => {
    expect(areStrictlyIdentical(NaN, NaN)).toBe(true);
    expect(areStrictlyIdentical(+0, -0)).toBe(false);
    expect(areStrictlyIdentical(42, 42)).toBe(true);
  });

  it('3.5 isAlphabeticallyEarlier: лексикографічне порівняння рядків', () => {
    expect(isAlphabeticallyEarlier('apple', 'banana')).toBe(true);
    expect(isAlphabeticallyEarlier('Banana', 'apple', false)).toBe(false);
  });

  it('3.6 findClampValue: обмежувач числа в діапазоні min..max', () => {
    expect(findClampValue(5, 10, 20)).toBe(10);
    expect(findClampValue(25, 10, 20)).toBe(20);
    expect(findClampValue(15, 10, 20)).toBe(15);
  });

  it('3.7 areAllEqualStrict: строга рівність кількох аргументів', () => {
    expect(areAllEqualStrict(5, 5, 5, 5)).toBe(true);
    expect(areAllEqualStrict(5, 5, '5')).toBe(false);
    expect(areAllEqualStrict(42)).toBe(true);
  });

  it('3.8 compareObjectsShallow: поверхневе порівняння обʼєктів', () => {
    expect(compareObjectsShallow({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
    expect(compareObjectsShallow({ a: 1 }, { a: '1' })).toBe(false);
    expect(compareObjectsShallow({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  });

  it('3.9 sortStringNumbers: числове сортування масиву рядків', () => {
    expect(sortStringNumbers(['10', '2', '1', '25'])).toEqual(['1', '2', '10', '25']);
  });

  it('3.10 validatePasswordStrength: валідація пароля', () => {
    expect(validatePasswordStrength('Secr3tPass!').isValid).toBe(true);
    expect(validatePasswordStrength('short1A').isValid).toBe(false);
    expect(validatePasswordStrength('alllowercase1').isValid).toBe(false);
  });
});

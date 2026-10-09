import { describe, it, expect } from 'vitest';
import {
  inspectBoolean,
  isRealZeroOrZeroString,
  cleanFalsyList,
  parseCurrency,
  evalImplicitCoercion,
  strictToNumber,
  coerceToPrimitivesSummary,
  safeDivision,
  isStrictlyEmpty,
  compareTypeCoercionRisk,
} from '../src/02-coercion.js';

describe('Модуль 2: Явне та неявне приведення типів (10 завдань)', () => {
  it('2.1 inspectBoolean: аналізує булеве значення та типи', () => {
    expect(inspectBoolean('0').isTruthy).toBe(true);
    expect(inspectBoolean(0).isTruthy).toBe(false);
    expect(inspectBoolean([]).isTruthy).toBe(true);
  });

  it('2.2 isRealZeroOrZeroString: виявляє справжній 0 та "0"', () => {
    expect(isRealZeroOrZeroString(0)).toBe(true);
    expect(isRealZeroOrZeroString('  0  ')).toBe(true);
    expect(isRealZeroOrZeroString(false)).toBe(false);
    expect(isRealZeroOrZeroString(null)).toBe(false);
  });

  it('2.3 cleanFalsyList: фільтрує масив, зберігаючи "0"', () => {
    const list = [0, '0', '', 'hello', false, true, null, undefined, NaN];
    const cleaned = cleanFalsyList(list);
    expect(cleaned).toEqual(['0', 'hello', true]);
  });

  it('2.4 parseCurrency: парсить грошові суми з рядків', () => {
    expect(parseCurrency(' 1200 грн ')).toBe(1200);
    expect(parseCurrency('$400,75')).toBe(400.75);
    expect(Number.isNaN(parseCurrency('-50 грн'))).toBe(true);
  });

  it('2.5 evalImplicitCoercion: симулює неявні операції та виявляє ризики', () => {
    const res = evalImplicitCoercion('10', '2', '-');
    expect(res.result).toBe(8);
    const danger = evalImplicitCoercion(null, 5, '+');
    expect(danger.isDangerous).toBe(true);
  });

  it('2.6 strictToNumber: суворе перетворення чисел без підводних каменів', () => {
    expect(strictToNumber('42')).toBe(42);
    expect(strictToNumber('-15.5')).toBe(-15.5);
    expect(Number.isNaN(strictToNumber(false))).toBe(true);
    expect(Number.isNaN(strictToNumber(null))).toBe(true);
    expect(Number.isNaN(strictToNumber(''))).toBe(true);
  });

  it('2.7 coerceToPrimitivesSummary: надає три типи приведення', () => {
    const res = coerceToPrimitivesSummary('123');
    expect(res).toEqual({ asString: '123', asNumber: 123, asBoolean: true });
  });

  it('2.8 safeDivision: безпечне ділення з перевіркою нуля та NaN', () => {
    expect(safeDivision('10', '2')).toBe(5);
    expect(safeDivision(10, 0)).toBeNull();
    expect(safeDivision('abc', 2)).toBeNull();
  });

  it('2.9 isStrictlyEmpty: перевірка на порожнечу (0 та false не є порожніми)', () => {
    expect(isStrictlyEmpty(null)).toBe(true);
    expect(isStrictlyEmpty('   ')).toBe(true);
    expect(isStrictlyEmpty(0)).toBe(false);
    expect(isStrictlyEmpty(false)).toBe(false);
  });

  it('2.10 compareTypeCoercionRisk: оцінює ризики нестрогого порівняння', () => {
    expect(compareTypeCoercionRisk('0', 0).risk).toBe('HIGH_RISK');
    expect(compareTypeCoercionRisk(42, 42).risk).toBe('NONE');
    expect(compareTypeCoercionRisk('cat', 5).risk).toBe('LOW_RISK');
  });
});

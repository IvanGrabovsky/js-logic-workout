import { describe, it, expect } from 'vitest';
import {
  resolveConfig,
  verifyAccess,
  validatePipeline,
  isLeapYear,
  canDriveCar,
  defaultIfFalsy,
  xor,
  evaluateLogicalExpression,
  guardFunctionCall,
  complexLoanApproval,
} from '../src/04-logical-operators.js';

describe('Модуль 4: Логічні оператори та Short-circuit (10 завдань)', () => {
  it('4.1 resolveConfig: пріоритет налаштувань зі збереженням 0 і false', () => {
    expect(resolveConfig(0, 100, 200)).toBe(0);
    expect(resolveConfig(false, true, true)).toBe(false);
    expect(resolveConfig('', 'default', 'fallback')).toBe('');
    expect(resolveConfig(null, 'dark', 'light')).toBe('dark');
  });

  it('4.2 verifyAccess: багаторівневий шлюз доступу', () => {
    expect(verifyAccess({ role: 'admin', isBanned: true }, 'admin-panel').isGranted).toBe(false);
    expect(verifyAccess({ role: 'admin', isBanned: false, twoFactorEnabled: true }, 'admin-panel').isGranted).toBe(true);
    expect(verifyAccess({ role: 'student', isBanned: false, subscriptionLevel: 'vip' }, 'secret-quest').isGranted).toBe(true);
  });

  it('4.3 validatePipeline: зупинка на першій невдалій перевірці (short-circuit)', () => {
    let executedSecond = false;
    const validators = [
      { name: 'step1', check: () => false },
      { name: 'step2', check: () => { executedSecond = true; return true; } },
    ];
    const res = validatePipeline({}, validators);
    expect(res.isValid).toBe(false);
    expect(res.failedAt).toBe('step1');
    expect(executedSecond).toBe(false);
  });

  it('4.4 isLeapYear: перевірка високосного року', () => {
    expect(isLeapYear(2024)).toBe(true);
    expect(isLeapYear(2000)).toBe(true);
    expect(isLeapYear(1900)).toBe(false);
    expect(isLeapYear(2023)).toBe(false);
  });

  it('4.5 canDriveCar: дозвіл керування авто', () => {
    expect(canDriveCar({ age: 20, hasLicense: true, isIntoxicated: false, insuranceValid: true })).toBe(true);
    expect(canDriveCar({ age: 16, hasLicense: true, isIntoxicated: false, insuranceValid: true })).toBe(false);
    expect(canDriveCar({ age: 25, hasLicense: true, isIntoxicated: true, insuranceValid: true })).toBe(false);
  });

  it('4.6 defaultIfFalsy: патерн fallback для falsy значень', () => {
    expect(defaultIfFalsy('user', 'guest')).toBe('user');
    expect(defaultIfFalsy('', 'guest')).toBe('guest');
    expect(defaultIfFalsy(0, 10)).toBe(10);
  });

  it('4.7 xor: логічне виключне АБО', () => {
    expect(xor(true, false)).toBe(true);
    expect(xor(false, true)).toBe(true);
    expect(xor(true, true)).toBe(false);
    expect(xor(false, false)).toBe(false);
  });

  it('4.8 evaluateLogicalExpression: врахування пріоритету && над ||', () => {
    // true || false && false => true (бо && виконується першим: false && false = false, true || false = true)
    expect(evaluateLogicalExpression(true, '||', false, '&&', false)).toBe(true);
    expect(evaluateLogicalExpression(false, '&&', true, '||', true)).toBe(true);
  });

  it('4.9 guardFunctionCall: захищений виклик функції', () => {
    let called = false;
    const fn = (x) => { called = true; return x * 2; };
    expect(guardFunctionCall(false, fn, 5)).toBeUndefined();
    expect(called).toBe(false);
    expect(guardFunctionCall(true, fn, 5)).toBe(10);
    expect(called).toBe(true);
  });

  it('4.10 complexLoanApproval: банківський кредитний скоринг', () => {
    expect(complexLoanApproval({ age: 30, creditScore: 700, monthlyIncome: 2000, monthlyDebt: 400 }).approved).toBe(true);
    expect(complexLoanApproval({ age: 18, creditScore: 700, monthlyIncome: 2000, monthlyDebt: 400 }).approved).toBe(false);
    expect(complexLoanApproval({ age: 30, creditScore: 500, monthlyIncome: 2000, monthlyDebt: 400 }).approved).toBe(false);
  });
});

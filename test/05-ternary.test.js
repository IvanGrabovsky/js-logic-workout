import { describe, it, expect } from 'vitest';
import {
  calculateDeliveryFee,
  pluralizeHours,
  formatStudentGrade,
  pluralizeWords,
  getUserBadge,
  formatTemperature,
  getDiscountModifier,
  formatTrafficLightAction,
  calcTaxAmount,
  renderThemeClass,
} from '../src/05-ternary.js';

describe('Модуль 5: Тернарний оператор (? :) (10 завдань)', () => {
  it('5.1 calculateDeliveryFee: тарифна сітка доставки', () => {
    expect(calculateDeliveryFee(1500, 5, false)).toBe(0);
    expect(calculateDeliveryFee(800, 8, true)).toBe(0);
    expect(calculateDeliveryFee(500, 4, false)).toBe(50);
    expect(calculateDeliveryFee(0, 10, false)).toBeNull();
  });

  it('5.2 pluralizeHours: схиляння годин (1, 2, 5, 11-19)', () => {
    expect(pluralizeHours(1)).toBe('1 година');
    expect(pluralizeHours(4)).toBe('4 години');
    expect(pluralizeHours(12)).toBe('12 годин');
    expect(pluralizeHours(21)).toBe('21 година');
  });

  it('5.3 formatStudentGrade: класифікація оцінки ECTS', () => {
    expect(formatStudentGrade(95).ects).toBe('A');
    expect(formatStudentGrade(85).ects).toBe('B');
    expect(formatStudentGrade(40).ects).toBe('FX');
    expect(formatStudentGrade(-5)).toBeNull();
  });

  it('5.4 pluralizeWords: універсальний плюралізатор слів', () => {
    expect(pluralizeWords(1, 'кристал', 'кристали', 'кристалів')).toBe('1 кристал');
    expect(pluralizeWords(3, 'кристал', 'кристали', 'кристалів')).toBe('3 кристали');
    expect(pluralizeWords(15, 'кристал', 'кристали', 'кристалів')).toBe('15 кристалів');
  });

  it('5.5 getUserBadge: отримання бейджа за XP та Pro статусом', () => {
    expect(getUserBadge(6000, false)).toBe('Легенда');
    expect(getUserBadge(500, true)).toBe('Легенда');
    expect(getUserBadge(3000, false)).toBe('Майстер');
    expect(getUserBadge(500, false)).toBe('Новачок');
  });

  it('5.6 formatTemperature: конвертація температур', () => {
    expect(formatTemperature(25, 'C')).toBe('25°C');
    expect(formatTemperature(25, 'F')).toBe('77°F');
    expect(formatTemperature(0, 'K')).toBe('273.2K');
    expect(formatTemperature('invalid')).toBeNull();
  });

  it('5.7 getDiscountModifier: розрахунок відсотка знижки клієнта', () => {
    expect(getDiscountModifier('vip', 2)).toBe(20);
    expect(getDiscountModifier('regular', 12)).toBe(15);
    expect(getDiscountModifier('regular', 6)).toBe(10);
    expect(getDiscountModifier('guest', 1)).toBe(0);
  });

  it('5.8 formatTrafficLightAction: реакція на світлофор', () => {
    expect(formatTrafficLightAction('red')).toBe('Стій');
    expect(formatTrafficLightAction('yellow', true)).toBe('Увага (нерегульоване перехрестя)');
    expect(formatTrafficLightAction('green', false)).toBe('Йди');
  });

  it('5.9 calcTaxAmount: розрахунок податку ФОП', () => {
    expect(calcTaxAmount(10000, false, true)).toBe(500); // 5%
    expect(calcTaxAmount(10000, false, false)).toBe(1800); // 18%
    expect(calcTaxAmount(10000, true, false)).toBe(0); // exempt
  });

  it('5.10 renderThemeClass: вибір класу теми', () => {
    expect(renderThemeClass(true, true)).toBe('theme-contrast-dark');
    expect(renderThemeClass(false, true)).toBe('theme-contrast-light');
    expect(renderThemeClass(true, false)).toBe('theme-dark');
    expect(renderThemeClass(false, false)).toBe('theme-light');
  });
});

import { describe, it, expect } from 'vitest';
import {
  processAtmWithdrawal,
  calculateSmartDiscount,
  evaluateJsQuirks,
  validateRegistrationForm,
  calculateRideFare,
  rpgCombatTurn,
  safeObjectPathLookup,
  smartParkingMeter,
  evaluateBooleanSearchFilter,
  antiFraudTransactionAnalyzer,
} from '../src/06-boss-challenges.js';

describe('Модуль 6: Комплексні Бос-завдання (10 завдань)', () => {
  it('6.1 processAtmWithdrawal: банкомат з перевіркою PIN, лімітів та купюр', () => {
    const account = { balance: 5000, isBlocked: false, dailyLimit: 2000, pinRetriesLeft: 3 };
    const res = processAtmWithdrawal(account, '1234', '1234', '500 грн');
    expect(res.success).toBe(true);
    expect(res.withdrawn).toBe(500);
    expect(account.balance).toBe(4500);

    // Wrong PIN
    const failPin = processAtmWithdrawal(account, '0000', '1234', 500);
    expect(failPin.success).toBe(false);
    expect(failPin.code).toBe('WRONG_PIN');
  });

  it('6.2 calculateSmartDiscount: розрахунок промокодів, опту та капінгу', () => {
    const res = calculateSmartDiscount({
      rawPrice: ' 1000 грн ',
      promoCode: 'CAMP20',
      userRole: 'student',
      itemsCount: 6,
      isBlackFriday: false,
    });
    expect(res.discountPercent).toBe(28); // 20 + 5 + 3
    expect(res.finalPrice).toBe(720);
  });

  it('6.3 evaluateJsQuirks: оцінка нетривіальних JS виразів', () => {
    const cases = [['0', 0, '=='], [null, 0, '>=']];
    const res = evaluateJsQuirks(cases);
    expect(res.totalCases).toBe(2);
    expect(res.trueCount).toBe(2);
  });

  it('6.4 validateRegistrationForm: валідація реєстраційної форми', () => {
    const validForm = {
      name: '  Тарас  ',
      email: 'taras@test.com',
      password: 'password123',
      confirmPassword: 'password123',
      age: '16',
      agreeToTerms: true,
    };
    expect(validateRegistrationForm(validForm).isValid).toBe(true);

    const invalidForm = { ...validForm, confirmPassword: 'wrong', age: 12 };
    const check = validateRegistrationForm(invalidForm);
    expect(check.isValid).toBe(false);
    expect(check.errors.length).toBeGreaterThanOrEqual(2);
  });

  it('6.5 calculateRideFare: розрахунок вартості таксі', () => {
    const fareStandard = calculateRideFare(10, 15, 'standard', false, false);
    // 40 + 10*10 + 15*2 = 170
    expect(fareStandard).toBe(170);

    const fareSurge = calculateRideFare(10, 15, 'standard', true, false);
    // 170 * 1.4 = 238
    expect(fareSurge).toBe(238);
  });

  it('6.6 rpgCombatTurn: раунд покрокового RPG бою', () => {
    const hero = { hp: 50, maxHp: 100, attack: 20, armor: 5, isCrit: false };
    const monster = { hp: 30, attack: 15, armor: 5 };

    const turn = rpgCombatTurn(hero, monster, 'attack');
    expect(turn.monsterHp).toBe(15); // 30 - (20 - 5) = 15
    expect(turn.heroHp).toBe(40); // 50 - (15 - 5) = 40
    expect(turn.isHeroAlive).toBe(true);
    expect(turn.isMonsterAlive).toBe(true);
  });

  it('6.7 safeObjectPathLookup: безпечне читання вкладених ключів', () => {
    const data = { user: { profile: { theme: 'dark' } } };
    expect(safeObjectPathLookup(data, 'user.profile.theme')).toBe('dark');
    expect(safeObjectPathLookup(data, 'user.settings.lang', 'uk')).toBe('uk');
    expect(safeObjectPathLookup(null, 'user.name', 'anonymous')).toBe('anonymous');
  });

  it('6.8 smartParkingMeter: розумний розрахунок паркування', () => {
    expect(smartParkingMeter('10:00', '12:30', false, false)).toBe(90); // 3 години * 30 = 90
    expect(smartParkingMeter('10:00', '12:30', true, false)).toBe(30); // 1 платна година для електро
    expect(smartParkingMeter('10:00', '12:30', false, true)).toBe(0); // резидент безкоштовно
  });

  it('6.9 evaluateBooleanSearchFilter: фільтрація каталогу товарів', () => {
    const item = { price: 500, inStock: true, category: 'books', rating: 4.8 };
    expect(evaluateBooleanSearchFilter(item, { minPrice: 100, inStockOnly: true })).toBe(true);
    expect(evaluateBooleanSearchFilter(item, { maxPrice: 400 })).toBe(false);
    expect(evaluateBooleanSearchFilter(item, { category: 'electronics' })).toBe(false);
  });

  it('6.10 antiFraudTransactionAnalyzer: аналіз підозрілості платежу', () => {
    const normal = antiFraudTransactionAnalyzer(
      { amount: 100, country: 'UA' },
      { avgAmount: 100, homeCountry: 'UA', isVerified: true }
    );
    expect(normal.action).toBe('APPROVE');

    const suspicious = antiFraudTransactionAnalyzer(
      { amount: 1000, country: 'US' },
      { avgAmount: 100, homeCountry: 'UA', isVerified: false }
    );
    expect(suspicious.action).toBe('BLOCK');
    expect(suspicious.flags.length).toBe(3);
  });
});

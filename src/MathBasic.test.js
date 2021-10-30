/* eslint-disable linebreak-style */
const MathBasic = require('./MathBasic');

describe('A MathBasic', () => {
  it('should contains add, subtract, multiply, and divide function', () => {
    expect(MathBasic).toHaveProperty('add');
    expect(MathBasic).toHaveProperty('subtract');
    expect(MathBasic).toHaveProperty('multiply');
    expect(MathBasic).toHaveProperty('divide');
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });
});

describe('A add function', () => {
  it('should throw error when not given 2 parameters', () => {
    expect(() => MathBasic.add()).toThrowError();
    expect(() => MathBasic.add(1)).toThrowError();
    expect(() => MathBasic.add(1, 2, 3)).toThrowError();
    expect(() => MathBasic.add(1, 2, 3, 4)).toThrowError();
  });

  it('should throw error when given not-number parameters', () => {
    expect(() => MathBasic.add('1', '2')).toThrowError();
    expect(() => MathBasic.add(true, {})).toThrowError();
    expect(() => MathBasic.add(null, false)).toThrowError();
  });

  it('should return a+b when given two number parameters', () => {
    expect(MathBasic.add(2, 2)).toEqual(4);
    expect(MathBasic.add(16, 8)).toEqual(24);
    expect(MathBasic.add(3, 7)).toEqual(10);
  });
});

describe('A subtract function', () => {
  it('should throw error when not given 2 parameters', () => {
    expect(() => MathBasic.subtract()).toThrowError();
    expect(() => MathBasic.subtract(1)).toThrowError();
    expect(() => MathBasic.subtract(1, 2, 3)).toThrowError();
    expect(() => MathBasic.subtract(1, 2, 3, 4)).toThrowError();
  });

  it('should throw error when given not-number parameters', () => {
    expect(() => MathBasic.subtract('4', 5)).toThrowError();
    expect(() => MathBasic.subtract(3, false)).toThrowError();
    expect(() => MathBasic.subtract(null, [])).toThrowError();
  });

  it('should throw a-b when given two number parameters', () => {
    expect(MathBasic.subtract(2, 3)).toEqual(-1);
    expect(MathBasic.subtract(7, 2)).toEqual(5);
    expect(MathBasic.subtract(4, 4)).toEqual(0);
  });
});

describe('A multiply function', () => {
  it('should throw error when not given 2 parameters', () => {
    expect(() => MathBasic.multiply()).toThrowError();
    expect(() => MathBasic.multiply(1)).toThrowError();
    expect(() => MathBasic.multiply(1, 2, 3)).toThrowError();
    expect(() => MathBasic.multiply(1, 2, 3, 4)).toThrowError();
  });

  it('should throw error when given not-number parameters', () => {
    expect(() => MathBasic.multiply('4', 5)).toThrowError();
    expect(() => MathBasic.multiply(3, false)).toThrowError();
    expect(() => MathBasic.multiply(null, [])).toThrowError();
  });

  it('should throw a*b when given two number parameters', () => {
    expect(MathBasic.multiply(2, 3)).toEqual(6);
    expect(MathBasic.multiply(7, -2)).toEqual(-14);
    expect(MathBasic.multiply(0, 4)).toEqual(0);
  });
});

describe('A divide function', () => {
  it('should throw error when not given 2 parameters', () => {
    expect(() => MathBasic.divide()).toThrowError();
    expect(() => MathBasic.divide(1)).toThrowError();
    expect(() => MathBasic.divide(1, 2, 3)).toThrowError();
    expect(() => MathBasic.divide(1, 2, 3, 4)).toThrowError();
  });

  it('should throw error when given not-number parameters', () => {
    expect(() => MathBasic.divide('4', 5)).toThrowError();
    expect(() => MathBasic.divide(3, false)).toThrowError();
    expect(() => MathBasic.divide(null, [])).toThrowError();
  });

  it('should throw a/b when given two number parameters', () => {
    expect(MathBasic.divide(9, 2)).toEqual(4.5);
    expect(MathBasic.divide(7, 0)).toEqual(Infinity);
    expect(MathBasic.divide(0, 4)).toEqual(0);
  });
});

// #region Primitive Data Types
// https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html
/**
 * 32-bit signed two's complement integer, which has a minimum value of -2^31 and a maximum value of 2^31-1
 * @example 0, 1, 2, -1, -2147483648, 2147483647
 */
export type int = number;
/**
 * Single-precision 32-bit IEEE 754 floating point
 * @example 0.1, -1.23
 */
export type float = number;
// #endregion

// #region Mutate Primitive Data Types
/**
 * Int-like-string
 * @example "100", "-1"
 */
export type IntString = string;
/**
 * Float-like-string
 * @example "1.00", "-0.1"
 */
export type FloatString = string;
/**
 * Date-like-string which can be converted to Date object by `new Date(foo)`
 * @example "Mon, 19 Oct 2020 13:09:21 GMT", "2020-09-10 17:28:35"
 */
export type DateString = string;
/**
 * JSON-string which can be converted to json object by `JSON.parse(foo)`
 * @example "{\"hello\":\"world\"}"
 */
export type JSONString = string;
/**
 * Use int to represent a boolean
 * @example 0, 1
 */
export type BooleanInt = 0 | 1;
// #region

// #region Usefull Types
export type AnyFunction = (...args: any[]) => any;

/**
 * There are only three index types of objects, String, Number, and Symbol
 */
export type AnyObject = Record<string | number | symbol, any>;

/**
 * Removing the value type from T is a property of V
 * @example
 * interface A {a: string; b: boolean; c: number; d: number}
 * OmitValueType<A, number> => {a: string; b: boolean;}
 */
export type OmitValueType<T, V> = Pick<T, { [K in keyof T]: T[K] extends V ? never : K }[keyof T]>;

/**
 * Select the value type from T to be an attribute of V, and combine these attributes
 * @example
 * interface A {a: string; b: boolean; c: number; d: number}
 * PickValue<A, number> => 'c'|'d'
 */
export type PickValue<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];

/**
 * Remove some properties from T
 * @example
 * interface A {a: string; b: boolean; c: 'f'|'m';}
 * PartialKey<A, 'a'|'b'> => {c: 'f'|'m';}
 */
export type PartialKey<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;

/* eslint-disable @typescript-eslint/no-unused-vars */

/** TypeScriptにおける基本の型 **/

// boolean(真偽値)型
let bool: boolean = true;

// number(数値)型
let num: number = 0;

// string(文字列)型
let str: string = "A";

// Array(配列)型　どちらでも可
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple型
let tuple: [number, string] = [0, "A"];

// any型
let any1: any = false;

// void型
const funcA = (): void => {
  const test = "TEST";
};

// null型
let null1: null = null;

// undefined型
let undefined1: undefined = undefined;

// object型　{}のほうは何でもOKなので意味ない
let obj1: object = {};
let obj2: {} = {};

// "strict": true,
// "noImplicitAny": false,
// "strictNullChecks": false

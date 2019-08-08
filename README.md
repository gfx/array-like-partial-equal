## @gfx/array-like-partial-equal

This library checks equality for subarrays of two arrays, not only for `Array<T>` but also for `ArrayLike<T>` in TypeScript.

## Install

```
npm install @gfx/array-like-partial-equal
```

## Synopsis

```typescript
import { arrayLikePartialEqual } from "../src";

const a: ArrayLike<number> = [99, 1, 2, 3, 98];
const b: ArrayLike<number> = [10, 1, 2, 3, 20];

// check if a.subarray(1, 1+3) === b.subarray(1, 1+3) for each item
console.log(arrayLikePartialEqual(a, 1, b, 1, 3)); // true

// check if a.subarray(0, 0+3) === b.subarray(0, 0+3) for each item
console.log(arrayLikePartialEqual(a, 0, b, 0, 3)); // false
```

## Copyright

Copyright (c) FUJI Goro.

# lv-ts-utils

Lightweight TypeScript utility kit with small, focused helpers for type guards, strings, arrays, and timing helpers. Published as ESM with bundled type definitions.

## Installation

```bash
npm install lv-ts-utils
# or
yarn add lv-ts-utils
# or
pnpm add lv-ts-utils
```

## Quick start

```ts
import { isString, debounce, capitalize } from "lv-ts-utils";

const logTyped = debounce((value: unknown) => {
	if (isString(value)) {
		console.log(capitalize(value));
	}
}, 300);

logTyped("hello world"); // → "Hello World"
```

## API

### Types
- `AnyFunction`: alias for `(...args: unknown[]) => unknown`, used by timing helpers.

### Check
- `isEmpty(value: unknown): boolean` — returns `true` for non-objects and for objects with no enumerable entries.
- `isNullOrUndefined(value): value is null | undefined` — narrow to nullable values.
- `isObject(value): value is object` — plain object guard (excludes `null`, arrays, `Date`, `RegExp`).
- `isString(value): value is string` — string guard.

### Strings
- `capitalize(string): string` — capitalizes the first letter of each space-separated word; if input is not a string, returns it unchanged.
- `includes(string, substring): boolean` — safe wrapper around `String.prototype.includes`; returns `false` if either argument is not a string.

### Arrays
- `arraylable(value): T[]` — ensures an array; returns `[]` when input is `null` or not an array.
- `map(array, fn): U[]` — thin wrapper over `Array.prototype.map` for consistent import style.

### Timing
- `debounce(fn, delay = 200)` — returns a debounced function that runs after inactivity for the given delay (default 200 ms).
- `throttle(fn, delay = 500)` — returns a throttled function that runs at most once per delay window (default 500 ms).

### Test helpers
- `hello()` — logs `Hello, world!`.

## Project scripts
- `npm run build` — type-check with `tsc` and build with `vite`.
- `npm run lint` — lint with Biome.
- `npm run format` — format with Biome.
- `npm run check:types` — Biome check plus `tsc --noEmit`.
- `npm test` — run Vitest with coverage.
- `npm run test:mutation` — run Stryker mutation tests.

## Output
- Entry point: `dist/ts-utils.js`.
- Types: `dist/types/index.d.ts`.

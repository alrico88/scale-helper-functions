scale-helper-functions / [Exports](modules.md)

# scale-helper-functions

Compendium of helpers to create scales

## Installation

Using npm, `npm i scale-helper-functions`.

Using yarn, `yarn add scale-helper-functions`.

## Usage

Using `import`

```javascript
import {createLinearScale} from 'scale-helper-functions';

const domain = [0, 10];
const range = [0, 100];

const scale = createLinearScale(domain, range);

const transformed = scale(5); // transformed is 50
```

In a CommonJS environment

```javascript
const {createOrdinalScale} = require('scale-helper-functions');

const animals = ['cat', 'dog'];
const range = ['white', 'brown'];

const scale = createOrdinalScale(animals, range);
const color = scale('dog'); // color is brown
```

## Table of contents

### Type aliases

- [Range](#range)

### Functions

- [createLinearScale](#createlinearscale)
- [createLogScale](#createlogscale)
- [createOrdinalScale](#createordinalscale)
- [createQuantileScale](#createquantilescale)
- [createQuantizeScale](#createquantizescale)
- [getDomainRange](#getdomainrange)

## Type aliases

### Range

Ƭ **Range**: _string_[] \| _number_[]

Defined in: index.ts:3

## Functions

### createLinearScale

▸ **createLinearScale**(`domain`: _number_[], `range`: [_Range_](#range)): _ScaleLinear_<number, number \| string\>

Creates a linear scale

#### Parameters:

| Name     | Type              | Description                         |
| :------- | :---------------- | :---------------------------------- |
| `domain` | _number_[]        |                                     |
| `range`  | [_Range_](#range) | Desired resulting values of scaling |

**Returns:** _ScaleLinear_<number, number \| string\>

The scale function

Defined in: index.ts:12

---

### createLogScale

▸ **createLogScale**(`domain`: _number_[], `range`: [_Range_](#range), `base?`: _number_): _ScaleLogarithmic_<number, number \| string\>

Creates a log scale

#### Parameters:

| Name     | Type              | Description                         |
| :------- | :---------------- | :---------------------------------- |
| `domain` | _number_[]        |                                     |
| `range`  | [_Range_](#range) | Desired resulting values of scaling |
| `base?`  | _number_          | -                                   |

**Returns:** _ScaleLogarithmic_<number, number \| string\>

The scale function

Defined in: index.ts:24

---

### createOrdinalScale

▸ **createOrdinalScale**(`domain`: _string_[], `range`: _string_[]): _ScaleOrdinal_<string, string\>

Returns an ordinal scale
Discrete input and discrete output

#### Parameters:

| Name     | Type       | Description                             |
| :------- | :--------- | :-------------------------------------- |
| `domain` | _string_[] | Discrete list of values ['A', 'B', 'C'] |
| `range`  | _string_[] | Desired resulting values of scaling     |

**Returns:** _ScaleOrdinal_<string, string\>

The scale function

Defined in: index.ts:64

---

### createQuantileScale

▸ **createQuantileScale**(`dataset`: _number_[], `range`: [_Range_](#range)): _ScaleQuantile_<number, number\>

Returns a quantile scale based on dataset
Maps continuous numeric input to discrete values. The domain is defined by an array of numbers:

#### Parameters:

| Name      | Type              | Description                         |
| :-------- | :---------------- | :---------------------------------- |
| `dataset` | _number_[]        | Full dataset to take into account   |
| `range`   | [_Range_](#range) | Desired resulting values of scaling |

**Returns:** _ScaleQuantile_<number, number\>

The scale function

Defined in: index.ts:40

---

### createQuantizeScale

▸ **createQuantizeScale**(`domain`: _number_[], `range`: [_Range_](#range)): _ScaleQuantize_<number, number\>

Returns a quantized scale based on dataset extent
Accepts continuous input and outputs a number of discrete quantities defined by the range.

#### Parameters:

| Name     | Type              | Description                         |
| :------- | :---------------- | :---------------------------------- |
| `domain` | _number_[]        |                                     |
| `range`  | [_Range_](#range) | Desired resulting values of scaling |

**Returns:** _ScaleQuantize_<number, number\>

The scale function

Defined in: index.ts:52

---

### getDomainRange

▸ **getDomainRange**(`domain`: _number_[], `segmentsAmount`: _number_): _number_[]

#### Parameters:

| Name             | Type       |
| :--------------- | :--------- |
| `domain`         | _number_[] |
| `segmentsAmount` | _number_   |

**Returns:** _number_[]

Defined in: index.ts:68

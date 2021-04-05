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

- [OrdinalScaleFunction](#ordinalscalefunction)
- [ScaleFunction](#scalefunction)

### Functions

- [createLinearInterpolator](#createlinearinterpolator)
- [createLinearScale](#createlinearscale)
- [createLogScale](#createlogscale)
- [createOrdinalScale](#createordinalscale)
- [createQuantileScale](#createquantilescale)
- [createQuantizeScale](#createquantizescale)
- [getLinearDomainRange](#getlineardomainrange)

## Type aliases

### OrdinalScaleFunction

Ƭ **OrdinalScaleFunction**: (`s`: _string_) => _string_

#### Type declaration:

▸ (`s`: _string_): _string_

#### Parameters:

| Name | Type     |
| :--- | :------- |
| `s`  | _string_ |

**Returns:** _string_

Defined in: [modules/types.ts:3](https://github.com/alrico88/scale-helper-functions/blob/c37c6da/src/modules/types.ts#L3)

---

### ScaleFunction

Ƭ **ScaleFunction**: (`n`: _number_) => _number_ \| _string_

#### Type declaration:

▸ (`n`: _number_): _number_ \| _string_

#### Parameters:

| Name | Type     |
| :--- | :------- |
| `n`  | _number_ |

**Returns:** _number_ \| _string_

Defined in: [modules/types.ts:1](https://github.com/alrico88/scale-helper-functions/blob/c37c6da/src/modules/types.ts#L1)

## Functions

### createLinearInterpolator

▸ **createLinearInterpolator**(`domain`: _number_[]): [_ScaleFunction_](#scalefunction)

Function that given a domain, returns a scale that will trasform a number to a value between 0 and 1

#### Parameters:

| Name     | Type       |
| :------- | :--------- |
| `domain` | _number_[] |

**Returns:** [_ScaleFunction_](#scalefunction)

Defined in: [modules/interpolation.ts:9](https://github.com/alrico88/scale-helper-functions/blob/c37c6da/src/modules/interpolation.ts#L9)

---

### createLinearScale

▸ **createLinearScale**(`domain`: _number_[], `range`: Range): [_ScaleFunction_](#scalefunction)

Creates a linear scale

#### Parameters:

| Name     | Type       | Description                         |
| :------- | :--------- | :---------------------------------- |
| `domain` | _number_[] |                                     |
| `range`  | Range      | Desired resulting values of scaling |

**Returns:** [_ScaleFunction_](#scalefunction)

The scale function

Defined in: [modules/scales.ts:13](https://github.com/alrico88/scale-helper-functions/blob/c37c6da/src/modules/scales.ts#L13)

---

### createLogScale

▸ **createLogScale**(`domain`: _number_[], `range`: Range, `base?`: _number_): [_ScaleFunction_](#scalefunction)

Creates a log scale

#### Parameters:

| Name     | Type       | Description                         |
| :------- | :--------- | :---------------------------------- |
| `domain` | _number_[] |                                     |
| `range`  | Range      | Desired resulting values of scaling |
| `base?`  | _number_   | -                                   |

**Returns:** [_ScaleFunction_](#scalefunction)

The scale function

Defined in: [modules/scales.ts:25](https://github.com/alrico88/scale-helper-functions/blob/c37c6da/src/modules/scales.ts#L25)

---

### createOrdinalScale

▸ **createOrdinalScale**(`domain`: _string_[], `range`: _string_[]): [_OrdinalScaleFunction_](#ordinalscalefunction)

Returns an ordinal scale
Discrete input and discrete output

#### Parameters:

| Name     | Type       | Description                             |
| :------- | :--------- | :-------------------------------------- |
| `domain` | _string_[] | Discrete list of values ['A', 'B', 'C'] |
| `range`  | _string_[] | Desired resulting values of scaling     |

**Returns:** [_OrdinalScaleFunction_](#ordinalscalefunction)

The scale function

Defined in: [modules/scales.ts:65](https://github.com/alrico88/scale-helper-functions/blob/c37c6da/src/modules/scales.ts#L65)

---

### createQuantileScale

▸ **createQuantileScale**(`dataset`: _number_[], `range`: Range): [_ScaleFunction_](#scalefunction)

Returns a quantile scale based on dataset
Maps continuous numeric input to discrete values. The domain is defined by an array of numbers:

#### Parameters:

| Name      | Type       | Description                         |
| :-------- | :--------- | :---------------------------------- |
| `dataset` | _number_[] | Full dataset to take into account   |
| `range`   | Range      | Desired resulting values of scaling |

**Returns:** [_ScaleFunction_](#scalefunction)

The scale function

Defined in: [modules/scales.ts:41](https://github.com/alrico88/scale-helper-functions/blob/c37c6da/src/modules/scales.ts#L41)

---

### createQuantizeScale

▸ **createQuantizeScale**(`domain`: _number_[], `range`: Range): [_ScaleFunction_](#scalefunction)

Returns a quantized scale based on dataset extent
Accepts continuous input and outputs a number of discrete quantities defined by the range.

#### Parameters:

| Name     | Type       | Description                         |
| :------- | :--------- | :---------------------------------- |
| `domain` | _number_[] |                                     |
| `range`  | Range      | Desired resulting values of scaling |

**Returns:** [_ScaleFunction_](#scalefunction)

The scale function

Defined in: [modules/scales.ts:53](https://github.com/alrico88/scale-helper-functions/blob/c37c6da/src/modules/scales.ts#L53)

---

### getLinearDomainRange

▸ **getLinearDomainRange**(`domain`: _number_[], `segmentsAmount`: _number_): _number_[]

Gets a domain of N elements from a domain with less length

**`export`**

#### Parameters:

| Name             | Type       | Description                              |
| :--------------- | :--------- | :--------------------------------------- |
| `domain`         | _number_[] | The existing domain                      |
| `segmentsAmount` | _number_   | The desired length for the linear domain |

**Returns:** _number_[]

The resulting domain

Defined in: [modules/helpers.ts:9](https://github.com/alrico88/scale-helper-functions/blob/c37c6da/src/modules/helpers.ts#L9)

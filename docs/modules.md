[scale-helper-functions](README.md) / Exports

# scale-helper-functions

## Table of contents

### Type aliases

- [Range](modules.md#range)

### Functions

- [createLinearScale](modules.md#createlinearscale)
- [createLogScale](modules.md#createlogscale)
- [createOrdinalScale](modules.md#createordinalscale)
- [createQuantileScale](modules.md#createquantilescale)
- [createQuantizeScale](modules.md#createquantizescale)
- [getLinearDomainRange](modules.md#getlineardomainrange)

## Type aliases

### Range

Ƭ **Range**: *string*[] \| *number*[]

Defined in: index.ts:3

## Functions

### createLinearScale

▸ **createLinearScale**(`domain`: *number*[], `range`: [*Range*](modules.md#range)): *ScaleLinear*<number, number \| string\>

Creates a linear scale

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`domain` | *number*[] |  |
`range` | [*Range*](modules.md#range) | Desired resulting values of scaling   |

**Returns:** *ScaleLinear*<number, number \| string\>

The scale function

Defined in: index.ts:12

___

### createLogScale

▸ **createLogScale**(`domain`: *number*[], `range`: [*Range*](modules.md#range), `base?`: *number*): *ScaleLogarithmic*<number, number \| string\>

Creates a log scale

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`domain` | *number*[] |  |
`range` | [*Range*](modules.md#range) | Desired resulting values of scaling   |
`base?` | *number* | - |

**Returns:** *ScaleLogarithmic*<number, number \| string\>

The scale function

Defined in: index.ts:24

___

### createOrdinalScale

▸ **createOrdinalScale**(`domain`: *string*[], `range`: *string*[]): *ScaleOrdinal*<string, string\>

Returns an ordinal scale
Discrete input and discrete output

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`domain` | *string*[] | Discrete list of values ['A', 'B', 'C']   |
`range` | *string*[] | Desired resulting values of scaling   |

**Returns:** *ScaleOrdinal*<string, string\>

The scale function

Defined in: index.ts:64

___

### createQuantileScale

▸ **createQuantileScale**(`dataset`: *number*[], `range`: [*Range*](modules.md#range)): *ScaleQuantile*<number, number\>

Returns a quantile scale based on dataset
Maps continuous numeric input to discrete values. The domain is defined by an array of numbers:

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`dataset` | *number*[] | Full dataset to take into account   |
`range` | [*Range*](modules.md#range) | Desired resulting values of scaling   |

**Returns:** *ScaleQuantile*<number, number\>

The scale function

Defined in: index.ts:40

___

### createQuantizeScale

▸ **createQuantizeScale**(`domain`: *number*[], `range`: [*Range*](modules.md#range)): *ScaleQuantize*<number, number\>

Returns a quantized scale based on dataset extent
Accepts continuous input and outputs a number of discrete quantities defined by the range.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`domain` | *number*[] |  |
`range` | [*Range*](modules.md#range) | Desired resulting values of scaling   |

**Returns:** *ScaleQuantize*<number, number\>

The scale function

Defined in: index.ts:52

___

### getLinearDomainRange

▸ **getLinearDomainRange**(`domain`: *number*[], `segmentsAmount`: *number*): *number*[]

Gets a domain of N elements from a domain with less length

**`export`** 

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`domain` | *number*[] | The existing domain   |
`segmentsAmount` | *number* | The desired length for the linear domain   |

**Returns:** *number*[]

The resulting domain

Defined in: index.ts:76

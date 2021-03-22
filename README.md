## Functions

<dl>
<dt><a href="#createLinearScale">createLinearScale(domain, range)</a> ⇒ <code>function</code></dt>
<dd><p>Creates a linear scale</p>
</dd>
<dt><a href="#createLogScale">createLogScale(domain, range, [base])</a> ⇒ <code>function</code></dt>
<dd><p>Creates a log scale</p>
</dd>
<dt><a href="#createQuantileScale">createQuantileScale(dataset, range)</a> ⇒ <code>function</code></dt>
<dd><p>Returns a quantile scale based on dataset</p>
</dd>
<dt><a href="#createQuantizeScale">createQuantizeScale(domain, range)</a> ⇒ <code>function</code></dt>
<dd><p>Returns a quantized scale based on dataset extent</p>
</dd>
<dt><a href="#createOrdinalScale">createOrdinalScale(domain, range)</a> ⇒ <code>function</code></dt>
<dd><p>Returns an ordinal scale
Discrete input and discrete output</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Range">Range</a> : <code>Array.&lt;string&gt;</code> | <code>Array.&lt;number&gt;</code></dt>
<dd></dd>
</dl>

<a name="createLinearScale"></a>

## createLinearScale(domain, range) ⇒ <code>function</code>

Creates a linear scale

**Kind**: global function  
**Returns**: <code>function</code> - The scale function

| Param  | Type                              | Description                         |
| ------ | --------------------------------- | ----------------------------------- |
| domain | <code>Array.&lt;number&gt;</code> | [min, max]                          |
| range  | [<code>Range</code>](#Range)      | Desired resulting values of scaling |

<a name="createLogScale"></a>

## createLogScale(domain, range, [base]) ⇒ <code>function</code>

Creates a log scale

**Kind**: global function  
**Returns**: <code>function</code> - The scale function

| Param  | Type                              | Description                         |
| ------ | --------------------------------- | ----------------------------------- |
| domain | <code>Array.&lt;number&gt;</code> | [min, max]                          |
| range  | [<code>Range</code>](#Range)      | Desired resulting values of scaling |
| [base] | <code>number</code>               | Base to use for log scale           |

<a name="createQuantileScale"></a>

## createQuantileScale(dataset, range) ⇒ <code>function</code>

Returns a quantile scale based on dataset

**Kind**: global function  
**Returns**: <code>function</code> - The scale function

| Param   | Type                              | Description                         |
| ------- | --------------------------------- | ----------------------------------- |
| dataset | <code>Array.&lt;number&gt;</code> | Full dataset to take into account   |
| range   | [<code>Range</code>](#Range)      | Desired resulting values of scaling |

<a name="createQuantizeScale"></a>

## createQuantizeScale(domain, range) ⇒ <code>function</code>

Returns a quantized scale based on dataset extent

**Kind**: global function  
**Returns**: <code>function</code> - The scale function

| Param  | Type                              | Description                         |
| ------ | --------------------------------- | ----------------------------------- |
| domain | <code>Array.&lt;number&gt;</code> | [min, max]                          |
| range  | [<code>Range</code>](#Range)      | Desired resulting values of scaling |

<a name="createOrdinalScale"></a>

## createOrdinalScale(domain, range) ⇒ <code>function</code>

Returns an ordinal scale
Discrete input and discrete output

**Kind**: global function  
**Returns**: <code>function</code> - The scale function

| Param  | Type                              | Description                             |
| ------ | --------------------------------- | --------------------------------------- |
| domain | <code>Array.&lt;string&gt;</code> | Discrete list of values ['A', 'B', 'C'] |
| range  | [<code>Range</code>](#Range)      | Desired resulting values of scaling     |

<a name="Range"></a>

## Range : <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;number&gt;</code>

**Kind**: global typedef

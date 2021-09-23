## Install

```
$ npm install set-sequence
```

## Usage
``
const finalSeq = setsequence(arrayOfSequenceRequired, arrayOfSequenceYouReceive, objectKeyName);

Response : array of objects in the required order.
```

## Variable description
```
arrayOfSequenceRequired : Requires an array of objects with a key and a value that will be used for comparison.
arrayOfSequenceYouReceive : Add the array of objects to this variable that you wish to set to an order.
```

## Example
``
const arrayOfSequenceRequired: any[] = [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 5 }, { num: 6 }, { num: 7 }];

const arrayOfSequenceYouReceive: any[] = [{ num: 4, keyOne: value, keyTwo: value }, { num: 2, keyOne: value, keyTwo: value }, { num: 3, keyOne: value, keyTwo: value }, { num: 1, keyOne: value, keyTwo: value }, { num: 7, keyOne: value, keyTwo: value }, { num: 6, keyOne: value, keyTwo: value }, { num: 5, keyOne: value, keyTwo: value }];

let objectKeyName = 'num';

const finalSeq = setsequence(arrayOfSequenceRequired, arrayOfSequenceYouReceive, objectKeyName);

result : [{ num: 1, keyOne: value, keyTwo: value }, { num: 2, keyOne: value, keyTwo: value }, { num: 3, keyOne: value, keyTwo: value }, { num: 4, keyOne: value, keyTwo: value }, { num: 5, keyOne: value, keyTwo: value }, { num: 6, keyOne: value, keyTwo: value } { num: 7, keyOne: value, keyTwo: value }]

```
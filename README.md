# dct2

[Discrete Cosine Transform](https://en.wikipedia.org/wiki/Discrete_cosine_transform) for 2d signal，It has not any dependencies

It is UMD module. It means it capable of working in AMD, CommonJS-like, nodejs, browrser environments. For more information go to [UMD](https://github.com/umdjs/umd).



# usage

```js
npm install dct2 -S

import { DCT, IDCT } from 'dct2'

```

#  example

```js
import { DCT, IDCT } from 'dct2'

const signal = [
  [340, 340, 340, 340],
  [340, 340, 340, 340],
  [340, 340, 340, 340],
  [340, 340, 340, 340],
]

const data = DCT(signal);
console.log(data)
/**
*[[1360,5.684341886080802e-14,-1.1368683772161603e-13,-1.7053025658242404e-13],
* [5.684341886080802e-14,0,0,-6.310887241768095e-30],
* [-1.1368683772161603e-13,-3.1554436208840472e-30,6.310887241768095e-30,1.262177448353619e-29],
* [-1.7053025658242404e-13,-7.888609052210118e-30,1.5777218104420236e-29,3.155443620884047e-29]]
**/

const originSignal = IDCT(data);
console.log(originSignal);
/**
*[[339.9999999999999,340,340,339.99999999999994],
* [340,340.00000000000017,340.00000000000006,340.00000000000006],
* [339.99999999999994,340.00000000000006,340,340],
* [339.99999999999994,340,340,340]]
**/
```

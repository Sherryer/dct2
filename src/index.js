/**
 * 2D Discrete Cosine Transform
 **/

const Hash = {};

const getCoff = (index, length) => {
  if (!Hash[length]) {
    let coff = [];
    coff[0] = 1 / Math.sqrt(length);
    for (let i = 1; i < length; i++){
      coff[i] = Math.sqrt(2) / Math.sqrt(length);
    }
    Hash[length] = coff;
  }
  return Hash[length][index];
};

const DCT = (signal) => {
  const L = signal.length;
  let tmp = Array(L * L).fill(0);
  let res = Array(L).fill('').map(() => []);
  for (let i = 0; i < L; i++){
    for (let j = 0; j < L; j++){
      for (let x = 0; x < L; x++){
        tmp[i * L + j] += getCoff(j, L) * signal[i][x] * Math.cos((2 * x + 1) * Math.PI * j / 2 / L);
      }
    }
  }
  for (let i = 0; i < L; i++){
    for (let j = 0; j < L; j++){
      for (let x = 0; x < L; x++){
        res[i][j] = (res[i][j] || 0) + getCoff(i, L) * tmp[x * L + j] * Math.cos((2 * x + 1) * Math.PI * i / 2 / L)
      }
    }
  }
  return res
};

const IDCT = (signal) => {
  const L = signal.length;
  let tmp = Array(L * L).fill(0);
  let res = Array(L).fill('').map(() => []);
  for (let i = 0; i < L; i++){
    for (let j = 0; j < L; j++){
      for (let x = 0; x < L; x++){
        tmp[i*L + j] += getCoff(x, L) * signal[i][x] * Math.cos((2 * j + 1) * x * Math.PI / 2 / L);
      }
    }
  }
  for (let i = 0; i < L; i++){
    for (let j = 0; j < L; j++){
      for (let x = 0; x < L; x++){
        res[i][j] = (res[i][j] || 0) + getCoff(x, L) * tmp[x*L + j] * Math.cos((2 * i + 1) * x * Math.PI / 2 / L)
      }
    }
  }
  return res;
};

export default {
  DCT,
  IDCT,
}

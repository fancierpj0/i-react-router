let pathToRegexp = require('path-to-regexp');
let str = '/user/detail';
let keys = []; //会被:key及其值以键值对的形式填充
let reg = pathToRegexp(str,keys,{end:false});
// sensitive 大小写敏感 {sensitive:false}默认
// strict /a/和/a {strict:true}默认
// {end:false}非严格模式，只要开头匹配进行

console.log(reg)
console.log(reg.test('/user/detail/1')); //true

// keys = keys.map(key=>key.name);
// let url = '/user/detail/1/zfpx';
// console.log(keys);
// [ { name: 'id',
//   prefix: '/',
//   delimiter: '/',
//   optional: false,
//   repeat: false,
//   partial: false,
//   pattern: '[^\\/]+?' },
//   { name: 'name',
//     prefix: '/',
//     delimiter: '/',
//     optional: false,
//     repeat: false,
//     partial: false,
//     pattern: '[^\\/]+?' } ]

// let result = url.match(reg);
// console.log(result);
// [ '/user/detail/1/zfpx',
//   '1',
//   'zfpx',
//   index: 0,
//   input: '/user/detail/1/zfpx' ]


// let [trash,...values] = url.match(reg);
// let params = keys.reduce((memo,key,idx)=>{
//   memo[key] = values[idx];
//   return memo;
// },{});
// console.log(params);



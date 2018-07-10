//regexper.com
let pathToRegexp = require('path-to-regexp');
let keys = [];

//end = false
//end = true 必须结束
let reg1 = pathToRegexp('/user', keys, {end: true});

//-> /^\/user(?:\/)?$/i
console.log(reg1);

//end:true 表示完全匹配，/user/1就不会被匹配上
//但需要注意的是/user/ 是可以的
console.log(reg1.test('/user')); //true
console.log(reg1.test('/user/1')); //false

let reg2 = pathToRegexp('/user/:id/:name', keys, {end: true});

console.log('/user/1/ahhh'.match(reg2));
// [ '/user/1/ahhh', '1', 'ahhh', index: 0, input: '/user/1/ahhh' ]

console.log(keys);

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

let names = keys.map(key => key.name);
let result = '/user/1/ahhh'.match(reg2);
let params = names.reduce((memo, name, i) => {
  // [ '/user/1/ahhh', '1', 'ahhh', index: 0, input: '/user/1/ahhh' ]
  //索引为0的位置为整体匹配中的，故要+1
  return (memo[name] = result[i + 1], memo);
}, {});

console.log('params:', params);
//{ id: '1', name: 'ahhh' }

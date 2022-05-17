const contents = `16x 15/(5,10), (5,7),(5,6),(15, 10),(14  ,9),(13    , 13),(2,5),   (4,5), (5,2)`;
const invalidCheck = contents.match(
//   /(?:\d+\s?x\s?\d+){1}\s?\/{1}(?:\s?\(\d+,\s?\d+\),)*(?:\s?\(\d+,\s?\d+\){1})/g
     /(?:\d+\s*x\s*\d+\s*){1}\/{1}(?:\s*\(\d+\s*,\s*\d+\),{1})*\s*(?:\(\d+,\s*\d+\){1})/g
);
console.log(invalidCheck);
// console.log(contents.match(/\d+/g))

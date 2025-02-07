//ANCHOR:syntax
// test.meta(
    qase.parameters({ param1: 'value1', param2: 'value2', param3:'value3' }).create(); 
// )
// ('simple test with Single & Group parameters', async () => {
//     //test logic here
// });

// test.meta(
    qase.groupParameters({param1:'value1', param2:'value2'}).create();
// )
// ('simple test with group parameter', async () => {
//   //test logic here
// });
//ANCHOR_END:syntax
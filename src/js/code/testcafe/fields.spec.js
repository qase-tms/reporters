//ANCHOR: syntax
// const q = qase.fields({
//      'severity':'major', 
//      'priority':'high', 
//      'description':'This is a test case with qase.fields'
// }).create();
// test.meta(q)('Test Case with fields set using qase.fields', async () => {
//   //test logic here..
// });

// test.meta(
  qase.fields({
    'description': 'Test description',
    'preconditions': 'Some precondition',
    'postconditions':'Some postcondition',
    'layer':'unit'
  }).create()
// )('Test with fields failed', async() => {
//    //test logic here..
//   });
//ANCHOR_END: syntax
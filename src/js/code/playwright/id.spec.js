import { test, expect } from '@playwright/test';
import { qase } from 'playwright-qase-reporter';

/* Delete line, to uncomment 
// Please, change the Id from `1` to any case Id present in your project before uncommenting the test.
 

test(qase(1, "Defining Id: Format 1"), () => {
  expect(true).toBe(true);
});


// Please, change the Id from `2` to any case Id present in your project before uncommenting the test.
 

test("Defining Id: Format 2", () => {
  qase.id(2);
  expect(true).toBe(true);
});


// Please, change the Id from `2` to any case Id present in your project before uncommenting the test.


test('Defining Id: Format 3',
  {
    annotation: { type: 'QaseID', description: '3' },
  },
  async () => {
    expect(true).toBe(true);
  });

*/// Delete line, to uncomment 



/* 
    The three tests showcase the different formats for defining case ids:
  
  1. Inline with the test function: [Recommended]

      test(qase(<id>, 'Test Title'), () => {
        ...
      }); 

     This method is recommended as it immediately associates the test case ID with the test.
     

  2. Inside the test body:

      test('Test Title', () => {
        qase.id(<id>);
      }); 

     This method allows setting the case ID later inside the test body and is more elegant.


  3. In the test's annotations

      test('Defining Id: Format 3',
        {
          annotation: { type: 'QaseID', description: '<id>' },
        },
          async () => {
            expect(true).toBe(true);
       });

     Defines the case ID and metadata upfront, linking it directly to the test for better context management.
*/

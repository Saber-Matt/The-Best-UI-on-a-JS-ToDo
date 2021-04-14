// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { createUser } from '../local-storage-utils.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    const username = 'angel';
    const password = '1234';
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        username: 'angel',
        password: '1234',
        todos: []
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createUser(username, password);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

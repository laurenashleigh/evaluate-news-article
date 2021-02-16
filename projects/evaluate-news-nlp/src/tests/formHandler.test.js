import {handleSubmit} from '../client/js/formHandler';
// global.fetch = require('jest-fetch-mock');

// beforeEach(() => {
//     fetch.resetMocks();
//   });

describe('Test for handleSubmit function', () => {
    test('handleSubmit function is defined' , () => {
        expect(handleSubmit).toBeDefined();
    })
    // test('URL request is successful', async (done) => {

    // })
})
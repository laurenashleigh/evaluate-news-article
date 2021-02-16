import {urlChecker} from '../client/js/urlChecker';

describe('Test for urlChecker function', () => {
    const validUrl = 'https://google.com'
    const invalidUrl = 'k5iuhabc'
    test('it should return true if url is valid', () => {
        const response = urlChecker(validUrl);
        expect(response).toBeTruthy();
    })
    test('it should return false if url is invalid', () => {
        const res = urlChecker(invalidUrl);
        expect(res).toBeFalsy();
    })
})
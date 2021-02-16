import {handleSubmit} from '../client/js/formHandler';
import fetch from 'jest-fetch-mock'
const mockAPIResponse = require('../server/mockAPI')

beforeAll(() => {
    require("whatwg-fetch");
});

describe('Test for handleSubmit function', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })
    test('handleSubmit function is defined' , () => {
        expect(handleSubmit).toBeDefined();
    })
    test('URL request is successful', () => {
        const expected = {
            day: 'Wednesday',
            month: 'February',
            year: '2021'
        }
        expect(mockAPIResponse).toMatchObject(expected)
    })
    test('it should call the API correctly', () => {
        fetch.mockResponseOnce(JSON.stringify({
            confidence: "84",
            score_tag: "NEU",
            subjectivity: "SUBJECTIVE",
            irony: "NONIRONIC"
        }))
        handleSubmit("https://www.bbc.co.uk/news/uk-56065986").then(res => {
            expect(res.data).toEqual({
                confidence: "84",
                score_tag: "NEU",
                subjectivity: "SUBJECTIVE",
                irony: "NONIRONIC"
            })
        })
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual("https://www.bbc.co.uk/news/uk-56065986")
    })
})
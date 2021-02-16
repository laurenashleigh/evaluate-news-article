import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()
import {handleSubmit} from '../client/js/formHandler';
import fetchMock from 'jest-fetch-mock'
const mockAPIResponse = require('../server/mockAPI')

//Allows use of fetch in the Node environment
beforeAll(() => {
    require("whatwg-fetch");
});

//Jest tests for handleSubmit function
describe('Test for handleSubmit function', () => {
    beforeEach(() => {
        fetchMock.resetMocks()
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
        fetchMock.mockResponseOnce(JSON.stringify({
            confidence: "84",
            score_tag: "NEU",
            subjectivity: "SUBJECTIVE",
            irony: "NONIRONIC"
        }))
        fetchMock("https://www.bbc.co.uk/news/uk-56065986")
        .then((res) => res.json())
        .then((data) => {
            expect(data).toEqual({
                confidence: "84",
                score_tag: "NEU",
                subjectivity: "SUBJECTIVE",
                irony: "NONIRONIC"
            })
        })
        expect(fetchMock.mock.calls.length).toEqual(1)
        expect(fetchMock.mock.calls[0][0]).toEqual("https://www.bbc.co.uk/news/uk-56065986")
    })
})
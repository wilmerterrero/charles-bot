import helloWorld from './';

test('print hello user', () => {
    expect(helloWorld("Wilmer")).toBe("Hi Wilmer!");
})
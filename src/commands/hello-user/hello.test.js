import helloUser from './hello';

test('print hello user', () => {
    expect(helloUser("Wilmer")).toBe("Hi Wilmer!");
})
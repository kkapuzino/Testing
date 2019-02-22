const osamaara = require('./osamaara');

test('syötteet normaaleja numeroita', () => {
    expect(osamaara(4, 2)).toBe(2);
});

test('syötteet eivät jakaudu tasan', () => {
    expect(osamaara(5, 2)).toBe(2.5);
});

test('syötteistä toinen on nolla', () => {
    expect(() => {
        osamaara(0, 10)
    }).toThrow('nollalla ei voi jakaa');
});

test('annetaan vain yksi parametri', () => {
    expect(() => {
        osamaara(4)
    }).toThrow('ei parametreja');
});
test('parametrit puuttuvat, heitetään poikkeus', () => {
    expect(() => {
        osamaara()
    }).toThrow('ei parametreja');
})
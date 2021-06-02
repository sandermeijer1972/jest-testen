const functions = require('./functions.js');

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('checkValue should be falsy when argument is undefined', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

test('user should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({firstName: "Brad", lastName: "Traversy"});
});

test('should be greater or equal to 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeGreaterThanOrEqual(1600);
});

test('there is no I in team', () => {
    expect("team").not.toMatch(/I/);
});

test('Admin should be in usernames', () => {
    usernames = ['John', 'Karin', 'Admin'];
    expect(usernames).toContain('Admin');
});



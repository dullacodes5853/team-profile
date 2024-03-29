const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('hamza', 90, 'hamza.elisaw@gmail', 'hamzajohn03');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('hamza', 90, 'hamza.elisaw@gmail', 'hamzajohn03');

    expect(engineer.getgithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const engineer = new Engineer('hamza', 90, 'hamza.elisaw@gmail', 'hamzajohn03');

    expect(engineer.getrole()).toEqual("Engineer");
});
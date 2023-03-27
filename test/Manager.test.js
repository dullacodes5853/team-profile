const Manager = require('../library/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('hamza', 90, 'hamza.elisaw@gmail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('hamza', 90, 'hamza.elisaw@gmail.com');

    expect(manager.getrole()).toEqual("Manager");
}); 
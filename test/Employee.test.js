const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('hamza', 90, 'hamza.elisaw@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('hamza', 90, 'hamza.elisaw@gmail.com');

    expect(employee.getname()).toEqual(expect.any(String));
});

test('gets employee ID', () => {
    const employee = new Employee('hamza', 90, 'hamza.elisaw@gmail.com');

    expect(employee.getid()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('hamza', 90, 'hamza.elisaw@gmail.com');

    expect(employee.getemail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => {
    const employee = new Employee('hamza', 90, 'hamza.elisaw@gmail.com');

    expect(employee.getrole()).toEqual("Employee");
}); 


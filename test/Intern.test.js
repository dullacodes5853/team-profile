const Intern = require('../library/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('hamza', 90, 'hamza.elisaw@gmail', 'SFSU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('hamza', 90, 'hamza.elisaw@gmail', 'SFSU');
    
    expect(intern.getschool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('hamza', 90, 'hamza.elisaw@gmail.com', 'SFSU');

    expect(intern.getrole()).toEqual("Intern");
}); 



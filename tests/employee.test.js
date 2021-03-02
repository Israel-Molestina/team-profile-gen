const Employee = require('../lib/Employee');

describe("Employee name", () => {
    it("adds the name user inputs to variable name", () => {
        const employee = new Employee("Izy");

        expect(employee.name).toEqual("Izy")
    });
});
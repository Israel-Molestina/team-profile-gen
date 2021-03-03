const Employee = require('../lib/Employee');

describe("Employee name", () => {
    it("adds the name user inputs to variable name", () => {

        expect(new Employee().getName("Izy")).toEqual("Izy")
    });
});
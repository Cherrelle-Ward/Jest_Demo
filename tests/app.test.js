const app = require ("./app.js");
const it = require ("./app.js");



describe("should add two nums together"), ()=>{
    test("Should equal 5 when passed 2 and 3", ()=>{
        expect(app.add(2,3)).toBe(5);
    });
    test("Should equal 100 when adding 50 and 50", () =>{
        expect(app.add(50,50)).toBe(100)
    });
};



it("Should include the name Dave", () => {
    expect(app.myArray).toContain("Dave")
})


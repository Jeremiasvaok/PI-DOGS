const { Temperament, Dog, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe("Dog model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Dog.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Dog.create({ name: "Pug", weight: "3", height: "2" });
      });
      it("name should be a string", () => {
        expect(typeof Dog.name).equal("string");
      });
    });
  });
  describe("Validators2", () => {
    beforeEach(() => Temperament.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Temperament.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Temperament.create({ name: "happy" });
      });
      it("name should be a string", () => {
        expect(typeof Temperament.name).equal("string");
      });
    });
  });
});
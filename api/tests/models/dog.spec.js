const { Temperament, Dog, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Dog.create({ name: 'Pug' });
      });
      it('should work when its a valid height_min', () =>{
        Dog.create({height_min: '2'})
      })
      it('should work when its a valid height_max', ()=>{
        Dog.create({height_max: '6'})
      });
      it("should work when its a valid life_time_min:",()=>{
        Dog.create({life_time_min:'4'})
      });
      it("should work when its a valid life_time_max::",()=>{
        Dog.create({life_time_max:'7'})
      });
    });
  });
});



describe('Temperament model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Temperament.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Temperament.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Temperament.create({ name: 'Active' });
      });
      it('should work when its a valid name', () => {
        Temperament.create({ name: 'Agresive' });
      });
   });
 });
});
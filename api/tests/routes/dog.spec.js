/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Pug',
  height_min: '4',
  height_max: '7',
  weight_min: '5',
  weight_max: '7',
  life_time_min: '4',
  life_time_max: '6',
};

describe('GetDogs routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true }).then(() => Dog.create(dog)));
  describe('GET /dogs', () => {
    it('should response with 200', () =>{
      agent.get('/dogs').expect(function(res){
        expect(res.status).equal(200)
      })
  });
});
  describe("GET /dogs?name=", ()=>{
    it("it response with 200 if a dog with that name is found",()=>{
      agent.get("/dogs?name=Pug").expect(function(res){
        expect(res.status).equal(200)
      });
    });
    it(" it response with 404 if no dog with that name is found", ()=>{
      agent.get("/dogs?name=NADA").expect(function(res){
        expect(res.status).equal(404)
      });
    });
  });
});

  describe('GET /dogs/:id', () =>{
    it('it response with 200 if a dog with id 3 is found ', ()=>{
      agent.get("/dogs/3").expect(function(res){
        expect(res.status).equal(200);
     });
    });
    it('it response with 200 if a dog with id 55 is found', ()=>{
      agent.get("/dogs/55").expect(function(res){
        expect(res.status).equal(200);
     });
   });
  describe('GET /temperaments', () =>{
    it("responda con 200 si hay temperamentos", ()=>{
      agent.get("/temperaments").expect(function(res){
        expect(res.status).equal(200);
      })
    });
  });
});

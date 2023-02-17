const chai = require("supertest");
const expect = require("chai").expect;


const baseUrl = 'https://kasir-api.belajarqa.com'

describe("Test user registrasion", function(){

    it("Success registrasion", function(done){
        .post("/registration")
        .set('Content-Type', 'Application/json')
        .send({
            email: 'sample@ex.com',
            password: '123adsfadf@'
        })

        .end(function( eror, response){
            expect(response.status).to.equals(200)
            expect(response.body.data[0]).to.have.property('email')
            done();
        })
    })
})
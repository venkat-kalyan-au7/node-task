var supertest = require("supertest");
var random = Math.random();

var server = supertest.agent("http://localhost:5000")


describe("API unit test.",function(){
    it("should return all todos",function(done){
        // Test to get all todos
        server
            .get("/api/viewtodos")
            .expect("Content-type",/json/)
            .end(function(err,res){
                done();
            });

    })

    it("should return inserted todo",function(done){
        // Test Insert todo
        server
            .post("/api/addtodo")
            .send({title : "This is title"+random, description : "This is description", targetDate : "2020-23-12",status:'todo',image:'dowload.png'})
            .expect("Content-type",/json/)
            .end(function(err,res){
                done();
            });

    });

    it("should return single todo",function(done){
        // Test get todo by id
        
            server
                .get("/api/tododetails/5fb751a60dbc390c8cf096c2")
                .expect("Content-type",/json/)
                .end(function(err,res){
                    done();
                });
         
    });

    it("should return updated todo",function(done){
        // Test update todo
        server
            .put("/updatetodo/5fb756e46135ae178899168e")
            .send({title : "This is title"+random, description : "This is description", targetDate : "2020-23-12",status:'todo',image:'dowload.png'})
            .expect("Content-type",/json/)
            .end(function(err,res){
                done();
            });

    });
})

const sequelize = require("../../src/db/models/index").sequelize;
const Post = require("../../src/db/models").Post;

describe("Post", () => {

    beforeEach((done) => {
   
        this.post;
        sequelize.sync({force: true}).then((res) => {

        Post.create({
            title: "Expeditions to Alpha Centauri",
            description: "A compilation of reports from recent visits to the star system."
        })        
        .then((post) => {
        this.post = post;
        done();
        });
        })
        .catch((err) => {
            console.log(err);
            done();
        }); 

    });



    describe("#create()", () => {

        it("should create a post object with a title, body, and assigned topic", (done) => {

          Post.create({
            title: "Pros of Cryosleep during the long journey",
            description: "1. Not having to answer the 'are we there yet?' question."
          })
          .then((post) => {
   
  
            expect(post.title).toBe("Pros of Cryosleep during the long journey");
            expect(post.description).toBe("1. Not having to answer the 'are we there yet?' question.");
            done();
   
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        });
   
    });
});
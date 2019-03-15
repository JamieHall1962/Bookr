const request = require("supertest");
const db = require("../data/dbConfig");
const users = require("../routes/users");
const server = require("../server");

afterEach(async () => {
  await db("users").truncate();
});
describe("Users Route", () => {
  it("Should fail to send users without a token", () => {
    request(server)
      .get("/api/users")
      .expect(401);
  });

  it("Should return JSON", () => {
    request(server)
      .get("/api/users")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);
  });

  it("should add a new user", async () => {
    request(server)
      .post("/api/users/register")
      .send({ name: "Austen", password: "lambda" })
      .expect(201);
  });
})
 
const request = require("supertest");
const db = require("../data/dbConfig");
const reviews = require("../routes/reviews");
const server = require("../server");

afterEach(async () => {
  await db("users").truncate();
});

describe("Reviews Route", () => {


  it("should return an array of reviews", async () => {
    let response = await request(server).get(`/api/reviews/`);
    expect(response.status).toBe(200);
  });

});
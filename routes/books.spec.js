const request = require("supertest");
const db = require("../data/dbConfig");
const books = require("../routes/books");
const server = require("../server");

afterEach(async () => {
  await db("users").truncate();
});

describe("Books Route", () => {


  it("should return an array of books", async () => {
    let response = await request(server).get(`/api/books/`);
    expect(response.status).toBe(200);
  });

});
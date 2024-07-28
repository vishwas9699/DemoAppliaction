let chai = require("chai");
let chaiHttp = require("chai-http");

let expect = chai.expect;
chai.use(chaiHttp);

describe("Product API", () => {
  before(() => {
    console.log("Testing Initiated");
  });

  after(() => {
    console.log("Testing End");
  });

  beforeEach(() => {
    console.log("Starting Individual Test");
  });

  afterEach(() => {
    console.log("Completed Individual Test");
  });

  it("Get All Products", () => {
    return chai
      .request("localhost:8000/productapi")
      .get("/products")
      .then((res) => {
        expect(res).to.have.status(200);
      })
      .catch((err) => {
        throw err;
      });
  });

  it("Create Product", () => {
    return chai
      .request("localhost:8000/productapi")
      .post("/products")
      .send({
        name: "Apple Iphone 16",
        price: "12000",
      })
      .then((res) => {
        expect(res).to.have.status(200);
      })
      .catch((err) => {
        throw err;
      });
  });

  it("Get Single Product", () => {
    return chai
      .request("localhost:8000/productapi")
      .get("/products/66a3b7c1c2614d48306212ff")
      .then((res) => {
        expect(res).to.have.status(200);
      })
      .catch((err) => {
        throw err;
      });
  });

  it("Update Product", () => {
    return chai
      .request("localhost:8000/productapi")
      .put("/products/66a3b7c1c2614d48306212ff")
      .send({
        name: "Apple Iphone 16",
        price: "18000",
      })
      .then((res) => {
        expect(res).to.have.status(200);
      })
      .catch((err) => {
        throw err;
      });
  });

  it("Delete Single Product", () => {
    return chai
      .request("localhost:8000/productapi")
      .delete("/product/66a4b7272b67e54f88555f34")
      .then((res) => {
        expect(res).to.have.status(200);
      })
      .catch((err) => {
        throw err;
      });
  });
});

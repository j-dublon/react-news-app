const { expect } = require("chai");
const { modifyDate } = require("../utils/utils");

describe("modifyDate", () => {
  it("should return an empty string when passed an empty string", () => {
    expect(modifyDate("")).to.equal("");
  });
  it("should return a viable date string when passed an extended format JS date", () => {
    const JSDate = "2018-03-14T10:27:39.137Z";
    const JSDate2 = "2017-11-10T16:41:01.780Z";
    const JSDate3 = "2017-07-17T11:34:54.879Z";
    expect(modifyDate(JSDate)).to.equal("14/03/2018");
    expect(modifyDate(JSDate2)).to.equal("10/11/2017");
    expect(modifyDate(JSDate3)).to.equal("17/07/2017");
  });
});

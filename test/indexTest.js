require("./helpers.js");

describe("index.html", () => {
  describe("after index.js is processed", () => {
    it("no longer has DOM node 'main#main'", () => {
      expect(
        document.querySelector("main#main"),
        "Make sure you remove the <main> with id 'main'"
      ).to.not.exist;
    });
  });
});

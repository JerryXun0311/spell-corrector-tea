import correctSpelling from "../main";

describe("Spelling Correction", () => {
  test("correctly spelled word returns the same word", async () => {
    await expect(correctSpelling("correct")).resolves.toBe("correct");
  });

  test("incorrectly spelled word returns correction", async () => {
    await expect(correctSpelling("incorrct")).resolves.toBe("incorrect");
  });
});

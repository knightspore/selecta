import { URLS } from "./constants";

describe("URLS factory", () => {
  it("token", () => {
    const want = "https://accounts.spotify.com/api/token";
    const got = URLS.Token;
    expect(got).toEqual(want);
  });
  it("base url", () => {
    const want = "https://api.spotify.com/v1";
    const got = URLS.Base;
    expect(got).toEqual(want);
  });
  describe("artists", () => {
    it("single id", () => {
      const want = "https://api.spotify.com/v1/artists?ids=test";
      const got = URLS.Artists(["test"]);
      expect(got).toEqual(want);
    });
    it("multiple ids", () => {
      const want = "https://api.spotify.com/v1/artists?ids=test%2Ctest2";
      const got = URLS.Artists(["test", "test2"]);
      expect(got).toEqual(want);
    });
  });
  it("users", () => {});
});

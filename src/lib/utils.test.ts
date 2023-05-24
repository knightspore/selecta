import {
  SessionData,
  UserToken,
  createTempoRange,
  formatPercentage,
  getSessionToken,
  isExpired,
  msToMinSec,
} from "./utils";

describe("formatPercentage", () => {
  it("valid percentage", () => {
    const want = "20%";
    const got = formatPercentage(0.2);
    expect(got).toEqual(want);
  });
  it("invalid percentage", () => {
    const want = "0%";
    const got = formatPercentage(undefined);
    expect(got).toEqual(want);
  });
});

describe("msToMinSec", () => {
  it("handles valid ms", () => {
    const want = "3:30";
    const got = msToMinSec(60 * 3.5 * 1000);
    expect(got).toEqual(want);
  });
  it("invalid ms", () => {
    const want = "0:00";
    const got = msToMinSec(undefined);
    expect(got).toEqual(want);
  });
});

describe("isExpired", () => {
  it("valid token", () => {
    const futureDate = new Date();
    futureDate.setMinutes(futureDate.getMinutes() + 60);
    const want = false;
    const got = isExpired(futureDate.valueOf());
    expect(got).toEqual(want);
  });
  it("expired token", () => {
    const pastDate = new Date();
    pastDate.setMinutes(pastDate.getMinutes() - 60);
    const want = true;
    const got = isExpired(pastDate.valueOf());
    expect(got).toEqual(want);
  });
});

describe("getSessionToken", () => {
  it("valid session", () => {
    const session: SessionData = {
      user: {
        name: "testuser",
        email: "test@test.co",
        image: null,
      },
      token: {
        refreshToken: "refresh_token",
        accessToken: "access_token",
        expiresAt: "01/01/2020",
      },
      expires: "01/01/2020",
    };
    const want = session.token;
    const got = getSessionToken(session);
    expect(got).toStrictEqual(want);
  });
  it("no session", () => {
    const session = null;
    const want = {} as UserToken;
    const got = getSessionToken(session);
    expect(got).toStrictEqual(want);
  });
});

describe("createTempoRange", () => {
  it("valid tempo", () => {
    const want = [113, 123, 133];
    const tempo = 123;
    const got = createTempoRange(tempo);
    expect(got).toStrictEqual(want);
  });
  it("undefined tempo", () => {
    const want = [110, 120, 130];
    const tempo = undefined;
    const got = createTempoRange(tempo);
    expect(got).toStrictEqual(want);
  });
});

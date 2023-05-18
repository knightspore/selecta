import { formatPercentage, isExpired, msToMinSec } from "./utils";

describe("formatPercentage", () => {
  it("formats valid percentage", () => {
    const want = "20%";
    const got = formatPercentage(0.2);
    expect(got).toEqual(want);
  });
  it("formats invalid percentage", () => {
    const want = "0%";
    const got = formatPercentage(undefined);
    expect(got).toEqual(want);
  });
});

describe("msToMinSec", () => {
  it("formats valid ms", () => {
    const want = "3:30";
    const got = msToMinSec(60 * 3.5 * 1000);
    expect(got).toEqual(want);
  });
  it("formats invalid percentage", () => {
    const want = "0:00";
    const got = msToMinSec(undefined);
    expect(got).toEqual(want);
  });
});

describe("isExpired", () => {
  it("detects valid token", () => {
    const futureDate = new Date();
    futureDate.setMinutes(futureDate.getMinutes() + 60);
    const want = false;
    const got = isExpired(futureDate.valueOf());
    expect(got).toEqual(want);
  });
  it("detects expired token", () => {
    const pastDate = new Date();
    pastDate.setMinutes(pastDate.getMinutes() - 60);
    const want = true;
    const got = isExpired(pastDate.valueOf());
    expect(got).toEqual(want);
  });
});

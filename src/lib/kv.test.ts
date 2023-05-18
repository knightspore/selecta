import { getAura, saveAura, SaveAuraProps } from "@/lib/kv";

const testAuraData: SaveAuraProps["aura"] = {
  danceability: 0.8,
  energy: 0.6,
  valence: 0.5,
  instrumentalness: 0.7,
  speechiness: 0.4,
};

const testUser = "testuser@testuser.co";

describe("saveAura", () => {
  it("saves data to the kv store", async () => {
    saveAura({ aura: testAuraData, email: testUser }).then((ok) => {
      expect(ok).toBeTruthy();
    });
  });
});

describe("getAura", () => {
  it("gets correct data from the kv store", async () => {
    getAura({ email: testUser }).then((aura) => {
      expect(aura).toStrictEqual(testAuraData);
    });
  });
});

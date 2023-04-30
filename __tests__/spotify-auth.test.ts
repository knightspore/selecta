import {getAccessToken} from "@/lib/spotify/auth"

describe("getTokenResponse", () => {

  const response = getAccessToken()

  console.log(response)

  expect(typeof response).toEqual("string")

})

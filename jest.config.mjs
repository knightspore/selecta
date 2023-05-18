import nextJest from "next/jest.js"

const createJestConfig = nextJest({
  dir: "./"
})

// Custom Jest Config
/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-node',
}

export default createJestConfig(config)

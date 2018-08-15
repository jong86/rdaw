module.exports = {
  verbose: true,
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  globals: {
    NODE_ENV: "test"
  },
  moduleFileExtensions: [
    "js",
    "jsx"
  ],
  moduleDirectories: [
    "node_modules",
    "src/frontend",
    "src/shared"
  ],
  globals: {
    "window": true,
  },
  setupTestFrameworkScriptFile: "<rootDir>/setupTests.js",
}
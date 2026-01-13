module.exports = {
  testMatch: ["**/?(*.)+(test).js"],
  reporters: [
    "default",
    ["jest-allure", { outputDirectory: "allure-results" }]
  ]
};

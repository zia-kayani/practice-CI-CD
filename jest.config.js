module.exports = {
  reporters: [
    "default",
    ["jest-allure", { outputDirectory: "allure-results" }]
  ]
};

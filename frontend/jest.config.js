
  module.exports = {
    testEnvironment: "jsdom",
    testRegex: "(/__tests__/.*|(\.|/)(test|spec))\.(jsx?|tsx?)$",
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    transform: {
      "^.+\.(jsx?|tsx?)$": "babel-jest",
    },
    moduleNameMapper: {
      "\.(scss|css)$": "identity-obj-proxy",
      "\.(jpg|jpeg|png|gif|svg)$": "identity-obj-proxy",
       
    },
    transformIgnorePatterns: ["/node_modules/"],
    collectCoverage: true,
    coverageReporters: ["clover", "json", "lcov", "text", "html", "json-summary"],
    coverageDirectory: "<rootDir>/Report/coverage_report",
    reporters: [
      "default",
      [
        "<rootDir>/node_modules/jest-html-reporter",
        {
          pageTitle: "Test Report",
          outputPath: "Report/test_report/index.html",
        },
      ],
      [
        "@tsdoc-test-reporter/jest",
        {
          outputFileType: "json",
          outputFileName: "Report/test_report/TestReport",
        },
      ],
      [
        "jest-stare",
        {
          resultDir: "Report/test_report/jest-stare",
          reportTitle: "jest-stare!",
          additionalResultsProcessors: ["jest-junit"],
          coverageLink: "<rootDir>/Report/coverage_report/index.html",
          jestStareConfigJson: "jest-stare.json",
          jestGlobalConfigJson: "globalStuff.json",
        },
      ],
    ],
  };
  
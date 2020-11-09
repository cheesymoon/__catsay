const chalk = require('chalk');

const args = process.argv.slice(2);
const angryIndex = args.indexOf('--angry');

const isAngry = angryIndex >= 0;
if (isAngry) {
  args.splice(angryIndex);
}
const words = args.join(' ');

const phrase = isAngry
  ? chalk.redBright.bold(words)
  : chalk.yellowBright(words)

const catSay = `
      ／＞　 フ
     |  _　_ |
   ／\` ミ＿xノ    ${phrase && `< ${phrase}`}
 /　　 　　 |
/　 ヽ　　 ﾉ
`;

console.log(chalk.white(catSay));

// https://www.conventionalcommits.org/en/v1.0.0/
// show some theory

// Commitizen
// Zen-like commit messages for internet citizens.

// Sem Ver
// 1 - major, 2 - minor, 3 - patch
// Major changes: Changes that break backward compatibility
// Minor changes: Backward compatible new features
// Patch changes: Backward compatible bug fixes

// install commit helper
// npm i --save-dev commitizen
// add to scripts in package.json
// "scripts": {
//   "commit": "cz"
// },

// seems like optional for new repositories
// make repository commitizen-friendly
// npm i --save-dev cz-conventional-changelog
// add to package.json
// "config": {
//   "commitizen": {
//     "path": "cz-conventional-changelog"
//   }
// }

// make first commit, push it to github
// show first commit on github
// show direct commit without any formatting and show it is possible to do so, so we need to lint it
// on  https://www.conventionalcommits.org/en/v1.0.0/ show commitlint tool

// npm install --save-dev @commitlint/{config-conventional,cli}
// add commitlint config
// "commitlint": {
//   "extends": [
//     "@commitlint/config-conventional"
//   ]
// },
// we also need husky
// npm install husky --save-dev
// add husky to the package.json
// "husky": {
//   "hooks": {
//     "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
//   }
// }
// try again to commit shit directly, see it rejects.


// semantic-release
// https://semantic-release.gitbook.io/semantic-release/
// Fully automated version management and package publishing
// semantic-release automates the whole package release workflow including: determining the next version number, 
// generating the release notes and publishing the package.
// This removes the immediate connection between human emotions and version numbers, strictly following the Semantic Versioning specification.
// semantic-release will decide for you do you need to deploy or not

// you can use it, but it asking a lot of questions
// npx semantic-release-cli setup
// but this suppose to get your n
// npm i --save-dev semantic-release

// "@semantic-release/release-notes-generator", // Generate release notes
// "@semantic-release/changelog", // Generate changelog
// "@semantic-release/npm", // publish packages to npm
// "@semantic-release/git", // publish commit release assets
// "@semantic-release/github" // publish GitHub release

// .github/workflows/release.yml

// Create github actions
// name: Release
// on:
//   push:
//     branches:
//       - "master"
// jobs:
//   build:
//     runs-on: ubuntu-latest
//      steps:
//         - uses: actions/checkout@v2
//          with:
//            persist-credentials: false
//      - uses: actions/setup-node@v1
//        with:
//          node-version: "12.x"
//      - run: npm install
//      - run: npm run test
//      - run: npm run semantic-release
//        env:
//          GITHUB_TOKEN: ${{ secrets.ACCESS_TOKEN }}
//          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}

// Add plugins list to the release
// "release": {
//   "plugins": [
//     "@semantic-release/commit-analyzer",
//     "@semantic-release/release-notes-generator",
//     "@semantic-release/changelog",
//     "@semantic-release/npm",
//     "@semantic-release/git",
//     "@semantic-release/github"
//   ]
// },

// Set package json version to 0.0.0 - we do not handle it


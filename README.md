# Groot - RN starter

## :wrench: Requirements

* Node 8+

* Yarn [(install here)](https://yarnpkg.com/en/docs/install)

* All React Native stuff for your platform see [official docs](https://facebook.github.io/react-native/docs/getting-started.html)

* (MacOS only) Xcode 9+

* (MacOS only) [CocoaPods](https://cocoapods.org)

## :arrow_up: How to setup

**Step 1:** run `yarn` **(never use `npm install` in this project)**

**Step 2:** (MacOS only) run `cd ios && pod install && cd ..`

**Step 3:** run app on Android `react-native run-android` or for iOS open file `ios/hoppycar.xcodeworkspace` (not `.xcodeproj`!!) in Xcode

**Step 3:** setup your IDE (see next)

## Setup your IDE or editor - Atom

If you are not using Atom as your editor consider it, or skip to end of this file where you can find universal guide.

#### Prettier

Go to Atom settings and install package `atom-prettier`. Then go to package settings and set these options:

* ESLint integration
* EditorConfig integration
* Format files on save
* Ignore files in `.eslintignore`
* Only format if Prettier is found in your project dependencies
* Only format if a Prettier config is found

Then restart Atom.

#### Flow

Best way how to get flow for Atom is enable IDE function. It will also add powerful autocomplete. How to do that?

* Disable `nuclide` if you are using it
* Go to Atom settings and install packges `atom-ide-ui` and `ide-flowtype`
* Go to `ide-flowtype` package settigns and enable **Use flow-bin from node_modules when available**

Then restart Atom.

#### ESLint

Use `linter-eslint` package with these options:

* Disable when no ESLint config is found
* Ignore fixable rules while typing

#### Other recommended packages

* `editorconfig`
* `sort-lines`, for sorting lines in translation files
* `language-babel`
* `highlight-selected`
* `autocomplete-paths`

For more tips and tricks check (wiki of Este)[https://github.com/este/este/wiki/Recommended-Atom.io-Settings]

## Testing and writing tests

We are using Jets for our tests. (Check docs)[https://facebook.github.io/jest/].

### How to run tests

You can run tests with `yarn run test` command. If you want run tests on files changes run `yarn run test:watch`. In watch mode it will run tests only for changed files (it using git for detected changes files). You can hit `a` on your keyboard to run all tests.

### Where to place test files

Test files must be placed in subfolder `__tests__` for every folder or it Jest won't be able to detect it. For example `src/components/__tests__/` etc.

The file must have the same name as the source file that we are testing. For example if we want to test Button component that is located in `src/components/Button.js`, test file will be `src/components/__tests__/Button.js`

### Mock data

When we are using some mock data, for example data of car detail we will place it to `./mocks` folder in project root. We place only one mock to one file. **Every mock must be typed via Flow!** It will force us to change mock data when their structure will be changed.

Check example in file `./mocks/CarDetail.js`

**Tip: How to generate mock from server data**

Create file for mock and log your data to console using `console.log(JSON.stringify(someData))`. Then copy&paste it to your file and hit save. Prettier will take care of formatting.

```
// @flow
import type { CarDetail as CarDetailType } from '../App/Types'

const CarDetail: CarDetailType = <paste your JSON string here>

export default CarDetail
```

Don't forget add your mock to `./mocks/index.js`.

### Mock libs

Sometime, especially in React Native development you need to mock whole lib, because it don't works in test environment. Place all mocks to file `jestMock.js` in project root. Check this file for example.

### How to write tests

Check existing tests for inspiration. For example `./src/components/__tests__/Text.js` etc.

### How to add new icon to icon fonts

Place SVG of new icon to folder `./assets/fontIcons/source` then go to website (Icomoon)[https://icomoon.io/app/#/select]. Select all files from `source` folder and drag&drop them into page. They should appear as Untitled Set. Select all icons clicking one by one, or click on hambuger menu icon at right side of Untitled Set a click Select all. Then click generate font at bottom of page. Download archive, uzip it and copy file `selection.json` and `fonts/icomoon.tff` into our project folder `assets/fontIcons`. Then run `yarn run link:icons`. Thats all, you are done.

## Other IDEs and editors (don't needed if you are using Atom)

#### Prettier

**Use of prettier with this settings is NOT optional, it's required**

Install plugin for `prettier` to your IDE, with `prettier-eslint` integration and enable following options:

* Force use of `prettier-eslint` from project dependencies, (**from node_modules**, do not use globally installed prettier)
* Force use `.prettierrc` for rules config
* Enable `.editorconfig` file integration (if is not possible in your IDE set rules from this file manually to prettier settings)
* Enable ESLint integration (runs `eslint --fix` before prettier)
* Ignore files in `.eslintignore`
* Format files on save

**It's very important to set all of these options**. Find some extension that supports all of required options. If not use another IDE or you will cause unwanted diffs all time.

### Flow

Install Flow plugin for your IDE and enable following options:

* Use of `flow-bin` from project dependencies, (**from node_modules**, do not use globally installed Flow)

### ESLint

Just use some plugin for ESLint. Some plugins can run format code on save, you should disable it because of prettier.

## node-es6-skeleton

This is a simple project skeleton for a NodeJS application written with ES6. The configuration supports:

* Static type checking with [Flow](https://flowtype.org/)
* Code linting with [ESLint](http://eslint.org/)
* Unit testing with [Jest](https://facebook.github.io/jest/)
* Transpilation with [Babel](https://babeljs.io/) and [Webpack](https://webpack.js.org/)

It works for me. It may not work for you.

### Usage

To build (runs continuously, output is in `dist`):

```
yarn build
```

To run tests (continuously):

```
yarn test
```

To run a test coverage report:

```
yarn test -- --coverage
```

To run Flow checks:

```
yarn run flow
```

To stop the Flow server:

```
yarn run flow stop
```

To clear the `dist` directory:

```
yarn run clean
```

### IDEs

These settings appear to be compatible with IntelliJ IDEA. You may need to explicitly set the project language to _Flow_.

![IDEA JS language settings screenshot](https://cloud.githubusercontent.com/assets/50972/22902818/0479b1cc-f1fc-11e6-8d84-a8022a91c567.png)
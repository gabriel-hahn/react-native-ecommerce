# React Native E-commerce

[![Build Status](https://travis-ci.org/gabriel-hahn/react-native-ecommerce.svg?branch=master)](https://travis-ci.org/gabriel-hahn/react-native-ecommerce) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/153d38d4611a4492a0e24bf015695022)](https://www.codacy.com/app/gabriel_hahn/react-native-ecommerce?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=gabriel-hahn/react-native-ecommerce&amp;utm_campaign=Badge_Grade) [![Coverage Status](https://coveralls.io/repos/github/gabriel-hahn/react-native-ecommerce/badge.svg?branch=master)](https://coveralls.io/github/gabriel-hahn/react-native-ecommerce?branch=master) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/gabriel-hahn/react-native-ecommerce/pulls) [![Bugs](https://img.shields.io/github/issues/gabriel-hahn/react-native-ecommerce/bug.svg)](https://github.com/gabriel-hahn/react-native-ecommerce/issues?utf8=?&q=is%3Aissue+is%3Aopen+label%3Abug) [![The MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://opensource.org/licenses/MIT)

E-commerce mobile application developed using React Native :necktie: :tophat:

- React Native
- Redux / Saga
- JSON Server
- Unit Testing

## Dependencies

You must have a package manager installed and [json-server](https://www.npmjs.com/package/json-server). JSON Server will simulate a API response, allow us to get items details.

## Getting Started

To install all dependencies, you need to run the following command:

```sh
$ yarn
```

To run JSON Server, you could do some configurations or execute the following command if you installed json-server as global:

```sh
$ json-server server.json -p 3001 -w -d 300
```

To run the project, you must have installed Android and/or iOS environment. Use 'run-ios' or 'run-android':

```sh
$ react-native run-ios
```

## Tests

Run the following command to execute all tests:

```sh
$ yarn test
```

To run tests with coverage:

```sh
$ yarn test --coverage
```

## Demo
<p align="center">
    <img src="https://media.giphy.com/media/KxscsDHNULQWXzmEQ7/giphy.gif">
</p>

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/gabriel-hahn/react-native-ecommerce/tags).

## Authors

[Gabriel Hahn Schaeffer](https://github.com/gabriel-hahn/)

See also the list of [contributors](https://github.com/gabriel-hahn/react-native-ecommerce/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details

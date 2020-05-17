# Ghostination changelog

All notable changes to this project will be documented in this file. See [Ghostination](https://github.com/khatastroffik/ghostination).


## 1.0.0 (2020-05-17)


### ⚠ BREAKING CHANGES

* grunt updated to version 1.1.0, further dev-dependencies updated as well

### Features

* add 'last updated' footer, add excerpt on page headers, improve default cover ([c371818](https://github.com/khatastroffik/ghostination/commit/c371818afbac20d6e3abafd883260ba123ad5f41))
* add optional management of blog comments using links to github repository (issues list) ([cbce4ce](https://github.com/khatastroffik/ghostination/commit/cbce4ce1f82479bac09378b4e7eef7974deb447c))
* add ToC support to posts, fix cover images, add content security to site, update hljs ([9cb4ce3](https://github.com/khatastroffik/ghostination/commit/9cb4ce3b26dec6ba9e1a6c419abb9551823032da))
* define ToC as handlebars 'partial' and add ToC support to pages ([55011aa](https://github.com/khatastroffik/ghostination/commit/55011aad3ca090444e7d0f8468330ae015fa195e))
* ensure there's a cover displayed by default on every post (not page) ([1f234f5](https://github.com/khatastroffik/ghostination/commit/1f234f500e2a0700ebf14e622d1a52bd5d93d346))


### Bug Fixes

* adapt ToC display in print/printpreview (as long as ToC is enabled) ([68bf813](https://github.com/khatastroffik/ghostination/commit/68bf8134b3c64d2426a8b7c38e485af7a91dfbc0))
* correct the print (preview) output, add blog URL infos on printout ([7cf6898](https://github.com/khatastroffik/ghostination/commit/7cf6898779e80991bc3b9c75afd98014d43cce0f))
* ensure that the line numbers are hidden on printouts while the code is automa. wrapped ([ce8cc25](https://github.com/khatastroffik/ghostination/commit/ce8cc251bc1b10d8deb155e2d37ff4d9ae663151))
* make line number visible on code highlighting even when code is a single line ([fd59a4e](https://github.com/khatastroffik/ghostination/commit/fd59a4e232315a49f60d5060f6253984a1583cfc))


### Modification of the app structure/core

* update dev-dependencies, add own "push to git" grunt task ([6b2703d](https://github.com/khatastroffik/ghostination/commit/6b2703d801c78a9c83eedb7a9eeb0ed856a838eb))

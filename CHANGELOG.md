# Changelog

## [v3.1.2](https://github.com/darkmavis1980/markdown-index-generator/compare/v3.1.1...v3.1.2)

### Merged

- Fix issue with headings containing extra whitespace [`#72`](https://github.com/darkmavis1980/markdown-index-generator/pull/72)

### Commits

- chore: update package dependencies to latest versions [`80f4325`](https://github.com/darkmavis1980/markdown-index-generator/commit/80f4325e2fde9b96964d8357fbe81d2cce24528a)
- test: enhance unit tests for MarkdownParser to cover numbered list detection and whitespace handling [`68c3eab`](https://github.com/darkmavis1980/markdown-index-generator/commit/68c3eab5c2043aa2c6270dc2e92619a74179a5c9)
- refactor: streamline whitespace handling in MarkdownParser headings [`682f038`](https://github.com/darkmavis1980/markdown-index-generator/commit/682f0384e8c7d9f0f9e59fd250b99311a0fdafb1)
- fix: improve whitespace handling in MarkdownParser headings [`a87aea6`](https://github.com/darkmavis1980/markdown-index-generator/commit/a87aea675a868df9458fb2054bb1a6b73989807d)

## [v3.1.1](https://github.com/darkmavis1980/markdown-index-generator/compare/v3.1.0...v3.1.1) - 2025-04-25

### Merged

- Refactor Build Process and Fix ESM Compatibility [`#71`](https://github.com/darkmavis1980/markdown-index-generator/pull/71)

### Commits

- test: add unit tests for ESM compatibility, import paths, and shebang handling [`efe19cd`](https://github.com/darkmavis1980/markdown-index-generator/commit/efe19cdd9cdc0f5a8812f6604e9bd4b1beac9d9d)
- test: add unit tests for MarkdownParser to validate whitespace handling in headings [`0c7472d`](https://github.com/darkmavis1980/markdown-index-generator/commit/0c7472da7894e46ea7646cf490cc208c7520ab43)
- chore: add index markers and update heading formatting in test markdown file [`0d44b9c`](https://github.com/darkmavis1980/markdown-index-generator/commit/0d44b9c0f4c76b40030f8edf572d88a30608e7f9)
- test: add unit tests for stringToPermalink to handle multiple whitespaces, tabs, and newlines [`611e97e`](https://github.com/darkmavis1980/markdown-index-generator/commit/611e97e3778dfc6866c0244c8cb322c3f3ae32b5)
- chore: add build step to CI workflows for main and PR processes [`524289d`](https://github.com/darkmavis1980/markdown-index-generator/commit/524289d9a84a6fd29bb57b7abb8e7d6f4d6a2979)
- style: format whitespace handling in stringToPermalink function for consistency [`62b2915`](https://github.com/darkmavis1980/markdown-index-generator/commit/62b29159c495c71f134681b7c668ca701ed3de8b)
- fix: replace multiple whitespaces with a single space in stringToPermalink function [`b9e88c5`](https://github.com/darkmavis1980/markdown-index-generator/commit/b9e88c5ca71af91e9307a87a6cb36f63c3f21d65)
- fix: trim whitespace in stringToPermalink function for cleaner output [`9ab1cfe`](https://github.com/darkmavis1980/markdown-index-generator/commit/9ab1cfee056d371912979b78254a049d0b90c719)

## [v3.1.0](https://github.com/darkmavis1980/markdown-index-generator/compare/v3.0.3...v3.1.0) - 2025-04-25

### Merged

- Bugfix/fix execution on windows [`#69`](https://github.com/darkmavis1980/markdown-index-generator/pull/69)

### Commits

- chore: update dependencies in package.json and package-lock.json for improved compatibility and performance [`0c5135c`](https://github.com/darkmavis1980/markdown-index-generator/commit/0c5135c9c78cfc0ac8baebfefe9b637275f51f21)
- refactor: update import statements to use .js extensions for ESM compatibility [`f85f1e0`](https://github.com/darkmavis1980/markdown-index-generator/commit/f85f1e07012b73db5fe868baa84bb863125d491c)
- chore: enhance Jest configuration for TypeScript support with ESM and module name mapping [`1751779`](https://github.com/darkmavis1980/markdown-index-generator/commit/17517791de65886d979c06c88fe34f3b7f64af97)
- refactor: adjust import statements to include .js extensions for consistency and ESM compliance [`d30116f`](https://github.com/darkmavis1980/markdown-index-generator/commit/d30116f1118ec612cb0acecba24e793cbdf00c0b)
- chore: update TypeScript module settings to NodeNext in tsconfig.json [`e204882`](https://github.com/darkmavis1980/markdown-index-generator/commit/e204882fd1d49d627942e53e5bd8b7167c054c05)

## [v3.0.3](https://github.com/darkmavis1980/markdown-index-generator/compare/v3.0.2...v3.0.3) - 2025-04-22

### Commits

- fix: prettier issue [`1966f93`](https://github.com/darkmavis1980/markdown-index-generator/commit/1966f93761ee9c4c337b9c2ccb5994fffd05cc1f)

## [v3.0.2](https://github.com/darkmavis1980/markdown-index-generator/compare/v3.0.1...v3.0.2) - 2025-04-22

### Commits

- chore: remove unused dependencies and update package scripts [`83686b2`](https://github.com/darkmavis1980/markdown-index-generator/commit/83686b20bb54adb2e001808fabde6096ab470cbd)
- fix: figure out issue with tsx in WSL [`978ce3c`](https://github.com/darkmavis1980/markdown-index-generator/commit/978ce3c2a35a24b185e59f461cc1e42ab58f2399)
- chore: refactor MarkdownParser to use named exports and update import statement [`d0a4668`](https://github.com/darkmavis1980/markdown-index-generator/commit/d0a46688c8e3e9c60e3735c53f6e65a43190f013)

## [v3.0.1](https://github.com/darkmavis1980/markdown-index-generator/compare/v3.0.0...v3.0.1) - 2025-03-29

### Merged

- fix: issue with TS configuration [`#67`](https://github.com/darkmavis1980/markdown-index-generator/pull/67)
- Feature/upgrade linting [`#66`](https://github.com/darkmavis1980/markdown-index-generator/pull/66)

## [v3.0.0](https://github.com/darkmavis1980/markdown-index-generator/compare/v2.1.1...v3.0.0) - 2025-03-29

### Merged

- Bugfix/fix issue with title [`#65`](https://github.com/darkmavis1980/markdown-index-generator/pull/65)

### Commits

- feat: remove legacy packages [`90b249e`](https://github.com/darkmavis1980/markdown-index-generator/commit/90b249eb537b1efc283556383c4baf9f5beffcbd)
- chore: update dependency [`5f5bcc6`](https://github.com/darkmavis1980/markdown-index-generator/commit/5f5bcc6ba28818d549e84f90fb01bb2ea61032b9)
- feat: add tsx [`fb3a425`](https://github.com/darkmavis1980/markdown-index-generator/commit/fb3a4255b321a005431147b09c432c3f3b16a75b)
- fix: add missing package [`1db784c`](https://github.com/darkmavis1980/markdown-index-generator/commit/1db784c2a921996e64fddf11e1114c1f7b967b01)
- fix: cleaned up code [`ce7e97b`](https://github.com/darkmavis1980/markdown-index-generator/commit/ce7e97b3fb21ae5e71cf13bd2b1d8a1084313690)
- fix: add missing package [`c024b12`](https://github.com/darkmavis1980/markdown-index-generator/commit/c024b12d378c845a1434a0ff837257f69a3e5326)
- feat: add prettier [`67ee3c5`](https://github.com/darkmavis1980/markdown-index-generator/commit/67ee3c5de749eaf9a6045aa9b5c1e8aed55f7255)
- feat: upgrade commander to latest version [`d99fb91`](https://github.com/darkmavis1980/markdown-index-generator/commit/d99fb910b49af7500eb50938f08726c3854b4dec)
- chore: removed legacy mocha configuration [`5c77682`](https://github.com/darkmavis1980/markdown-index-generator/commit/5c776828935a92136f5bfc1d492b20c0fe40c4f6)
- fix: update code to use ESM [`5443145`](https://github.com/darkmavis1980/markdown-index-generator/commit/5443145531ebdca5c5890b30b5086e4c4a31a126)

## [v2.1.1](https://github.com/darkmavis1980/markdown-index-generator/compare/v2.1.0...v2.1.1) - 2024-07-31

### Merged

- Bugfix/dependencies update [`#64`](https://github.com/darkmavis1980/markdown-index-generator/pull/64)

### Commits

- chore: update dependencies [`0aa88e7`](https://github.com/darkmavis1980/markdown-index-generator/commit/0aa88e70cb0fe10266bd1d0788ba1e6cea429dd9)
- chore: updated nyc and @types/node packages [`adb249a`](https://github.com/darkmavis1980/markdown-index-generator/commit/adb249aac0360b20892ea2b31dbf616862d3489c)
- fix: issue where the title was added to the generated index [`984f33b`](https://github.com/darkmavis1980/markdown-index-generator/commit/984f33b8f3c027c143ca912303232453a1172ca0)
- fix: issue with numbered headings [`c0b2448`](https://github.com/darkmavis1980/markdown-index-generator/commit/c0b2448f3040d9f908a2e04b84854b12c1cd8713)

## [v2.1.0](https://github.com/darkmavis1980/markdown-index-generator/compare/v2.0.1...v2.1.0) - 2024-06-16

### Merged

- Bugfix/60 issue with headers with underscore values [`#61`](https://github.com/darkmavis1980/markdown-index-generator/pull/61)

### Commits

- feat: upgrade eslint version and update configuration [`cc69ea8`](https://github.com/darkmavis1980/markdown-index-generator/commit/cc69ea8f00ac34c6cc3d2eadf4031f5fdef3ee36)

## [v2.0.1](https://github.com/darkmavis1980/markdown-index-generator/compare/v2.0.0...v2.0.1) - 2024-03-05

### Merged

- Feature/upgrade to commander 12 [`#59`](https://github.com/darkmavis1980/markdown-index-generator/pull/59)

### Commits

- chore: update dependencies [`19ae036`](https://github.com/darkmavis1980/markdown-index-generator/commit/19ae036304190c5dfbfe416cd4a4fb32a2ccfa4d)
- fix: refactored code to include underscore as valid symbol to links [`6326afe`](https://github.com/darkmavis1980/markdown-index-generator/commit/6326afe3dede1273ad0a49859c90659dbc254830)

## [v2.0.0](https://github.com/darkmavis1980/markdown-index-generator/compare/v1.0.4...v2.0.0) - 2024-02-12

### Merged

- Bugfix/fix critical dependency [`#58`](https://github.com/darkmavis1980/markdown-index-generator/pull/58)

### Commits

- feat: upgrade to commander 12 [`c2e8dbe`](https://github.com/darkmavis1980/markdown-index-generator/commit/c2e8dbe7f31fbf740bb7107327fc9d6676f85e6d)
- !feat: drop support for node 16, add support for node 20 [`7685d2a`](https://github.com/darkmavis1980/markdown-index-generator/commit/7685d2ab1f75163cfc6dbd0ad6f30bf6296d381e)
- !feat: set ts to target ES2021 instead of ES2017 [`86cf2c4`](https://github.com/darkmavis1980/markdown-index-generator/commit/86cf2c4c5ca896c194bcb50ebfb216d5559050ad)
- !feat: set mininum node version to 18 [`b5dd731`](https://github.com/darkmavis1980/markdown-index-generator/commit/b5dd731a397d25f0871b4d64897cd6b8264220e7)
- chore: set tests to be randomized [`00a4814`](https://github.com/darkmavis1980/markdown-index-generator/commit/00a4814e015f6f611450c903a6d604cb1bb10710)

## [v1.0.4](https://github.com/darkmavis1980/markdown-index-generator/compare/v1.0.3...v1.0.4) - 2023-12-07

### Commits

- chore: update dependencies [`1c4c890`](https://github.com/darkmavis1980/markdown-index-generator/commit/1c4c890fe919cc0ef617784c8f126b08383bc372)

## [v1.0.3](https://github.com/darkmavis1980/markdown-index-generator/compare/v1.0.2...v1.0.3) - 2023-08-26

### Merged

- Bugfix/fix audit errors [`#57`](https://github.com/darkmavis1980/markdown-index-generator/pull/57)

## [v1.0.2](https://github.com/darkmavis1980/markdown-index-generator/compare/v1.0.1...v1.0.2) - 2023-08-26

### Merged

- [bugfix] Fix issue with missing commander [`#55`](https://github.com/darkmavis1980/markdown-index-generator/pull/55)
- Bugfix/maintenance update may 2023 [`#54`](https://github.com/darkmavis1980/markdown-index-generator/pull/54)

### Commits

- [bugfix] Fix issue with tests [`b13bdd8`](https://github.com/darkmavis1980/markdown-index-generator/commit/b13bdd8d49c671b67a76b28ab9d3ac925c8a9ae4)

## [v1.0.1](https://github.com/darkmavis1980/markdown-index-generator/compare/v1.0.0...v1.0.1) - 2023-05-28

### Merged

- Feature/update replace logic [`#53`](https://github.com/darkmavis1980/markdown-index-generator/pull/53)

### Commits

- Updated dependencies [`5894216`](https://github.com/darkmavis1980/markdown-index-generator/commit/58942166520a87f1777157f6afc869c193fed62c)

## [v1.0.0](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.13.0...v1.0.0) - 2023-04-06

### Merged

- Removed node 14 support [`#52`](https://github.com/darkmavis1980/markdown-index-generator/pull/52)

### Commits

- Update to TS 5 [`8061c4d`](https://github.com/darkmavis1980/markdown-index-generator/commit/8061c4d347fa0bd75a3dffd5323d608061c73377)
- [BREAKING] Changed the default behaviour to update the file [`86d0ae6`](https://github.com/darkmavis1980/markdown-index-generator/commit/86d0ae67f83d11986ef4d5ccc909499ef1d0fb0a)

## [v0.13.0](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.12.8...v0.13.0) - 2023-03-11

### Merged

- Bugfix/update dependencies [`#51`](https://github.com/darkmavis1980/markdown-index-generator/pull/51)

### Commits

- Removed node 14 support [`1af808d`](https://github.com/darkmavis1980/markdown-index-generator/commit/1af808d5e6cb11201640710758eb3b60ce8afdb8)

## [v0.12.8](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.12.7...v0.12.8) - 2023-03-11

### Merged

- Bugfix/update dependencies [`#50`](https://github.com/darkmavis1980/markdown-index-generator/pull/50)

### Commits

- Updated dependencies [`b80d99e`](https://github.com/darkmavis1980/markdown-index-generator/commit/b80d99e9d4db80221ce62a98cd822644afd196f7)

## [v0.12.7](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.12.6...v0.12.7) - 2023-01-29

### Merged

- Minor cleanups [`#49`](https://github.com/darkmavis1980/markdown-index-generator/pull/49)

### Commits

- Updated dependencies [`25738a5`](https://github.com/darkmavis1980/markdown-index-generator/commit/25738a5e0f01f74c990ce0d2e572989a0dac675b)

## [v0.12.6](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.12.5...v0.12.6) - 2023-01-06

### Merged

- Bugfix/maintenance update [`#48`](https://github.com/darkmavis1980/markdown-index-generator/pull/48)

### Commits

- Minor cleanups [`19e94c0`](https://github.com/darkmavis1980/markdown-index-generator/commit/19e94c082801c32a958a9b9900580a0d32e057f2)

## [v0.12.5](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.12.4...v0.12.5) - 2022-12-30

### Merged

- Bugfix/fix replace flag [`#47`](https://github.com/darkmavis1980/markdown-index-generator/pull/47)

### Commits

- Updated dependencies [`f0508f9`](https://github.com/darkmavis1980/markdown-index-generator/commit/f0508f9dadbd5ea8ef85a140d82bdf96abd90354)

## [v0.12.4](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.12.3...v0.12.4) - 2022-12-06

### Commits

- Removed settings from auto-changelog [`8769fd9`](https://github.com/darkmavis1980/markdown-index-generator/commit/8769fd9b28ec4bb48c070c2e4a80f6ce82afa3cb)

## [v0.12.3](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.12.2...v0.12.3) - 2022-12-06

### Merged

- Bugfix/fix coverage [`#46`](https://github.com/darkmavis1980/markdown-index-generator/pull/46)
- Bugfix/code cleanups [`#45`](https://github.com/darkmavis1980/markdown-index-generator/pull/45)

### Commits

- Fixed issue with flag [`f21d3a7`](https://github.com/darkmavis1980/markdown-index-generator/commit/f21d3a793bf27010d7dab6e2d1b83bbacc362ded)

## [v0.12.2](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.12.1...v0.12.2) - 2022-12-03

### Commits

- Added one more test [`7bffabc`](https://github.com/darkmavis1980/markdown-index-generator/commit/7bffabcb85b8e11286d775188cfe17a013d8a0cc)

## [v0.12.1](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.12.1-next.1...v0.12.1) - 2022-12-03

### Commits

- Fixed typo [`b9e1c61`](https://github.com/darkmavis1980/markdown-index-generator/commit/b9e1c61d95563fa5294328d604fa5e8fe4ec3010)

## [v0.12.1-next.1](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.12.1-next.0...v0.12.1-next.1) - 2022-12-03

### Commits

- Fixed issue with flags [`832c08c`](https://github.com/darkmavis1980/markdown-index-generator/commit/832c08cbccc5b0dded87eabd5222c7a229052764)
- Removed file added by accident [`d4ffab5`](https://github.com/darkmavis1980/markdown-index-generator/commit/d4ffab5b5562ba1bee66abb100cce61c37128b9e)

## [v0.12.1-next.0](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.12.0...v0.12.1-next.0) - 2022-12-03

### Merged

- Feature/remove oclif [`#44`](https://github.com/darkmavis1980/markdown-index-generator/pull/44)

### Commits

- Code cleanups [`cee0ee6`](https://github.com/darkmavis1980/markdown-index-generator/commit/cee0ee622dc4c422e79684058e928a5144c9ca04)
- More code cleanups [`2a3b55b`](https://github.com/darkmavis1980/markdown-index-generator/commit/2a3b55b2f6cc6212fc8d55a06b78eba5bae3383b)
- Updated release workflow [`6ee861f`](https://github.com/darkmavis1980/markdown-index-generator/commit/6ee861f84bfd9ab6865d0963ab5839e6a97e520b)
- Restored test [`2d0de5c`](https://github.com/darkmavis1980/markdown-index-generator/commit/2d0de5c0bfae74256c3c237b4ac1e75085d4aaea)

## [v0.12.0](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.12.0-next.3...v0.12.0) - 2022-12-02

## [v0.12.0-next.3](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.12.0-next.2...v0.12.0-next.3) - 2022-12-02

### Commits

- Fixed eslint [`d60de09`](https://github.com/darkmavis1980/markdown-index-generator/commit/d60de09873e2c98060951fd291a667a3dc47b801)

## [v0.12.0-next.2](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.12.0-next.1...v0.12.0-next.2) - 2022-12-02

### Commits

- Removed mocha in favour of Jest [`3d72079`](https://github.com/darkmavis1980/markdown-index-generator/commit/3d72079650aa7037bc3df8a5ac9d8d5b842005ee)

## [v0.12.0-next.1](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.12.0-next.0...v0.12.0-next.1) - 2022-12-02

### Commits

- Used commonjs for main command [`2aa2ee1`](https://github.com/darkmavis1980/markdown-index-generator/commit/2aa2ee11c912dcf8d8ab4f277600afeb4c716c45)

## [v0.12.0-next.0](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.11.3...v0.12.0-next.0) - 2022-12-02

### Merged

- Bugfix/maintenance update [`#43`](https://github.com/darkmavis1980/markdown-index-generator/pull/43)

### Commits

- Removed oclif [`6116fb4`](https://github.com/darkmavis1980/markdown-index-generator/commit/6116fb4cf90c1cf37b99c89974771e6a3e079ab4)

## [v0.11.3](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.11.2...v0.11.3) - 2022-09-21

### Merged

- Bugfix/fix end newline [`#42`](https://github.com/darkmavis1980/markdown-index-generator/pull/42)

### Commits

- Updated dependencies [`54b344b`](https://github.com/darkmavis1980/markdown-index-generator/commit/54b344bfe0cd580f7099639a10ba61d7b997078c)

## [v0.11.2](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.11.1...v0.11.2) - 2022-06-21

### Merged

- Updated workflow to use node between 14 and 18 [`#41`](https://github.com/darkmavis1980/markdown-index-generator/pull/41)

### Commits

- Fixed issue with trailing new line [`5468707`](https://github.com/darkmavis1980/markdown-index-generator/commit/5468707cb8db7723d98a2d2e4c39b8fe3d6e3190)

## [v0.11.1](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.11.0...v0.11.1) - 2022-06-04

### Merged

- Feature/update workflows [`#40`](https://github.com/darkmavis1980/markdown-index-generator/pull/40)

### Commits

- Updated version [`fc812d8`](https://github.com/darkmavis1980/markdown-index-generator/commit/fc812d8883174c72c74b69b0458594cc2eadcf76)
- Updated workflow to use node between 14 and 18 [`098d381`](https://github.com/darkmavis1980/markdown-index-generator/commit/098d3819eca3f562494dba40ac79f42dec90ddb4)
- Updated run [`0354b10`](https://github.com/darkmavis1980/markdown-index-generator/commit/0354b10cf184e2aca77232a265d7a846ece0f97d)

## [v0.11.0](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.10.8...v0.11.0) - 2022-06-03

### Commits

- Updated eslint dependencies [`a82dd0b`](https://github.com/darkmavis1980/markdown-index-generator/commit/a82dd0b5111abd4c4fb5b6182c912d6ed806af7e)
- Updated dependencies [`2d4264e`](https://github.com/darkmavis1980/markdown-index-generator/commit/2d4264e5901ea8963748d06c80332d747c4decbf)
- Updated workflows [`9e74548`](https://github.com/darkmavis1980/markdown-index-generator/commit/9e745485e4df580f2466da869807962408be5362)

## [v0.10.8](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.10.7...v0.10.8) - 2022-04-17

### Commits

- Fixed workflows [`995b901`](https://github.com/darkmavis1980/markdown-index-generator/commit/995b9016f3a315ffd9b735df54225dd543e93e76)

## [v0.10.7](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.10.6...v0.10.7) - 2022-04-17

### Merged

- Bugfix/fix dependencies apr 2022 [`#38`](https://github.com/darkmavis1980/markdown-index-generator/pull/38)

### Commits

- Updated dependencies [`7f64b1f`](https://github.com/darkmavis1980/markdown-index-generator/commit/7f64b1fe2d4655cecc72ee43ab589abbcd2456ad)

## [v0.10.6](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.10.5...v0.10.6) - 2022-04-17

### Merged

- Bump minimist from 1.2.5 to 1.2.6 [`#34`](https://github.com/darkmavis1980/markdown-index-generator/pull/34)
- Bugfix/update dependencies 2022 [`#33`](https://github.com/darkmavis1980/markdown-index-generator/pull/33)

### Commits

- Updated dependencies [`8d81120`](https://github.com/darkmavis1980/markdown-index-generator/commit/8d811202b9ac4df5ec7d7d8559b84a45f3171b43)
- Updated changelog [`65e5313`](https://github.com/darkmavis1980/markdown-index-generator/commit/65e5313b38939eb916003424ed066517b94fe56c)

## [v0.10.5](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.10.4...v0.10.5) - 2022-01-07

### Merged

- Bugfix/fix ts 4 compatibility [`#27`](https://github.com/darkmavis1980/markdown-index-generator/pull/27)

### Commits

- Updated dependencies [`c2f34c5`](https://github.com/darkmavis1980/markdown-index-generator/commit/c2f34c597ecc077a1b411cfd54a1ac22935aa82a)

## [v0.10.4](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.10.3...v0.10.4) - 2021-09-01

### Merged

- Bugfix/fix audit issues [`#26`](https://github.com/darkmavis1980/markdown-index-generator/pull/26)

### Commits

- Fixed issue with tsc [`a39f18d`](https://github.com/darkmavis1980/markdown-index-generator/commit/a39f18db9e1f25a8b0650fe61ffb6655dbd4d17a)

## [v0.10.3](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.10.2...v0.10.3) - 2021-08-13

### Commits

- Updated dependencies [`b58ae79`](https://github.com/darkmavis1980/markdown-index-generator/commit/b58ae79b59771e7e0e62a938272fe34688617d81)

## [v0.10.2](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.10.1...v0.10.2) - 2021-05-18

### Merged

- Updated dependencies to fix vulnerabilities [`#23`](https://github.com/darkmavis1980/markdown-index-generator/pull/23)

### Commits

- Added missing dev dependency [`2ec7144`](https://github.com/darkmavis1980/markdown-index-generator/commit/2ec714424995d78741d9a3442db51ad005a08dd1)
- Added @typescript-eslint/parser [`6d2ce79`](https://github.com/darkmavis1980/markdown-index-generator/commit/6d2ce79ccef546b81b836b5cac4e4fd38cf3aa2b)

## [v0.10.1](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.10.0...v0.10.1) - 2021-04-03

### Merged

- Updated dependencies and fixed vulnerabilities [`#22`](https://github.com/darkmavis1980/markdown-index-generator/pull/22)
- Added logic to automatically add index tags if none present [`#20`](https://github.com/darkmavis1980/markdown-index-generator/pull/20)

### Commits

- Updated lock file [`be87757`](https://github.com/darkmavis1980/markdown-index-generator/commit/be877570494a58d7238de05177a0246d5b327b83)

## [v0.10.0](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.9.8...v0.10.0) - 2021-03-09

### Commits

- Added logic to automatically add index tags if none present [`d358b40`](https://github.com/darkmavis1980/markdown-index-generator/commit/d358b4095a2af0a9ede43ff627dd3f3457d84eb2)
- Updated changelog [`a2de1da`](https://github.com/darkmavis1980/markdown-index-generator/commit/a2de1da1e6b2dccb839beeb5a702e9837d88a325)
- Updated changelog [`8677c9d`](https://github.com/darkmavis1980/markdown-index-generator/commit/8677c9db9caa490d2c7c1f7dcf25ea125e361a06)

## [v0.9.8](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.9.7...v0.9.8) - 2021-02-05

### Merged

- Maintenance update [`#19`](https://github.com/darkmavis1980/markdown-index-generator/pull/19)

## [v0.9.7](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.9.6...v0.9.7) - 2021-01-04

### Merged

- Feature/add pr action [`#18`](https://github.com/darkmavis1980/markdown-index-generator/pull/18)

### Commits

- Updated github actions to use npm ci [`a38051d`](https://github.com/darkmavis1980/markdown-index-generator/commit/a38051da623a5eeeaae381f9af0b4619b37c550d)
- Updated text [`0ce5c08`](https://github.com/darkmavis1980/markdown-index-generator/commit/0ce5c08c5edf9e13348ba2cf4fef601945351b83)
- Updated github action name [`94bfff2`](https://github.com/darkmavis1980/markdown-index-generator/commit/94bfff2855a945239c57b695bcb2eebd3fdee1bf)

## [v0.9.6](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.9.5...v0.9.6) - 2020-12-27

### Merged

- Added coverage script and instanbul configuration [`#17`](https://github.com/darkmavis1980/markdown-index-generator/pull/17)

## [v0.9.5](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.9.4...v0.9.5) - 2020-12-18

### Merged

- Bugfix/remove travis ci [`#15`](https://github.com/darkmavis1980/markdown-index-generator/pull/15)

### Commits

- Added github action [`4526fd8`](https://github.com/darkmavis1980/markdown-index-generator/commit/4526fd8734636089372eaf23f075d2d3441eebfe)
- Added eslint npm script [`478d238`](https://github.com/darkmavis1980/markdown-index-generator/commit/478d238654424ae86f37f01bb23933e60fd1a72a)
- Updated changelog [`8816bf9`](https://github.com/darkmavis1980/markdown-index-generator/commit/8816bf95ff8bba2e4fdeb44576e895880138d512)
- Updated changelog [`e5b471b`](https://github.com/darkmavis1980/markdown-index-generator/commit/e5b471b058929d9f204efcdb65f421bd1c811c57)
- Updated changelog [`5a20dfd`](https://github.com/darkmavis1980/markdown-index-generator/commit/5a20dfdb116d4d9e4b124611fb6940fa5992c006)
- Replaced badge from travis-ci to github actions [`99408de`](https://github.com/darkmavis1980/markdown-index-generator/commit/99408de501d2f27f562b2d59b9f08cd65646f78a)

## [v0.9.4](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.9.3...v0.9.4) - 2020-12-16

### Merged

- Added more unit tests [`#14`](https://github.com/darkmavis1980/markdown-index-generator/pull/14)

### Commits

- Updated changelog [`b51fd7b`](https://github.com/darkmavis1980/markdown-index-generator/commit/b51fd7b87d555719f6e635e95318bf0ad2fb5c25)

## [v0.9.3](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.9.2...v0.9.3) - 2020-12-15

### Merged

- Bugfix/fix issue with heading with brackets [`#13`](https://github.com/darkmavis1980/markdown-index-generator/pull/13)

### Commits

- Fixed issue with special characters being included in the link [`bbc04e2`](https://github.com/darkmavis1980/markdown-index-generator/commit/bbc04e2f6dfa0590d43718eb846b5b8e23293c26)
- Updated changelog [`b805a8d`](https://github.com/darkmavis1980/markdown-index-generator/commit/b805a8d12ca141ec0ad546275c2ce966c6b5961b)
- Updated changelog [`3ebfbac`](https://github.com/darkmavis1980/markdown-index-generator/commit/3ebfbaca5b1a81ec14029185c66795c695c901f6)

## [v0.9.2](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.9.1...v0.9.2) - 2020-12-10

### Merged

- Fixed issue with missing cli-ux package [`#12`](https://github.com/darkmavis1980/markdown-index-generator/pull/12)

## [v0.9.1](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.9.0...v0.9.1) - 2020-11-13

### Merged

- Fixed bug #10 [`#11`](https://github.com/darkmavis1980/markdown-index-generator/pull/11)

## [v0.9.0](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.8.6...v0.9.0) - 2020-11-06

### Merged

- Improved logic to find for headings in a document [`#9`](https://github.com/darkmavis1980/markdown-index-generator/pull/9)

## [v0.8.6](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.8.5...v0.8.6) - 2020-11-04

### Commits

- Updated dependencies for security fixes [`7698fff`](https://github.com/darkmavis1980/markdown-index-generator/commit/7698fff2813a039288a9eaf9073f51c4efd0df6b)
- Fixed changelog [`27de701`](https://github.com/darkmavis1980/markdown-index-generator/commit/27de701bd233d78fa57538fb8b43063fa2a81f19)

## [v0.8.5](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.8.4...v0.8.5) - 2020-09-13

### Commits

- Fixed security issues related to dependencies [`c1fb809`](https://github.com/darkmavis1980/markdown-index-generator/commit/c1fb809e511bf8e9ac4ecadf0989b776badaa5a1)
- Updated changelog [`c9d2cd3`](https://github.com/darkmavis1980/markdown-index-generator/commit/c9d2cd3be29d493833d76330803d7a15133d6a4f)

## [v0.8.4](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.8.3...v0.8.4) - 2020-09-06

### Commits

- Updated dependencies [`abb6191`](https://github.com/darkmavis1980/markdown-index-generator/commit/abb619193d189bcdf7eb8e5a2acfcb6d98e03423)
- Updated changelog [`fa51802`](https://github.com/darkmavis1980/markdown-index-generator/commit/fa51802e0e9104298dba28c8abf5adfa1d34a3c0)
- Updated changelog [`3431ac5`](https://github.com/darkmavis1980/markdown-index-generator/commit/3431ac5a12d046a55f1234be683d68b0062cd1f8)

## [v0.8.3](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.8.2...v0.8.3) - 2020-08-18

### Commits

- Updated dependencies [`6e2258e`](https://github.com/darkmavis1980/markdown-index-generator/commit/6e2258e8fcd3b797733edf211290bd9eb188c0c7)
- Updated changelog [`c3f4ab0`](https://github.com/darkmavis1980/markdown-index-generator/commit/c3f4ab0516f1cb414cd1f2e2966656e02b6d06ca)
- Updated changelog [`0bcfc02`](https://github.com/darkmavis1980/markdown-index-generator/commit/0bcfc026f478b4711e26ddf35bc905417e2fa999)

## [v0.8.2](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.8.1...v0.8.2) - 2020-07-30

### Commits

- Updated dependencies [`6d17561`](https://github.com/darkmavis1980/markdown-index-generator/commit/6d1756177bb113adfc484f5693a16a2ac093c469)

## [v0.8.1](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.8.0...v0.8.1) - 2020-07-19

### Merged

- Bump lodash from 4.17.15 to 4.17.19 [`#6`](https://github.com/darkmavis1980/markdown-index-generator/pull/6)

### Commits

- Updated changelog [`edf8b48`](https://github.com/darkmavis1980/markdown-index-generator/commit/edf8b4802868a170c86fb9809b8653d06fc56040)
- Updated changelog [`2c50c4b`](https://github.com/darkmavis1980/markdown-index-generator/commit/2c50c4bdb328a597e484dcc7c86aabac8c8bc579)
- Fixed minor bug with missin newline after index-end tag [`91bff78`](https://github.com/darkmavis1980/markdown-index-generator/commit/91bff788389436b9cd878e9ce6b943a98f74d677)

## [v0.8.0](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.7.0...v0.8.0) - 2020-07-17

### Merged

- Added support for numbered lists [`#5`](https://github.com/darkmavis1980/markdown-index-generator/pull/5)

### Commits

- Updated docs [`9410733`](https://github.com/darkmavis1980/markdown-index-generator/commit/941073311162e7a6a1015f5db43b0f855accded4)

## [v0.7.0](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.6.0...v0.7.0) - 2020-07-14

### Merged

- Added support for MDX format [`#4`](https://github.com/darkmavis1980/markdown-index-generator/pull/4)

### Commits

- Updated changelog [`3754a6f`](https://github.com/darkmavis1980/markdown-index-generator/commit/3754a6f860e27636e171fa501b8dfc811a71e9b4)

## [v0.6.0](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.5.2...v0.6.0) - 2020-07-13

### Commits

- Added feedback if process takes long time to process [`8970abd`](https://github.com/darkmavis1980/markdown-index-generator/commit/8970abdd5b91d062911cc11003d30ab0ca2cf7ce)
- Updated changelog [`37f15f8`](https://github.com/darkmavis1980/markdown-index-generator/commit/37f15f8a2c5f034bdf830364f9fa9756745caefc)

## [v0.5.2](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.5.1...v0.5.2) - 2020-07-06

### Commits

- Added missing npm scripts [`fc00c5b`](https://github.com/darkmavis1980/markdown-index-generator/commit/fc00c5b3628373fe3b9ecc497fd9d77fc140de5d)
- Updated readme [`1cfdd43`](https://github.com/darkmavis1980/markdown-index-generator/commit/1cfdd43aac139c70db5f51d5e6aaedb8f5f35fdb)

## [v0.5.1](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.5.0...v0.5.1) - 2020-06-30

### Commits

- Updated dependencies [`52a46ea`](https://github.com/darkmavis1980/markdown-index-generator/commit/52a46ea19986b01032c353a3a6d587295b005dfb)

## [v0.5.0](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.4.2...v0.5.0) - 2020-06-19

### Merged

- Feature/improve tag replacing code [`#3`](https://github.com/darkmavis1980/markdown-index-generator/pull/3)

### Commits

- BREAKING CHANGE: changed how the tag for replace content is called [`40e0c4b`](https://github.com/darkmavis1980/markdown-index-generator/commit/40e0c4b2b00c8ec72605925bbd1f10635e237ef4)
- Updated changelog [`864d6bf`](https://github.com/darkmavis1980/markdown-index-generator/commit/864d6bfc6a74078d88178f5e8a91cd1c4b3a3ed0)

## [v0.4.2](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.4.1...v0.4.2) - 2020-06-12

### Merged

- Fixed issue #1 with punctuations [`#2`](https://github.com/darkmavis1980/markdown-index-generator/pull/2)

### Commits

- Set travis CI to use node 12.18.0 [`71e8ce1`](https://github.com/darkmavis1980/markdown-index-generator/commit/71e8ce148e97f2b2f5b5b5358acad0a7287d0a75)

## [v0.4.1](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.4.0...v0.4.1) - 2020-06-11

### Commits

- Fixed README.md [`2051084`](https://github.com/darkmavis1980/markdown-index-generator/commit/205108400741f20deef5e4bca5b91768174b1f1a)
- Added build status in the README.md [`a2a79ff`](https://github.com/darkmavis1980/markdown-index-generator/commit/a2a79ffded9e7bd00e60f5bafd005c2e899e4f4b)

## [v0.4.0](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.3.3...v0.4.0) - 2020-06-11

### Commits

- Added feature to add the index in the source file [`1801533`](https://github.com/darkmavis1980/markdown-index-generator/commit/1801533a0d2a37734dc2ee8c7cbb388352c862c6)
- Removed test file [`65fb163`](https://github.com/darkmavis1980/markdown-index-generator/commit/65fb1635b75b052012876c34fb205e74c400ee41)

## [v0.3.3](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.3.2...v0.3.3) - 2020-06-11

### Commits

- Added more unit tests [`3be90bc`](https://github.com/darkmavis1980/markdown-index-generator/commit/3be90bc5bc7e363c997b535854f1d2a21edbfd7b)

## [v0.3.2](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.3.1...v0.3.2) - 2020-06-10

### Commits

- Updated README [`87f6120`](https://github.com/darkmavis1980/markdown-index-generator/commit/87f6120056d606e51748c5c7726880108b434884)

## [v0.3.1](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.3.0...v0.3.1) - 2020-06-10

### Commits

- Fixed failing unit test [`4e5e5f3`](https://github.com/darkmavis1980/markdown-index-generator/commit/4e5e5f33a594511377614d3242a46d6921421e0b)

## [v0.3.0](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.1.3...v0.3.0) - 2020-06-10

### Commits

- Added error handling if no file is passed [`611e006`](https://github.com/darkmavis1980/markdown-index-generator/commit/611e006310a4da5854e7c124a11d437e441be7d9)
- Added support for travis CI [`48abe7a`](https://github.com/darkmavis1980/markdown-index-generator/commit/48abe7a2a6f8186c14dab4d9c239ac07959b7731)

## [v0.1.3](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.1.2...v0.1.3) - 2020-06-10

### Commits

- Fixed readme, again [`195054a`](https://github.com/darkmavis1980/markdown-index-generator/commit/195054a770659977aed368cd05dfc9a80c95f856)
- Set new version [`e19b97a`](https://github.com/darkmavis1980/markdown-index-generator/commit/e19b97ae725ceac508a71552ccd8d38208ba4ec9)
- Updated readme [`ba0ac88`](https://github.com/darkmavis1980/markdown-index-generator/commit/ba0ac88d6d4c6c8c5367d488f13c661227edd66f)

## [v0.1.2](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.1.1...v0.1.2) - 2020-06-10

### Commits

- Fixed readme [`12725d9`](https://github.com/darkmavis1980/markdown-index-generator/commit/12725d9e4bacbdfa153d57158db6873a4aaa6444)
- Updated version [`d6711b1`](https://github.com/darkmavis1980/markdown-index-generator/commit/d6711b1602058afc441d39a9fbfeae4b8ba2bb34)
- Fixed readme [`c62d4c8`](https://github.com/darkmavis1980/markdown-index-generator/commit/c62d4c8d2fbfa4560905cdad939ea572dbb14d31)

## [v0.1.1](https://github.com/darkmavis1980/markdown-index-generator/compare/v0.1.0...v0.1.1) - 2020-06-10

### Commits

- Fixed issues with confusing packages [`834f1db`](https://github.com/darkmavis1980/markdown-index-generator/commit/834f1db36a77bffb6b59d93a7da967127c51ebea)

## v0.1.0 - 2020-06-10

### Commits

- First commit [`b37807a`](https://github.com/darkmavis1980/markdown-index-generator/commit/b37807a51038390ac3ceae54b6982dbce3485f6c)
- Added depth and title flags [`bc37a4c`](https://github.com/darkmavis1980/markdown-index-generator/commit/bc37a4cff1a07ab7a995df49480a03276d85391f)

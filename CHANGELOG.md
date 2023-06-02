# [1.1.0](https://github.com/rdkcentral/ripple-rpc/compare/v1.0.0...v1.1.0) (2023-06-02)


### Features

* LifecycleManagement.session support async events when the session creation is deferred ([#69](https://github.com/rdkcentral/ripple-rpc/issues/69)) ([1bb7eb6](https://github.com/rdkcentral/ripple-rpc/commit/1bb7eb6fc446443e450ea3a8f67d899ecf69d250))

# [1.0.0](https://github.com/rdkcentral/ripple-rpc/compare/v0.0.0...v1.0.0) (2023-05-19)


### Bug Fixes

* **bug:** move all capabilities x- attributes to correct tag ([dc52abd](https://github.com/rdkcentral/ripple-rpc/commit/dc52abdca65a5a2703c0139cd18b24d24e07c92e))
* Capability for account.session should be token:account ([#60](https://github.com/rdkcentral/ripple-rpc/issues/60)) ([5f26ad2](https://github.com/rdkcentral/ripple-rpc/commit/5f26ad22e3ed8385d6d629882441d4e6e254d9e6))
* fire 157 [Fix typo in localization] ([#55](https://github.com/rdkcentral/ripple-rpc/issues/55)) ([477d2b8](https://github.com/rdkcentral/ripple-rpc/commit/477d2b84a587913ad432880d5c3d9152e268e492))
* FIRE-129 - postalCode property should be in localization, not de… ([#45](https://github.com/rdkcentral/ripple-rpc/issues/45)) ([8b76de7](https://github.com/rdkcentral/ripple-rpc/commit/8b76de74d93697f27fe76b14e7418212878b3636))
* Lifecycle management docs do not generate provider docs ([#33](https://github.com/rdkcentral/ripple-rpc/issues/33)) ([f0a3a9a](https://github.com/rdkcentral/ripple-rpc/commit/f0a3a9a685d0aa352df09bdffcf22ca93ad53fe4))
* Marking params of account.session as mandatory field. ([#62](https://github.com/rdkcentral/ripple-rpc/issues/62)) ([de1fdac](https://github.com/rdkcentral/ripple-rpc/commit/de1fdac2e212054bf24f16116c8df6ff0f583cae))
* Properties should have uses capability ([#52](https://github.com/rdkcentral/ripple-rpc/issues/52)) ([42a4833](https://github.com/rdkcentral/ripple-rpc/commit/42a483367fe18a20381dd35b12d42402b98b3a27))
* Remove tests for removed methods ([#50](https://github.com/rdkcentral/ripple-rpc/issues/50)) ([a6458d4](https://github.com/rdkcentral/ripple-rpc/commit/a6458d450d36c0a601f37ec24142e2397920a47d))
* Repo url ([05d6df9](https://github.com/rdkcentral/ripple-rpc/commit/05d6df92a459dc9678dbf5475ef67c640e21ddb8))
* ts tests on windows ([#23](https://github.com/rdkcentral/ripple-rpc/issues/23)) ([2b781f3](https://github.com/rdkcentral/ripple-rpc/commit/2b781f317bd69dbc1cb7ce123aa7d3cc30821f1a))
* types path ([e9cc50b](https://github.com/rdkcentral/ripple-rpc/commit/e9cc50bdf64f58397e399cd93e91824fc6e33c42))
* Update role for getters ([11f3916](https://github.com/rdkcentral/ripple-rpc/commit/11f39169ef5a38c2844fdc35b9300645fd541aef))
* use jsdom to mock the browser in unit tests ([#34](https://github.com/rdkcentral/ripple-rpc/issues/34)) ([590754e](https://github.com/rdkcentral/ripple-rpc/commit/590754ebb06b37343190a8ca36f3fbee28cee64a))


### Features

* Add all privacy props ([#48](https://github.com/rdkcentral/ripple-rpc/issues/48)) ([958646f](https://github.com/rdkcentral/ripple-rpc/commit/958646f32f3724ebf27aae4ac263952ca898571e))
* Add LifecycleManagement.session and LifecycleManagement.onReque… ([#36](https://github.com/rdkcentral/ripple-rpc/issues/36)) ([fcf358c](https://github.com/rdkcentral/ripple-rpc/commit/fcf358c8febd97bd33e39df4423ea069cf53b11a))
* Add metrics management ([#65](https://github.com/rdkcentral/ripple-rpc/issues/65)) ([d51bfa0](https://github.com/rdkcentral/ripple-rpc/commit/d51bfa02f3fb5d359c4470afb4768df545615091))
* APIs for managing advertising settings ([#40](https://github.com/rdkcentral/ripple-rpc/issues/40)) ([fef667a](https://github.com/rdkcentral/ripple-rpc/commit/fef667a2b53498e586e93f4926d39f1ca3572cf4))
* **caps:** New Capability Module API ([#30](https://github.com/rdkcentral/ripple-rpc/issues/30)) ([b3094df](https://github.com/rdkcentral/ripple-rpc/commit/b3094df098f517e229d7c79c9d83c69959484db2))
* Generate different scoped sessionIds when starting an AppSession ([#64](https://github.com/rdkcentral/ripple-rpc/issues/64)) ([92b16dc](https://github.com/rdkcentral/ripple-rpc/commit/92b16dcdfd33b64a71fb839e891ad0e32c05654c))
* LifecycleManagement.session to return sessionId, request passes a transport enum ([#37](https://github.com/rdkcentral/ripple-rpc/issues/37)) ([cd98b80](https://github.com/rdkcentral/ripple-rpc/commit/cd98b809838aa7c5ed1674729106a7873a20b944))
* make some fields optional ([#42](https://github.com/rdkcentral/ripple-rpc/issues/42)) ([e159ce0](https://github.com/rdkcentral/ripple-rpc/commit/e159ce070bbd06abd23891c20ea96c47ffda1d43))
* manage APIs for user grants ([#56](https://github.com/rdkcentral/ripple-rpc/issues/56)) ([578b48f](https://github.com/rdkcentral/ripple-rpc/commit/578b48f8ef8f3e7fb7b2d3002512212713bac99c))
* move capabilities API to core sdk ([#49](https://github.com/rdkcentral/ripple-rpc/issues/49)) ([30334c8](https://github.com/rdkcentral/ripple-rpc/commit/30334c89f2f5cbced68058c9f55ca9adff93248e))
* Move power module to another branch ([52888a6](https://github.com/rdkcentral/ripple-rpc/commit/52888a67f7ea8507c17d04cd70e9a9254be27ad2))
* Move some modules to a branch ([e3fc35c](https://github.com/rdkcentral/ripple-rpc/commit/e3fc35c1b860e57a8c03151d13ca406e64967c4f))
* Prepare for release ([ecf3fc9](https://github.com/rdkcentral/ripple-rpc/commit/ecf3fc92746babbc0efe40f5450ec4b438124c62))
* remove all non-ui provider APIs ([#47](https://github.com/rdkcentral/ripple-rpc/issues/47)) ([3bdbf06](https://github.com/rdkcentral/ripple-rpc/commit/3bdbf06c75e89e1ab55ac2ee746b081ca66485a6))
* remove skipRestriction manage property ([#57](https://github.com/rdkcentral/ripple-rpc/issues/57)) ([d93dffc](https://github.com/rdkcentral/ripple-rpc/commit/d93dffceb2e5048e1b4955d00cae4305f4479058))
* Set Distributor Name API ([#44](https://github.com/rdkcentral/ripple-rpc/issues/44)) ([47db7be](https://github.com/rdkcentral/ripple-rpc/commit/47db7be84a098c3af9c741b05d775de0494dfbf9))
* SystemMessage provider ([#41](https://github.com/rdkcentral/ripple-rpc/issues/41)) ([12ca780](https://github.com/rdkcentral/ripple-rpc/commit/12ca78001b5742240828a52cbd3b42312aad048d))

# [1.0.0-next.1](https://github.com/rdkcentral/ripple-rpc/compare/v0.1.0-next.3...v1.0.0-next.1) (2023-05-19)


### Bug Fixes

* Repo url ([05d6df9](https://github.com/rdkcentral/ripple-rpc/commit/05d6df92a459dc9678dbf5475ef67c640e21ddb8))


### Features

* Add metrics management ([#65](https://github.com/rdkcentral/ripple-rpc/issues/65)) ([d51bfa0](https://github.com/rdkcentral/ripple-rpc/commit/d51bfa02f3fb5d359c4470afb4768df545615091))
* Generate different scoped sessionIds when starting an AppSession ([#64](https://github.com/rdkcentral/ripple-rpc/issues/64)) ([92b16dc](https://github.com/rdkcentral/ripple-rpc/commit/92b16dcdfd33b64a71fb839e891ad0e32c05654c))

# [0.1.0-next.3](https://github.com/rdkcentral/firebolt-manage-sdk/compare/v0.1.0-next.2...v0.1.0-next.3) (2023-03-07)


### Bug Fixes

* Marking params of account.session as mandatory field. ([#62](https://github.com/rdkcentral/firebolt-manage-sdk/issues/62)) ([de1fdac](https://github.com/rdkcentral/firebolt-manage-sdk/commit/de1fdac2e212054bf24f16116c8df6ff0f583cae))

# [0.1.0-next.2](https://github.com/rdkcentral/firebolt-manage-sdk/compare/v0.1.0-next.1...v0.1.0-next.2) (2023-02-15)


### Bug Fixes

* Capability for account.session should be token:account ([#60](https://github.com/rdkcentral/firebolt-manage-sdk/issues/60)) ([5f26ad2](https://github.com/rdkcentral/firebolt-manage-sdk/commit/5f26ad22e3ed8385d6d629882441d4e6e254d9e6))

# [0.1.0-next.1](https://github.com/rdkcentral/firebolt-manage-sdk/compare/v0.0.0...v0.1.0-next.1) (2023-02-01)


### Bug Fixes

* **bug:** move all capabilities x- attributes to correct tag ([dc52abd](https://github.com/rdkcentral/firebolt-manage-sdk/commit/dc52abdca65a5a2703c0139cd18b24d24e07c92e))
* fire 157 [Fix typo in localization] ([#55](https://github.com/rdkcentral/firebolt-manage-sdk/issues/55)) ([477d2b8](https://github.com/rdkcentral/firebolt-manage-sdk/commit/477d2b84a587913ad432880d5c3d9152e268e492))
* FIRE-129 - postalCode property should be in localization, not de… ([#45](https://github.com/rdkcentral/firebolt-manage-sdk/issues/45)) ([8b76de7](https://github.com/rdkcentral/firebolt-manage-sdk/commit/8b76de74d93697f27fe76b14e7418212878b3636))
* Lifecycle management docs do not generate provider docs ([#33](https://github.com/rdkcentral/firebolt-manage-sdk/issues/33)) ([f0a3a9a](https://github.com/rdkcentral/firebolt-manage-sdk/commit/f0a3a9a685d0aa352df09bdffcf22ca93ad53fe4))
* Properties should have uses capability ([#52](https://github.com/rdkcentral/firebolt-manage-sdk/issues/52)) ([42a4833](https://github.com/rdkcentral/firebolt-manage-sdk/commit/42a483367fe18a20381dd35b12d42402b98b3a27))
* Remove tests for removed methods ([#50](https://github.com/rdkcentral/firebolt-manage-sdk/issues/50)) ([a6458d4](https://github.com/rdkcentral/firebolt-manage-sdk/commit/a6458d450d36c0a601f37ec24142e2397920a47d))
* ts tests on windows ([#23](https://github.com/rdkcentral/firebolt-manage-sdk/issues/23)) ([2b781f3](https://github.com/rdkcentral/firebolt-manage-sdk/commit/2b781f317bd69dbc1cb7ce123aa7d3cc30821f1a))
* types path ([e9cc50b](https://github.com/rdkcentral/firebolt-manage-sdk/commit/e9cc50bdf64f58397e399cd93e91824fc6e33c42))
* Update role for getters ([11f3916](https://github.com/rdkcentral/firebolt-manage-sdk/commit/11f39169ef5a38c2844fdc35b9300645fd541aef))
* use jsdom to mock the browser in unit tests ([#34](https://github.com/rdkcentral/firebolt-manage-sdk/issues/34)) ([590754e](https://github.com/rdkcentral/firebolt-manage-sdk/commit/590754ebb06b37343190a8ca36f3fbee28cee64a))


### Features

* Add all privacy props ([#48](https://github.com/rdkcentral/firebolt-manage-sdk/issues/48)) ([958646f](https://github.com/rdkcentral/firebolt-manage-sdk/commit/958646f32f3724ebf27aae4ac263952ca898571e))
* Add LifecycleManagement.session and LifecycleManagement.onReque… ([#36](https://github.com/rdkcentral/firebolt-manage-sdk/issues/36)) ([fcf358c](https://github.com/rdkcentral/firebolt-manage-sdk/commit/fcf358c8febd97bd33e39df4423ea069cf53b11a))
* APIs for managing advertising settings ([#40](https://github.com/rdkcentral/firebolt-manage-sdk/issues/40)) ([fef667a](https://github.com/rdkcentral/firebolt-manage-sdk/commit/fef667a2b53498e586e93f4926d39f1ca3572cf4))
* **caps:** New Capability Module API ([#30](https://github.com/rdkcentral/firebolt-manage-sdk/issues/30)) ([b3094df](https://github.com/rdkcentral/firebolt-manage-sdk/commit/b3094df098f517e229d7c79c9d83c69959484db2))
* LifecycleManagement.session to return sessionId, request passes a transport enum ([#37](https://github.com/rdkcentral/firebolt-manage-sdk/issues/37)) ([cd98b80](https://github.com/rdkcentral/firebolt-manage-sdk/commit/cd98b809838aa7c5ed1674729106a7873a20b944))
* make some fields optional ([#42](https://github.com/rdkcentral/firebolt-manage-sdk/issues/42)) ([e159ce0](https://github.com/rdkcentral/firebolt-manage-sdk/commit/e159ce070bbd06abd23891c20ea96c47ffda1d43))
* manage APIs for user grants ([#56](https://github.com/rdkcentral/firebolt-manage-sdk/issues/56)) ([578b48f](https://github.com/rdkcentral/firebolt-manage-sdk/commit/578b48f8ef8f3e7fb7b2d3002512212713bac99c))
* move capabilities API to core sdk ([#49](https://github.com/rdkcentral/firebolt-manage-sdk/issues/49)) ([30334c8](https://github.com/rdkcentral/firebolt-manage-sdk/commit/30334c89f2f5cbced68058c9f55ca9adff93248e))
* Move power module to another branch ([52888a6](https://github.com/rdkcentral/firebolt-manage-sdk/commit/52888a67f7ea8507c17d04cd70e9a9254be27ad2))
* Move some modules to a branch ([e3fc35c](https://github.com/rdkcentral/firebolt-manage-sdk/commit/e3fc35c1b860e57a8c03151d13ca406e64967c4f))
* Prepare for release ([ecf3fc9](https://github.com/rdkcentral/firebolt-manage-sdk/commit/ecf3fc92746babbc0efe40f5450ec4b438124c62))
* remove all non-ui provider APIs ([#47](https://github.com/rdkcentral/firebolt-manage-sdk/issues/47)) ([3bdbf06](https://github.com/rdkcentral/firebolt-manage-sdk/commit/3bdbf06c75e89e1ab55ac2ee746b081ca66485a6))
* remove skipRestriction manage property ([#57](https://github.com/rdkcentral/firebolt-manage-sdk/issues/57)) ([d93dffc](https://github.com/rdkcentral/firebolt-manage-sdk/commit/d93dffceb2e5048e1b4955d00cae4305f4479058))
* Set Distributor Name API ([#44](https://github.com/rdkcentral/firebolt-manage-sdk/issues/44)) ([47db7be](https://github.com/rdkcentral/firebolt-manage-sdk/commit/47db7be84a098c3af9c741b05d775de0494dfbf9))
* SystemMessage provider ([#41](https://github.com/rdkcentral/firebolt-manage-sdk/issues/41)) ([12ca780](https://github.com/rdkcentral/firebolt-manage-sdk/commit/12ca78001b5742240828a52cbd3b42312aad048d))

# Release Notes

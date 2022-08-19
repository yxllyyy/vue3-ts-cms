export const projectDir = `
|-- README.md
|-- babel.config.js
|-- build
|   |-- css
|   |   |-- app.f9555a1a.css
|   |   |-- chunk-14f78716.39bdf6d5.css
|   |   |-- chunk-1b1f922a.ce00fbe8.css
|   |   |-- chunk-752c2656.ae311345.css
|   |   |-- chunk-7bdf1728.dfc03658.css
|   |   |-- chunk-93b12750.dfc03658.css
|   |   |-- chunk-9565d9ba.86500a66.css
|   |   |-- chunk-e1e03128.3787306b.css
|   |   -- chunk-vendors.83b98384.css
|   |-- favicon.ico
|   |-- fonts
|   |   |-- element-icons.abe71f7d.ttf
|   |   -- element-icons.d9491be2.woff
|   |-- img
|   |   |-- login-bg.5825f033.svg
|   |   -- logo.1829caec.svg
|   |-- index.html
|   -- js
|       |-- app.5cb8563e.js
|       |-- app.5cb8563e.js.map
|       |-- chunk-14f78716.c47ca30d.js
|       |-- chunk-14f78716.c47ca30d.js.map
|       |-- chunk-1b1f922a.053072a8.js
|       |-- chunk-1b1f922a.053072a8.js.map
|       |-- chunk-2d0b37df.8e4dfbe0.js
|       |-- chunk-2d0b37df.8e4dfbe0.js.map
|       |-- chunk-2d0c42b6.47730f86.js
|       |-- chunk-2d0c42b6.47730f86.js.map
|       |-- chunk-2d0d36c2.e5fbeacd.js
|       |-- chunk-2d0d36c2.e5fbeacd.js.map
|       |-- chunk-2d20e892.e7889ffb.js
|       |-- chunk-2d20e892.e7889ffb.js.map
|       |-- chunk-2d221a33.57e422be.js
|       |-- chunk-2d221a33.57e422be.js.map
|       |-- chunk-2d22cab4.dcbb028a.js
|       |-- chunk-2d22cab4.dcbb028a.js.map
|       |-- chunk-752c2656.78d4a242.js
|       |-- chunk-752c2656.78d4a242.js.map
|       |-- chunk-7bdf1728.670c90db.js
|       |-- chunk-7bdf1728.670c90db.js.map
|       |-- chunk-93b12750.bb375e4b.js
|       |-- chunk-93b12750.bb375e4b.js.map
|       |-- chunk-94f015a4.c5d8ebc7.js
|       |-- chunk-94f015a4.c5d8ebc7.js.map
|       |-- chunk-9565d9ba.c77304a6.js
|       |-- chunk-9565d9ba.c77304a6.js.map
|       |-- chunk-e1e03128.878a62c3.js
|       |-- chunk-e1e03128.878a62c3.js.map
|       |-- chunk-vendors.952cb27e.js
|       -- chunk-vendors.952cb27e.js.map
|-- commitlint.config.js
|-- package-lock.json
|-- package.json
|-- public
|   |-- favicon.ico
|   -- index.html
|-- src
|   |-- App.vue
|   |-- assets
|   |   |-- css
|   |   |   |-- base.less
|   |   |   -- index.less
|   |   -- img
|   |       |-- login-bg.svg
|   |       -- logo.svg
|   |-- base-ui
|   |   |-- breadcrumb
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |   |   -- breadcrumb.vue
|   |   |   -- types
|   |   |       -- index.ts
|   |   |-- card
|   |   |   |-- index.ts
|   |   |   -- src
|   |   |       -- card.vue
|   |   |-- echart
|   |   |   |-- data
|   |   |   |   -- china.json
|   |   |   |-- hooks
|   |   |   |   -- useEchart.ts
|   |   |   |-- index.ts
|   |   |   -- src
|   |   |       -- base-echart.vue
|   |   |-- editor
|   |   |   |-- index.ts
|   |   |   -- src
|   |   |       |-- index.vue
|   |   |       -- type.ts
|   |   |-- form
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |   |   -- form.vue
|   |   |   -- types
|   |   |       -- index.ts
|   |   -- table
|   |       |-- index.ts
|   |       -- src
|   |           -- table.vue
|   |-- components
|   |   |-- nav-header
|   |   |   |-- index.ts
|   |   |   -- src
|   |   |       |-- nav-header.vue
|   |   |       -- user-info.vue
|   |   |-- nav-menu
|   |   |   |-- index.ts
|   |   |   -- src
|   |   |       -- nav-menu.vue
|   |   |-- page-content
|   |   |   |-- index.ts
|   |   |   -- src
|   |   |       -- page-content.vue
|   |   |-- page-echarts
|   |   |   |-- index.ts
|   |   |   |-- src
|   |   |   |   |-- bar-echart.vue
|   |   |   |   |-- line-echart.vue
|   |   |   |   |-- map-echart.vue
|   |   |   |   |-- pie-echart.vue
|   |   |   |   -- rose-echart.vue
|   |   |   |-- types
|   |   |   |   -- index.ts
|   |   |   -- utils
|   |   |       |-- convert-data.ts
|   |   |       -- coordinate-data.ts
|   |   |-- page-modal
|   |   |   |-- index.ts
|   |   |   -- src
|   |   |       -- page-modal.vue
|   |   -- page-search
|   |       |-- index.ts
|   |       -- src
|   |           -- page-search.vue
|   |-- global
|   |   |-- index.ts
|   |   |-- register-element.ts
|   |   -- register-properties.ts
|   |-- hooks
|   |   |-- use-page-modal.ts
|   |   |-- use-page-search.ts
|   |   -- use-permission.ts
|   |-- main.ts
|   |-- router
|   |   |-- index.ts
|   |   -- main
|   |       |-- analysis
|   |       |   |-- dashboard
|   |       |   |   -- dashboard.ts
|   |       |   -- overview
|   |       |       -- overview.ts
|   |       |-- product
|   |       |   |-- category
|   |       |   |   -- category.ts
|   |       |   -- goods
|   |       |       -- goods.ts
|   |       |-- story
|   |       |   |-- chat
|   |       |   |   -- chat.ts
|   |       |   -- list
|   |       |       -- list.ts
|   |       -- system
|   |           |-- department
|   |           |   -- department.ts
|   |           |-- menu
|   |           |   -- menu.ts
|   |           |-- role
|   |           |   -- role.ts
|   |           -- user
|   |               -- user.ts
|   |-- service
|   |   |-- index.ts
|   |   |-- login
|   |   |   |-- login.ts
|   |   |   -- type.ts
|   |   |-- main
|   |   |   |-- analysis
|   |   |   |   -- dashboard.ts
|   |   |   -- system
|   |   |       -- system.ts
|   |   |-- request
|   |   |   |-- config.ts
|   |   |   |-- index.ts
|   |   |   -- type.ts
|   |   -- types.ts
|   |-- shims-vue.d.ts
|   |-- store
|   |   |-- index.ts
|   |   |-- login
|   |   |   |-- login.ts
|   |   |   -- types.ts
|   |   |-- main
|   |   |   |-- analysis
|   |   |   |   |-- dashboard.ts
|   |   |   |   -- types.ts
|   |   |   |-- product
|   |   |   |-- story
|   |   |   |   |-- chat
|   |   |   |   |   |-- chat.ts
|   |   |   |   |   -- types.ts
|   |   |   |   -- list
|   |   |   |       -- list.ts
|   |   |   -- system
|   |   |       |-- system.ts
|   |   |       -- types.ts
|   |   -- types.ts
|   |-- utils
|   |   |-- cache.ts
|   |   |-- date-format.ts
|   |   -- map-menus.ts
|   -- views
|       |-- login
|       |   |-- config
|       |   |   -- account.config.ts
|       |   |-- cpns
|       |   |   |-- login-account.vue
|       |   |   |-- login-panel.vue
|       |   |   -- login-phone.vue
|       |   |-- hook
|       |   -- login.vue
|       |-- main
|       |   |-- analysis
|       |   |   |-- dashboard
|       |   |   |   -- dashboard.vue
|       |   |   -- overview
|       |   |       -- overview.vue
|       |   |-- main.vue
|       |   |-- product
|       |   |   |-- category
|       |   |   |   -- category.vue
|       |   |   -- goods
|       |   |       |-- config
|       |   |       |   -- content.config.ts
|       |   |       -- goods.vue
|       |   |-- story
|       |   |   |-- chat
|       |   |   |   -- chat.vue
|       |   |   -- list
|       |   |       |-- config
|       |   |       |   -- content.config.ts
|       |   |       -- list.vue
|       |   -- system
|       |       |-- department
|       |       |   |-- config
|       |       |   |   |-- content.config.ts
|       |       |   |   -- search.config.ts
|       |       |   -- department.vue
|       |       |-- menu
|       |       |   |-- config
|       |       |   |   -- content.config.ts
|       |       |   -- menu.vue
|       |       |-- role
|       |       |   |-- config
|       |       |   |   |-- content.config.ts
|       |       |   |   |-- modal.config.ts
|       |       |   |   -- search.config.ts
|       |       |   -- role.vue
|       |       -- user
|       |           |-- config
|       |           |   |-- content.config.ts
|       |           |   |-- modal.config.ts
|       |           |   -- search.config.ts
|       |           -- user.vue
|       -- not-found
|           -- not-found.vue
|-- tree.text
|-- tsconfig.json
-- vue.config.js`

# sandbox-snowpack-axios

## commands

- `npx snowpack dev --verbose`
- `npx snowpack build --verbose`

## note

Snowpack は `import` 文をもとに、`node_modules` で対象のモジュールを探索。
その後、そのモジュールの package.json をもとにビルドし読み込めるようにしている模様。

ビルド後の `_snowpack` 内の構成は次のとおり。

```
$ tree build/_snowpack
build/_snowpack
├── env.js
└── pkg
    ├── axios.js
    └── import-map.json

1 directory, 3 files
```

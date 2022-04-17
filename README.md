# PnpmDemo

angular monorepo demo by pnpm

angular单仓库示例，使用pnpm进行管理

## run

### 安装pnpm

```
npm i -g pnpm
```

### 调试

```
# 启动app-one
pnpm start:app-one

# 启动app-two
pnpm start:app-two
```

### 编译

```
# 编译所有应用和库
pnpm build

# 编译lib-a
pnpm build:lib-a

# 编译lib-b
pnpm build:lib-b
```
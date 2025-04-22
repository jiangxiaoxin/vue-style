# Vue Style 项目

## 项目简介

这是一个基于 Vue 3 + Vite 的前端项目，集成了现代化的开发工具链，包括 ESLint、Prettier、Husky 和 Commitlint 等，以确保代码质量和开发规范。

## 环境要求

- Node.js >= 18.0.0 (推荐使用 Node.js 18 LTS 版本)
- npm >= 9.0.0

## 开发工具

- Vue 3.5.13
- Vite 6.3.1
- TypeScript
- ESLint
- Prettier
- Husky
- Commitlint

## 项目设置

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 代码规范

本项目使用 ESLint 和 Prettier 进行代码格式化，使用 Husky 和 Commitlint 规范 Git 提交信息。

### Git 提交规范

提交信息必须符合 Conventional Commits 规范，格式如下：

```
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

type 类型包括：

- `feat`: 新功能
- `fix`: 修复
- `docs`: 文档变更
- `style`: 代码格式
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 增加测试
- `chore`: 构建过程或辅助工具的变动
- `revert`: 回退
- `build`: 打包
- `ci`: CI 配置

示例：

```
feat(user): 添加用户登录功能
fix(auth): 修复 token 过期问题
docs(readme): 更新安装说明
```

## 项目结构

```
vue-style/
├── src/                # 源代码目录
├── public/            # 静态资源目录
├── .husky/           # Git hooks 配置
├── .eslintrc.js      # ESLint 配置
├── .prettierrc       # Prettier 配置
├── commitlint.config.js  # Commitlint 配置
├── vite.config.js    # Vite 配置
└── package.json      # 项目依赖配置
```

## 注意事项

1. 确保使用正确的 Node.js 版本（>= 18.0.0）
2. 提交代码前请确保通过所有 lint 检查
3. 遵循 Git 提交信息规范
4. 建议使用 VSCode 编辑器，并安装推荐的插件：
   - ESLint
   - Prettier
   - Volar (Vue 3)

## 常见问题

如果遇到 `structuredClone is not defined` 错误，请确保：

1. Node.js 版本 >= 18.0.0
2. 如果必须使用较低版本的 Node.js，请降级 ESLint 版本：

   ```bash
   npm install -D eslint@8.57.0 @eslint/js@8.57.0
   ```

## 许可证

[MIT](LICENSE)

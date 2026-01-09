# LEMO | 乐墨科技官网

您的 AI 技术合伙人 - 无需组建昂贵的研发团队，以 20% 的成本、3 倍的速度实现业务数字化落地。

## 🌐 在线预览

- 网站: https://ilearnmore.cn

## ✨ 功能特性

- 🌍 **中英双语** - 语言偏好保存在 localStorage
- 🌙 **暗色主题** - 默认暗色，支持主题切换
- 📱 **响应式设计** - 完美适配各种设备
- 📧 **表单集成** - Formspree（https://formspree.io/）集成，提交内容发送至邮箱
- � **SEO 优化** - Open Graph、Twitter Cards、地理标签
- 📝 **ICP 备案** - 符合中国大陆备案要求

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **UI 组件**: shadcn/ui
- **类型**: TypeScript
- **表单**: Formspree（https://formspree.io/）
- **主题**: next-themes

## 📄 页面列表

| 页面 | 路径 | 描述 |
|------|------|------|
| 首页 | `/` | Hero、痛点分析、价值主张 |
| 解决方案 | `/solutions` | 三大服务介绍 |
| 客户案例 | `/cases` | 成功案例展示 |
| 关于我们 | `/about` | 团队介绍 |
| 免费诊断 | `/contact` | 业务诊断表单 |

## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/0xZhaocai/ilearnmore.git
cd ilearnmore

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 📁 项目结构

```
├── app/                 # Next.js App Router
│   ├── about/          # 关于我们页面
│   ├── cases/          # 客户案例页面
│   ├── contact/        # 免费诊断页面
│   ├── solutions/      # 解决方案页面
│   ├── layout.tsx      # 根布局 (SEO 配置)
│   └── page.tsx        # 首页
├── components/         # 可复用组件
│   ├── layout/         # 布局组件 (Header, Footer)
│   ├── ui/             # shadcn/ui 组件
│   └── dynamic-title.tsx # 动态标题组件
├── lib/
│   ├── i18n.tsx        # 国际化上下文
│   ├── locales/        # 中英文翻译文件
│   └── data.ts         # 静态数据
└── public/
    └── images/         # 图片资源
```

## ⚙️ 配置

### 表单提交
表单使用 Formspree（https://formspree.io/）服务。如需更换，修改 `app/contact/page.tsx` 中的 `FORMSPREE_ENDPOINT`。

### SEO 配置
SEO 元数据在 `app/layout.tsx` 中配置，包括：
- metadataBase
- Open Graph
- Twitter Cards
- 地理标签

### 多语言
翻译文件位于 `lib/locales/` 目录：
- `zh.ts` - 中文
- `en.ts` - 英文

## 📄 许可证

MIT License

## 📞 联系方式

- 邮箱: info@ilearnmore.cn
- 网站: https://ilearnmore.cn

## ☁️ 部署

- 代码库: https://github.com/0xZhaocai/ilearnmore.git
- 平台: Cloudflare (algerchen@gmail.com 账号)。
- `npm run build`（已启用 `output: 'export'`，构建会把静态 HTML 输出到 `./out`）。
- `npx wrangler deploy` 会使用仓库根目录的 `wrangler.toml`，将 `./out` 上传到 Cloudflare Worker Site；部署前请确保 Cloudflare 项目中设置了 `CF_ACCOUNT_ID`（或在 `wrangler.toml` 中指定）。

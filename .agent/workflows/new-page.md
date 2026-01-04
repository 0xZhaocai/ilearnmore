---
description: 创建新页面的标准流程
---

# 创建新页面

## 步骤

1. 在 `app/` 目录下创建新的页面文件夹和 `page.tsx`
   - 例如：`app/about/page.tsx`

2. 使用以下模板作为起点：
```tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "页面标题 | LEMO",
  description: "页面描述",
};

export default function PageName() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold">页面标题</h1>
      {/* 页面内容 */}
    </main>
  );
}
```

3. 如果需要，在导航栏添加链接
   - 编辑 `components/layout/navbar.tsx`
   - 添加对应的国际化文本到 `lib/locales/`

4. 添加国际化支持
   - 在 `lib/locales/zh.ts` 和 `lib/locales/en.ts` 添加翻译

// turbo
5. 启动开发服务器测试
```bash
npm run dev
```

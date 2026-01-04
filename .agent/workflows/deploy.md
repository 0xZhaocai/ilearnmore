---
description: 部署网站到 Cloudflare Pages
---

# 部署到 Cloudflare Pages

## 前置检查

// turbo
1. 先运行构建确保没有错误
```bash
npm run build
```

2. 如果构建失败，修复错误后重试

## 部署步骤

3. 提交所有更改到 Git
```bash
git add .
git commit -m "chore: prepare for deployment"
```

4. 推送到远程仓库触发自动部署
```bash
git push origin main
```

5. 访问 Cloudflare Pages 面板查看部署状态

## 验证

6. 部署完成后，访问生产网站验证更改

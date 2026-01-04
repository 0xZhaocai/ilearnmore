---
description: 运行代码检查修复问题
---

# 代码质量检查

// turbo
1. 运行 ESLint 检查代码
```bash
npm run lint
```

2. 检查输出结果：
   - 如果有错误，修复报告中的问题
   - 如果有警告，评估是否需要处理

3. 常见问题修复：
   - 未使用的变量：删除或添加 `// eslint-disable-next-line`
   - 缺少依赖：检查 useEffect 依赖数组
   - 类型错误：添加正确的 TypeScript 类型

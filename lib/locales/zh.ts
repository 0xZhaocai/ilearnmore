export const zh = {
    // Navigation
    nav: {
        home: '首页',
        solutions: '解决方案',
        cases: '客户案例',
        about: '关于我们',
        contact: '免费诊断',
        cta: '免费业务诊断',
    },

    // Hero Section
    hero: {
        title: '懂业务就能做软件：您的 AI 技术合伙人',
        subtitle: '无需组建昂贵的研发团队。乐墨科技利用 AI 编程与 RPA 自动化，帮助中小企业以 20% 的成本、3 倍的速度实现业务数字化落地。',
        cta1: '预约 15 分钟免费评估',
        cta2: '查看成功案例',
    },

    // Pain Points Section
    painPoints: {
        title: '您是否面临这些"技术卡点"？',
        items: [
            {
                title: '想法无法落地',
                description: '有绝佳的商业点子，但外包报价动辄几十万，甚至不知道如何编写需求文档。',
                audience: '创业者/老板',
            },
            {
                title: '人效被低估',
                description: '团队每天花费数小时处理 Excel、复制粘贴，陷于重复劳动，无法发挥创造力。',
                audience: '运营/财务',
            },
            {
                title: '数据孤岛',
                description: '系统之间数据不通，想要一个简单的实时数据看板，但技术部排期遥遥无期。',
                audience: '业务负责人',
            },
        ],
    },

    // Value Proposition Section
    valueProposition: {
        title: '像"产品经理"思考，像"资深极客"交付',
        items: [
            {
                title: '懂生意逻辑',
                description: '我们不是只会写代码的执行者，首先是懂商业闭环的产品专家。在开发前，乐墨团队先帮您梳理业务逻辑。',
            },
            {
                title: 'AI 极速交付',
                description: '利用 Cursor/Claude 等前沿 AI 技术，大幅缩减编码周期。让您的 MVP 两周内上线验证。',
            },
            {
                title: '全流程自动化',
                description: '从定制软件开发到 RPA 流程自动化，我们提供一站式解决方案，打通业务流的最后"一公里"。',
            },
        ],
    },

    // Solutions Page
    solutions: {
        title: '全场景数字化解决方案',
        subtitle: '不论是从 0 到 1 的创造，还是从 1 到 100 的效率提升，乐墨科技都有对应方案。',
        dev: {
            title: '极速产品落地',
            subtitle: 'AI-Powered Development',
            scenarios: 'SaaS 原型开发 / 企业内部管理后台 / 微信小程序 / H5 活动页',
            advantages: [
                { label: '快', text: '2 周内完成从需求梳理到上线。' },
                { label: '省', text: '相比传统外包，开发成本降低 60%-80%。' },
                { label: '准', text: '基于产品思维的需求拆解，拒绝"做出来的不是我想要的"。' },
            ],
            promise: '您只管提想法，我们负责画图、写码、上线。',
        },
        rpa: {
            title: '数字化员工',
            subtitle: 'RPA Automation',
            scenarios: '财务对账 / 电商订单抓取 / 竞品数据监控 / 跨系统数据同步',
            advantages: [
                { label: '全天候', text: '24 小时无休的"数字员工"。' },
                { label: '零侵入', text: '无需打通底层接口，模拟人工操作，即装即用。' },
                { label: '零错误', text: '告别手滑，数据处理准确率 100%。' },
            ],
        },
        training: {
            title: '赋能培训与咨询',
            subtitle: 'Empowerment',
            scenarios: '团队技术内训 / AI 工具流搭建 / 个人技能转型',
            advantages: [
                { label: '授人以渔', text: '教您的业务骨干掌握 AI 编程与自动化工具。' },
                { label: '实战导向', text: '不讲枯燥理论，直接上手解决公司实际问题。' },
            ],
        },
    },

    // Cases Page
    cases: {
        title: '每一个案例，都是一次业务的重生',
        readMore: '阅读完整故事',
        items: [
            {
                id: 'mvp-edu',
                tags: ['MVP开发', '教育行业', 'AI编程'],
                title: '被 20 万外包报价劝退？我们帮这位创业者 12 天上线 MVP',
                metrics: [
                    { value: '12 天', label: '交付上线' },
                    { value: '20%', label: '开发成本（对比传统外包）' },
                    { value: '0', label: '技术背景（客户无代码经验）' },
                ],
                summary: '客户拥有独家留学算法但不懂技术。乐墨科技跳过繁琐的技术文档，直接将其 Excel 逻辑转化为 AI 代码。客户评价："你们是唯一一家不问我「接口文档」，而是问我「业务逻辑」的团队。"',
            },
            {
                id: 'rpa-trade',
                tags: ['降本增效', 'RPA自动化', '跨境电商'],
                title: '告别"表哥表姐"，一家贸易公司如何每年节省 1200 小时人工',
                metrics: [
                    { value: '0 分钟', label: '人工录入时间' },
                    { value: '100%', label: '数据准确率' },
                    { value: '2 名', label: '员工成功转型' },
                ],
                summary: '面对每日繁琐的跨平台订单录入，我们部署了 RPA 机器人自动下载报表并录入 ERP。不仅消灭了加班，更让财务与运营团队从机械劳动中解放出来。',
            },
        ],
    },

    // About Page
    about: {
        title: '我们是您的"业务翻译官"与"技术实现者"',
        intro: '很多企业找外包最头疼的不是技术，而是"沟通"——技术听不懂业务，业务听不懂代码。',
        description: '乐墨科技（LEMO）不同。我们的核心团队出身于资深产品经理与运营专家。这意味着：',
        points: [
            {
                title: '我们听得懂您的生意',
                description: '在写第一行代码前，我们先帮您梳理商业逻辑和用户体验，确保做出来的东西是您真正想要的。',
            },
            {
                title: '我们掌握最新的 AI 生产力',
                description: '我们不堆砌人力，而是利用最前沿的 AI 编程技术 (AI Native Dev) 和 RPA 工具，剔除传统开发中的水分。',
            },
        ],
        conclusion: '我们不仅仅是开发商，更是您业务团队的延伸。我们致力于让技术门槛消失，让商业价值浮现。',
    },

    // Contact Page
    contact: {
        title: '15 分钟免费业务诊断',
        subtitle: '不聊复杂的代码架构，只聊怎么用最低成本解决您的业务难题。',
        benefits: [
            { icon: '✅', title: '可行性评估', description: '您的需求是用 AI 写新软件，还是用 RPA 连旧系统？或者用 Excel 就能搞定？' },
            { icon: '✅', title: '避坑指南', description: '类似项目通常哪里最烧钱？帮您节省可能的试错成本。' },
            { icon: '✅', title: '落地路线', description: '如果本月要上线，第一周该做什么？我们需要您提供什么？' },
            { icon: '🎁', title: '承诺', description: '全程使用"人话"沟通，无技术黑话，无强行推销。' },
        ],
        form: {
            name: '您的称呼',
            contact: '联系方式 (手机/微信)',
            role: '您的身份',
            roles: ['创业者/老板', '业务负责人', '产品经理', '其他'],
            painPoints: '您目前最大的痛点是？',
            painPointOptions: [
                '想做软件/小程序，外包太贵',
                '内部流程繁琐，想用 RPA 自动化',
                '数据不通，想要自动看板',
                '团队想学 AI 编程技能',
            ],
            submit: '免费获取业务诊断方案',
        },
    },

    // Footer
    footer: {
        slogan: '乐墨科技 - 赋能业务精英，让想法即刻落地。',
        navigation: '导航',
        services: '服务',
        contactTitle: '联系我们',
        email: 'info@ilearnmore.cn',
        wechat: '点击添加微信',
        wechatModal: {
            title: '添加顾问微信',
            description: '请扫描二维码添加顾问微信',
        },
        copyright: '© 2025 乐墨科技 (LEMO). All Rights Reserved.',
        serviceList: ['极速产品落地', '数字化员工', '赋能培训与咨询'],
    },

    // SEO Metadata
    seo: {
        siteTitle: 'LEMO | 乐墨科技 - 您的 AI 技术合伙人',
        siteDescription: '无需组建昂贵的研发团队。乐墨科技利用 AI 编程与 RPA 自动化，帮助中小企业以 20% 的成本、3 倍的速度实现业务数字化落地。',
        keywords: 'AI编程,RPA自动化,数字化转型,软件开发,中小企业,低成本开发,MVP开发,乐墨科技',
        pages: {
            home: '首页',
            solutions: '解决方案',
            cases: '客户案例',
            about: '关于我们',
            contact: '免费业务诊断',
        },
    },
}

export type Translations = typeof zh

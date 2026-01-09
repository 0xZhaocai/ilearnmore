import type { Translations } from './zh'

export const en: Translations = {
    // Navigation
    nav: {
        home: 'Home',
        solutions: 'Solutions',
        cases: 'Cases',
        about: 'About',
        contact: 'Contact',
        cta: 'Free Consultation',
    },

    // Hero Section
    hero: {
        title: 'Understand Business, Build Software: Your AI Technology Partner',
        subtitle: 'No need for an expensive dev team. LEMO leverages AI programming and RPA automation to help SMBs achieve digital transformation at 20% cost, 3x speed.',
        cta1: 'Book 15-Min Free Consultation',
        cta2: 'View Success Stories',
    },

    // Pain Points Section
    painPoints: {
        title: 'Are You Facing These "Tech Bottlenecks"?',
        items: [
            {
                title: 'Ideas Stuck on Paper',
                description: 'Great business ideas, but outsourcing quotes are sky-high, and you don\'t even know how to write a requirements doc.',
                audience: 'Entrepreneurs',
            },
            {
                title: 'Efficiency Undervalued',
                description: 'Team spends hours on Excel and copy-paste tasks, stuck in repetitive work instead of creating value.',
                audience: 'Operations/Finance',
            },
            {
                title: 'Data Silos',
                description: 'Systems don\'t talk to each other. You want a simple real-time dashboard, but IT says "maybe next quarter."',
                audience: 'Business Leaders',
            },
        ],
    },

    // Value Proposition Section
    valueProposition: {
        title: 'Think Like a Product Manager, Deliver Like a Senior Engineer',
        items: [
            {
                title: 'Business-First Mindset',
                description: 'We\'re not just coders—we\'re product experts who understand business logic. Before writing code, we help you clarify your workflow.',
            },
            {
                title: 'AI-Powered Delivery',
                description: 'Using cutting-edge AI tools like Cursor and Claude to dramatically reduce development cycles. Get your MVP live in 2 weeks.',
            },
            {
                title: 'End-to-End Automation',
                description: 'From custom software to RPA automation, we offer one-stop solutions to bridge the last mile of your business processes.',
            },
        ],
    },

    // Solutions Page
    solutions: {
        title: 'Full-Scenario Digital Solutions',
        subtitle: 'Whether building from 0 to 1, or scaling from 1 to 100, LEMO has the right solution for you.',
        dev: {
            title: 'Rapid Product Launch',
            subtitle: 'AI-Powered Development',
            scenarios: 'SaaS Prototypes / Internal Admin Panels / WeChat Mini Programs / H5 Landing Pages',
            advantages: [
                { label: 'Fast', text: 'From requirements to launch in 2 weeks.' },
                { label: 'Affordable', text: '60%-80% cost reduction vs traditional outsourcing.' },
                { label: 'Accurate', text: 'Product-driven requirements breakdown. No more "that\'s not what I wanted."' },
            ],
            promise: 'You bring the ideas—we handle design, coding, and deployment.',
        },
        rpa: {
            title: 'Digital Workforce',
            subtitle: 'RPA Automation',
            scenarios: 'Financial Reconciliation / E-commerce Order Scraping / Competitor Monitoring / Cross-System Data Sync',
            advantages: [
                { label: '24/7', text: 'A "digital employee" that never sleeps.' },
                { label: 'Zero Integration', text: 'No API needed—simulates human actions, plug-and-play.' },
                { label: 'Zero Errors', text: 'Say goodbye to manual mistakes. 100% data accuracy.' },
            ],
        },
        training: {
            title: 'Training & Consulting',
            subtitle: 'Empowerment',
            scenarios: 'Team Tech Training / AI Workflow Setup / Personal Skill Transformation',
            advantages: [
                { label: 'Teach to Fish', text: 'Train your business team to master AI programming and automation tools.' },
                { label: 'Hands-On', text: 'Skip the boring theory—solve real company problems directly.' },
            ],
        },
    },

    // Cases Page
    cases: {
        title: 'Every Case Is a Business Reborn',
        readMore: 'Read Full Story',
        items: [
            {
                id: 'mvp-edu',
                tags: ['MVP Development', 'Education', 'AI Programming'],
                title: 'Rejected by $30K Outsourcing Quote? We Helped This Founder Launch MVP in 12 Days',
                metrics: [
                    { value: '12 Days', label: 'Time to Launch' },
                    { value: '20%', label: 'Cost (vs Traditional Outsourcing)' },
                    { value: '0', label: 'Tech Background (Client had no coding experience)' },
                ],
                summary: 'The client had a proprietary study-abroad algorithm but no tech skills. LEMO skipped complex tech docs and directly translated their Excel logic into AI-generated code. Client feedback: "You\'re the only team that asked about my business logic, not my API documentation."',
            },
            {
                id: 'rpa-trade',
                tags: ['Cost Reduction', 'RPA Automation', 'Cross-Border E-commerce'],
                title: 'Goodbye Spreadsheet Warriors: How a Trading Company Saved 1,200 Hours Annually',
                metrics: [
                    { value: '0 Min', label: 'Manual Data Entry' },
                    { value: '100%', label: 'Data Accuracy' },
                    { value: '2', label: 'Employees Successfully Upskilled' },
                ],
                summary: 'Facing daily tedious cross-platform order entry, we deployed RPA bots to auto-download reports and input into ERP. Eliminated overtime and freed finance & ops teams from mechanical labor.',
            },
        ],
    },

    // About Page
    about: {
        title: 'Your "Business Translator" and "Tech Implementer"',
        intro: 'The biggest headache in outsourcing isn\'t technology—it\'s communication. Tech doesn\'t understand business; business doesn\'t understand code.',
        description: 'LEMO is different. Our core team comes from senior Product Management and Operations backgrounds. This means:',
        points: [
            {
                title: 'We Understand Your Business',
                description: 'Before writing a single line of code, we help you clarify business logic and user experience, ensuring we build exactly what you need.',
            },
            {
                title: 'We Master the Latest AI Tools',
                description: 'We don\'t just throw more developers at the problem. We leverage cutting-edge AI-native development and RPA tools to eliminate waste.',
            },
        ],
        conclusion: 'We\'re not just vendors—we\'re an extension of your business team. We make technology barriers disappear so business value can emerge.',
    },

    // Contact Page
    contact: {
        title: '15-Minute Free Business Consultation',
        subtitle: 'Skip the complex architecture talk—let\'s focus on solving your business problems at minimal cost.',
        benefits: [
            { icon: '✅', title: 'Feasibility Assessment', description: 'Do you need new AI-built software, RPA to connect legacy systems, or can Excel handle it?' },
            { icon: '✅', title: 'Pitfall Prevention', description: 'Where do similar projects usually burn money? We help you avoid costly trial-and-error.' },
            { icon: '✅', title: 'Implementation Roadmap', description: 'If you want to launch this month, what should week one look like? What do we need from you?' },
            { icon: '🎁', title: 'Our Promise', description: 'Plain language only—no tech jargon, no hard selling.' },
        ],
        form: {
            name: 'Your Name',
            contact: 'Contact Info (Phone/WeChat)',
            role: 'Your Role',
            roles: ['Entrepreneur/Founder', 'Business Leader', 'Product Manager', 'Other'],
            painPoints: 'What\'s your biggest pain point?',
            painPointOptions: [
                'Want to build software/mini-program, but outsourcing is too expensive',
                'Internal processes are tedious, want RPA automation',
                'Data silos, want automated dashboards',
                'Team wants to learn AI programming skills',
            ],
            submit: 'Get Free Business Assessment',
        },
    },

    // Footer
    footer: {
        slogan: 'LEMO - Empowering business experts to turn ideas into reality.',
        navigation: 'Navigation',
        services: 'Services',
        contactTitle: 'Contact Us',
        email: 'info@ilearnmore.cn',
        wechat: 'Add WeChat',
        wechatModal: {
            title: 'Add Consultant WeChat',
            description: 'Scan QR code to add our consultant on WeChat',
        },
        copyright: '© 2026 LEMO Tech. All Rights Reserved.',
        serviceList: ['Rapid Product Launch', 'Digital Workforce', 'Training & Consulting'],
    },

    // SEO Metadata
    seo: {
        siteTitle: 'LEMO Tech - Your AI Technology Partner',
        siteDescription: 'No need to build an expensive dev team. LEMO leverages AI programming and RPA automation to help SMBs achieve digital transformation at 20% cost, 3x speed.',
        keywords: 'AI programming,RPA automation,digital transformation,software development,SMB,low-cost development,MVP development,LEMO Tech',
        pages: {
            home: 'Home',
            solutions: 'Solutions',
            cases: 'Case Studies',
            about: 'About Us',
            contact: 'Free Consultation',
        },
    },
}

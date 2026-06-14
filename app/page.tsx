'use client';

import { useEffect, useState } from 'react';

type Section = 'about' | 'research' | 'achievements' | 'admission' | 'contact';
type Language = 'zh' | 'en';

function GoogleIcon() {


    return (
        <span
            aria-hidden="true"
            className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white font-bold shadow-sm"
        >
            <span className="text-[13px] leading-none">
                <span className="text-blue-500">G</span>
            </span>
        </span>
    );
}

function MailIcon() {
    return (
        <span
            aria-hidden="true"
            className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-blue-50 text-blue-600"
        >
            ✉
        </span>
    );
}

function ResearchGateIcon() {
    return (
        <span
            aria-hidden="true"
            className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-emerald-50 text-[11px] font-bold text-emerald-600"
        >
            R
        </span>
    );
}

function TeamIcon() {
    return (
        <span
            aria-hidden="true"
            className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-purple-50 text-purple-600"
        >
            ◆
        </span>
    );
}

function ResearchVisual({ type }: { type: 'agents' | 'multimodal' | 'embodied' }) {
    if (type === 'agents') {
        return (
            <svg viewBox="0 0 280 150" className="h-36 w-full" aria-hidden="true">
                <defs>
                    <linearGradient id="agentsGradient" x1="0" x2="1" y1="0" y2="1">
                        <stop offset="0%" stopColor="#dbeafe" />
                        <stop offset="100%" stopColor="#ede9fe" />
                    </linearGradient>
                </defs>
                <rect x="18" y="18" width="244" height="114" rx="28" fill="url(#agentsGradient)" />
                <circle cx="140" cy="74" r="28" fill="#ffffff" opacity="0.9" />
                <path d="M124 68h32M124 80h32M140 58v32" stroke="#4f46e5" strokeWidth="4" strokeLinecap="round" />
                <g fill="#2563eb">
                    <circle cx="68" cy="48" r="12" />
                    <circle cx="72" cy="102" r="12" />
                    <circle cx="212" cy="48" r="12" />
                    <circle cx="208" cy="102" r="12" />
                </g>
                <g stroke="#64748b" strokeWidth="3" strokeLinecap="round" opacity="0.75">
                    <path d="M80 52l34 14M82 98l32-16M200 52l-34 14M198 98l-32-16" />
                    <path d="M68 48h-22M212 48h22M72 102h-22M208 102h22" />
                </g>
                <g fill="#ffffff">
                    <circle cx="68" cy="48" r="4" />
                    <circle cx="72" cy="102" r="4" />
                    <circle cx="212" cy="48" r="4" />
                    <circle cx="208" cy="102" r="4" />
                </g>
                <text x="102" y="122" fill="#334155" fontSize="12" fontWeight="700">
                    Domain Agents
                </text>
            </svg>
        );
    }

    if (type === 'multimodal') {
        return (
            <svg viewBox="0 0 280 150" className="h-36 w-full" aria-hidden="true">
                <rect x="18" y="18" width="244" height="114" rx="28" fill="#f5f3ff" />
                <rect x="44" y="37" width="54" height="34" rx="12" fill="#dbeafe" />
                <path d="M55 60l13-13 11 10 8-7" stroke="#2563eb" strokeWidth="3" fill="none" />
                <rect x="44" y="82" width="54" height="30" rx="12" fill="#dcfce7" />
                <path d="M56 98h30M56 90h22M56 106h18" stroke="#059669" strokeWidth="3" strokeLinecap="round" />
                <g transform="translate(188 44)">
                    <rect width="48" height="58" rx="14" fill="#ede9fe" />
                    <path d="M13 18h22M13 30h22M13 42h16" stroke="#7c3aed" strokeWidth="3" strokeLinecap="round" />
                </g>
                <circle cx="142" cy="75" r="26" fill="#ffffff" opacity="0.9" />
                <path d="M116 75h-18M168 75h20M124 61l-26-10M124 89l-26 10M160 61l28-10M160 89l28 10" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
                <circle cx="142" cy="75" r="17" fill="#eef2ff" stroke="#4f46e5" strokeWidth="3" />
                <path d="M132 75h20M142 65v20" stroke="#4f46e5" strokeWidth="5" strokeLinecap="round" />
                <text x="112" y="121" fill="#334155" fontSize="12" fontWeight="700">
                    Multi-omics Fusion
                </text>
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 280 150" className="h-36 w-full" aria-hidden="true">
            <rect x="18" y="18" width="244" height="114" rx="28" fill="#eef2ff" />
            <path d="M54 112h172" stroke="#c7d2fe" strokeWidth="5" strokeLinecap="round" />
            <rect x="58" y="88" width="38" height="22" rx="8" fill="#ffffff" opacity="0.95" />
            <circle cx="86" cy="86" r="9" fill="#2563eb" />
            <path
                d="M86 86l34-22 31 18"
                stroke="#4f46e5"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <circle cx="120" cy="64" r="10" fill="#bfdbfe" stroke="#4f46e5" strokeWidth="3" />
            <circle cx="151" cy="82" r="10" fill="#bfdbfe" stroke="#4f46e5" strokeWidth="3" />
            <path
                d="M151 82l28-16"
                stroke="#4f46e5"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
            />
            <path d="M181 64l14-8M182 68l16 4" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
            <rect x="196" y="46" width="36" height="30" rx="10" fill="#ffffff" opacity="0.95" />
            <path d="M205 61h18M214 52v18" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
            <path d="M105 42c24-14 58-14 82 0" stroke="#94a3b8" strokeWidth="3" strokeDasharray="5 6" fill="none" />
            <text x="92" y="127" fill="#334155" fontSize="12" fontWeight="700">
                Embodied Affordance
            </text>
        </svg>
    );
}

function HighlightAuthor({ authors }: { authors: string }) {
    const parts = authors.split(/(Ruichao Hou\*?)/g);

    return (
        <>
            {parts.map((part, index) => (
                <span key={`${part}-${index}`}>
                    {part.startsWith('Ruichao Hou') ? (
                        <strong className="font-bold text-slate-800">{part}</strong>
                    ) : (
                        part
                    )}
                </span>
            ))}
        </>
    );
}

export default function Page() {
    const [activeSection, setActiveSection] = useState<Section>('about');
    const [language, setLanguage] = useState<Language>('zh');
    const [scholarCitations, setScholarCitations] = useState<string>('1000+');
    const [isVisible, setIsVisible] = useState(false);
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
    const withBasePath = (assetPath: string) => `${basePath}${assetPath}`;
    const isZh = language === 'zh';

    const text = {
        zh: {
            headerName: '侯瑞超   博士',
            nav: {
                about: '关于我',
                research: '研究方向',
                achievements: '学术成果',
                admission: '招生信息',
                contact: '知识产权',
            },
            switchLabel: 'EN',
            name: '侯瑞超',
            avatarAlt: '侯瑞超头像',
            title: '副教授 · 硕士生导师',
            admissionMajor: '招生专业：人工智能药学、医药大数据与人工智能',
            university: '中国药科大学',
            address: '江苏省南京市鼓楼区童家巷24号',
            team: '团队主页',
            introTitle: '个人简介',
            intro: [
                '侯瑞超，男，中国药科大学副教授、硕士生导师。毕业于南京大学计算机科学与技术系，获得工学博士学位，并入选南京大学优秀博士创新能力提升计划。现担任江苏省信息技术应用学会具身智能专委会副秘书长。目前主要从事面向药物发现的人工智能技术研究和转化落地。先后主持国家级项目1项，作为骨干成员参与多项国家级、省部级科技项目。在TCSVT、TCI、ICME等国际高水平刊物上发表论文40余篇，其中1篇入选ESI高被引论文；授权发明专利3项，登记软件著作权12项。',
            ],
            workTitle: '工作经历',
            work: [
                '2024-2026，南京大学，软件学院，助理研究员',
                '2026-现在，中国药科大学，生物医药卓越工程师学院，副教授',
            ],
            serviceTitle: '学术服务',
            service: [
                '担任江苏省信息技术应用学会具身智能专委会副秘书长',
                '2025 ICCVIT Workshop 主席',
                '担任 TPAMI、TNNLS、TMM、AAAI 等国际权威刊物审稿人',
            ],
            newsTitle: '动态',
            news: [
                '2026年6月7日，指导学生获第十五届“挑战杯”中国大学生创业计划竞赛江苏省一等奖。',
                '2026年6月，个人学术主页上线。',
                '欢迎对药学人工智能、多模态表征学习、大模型及其应用感兴趣的同学联系交流。',
            ],
            researchHeading: '研究方向',
            researchSubtitle:
                '隶属于全维智药（OmniDrug）团队，关注面向药物发现的人工智能前沿技术研究和落地应用，包括：垂类大模型及多智能体、多模态融合与表征学习、具身智能与无人化实验等，与南京大学MAGUS研究组保持紧密合作。',
            achievementsHeading: '学术成果',
            achievementsSubtitle: '聚焦药学人工智能与多模态学习。',
            honorsTitle: '代表性荣誉',
            papersTitle: '科研论文',
            patentsTitle: '发明专利',
            softwareTitle: '软件著作权',
            papers: [
                '在 TCSVT、TCI、PR 等国际高水平刊物上发表论文40余篇，引用超过1000余次，其中1篇入选 ESI 高被引论文。',
                '申请或授权发明专利13项，登记软件著作权12项。',
            ],
            admissionTitle: '招生信息',
            admissionText:
                '长期招收对药学人工智能、计算机交叉、具身智能等前沿交叉领域感兴趣的博士生、硕士生和本科生。如果您希望加入我们，欢迎联系。',
            admissionLabel: '招生专业',
            admissionValue: '人工智能药学、医药大数据与人工智能',
            contactTitle: '知识产权',
            contactText: '围绕多模态感知、目标检测、目标跟踪、医疗器械抓取等方向形成发明专利与软件著作权。',
            footer: '© 2026 侯瑞超个人学术网站 | 联系我：rchou@cpu.edu.cn',
        },
        en: {
            headerName: 'Ruichao Hou, Ph.D.',
            nav: {
                about: 'About',
                research: 'Research',
                achievements: 'Achievements',
                admission: 'Admission',
                contact: 'Intellectual Property',
            },
            switchLabel: '中',
            name: 'Ruichao Hou',
            avatarAlt: 'Portrait of Ruichao Hou',
            title: 'Associate Professor · Master Supervisor',
            admissionMajor: 'Admission Areas: AI Pharmacy; Medical Big Data and Artificial Intelligence',
            university: 'China Pharmaceutical University',
            address: 'No. 24 Tongjiaxiang, Gulou District, Nanjing, Jiangsu, China',
            team: 'Team Website',
            introTitle: 'Biography',
            intro: [
                'Ruichao Hou is an Associate Professor and Master Supervisor at China Pharmaceutical University. He received his Ph.D. in Engineering from the Department of Computer Science and Technology, Nanjing University, and was selected for the Excellent Doctoral Innovation Capability Enhancement Program of Nanjing University. He currently serves as Deputy Secretary-General of the Embodied Intelligence Committee of Jiangsu Information Technology Application Society. His current research focuses on artificial intelligence technologies for drug discovery and translational applications. He has led one national-level project and participated as a key member in multiple national and provincial science and technology projects. He has published over 40 papers in leading international venues including TCSVT, TCI, and ICME, with one ESI Highly Cited Paper; he has been granted 3 invention patents and registered 12 software copyrights.',
            ],
            workTitle: 'Work Experience',
            work: [
                '2024-2026, Software Institute, Nanjing University, Assistant Researcher',
                '2026-Present, School of Biomedical Engineering Excellence, China Pharmaceutical University, Associate Professor',
            ],
            serviceTitle: 'Academic Service',
            service: [
                'Deputy Secretary-General of the Embodied Intelligence Committee, Jiangsu Information Technology Application Society',
                'Chair of the 2025 ICCVIT Workshop',
                'Reviewer for leading international journals including TPAMI, TNNLS, TMM, and AAAI',
            ],
            newsTitle: 'News',
            news: [
                'June 7, 2026: Supervised students won the Jiangsu Provincial First Prize in the 15th “Challenge Cup” Chinese College Students Entrepreneurship Plan Competition.',
                'June 2026: Personal academic homepage launched.',
                'Prospective students interested in pharmaceutical AI, multimodal representation learning, and large models are welcome to get in touch.',
            ],
            researchHeading: 'Research Areas',
            researchSubtitle:
                'Affiliated with the OmniDrug team, focusing on frontier AI technologies and translational applications for drug discovery, including domain-specific large models and multi-agent systems, multimodal fusion and representation learning, embodied intelligence, and autonomous experimentation, while maintaining close collaboration with the MAGUS research group at Nanjing University.',
            achievementsHeading: 'Academic Achievements',
            achievementsSubtitle: 'Focused on pharmaceutical AI and multimodal learning.',
            honorsTitle: 'Selected Honors',
            papersTitle: 'Research Publications',
            patentsTitle: 'Invention Patents',
            softwareTitle: 'Software Copyrights',
            papers: [
                'Published over 40 papers in leading international journals including TCSVT, TCI, and PR, with more than 1,000 citations and one ESI Highly Cited Paper.',
                'Filed or granted 13 invention patents and registered 12 software copyrights.',
            ],
            admissionTitle: 'Admission',
            admissionText:
                'We continuously welcome Ph.D., master’s, and undergraduate students interested in frontier interdisciplinary areas such as pharmaceutical AI, computer science intersections, and embodied intelligence. If you would like to join us, please feel free to contact us.',
            admissionLabel: 'Admission Area',
            admissionValue: 'AI Pharmacy; Medical Big Data and Artificial Intelligence',
            contactTitle: 'Intellectual Property',
            contactText:
                'Invention patents and software copyrights covering multimodal perception, object detection, object tracking, and medical instrument grasping.',
            footer: '© 2026 Ruichao Hou Academic Website | Contact: rchou@cpu.edu.cn',
        },
    }[language];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        fetch(`${basePath}/scholar.json`, { cache: 'no-store' })
            .then((response) => (response.ok ? response.json() : null))
            .then((data) => {
                if (typeof data?.citationsLabel === 'string') {
                    setScholarCitations(data.citationsLabel);
                }
            })
            .catch(() => {
                setScholarCitations('1000+');
            });
    }, [basePath]);

    const researchAreas = [
        {
            title: isZh ? '垂类大模型及多智能体' : 'Domain-Specific Large Models and Multi-Agent Systems',
            visual: 'agents',
            image: '/research-large-model.png',
            description: isZh
                ? '聚焦生物医药场景，研究垂域大模型的知识增强、工具调用、多智能体协同与任务规划，驱动复杂科研流程的自动化与智能化。'
                : 'Focusing on biomedical scenarios, studying knowledge augmentation, tool use, multi-agent collaboration, and task planning for domain-specific large models to drive automated and intelligent complex scientific workflows.',
            tags: ['Domain LLMs', 'Multi-Agent Systems', 'AI for Science'],
        },
        {
            title: isZh ? '多模态融合与表征学习' : 'Multimodal Fusion and Representation Learning',
            visual: 'multimodal',
            image: '/research-multimodal.png',
            description: isZh
                ? '面向图像、文本、多组学及结构化等多源数据，攻克统一表征、跨模态对齐、融合推理与鲁棒学习，支撑药物研发信息深度整合。'
                : 'Working with images, text, multi-omics, structured data, and other heterogeneous sources to address unified representation, cross-modal alignment, fusion reasoning, and robust learning for deep integration of drug R&D information.',
            tags: ['Multimodal Learning', 'Multi-omics', 'Representation'],
        },
        {
            title: isZh ? '具身智能与无人化实验' : 'Embodied Intelligence and Autonomous Experimentation',
            visual: 'embodied',
            image: '/F3.png',
            description: isZh
                ? '针对无人化实验需求，研究具身感知、认知推理、动作决策与可供性建模，构建可解释交互的自主实验系统，加速药物研发进程。'
                : 'Addressing autonomous experimentation needs by studying embodied perception, cognitive reasoning, action decision-making, and affordance modeling to build interpretable and interactive autonomous laboratory systems that accelerate drug R&D.',
            tags: ['Embodied AI', 'Affordance', 'Cognitive Reasoning'],
        },
    ];

    const achievements = [
        {
            label: isZh ? '论文发表' : 'Publications',
            value: '40+',
            description: isZh
                ? '在 TCSVT、TCI、PR 等国际高水平刊物发表论文40余篇。'
                : 'Published over 40 papers in leading venues including TCSVT, TCI, and PR.',
        },
        {
            label: isZh ? '论文引用' : 'Citations',
            value: scholarCitations,
            description: isZh
                ? `Google Scholar 引用 ${scholarCitations}，1篇论文入选 ESI 高被引论文。`
                : `Google Scholar citations: ${scholarCitations}, including one ESI Highly Cited Paper.`,
        },
    ];

    const honors = isZh
        ? [
              '2026年“挑战杯”创业计划竞赛江苏省一等奖指导教师',
              '2025年“挑战杯”学术科技作品竞赛人工智能+应用赛全国一等奖指导教师',
              '2025年中国造船工程学会科技进步奖一等奖',
              '2025年江苏省信息技术应用学会青年科技奖',
              '2023年江苏省信息技术应用学会科学技术奖一等奖',
              '2022年南京大学优秀博士创新能力提升计划资助',
          ]
        : [
              '2026 Advisor of a Jiangsu provincial first-prize team, “Challenge Cup” Entrepreneurship Plan Competition',
              '2025 Advisor of a national first-prize team, “Challenge Cup” Academic Science and Technology Works Competition AI+Application Track',
              '2025 First Prize, Science and Technology Progress Award, Chinese Society of Naval Architects and Marine Engineers',
              '2025 Young Scientist Award, Jiangsu Information Technology Application Society',
              '2023 First Prize, Science and Technology Award, Jiangsu Information Technology Application Society',
              '2022 Funded by the Excellent Doctoral Innovation Capability Enhancement Program of Nanjing University',
          ];

    const publications = [
        {
            year: '2026',
            papers: [
                {
                    title: 'DSKFuse: Passive-Active Distillation Learning for Multi-modal Image Fusion via Dynamic Sparse Kansformer',
                    authors: 'Zhaisheng Ding, Ruichao Hou, Yunzhe Men, Shengyang Luan, Yanyu Liu, Kangjian He, and Shidong Xie',
                    venue: 'Expert Systems with Applications (ESWA), 2026, 303:130610, DOI: 10.1016/j.eswa.2025.130610',
                },
                {
                    title: 'Panoptic Scene Graph Grounded Training-Free Image Editing With Mutually Exclusive Attention Manipulation',
                    authors: 'Yunqing He, Ruichao Hou*, Jia Bei, Tongwei Ren',
                    venue: 'IET Computer Vision (IETCV), 2026, 20(1), e70069, DOI: 10.1049/cvi2.70069',
                },
                {
                    title: 'Thermal Crowd Counting by Distilling Multi-modal Knowledge',
                    authors: 'Xiaoxu Liu, Yi Shi, Ruichao Hou*, and Tongwei Ren',
                    venue: 'Pattern Recognition Letters (PRL), 2026, DOI: 10.1016/j.patrec.2026.04.006',
                },
                {
                    title: 'Learning Frequency and Memory-aware Prompts for Multi-modal Object Tracking',
                    authors: 'Boyue Xu, Ruichao Hou*, Tongwei Ren, Dongming Zhou, Gangshan Wu, and Jinde Cao',
                    venue: 'Pattern Recognition (PR), 2026, DOI: 10.1016/j.patcog.2026.113532',
                },
                {
                    title: 'STIFormer: RGB-T Tracking via Spatial-Temporal Interaction Transformer',
                    authors: 'Boyue Xu, Yaqun Fang, Ruichao Hou*, and Tongwei Ren',
                    venue: 'Image and Vision Computing (IVC), 2026, 168:105929, DOI: 10.1016/j.imavis.2026.105929',
                },
                {
                    title: 'Cross-View and Cross-Modal Contrastive Learning for Radar Object Detection',
                    authors: 'Qiaolong Qian, Yi Shi, Ruichao Hou*, Haoyu Qin, and Gangshan Wu',
                    venue: 'IEEE Signal Processing Letters (SPL), 2026, 33:594-598, DOI: 10.1109/LSP.2026.3653684',
                },
                {
                    title: 'Relationship Representation Diversity Enhancement for Scene Graph Generation',
                    authors: 'Yunqing He, Ruichao Hou*, Jia Bei, and Tongwei Ren',
                    venue: 'Computational Visual Media Journal (CVMJ), 2026',
                },
            ],
        },
        {
            year: '2025',
            papers: [
                {
                    title: 'X Modality Assisting RGBT Object Tracking',
                    authors: 'Zhaisheng Ding, Haiyan Li, Ruichao Hou, Yanyu Liu, and Shidong Xie',
                    venue: 'Applied Intelligence (APIN), 2025, 55(11):775, DOI: 10.1007/s10489-025-06658-0',
                },
                {
                    title: 'ACL-Net: Attribute-aware Contrastive Learning Network for Medical Image Fusion',
                    authors: 'Yanyu Liu, Ruichao Hou, Zhaisheng Ding, Dongming Zhou, and Jinde Cao',
                    venue: 'IEEE Signal Processing Letters (SPL), 2025, DOI: 10.1109/LSP.2025.3577945',
                },
                {
                    title: 'HyPSAM: Hybrid Prompt-driven Segment Anything Model for RGB-Thermal Salient Object Detection',
                    authors: 'Ruichao Hou, Xingyuan Li, Tongwei Ren, Dongming Zhou, Gangshan Wu and Jinde Cao',
                    venue: 'IEEE Transactions on Circuits and Systems for Video Technology (TCSVT), 2025, 36(3):2697-2712, DOI: 10.1109/TCSVT.2025.3613770',
                },
                {
                    title: 'Mamba4SOD: RGB-T Salient Object Detection Using Mamba-Based Fusion Module',
                    authors: 'Yi Xu, Ruichao Hou*, Ziheng Qi, and Tongwei Ren',
                    venue: 'IET Computer Vision (IETCV), 2025, 19(1), e70033, DOI: 10.1049/cvi2.70033',
                },
                {
                    title: 'KAN-SAM: Kolmogorov-Arnold Network Guided Segment Anything Model for RGB-T Salient Object Detection',
                    authors: 'Xingyuan Li, Ruichao Hou*, Tongwei Ren, and Gangshan Wu',
                    venue: "IEEE International Conference on Multimedia and Expo (ICME'25), Nantes, France, 2025, DOI: 10.1109/ICME59968.2025.11209979",
                },
            ],
        },
        {
            year: '2024',
            papers: [
                {
                    title: 'RGB-D Video Object Segmentation via Enhanced Multi-store Feature Memory',
                    authors: 'Boyue Xu, Ruichao Hou*, Tongwei Ren and Gangshan Wu',
                    venue: "ACM International Conference on Multimedia Retrieval (ICMR'24), Phuket, Thailand, 2024, DOI: 10.1145/3652583.3658036",
                },
                {
                    title: 'Jointly Modeling Association and Motion Cues for Robust Infrared UAV Tracking',
                    authors: 'Boyue Xu, Ruichao Hou, Jia Bei, Tongwei Ren and Gangshan Wu',
                    venue: 'The Visual Computer (TVC), 2024, DOI: 10.1007/s00371-023-03245-7',
                },
            ],
        },
        {
            year: '2023',
            papers: [
                {
                    title: 'RGB-D Tracking via Hierarchical Modality Aggregation and Distribution Network',
                    authors: 'Boyue Xu, Yi Xu, Ruichao Hou, Jia Bei, Tongwei Ren, and Gangshan Wu',
                    venue: "ACM International Conference on Multimedia in Asia (MMAsia'23), Tainan, China, 2023, DOI: 10.1145/3595916.3626441",
                },
                {
                    title: 'ADNet: An Asymmetric Dual-Stream Network for RGB-T Salient Object Detection',
                    authors: 'Yaqun Fang, Ruichao Hou, Jia Bei, Tongwei Ren, and Gangshan Wu',
                    venue: "ACM International Conference on Multimedia in Asia (MMAsia'23), Tainan, China, 2023, DOI: 10.1145/3595916.3626440",
                },
                {
                    title: 'MTNet: Learning Modality-aware Representation with Transformer for RGBT Tracking',
                    authors: 'Ruichao Hou, Boyue Xu, Tongwei Ren, and Gangshan Wu',
                    venue: "IEEE International Conference on Multimedia and Expo (ICME'23), Brisbane, Australia, 2023, DOI: 10.1109/ICME55011.2023.00203",
                },
                {
                    title: 'An Improved Hybrid Network With a Transformer Module for Medical Image Fusion',
                    authors: 'Yanyu Liu, Yongsheng Zang, Dongming Zhou, Jinde Cao, Rencan Nie, Ruichao Hou, Zhaisheng Ding, and Jiatian Mei',
                    venue: 'IEEE Journal of Biomedical and Health Informatics (JBHI), 2023, 27:3489-3500, DOI: 10.1109/JBHI.2023.3264819',
                },
                {
                    title: 'Green Fluorescent Protein and Phase Contrast Image Fusion via Spectral TV Filter-Based Decomposition',
                    authors: 'Yanyu Liu, Dongming Zhou, Rencan Nie, Ruichao Hou, Zhaisheng Ding, Weidai Xia, and Miao Li',
                    venue: 'Biomedical Signal Processing and Control (BSPC), 2023, 79:104265, DOI: 10.1016/j.bspc.2022.104265',
                },
                {
                    title: 'A Robust Infrared and Visible Image Fusion Framework via Multi-Receptive-Field Attention and Color Visual Perception',
                    authors: 'Zhaisheng Ding, Haiyan Li, Dongming Zhou, Yanyu Liu, and Ruichao Hou',
                    venue: 'Applied Intelligence (APIN), 2023, 53(7):8114-8132, DOI: 10.1007/s10489-022-03952-z',
                },
            ],
        },
        {
            year: '2022',
            papers: [
                {
                    title: 'MIRNet: A Robust RGBT Tracking Jointly with Multi-modal Interaction and Refinement',
                    authors: 'Ruichao Hou, Tongwei Ren, and Gangshan Wu',
                    venue: "IEEE International Conference on Multimedia and Expo (ICME'22), Taipei, China, 2022, DOI: 10.1109/ICME52920.2022.9860018",
                },
                {
                    title: 'CIRNet: An Improved RGBT Tracking via Cross-Modality Interaction and Re-Identification',
                    authors: 'Weidai Xia, Dongming Zhou, Jinde Cao, Yanyu Liu, and Ruichao Hou',
                    venue: 'Neurocomputing (NEUCOM), 2022, 493:327-339, DOI: 10.1016/j.neucom.2022.04.017',
                },
                {
                    title: 'TSE_Fuse: Two Stage Enhancement Method Using Attention Mechanism and Feature-Linking Model for Infrared and Visible Image Fusion',
                    authors: 'Yanyu Liu, Dongming Zhou, Rencan Nie, Zhaisheng Ding, Yanbu Guo, Xiaoli Ruan, Weidai Xia, and Ruichao Hou',
                    venue: 'Digital Signal Processing (DSP), 2022, 123:103387, DOI: 10.1016/j.dsp.2022.103387',
                },
            ],
        },
        {
            year: '2021',
            papers: [
                {
                    title: 'CMFA_Net: A Cross-Modal Feature Aggregation Network for Infrared-Visible Image Fusion',
                    authors: 'Zhaisheng Ding, Haiyan Li, Dongming Zhou, Hongsong Li, Yanyu Liu, and Ruichao Hou',
                    venue: 'Infrared Physics & Technology (INFPHY), 2021, 118:103905, DOI: 10.1016/j.infrared.2021.103905',
                },
                {
                    title: 'Siamese Networks and Multi-Scale Local Extrema Scheme for Multimodal Brain Medical Image Fusion',
                    authors: 'Zhaisheng Ding, Dongming Zhou, Haiyan Li, Ruichao Hou, and Yanyu Liu',
                    venue: 'Biomedical Signal Processing and Control (BSPC), 2021, 68:102697, DOI: 10.1016/j.bspc.2021.102697',
                },
            ],
        },
        {
            year: '2020',
            papers: [
                {
                    title: 'VIF-Net: An Unsupervised Framework for Infrared and Visible Image Fusion',
                    authors: 'Ruichao Hou, Dongming Zhou, Rencan Nie, Dong Liu, Licheng Xiong, Yan Guo, and Chuanbo Yu',
                    venue: 'IEEE Transactions on Computational Imaging (TCI), 2020, 6:640-651, DOI: 10.1109/TCI.2020.2965304',
                },
                {
                    title: 'Robust Spiking Cortical Model and Total-Variational Decomposition for Multimodal Medical Image Fusion',
                    authors: 'Yanyu Liu, Dongming Zhou, Rencan Nie, Ruichao Hou, Zhaisheng Ding, Yanbu Guo, and Jinwei Zhou',
                    venue: 'Biomedical Signal Processing and Control (BSPC), 2020, 61:101996, DOI: 10.1016/j.bspc.2020.101996',
                },
                {
                    title: 'Attentive Gated Neural Networks for Identifying Chromatin Accessibility',
                    authors: 'Yanbu Guo, Dongming Zhou, Weihua Li, Rencan Nie, Ruichao Hou, and Chengli Zhou',
                    venue: 'Neural Computing and Applications (NCAA), 2020, 32(19):15557-15571, DOI: 10.1007/s00521-020-04879-7',
                },
                {
                    title: 'Construction of High Dynamic Range Image Based on Gradient Information Transformation',
                    authors: 'Yanyu Liu, Dongming Zhou, Rencan Nie, Ruichao Hou, and Zhaisheng Ding',
                    venue: 'IET Image Processing (IET-IPR), 2020, 14(6), DOI: 10.1049/iet-ipr.2019.0118',
                },
            ],
        },
        {
            year: '2019',
            papers: [
                {
                    title: 'Infrared and Visible Images Fusion Using Visual Saliency and Optimized Spiking Cortical Model in Non-Subsampled Shearlet Transform Domain',
                    authors: 'Ruichao Hou, Rencan Nie, Dongming Zhou, Jinde Cao, and Dong Liu',
                    venue: 'Multimedia Tools and Applications (MTAP), 2019, 78(20):28609-28632, DOI: 10.1007/s11042-018-6099-x',
                },
                {
                    title: 'Brain CT and MRI Medical Image Fusion Using Convolutional Neural Networks and a Dual-Channel Spiking Cortical Model',
                    authors: 'Ruichao Hou, Dongming Zhou, Rencan Nie, Dong Liu, and Xiaoli Ruan',
                    venue: 'Medical & Biological Engineering & Computing (MBEC), 2019, 57(5), DOI: 10.1007/s11517-018-1935-8',
                },
            ],
        },
    ];

    const patents = isZh
        ? [
              {
                  title: '一种基于模态感知特征学习的 RGBT目标跟踪方法',
                  meta: '专利号：202310625057X',
              },
              {
                  title: '一种结合孪生网络和快速目标优化的电视跟踪方法',
                  meta: '专利号：2023105903193',
              },
              {
                  title: '基于多模态交互和多阶段优化的实时RGBT目标跟踪方法',
                  meta: '专利号：2022106738856',
              },
              {
                  title: '一种用于直播的自主跟拍方法及跟拍机器人',
                  meta: '申请号：2026103502375',
              },
              {
                  title: '基于跨模态知识蒸馏的全天候人群计数方法、设备及介质',
                  meta: '申请号：2026104318355',
              },
              {
                  title: '一种基于双动态注意力衰减的图像生成方法、设备及介质',
                  meta: '申请号：2026101732847',
              },
              {
                  title: '一种基于全景场景图的免训练图像编辑方法、设备及介质',
                  meta: '申请号：2026101712839',
              },
              {
                  title: '一种用于场景图生成的关系特征增强方法、设备及介质',
                  meta: '申请号：2026100606512',
              },
              {
                  title: '基于跨视图跨模态对比学习的雷达目标检测方法、设备及介质',
                  meta: '申请号：2024117323808',
              },
              {
                  title: '基于多重解耦网络的RGB-T显著目标检测方法、设备及介质',
                  meta: '申请号：2024112559621',
              },
              {
                  title: '基于强化多层记忆的 RGB-D 视频目标分割方法、设备及介质',
                  meta: '申请号：2024107307669',
              },
              {
                  title: '基于双流非对称网络的显著性物体检测方法、设备及介质',
                  meta: '申请号：202311655193X',
              },
              {
                  title: '一种基于深浅层特征融合的RGBD目标跟踪方法',
                  meta: '申请号：2023105860554',
              },
          ]
        : [
              {
                  title: 'RGBT object tracking method based on modality-aware feature learning',
                  meta: 'Patent No.: 202310625057X',
              },
              {
                  title: 'Television tracking method combining Siamese networks and fast target optimization',
                  meta: 'Patent No.: 2023105903193',
              },
              {
                  title: 'Real-time RGBT object tracking method based on multimodal interaction and multi-stage optimization',
                  meta: 'Patent No.: 2022106738856',
              },
              {
                  title: 'Autonomous follow-shooting method and robot for live streaming',
                  meta: 'Application No.: 2026103502375',
              },
              {
                  title: 'All-weather crowd counting method, device, and medium based on cross-modal knowledge distillation',
                  meta: 'Application No.: 2026104318355',
              },
              {
                  title: 'Image generation method, device, and medium based on dual dynamic attention attenuation',
                  meta: 'Application No.: 2026101732847',
              },
              {
                  title: 'Training-free image editing method, device, and medium based on panoptic scene graphs',
                  meta: 'Application No.: 2026101712839',
              },
              {
                  title: 'Relationship feature enhancement method, device, and medium for scene graph generation',
                  meta: 'Application No.: 2026100606512',
              },
              {
                  title: 'Radar target detection method, device, and medium based on cross-view cross-modal contrastive learning',
                  meta: 'Application No.: 2024117323808',
              },
              {
                  title: 'RGB-T salient object detection method, device, and medium based on a multi-decoupling network',
                  meta: 'Application No.: 2024112559621',
              },
              {
                  title: 'RGB-D video object segmentation method, device, and medium based on enhanced multi-level memory',
                  meta: 'Application No.: 2024107307669',
              },
              {
                  title: 'Salient object detection method, device, and medium based on a two-stream asymmetric network',
                  meta: 'Application No.: 202311655193X',
              },
              {
                  title: 'RGBD object tracking method based on deep-shallow feature fusion',
                  meta: 'Application No.: 2023105860554',
              },
          ];

    const softwareCopyrights = isZh
        ? [
              {
                  title: '基于协作型机械臂的医疗器械抓取系统V1.0',
                  meta: '登记号：2025R11L2246752',
              },
              {
                  title: '基于双流非对称网络的 RGBT 显著目标检测软件V1.0',
                  meta: '登记号：2024SR0158542',
              },
              {
                  title: '基于模态感知特征学习的 RGBT 目标跟踪软件V1.0',
                  meta: '登记号：2023SR0944313',
              },
              {
                  title: '基于多模态交互和多阶段优化的实时 RGBT 目标跟踪系统V1.0',
                  meta: '登记号：2023SR0803434',
              },
              {
                  title: '基于深浅层特征融合的 RGBD 目标跟踪软件V1.0',
                  meta: '登记号：2023SR1456677',
              },
          ]
        : [
              {
                  title: 'Medical instrument grasping system based on a collaborative robotic arm V1.0',
                  meta: 'Registration No.: 2025R11L2246752',
              },
              {
                  title: 'RGBT salient object detection software based on a two-stream asymmetric network V1.0',
                  meta: 'Registration No.: 2024SR0158542',
              },
              {
                  title: 'RGBT object tracking software based on modality-aware feature learning V1.0',
                  meta: 'Registration No.: 2023SR0944313',
              },
              {
                  title: 'Real-time RGBT object tracking system based on multimodal interaction and multi-stage optimization V1.0',
                  meta: 'Registration No.: 2023SR0803434',
              },
              {
                  title: 'RGBD object tracking software based on deep-shallow feature fusion V1.0',
                  meta: 'Registration No.: 2023SR1456677',
              },
          ];

    return (
        <>
            <style jsx>{`
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                .animate-spin-slow {
                    animation: spin-slow 3s linear infinite;
                }
                @keyframes subtle-float {
                    0%,
                    100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-3px);
                    }
                }
                .animate-subtle-float {
                    animation: subtle-float 4s ease-in-out infinite;
                }
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.6s ease-out;
                }
                .glass-effect {
                    background: rgba(255, 255, 255, 0.85);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                .subtle-hover {
                    transition: all 0.3s ease;
                }
                .subtle-hover:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
                }
                .academic-gradient {
                    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                }
                .text-gradient-subtle {
                    background: linear-gradient(135deg, #1e40af 0%, #3730a3 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
            `}</style>
            <div className="min-h-screen academic-gradient relative">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100/30 rounded-full animate-subtle-float"></div>
                    <div
                        className="absolute bottom-40 left-20 w-24 h-24 bg-slate-100/40 rounded-full animate-subtle-float"
                        style={{ animationDelay: '2s' }}
                    ></div>
                    <div
                        className="absolute top-1/2 right-1/3 w-16 h-16 bg-indigo-100/30 rounded-full animate-subtle-float"
                        style={{ animationDelay: '1s' }}
                    ></div>
                </div>

                <header className="glass-effect shadow-lg border-b border-white/20 sticky top-0 z-50">
                    <div className="max-w-6xl mx-auto px-6 py-4">
                        <nav className="flex justify-between items-center gap-4">
                            <div className="text-2xl font-bold text-gradient-subtle">
                                {text.headerName}
                            </div>
                            <button
                                onClick={() => setLanguage(isZh ? 'en' : 'zh')}
                                className="md:hidden px-4 py-2 rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                            >
                                {text.switchLabel}
                            </button>
                            <div className="hidden md:flex items-center space-x-8">
                                {[
                                    ['about', text.nav.about],
                                    ['research', text.nav.research],
                                    ['achievements', text.nav.achievements],
                                    ['contact', text.nav.contact],
                                    ['admission', text.nav.admission],
                                ].map(([section, label]) => (
                                    <button
                                        key={section}
                                        onClick={() => setActiveSection(section as Section)}
                                        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                                            activeSection === section
                                                ? 'bg-blue-600 text-white font-medium shadow-lg'
                                                : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                                        }`}
                                    >
                                        {label}
                                    </button>
                                ))}
                                <button
                                    onClick={() => setLanguage(isZh ? 'en' : 'zh')}
                                    className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                                >
                                    {text.switchLabel}
                                </button>
                            </div>
                        </nav>
                        <div className="md:hidden mt-4 -mx-2 overflow-x-auto pb-1">
                            <div className="flex min-w-max gap-2 px-2">
                                {[
                                    ['about', text.nav.about],
                                    ['research', text.nav.research],
                                    ['achievements', text.nav.achievements],
                                    ['contact', text.nav.contact],
                                    ['admission', text.nav.admission],
                                ].map(([section, label]) => (
                                    <button
                                        key={section}
                                        onClick={() => setActiveSection(section as Section)}
                                        className={`whitespace-nowrap px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                                            activeSection === section
                                                ? 'bg-blue-600 text-white font-medium shadow-md'
                                                : 'bg-white/70 text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                                        }`}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </header>

                <main className="max-w-6xl mx-auto px-6 py-12">
                    <div
                        className={`transition-all duration-700 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                    >
                        {activeSection === 'about' && (
                            <div className="grid lg:grid-cols-[360px_1fr] gap-10">
                                <div className="">
                                    <div className="space-y-6">
                                    <div className="glass-effect rounded-2xl shadow-xl p-8 text-center subtle-hover">
                                        <div className="w-36 aspect-[1729/2424] rounded-xl mx-auto mb-6 overflow-hidden border-4 border-blue-200 shadow-lg bg-white">
                                            <img
                                                src={withBasePath('/profile-photo.jpg')}
                                                alt={text.avatarAlt}
                                                className="object-cover object-center h-full w-full"
                                            />
                                        </div>
                                        <h1 className="text-2xl font-bold text-slate-800 mb-2">
                                            {text.name}
                                        </h1>
                                        <p className="text-slate-600 mb-4 font-medium">
                                            {text.title}
                                        </p>
                                        <div className="space-y-2 text-sm text-slate-500">
                                            <p className="flex items-center justify-center gap-2">
                                                <MailIcon />
                                                rchou@cpu.edu.cn
                                            </p>
                                            <p>🎓 {text.admissionMajor}</p>
                                            <p>🏫 {text.university}</p>
                                            <p>📍 {text.address}</p>
                                            <a
                                                href="https://scholar.google.com/citations?user=r_pnp9AAAAAJ&hl=zh-CN"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700"
                                            >
                                                <GoogleIcon />
                                                Google Scholar
                                            </a>
                                            <a
                                                href="https://www.researchgate.net/profile/Ruichao-Hou"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center justify-center gap-2 text-emerald-600 hover:text-emerald-700"
                                            >
                                                <ResearchGateIcon />
                                                ResearchGate
                                            </a>
                                            <a
                                                href="https://magus.ink/"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center justify-center gap-2 text-purple-600 hover:text-purple-700"
                                            >
                                                <TeamIcon />
                                                {text.team}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="glass-effect rounded-2xl shadow-lg p-6 subtle-hover">
                                        <h3 className="text-xl font-semibold text-slate-800 mb-4">
                                            {text.newsTitle}
                                        </h3>
                                        <ul className="space-y-4 text-slate-600">
                                            {text.news.map((item) => (
                                                <li key={item} className="flex items-stretch gap-3">
                                                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500"></span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="glass-effect rounded-2xl shadow-lg p-8 subtle-hover">
                                        <h2 className="text-2xl font-bold text-slate-800 mb-6">
                                            {text.introTitle}
                                        </h2>
                                        <div className="prose prose-slate max-w-none">
                                            <p className="text-slate-600 leading-relaxed mb-4">
                                                {text.intro[0]}
                                            </p>
                                            <p className="text-slate-600 leading-relaxed mb-4">
                                                {text.intro[1]}
                                            </p>
                                            {text.intro[2] && (
                                                <p className="text-slate-600 leading-relaxed">
                                                    {text.intro[2]}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="glass-effect rounded-2xl shadow-lg p-6 subtle-hover">
                                            <h3 className="text-xl font-semibold text-slate-800 mb-4">
                                                {text.workTitle}
                                            </h3>
                                            <ul className="space-y-4 text-slate-600">
                                                <li className="flex items-stretch gap-3">
                                                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500"></span>
                                                    <span>
                                                        {text.work[0]}
                                                    </span>
                                                </li>
                                                <li className="flex items-stretch gap-3">
                                                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500"></span>
                                                    <span>
                                                        {text.work[1]}
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="glass-effect rounded-2xl shadow-lg p-6 subtle-hover">
                                            <h3 className="text-xl font-semibold text-slate-800 mb-4">
                                                {text.serviceTitle}
                                            </h3>
                                            <ul className="space-y-4 text-slate-600">
                                                {text.service.map((item) => (
                                                    <li key={item} className="flex items-stretch gap-3">
                                                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500"></span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="glass-effect rounded-2xl shadow-lg p-6 subtle-hover">
                                        <h3 className="text-xl font-semibold text-slate-800 mb-4">
                                            {text.honorsTitle}
                                        </h3>
                                        <ul className="space-y-3 text-slate-600">
                                            {honors.map((honor) => (
                                                <li key={honor} className="flex items-stretch gap-3">
                                                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500"></span>
                                                    <span>{honor}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'research' && (
                            <div className="space-y-8">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-slate-800 mb-4">
                                        {text.researchHeading}
                                    </h2>
                                    <p className="text-slate-600 max-w-2xl mx-auto">
                                        {text.researchSubtitle}
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-3 gap-8">
                                    {researchAreas.map((area, index) => (
                                        <div
                                            key={area.title}
                                            className="glass-effect rounded-2xl shadow-lg p-8 subtle-hover animate-fade-in"
                                            style={{ animationDelay: `${index * 0.1}s` }}
                                        >
                                            <h3 className="text-xl font-bold text-slate-800 mb-4">
                                                {area.title}
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed mb-5">
                                                {area.description}
                                            </p>
                                            <div className="mb-6 aspect-[16/10] overflow-hidden rounded-2xl border border-slate-100 bg-white/80 p-2">
                                                <img
                                                    src={withBasePath(area.image)}
                                                    alt={area.title}
                                                    className="h-full w-full object-contain"
                                                />
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {area.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeSection === 'achievements' && (
                            <div className="space-y-8">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-slate-800 mb-4">
                                        {text.achievementsHeading}
                                    </h2>
                                    <p className="text-slate-600 max-w-2xl mx-auto">
                                        {text.achievementsSubtitle}
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-1 gap-8">
                                    <div className="glass-effect rounded-2xl shadow-lg p-8 subtle-hover">
                                        <h3 className="text-xl font-bold text-slate-800 mb-5">
                                            {text.papersTitle}
                                        </h3>
                                        <div className="space-y-8">
                                            {publications.map((group) => (
                                                <div key={group.year} className="flex gap-5">
                                                    <div className="w-16 shrink-0">
                                                        <div className="sticky top-24 rounded-xl bg-blue-50 px-3 py-2 text-center text-sm font-bold text-blue-600">
                                                            {group.year}
                                                        </div>
                                                    </div>
                                                    <ul className="space-y-5">
                                                        {group.papers.map((paper) => (
                                                            <li
                                                                key={`${group.year}-${paper.title}`}
                                                                className="flex items-stretch gap-3"
                                                            >
                                                                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500"></span>
                                                                <div>
                                                                    <p className="font-semibold leading-relaxed text-slate-800">
                                                                        {paper.title}
                                                                    </p>
                                                                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                                                        <HighlightAuthor authors={paper.authors} />
                                                                    </p>
                                                                    <p className="mt-1 text-sm leading-relaxed text-slate-500">
                                                                        {paper.venue}
                                                                    </p>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {achievements.map((item) => (
                                        <div
                                            key={item.label}
                                            className="glass-effect rounded-2xl shadow-lg p-6 text-center subtle-hover"
                                        >
                                            <div className="text-3xl font-bold text-gradient-subtle mb-2">
                                                {item.value}
                                            </div>
                                            <h3 className="font-semibold text-slate-800 mb-3">
                                                {item.label}
                                            </h3>
                                            <p className="text-sm text-slate-600 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        )}

                        {activeSection === 'admission' && (
                            <div className="max-w-4xl mx-auto">
                                <div className="glass-effect rounded-2xl shadow-xl p-10 subtle-hover text-center">
                                    <div className="w-24 h-24 bg-white rounded-full mx-auto mb-8 flex items-center justify-center border border-blue-100 shadow-md p-3">
                                        <img
                                            src={withBasePath('/cpu-logo.png')}
                                            alt={isZh ? '中国药科大学标志' : 'China Pharmaceutical University logo'}
                                            className="h-full w-full object-contain"
                                        />
                                    </div>
                                    <h2 className="text-3xl font-bold text-slate-800 mb-4">
                                        {text.admissionTitle}
                                    </h2>
                                    <p className="text-lg text-slate-600 mb-8">
                                        {text.admissionText}
                                    </p>
                                    <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                                        <p className="text-sm text-blue-600 font-semibold mb-2">
                                            {text.admissionLabel}
                                        </p>
                                        <p className="text-3xl font-bold text-blue-700">
                                            {text.admissionValue}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeSection === 'contact' && (
                            <div className="space-y-8">
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-bold text-slate-800 mb-4">
                                        {text.contactTitle}
                                    </h2>
                                    <p className="text-slate-600 max-w-2xl mx-auto">
                                        {text.contactText}
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="glass-effect rounded-2xl shadow-lg p-8 subtle-hover">
                                        <h3 className="text-xl font-bold text-slate-800 mb-5">
                                            {text.patentsTitle}
                                        </h3>
                                        <ul className="space-y-4 text-slate-600">
                                            {patents.map((patent) => (
                                                <li key={patent.meta} className="flex items-stretch gap-3">
                                                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-blue-500"></span>
                                                    <div>
                                                        <p className="font-medium text-slate-700">
                                                            {patent.title}
                                                        </p>
                                                        <p className="text-sm text-slate-500">
                                                            {patent.meta}
                                                        </p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="glass-effect rounded-2xl shadow-lg p-8 subtle-hover">
                                        <h3 className="text-xl font-bold text-slate-800 mb-5">
                                            {text.softwareTitle}
                                        </h3>
                                        <ul className="space-y-4 text-slate-600">
                                            {softwareCopyrights.map((software) => (
                                                <li key={software.meta} className="flex items-stretch gap-3">
                                                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-purple-300"></span>
                                                    <div>
                                                        <p className="font-medium text-slate-700">
                                                            {software.title}
                                                        </p>
                                                        <p className="text-sm text-slate-500">
                                                            {software.meta}
                                                        </p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </main>

                <footer className="bg-white/80 border-t border-slate-200 mt-20">
                    <div className="max-w-6xl mx-auto px-6 py-8">
                        <div className="text-center text-slate-500">
                            <p>{text.footer}</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

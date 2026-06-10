import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: '侯瑞超 | 中国药科大学',
    description:
        '侯瑞超副教授个人学术主页，研究方向包括药学人工智能、多模态表征学习、大模型及其应用。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="zh-CN">
            <body>{children}</body>
        </html>
    );
}

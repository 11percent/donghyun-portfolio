import logo from './logo.png';
import React from "react";

export default function App() {
    const projects = [
        {
            title: "프로젝트 월담 [late.co.kr]",
            url: "https://late.co.kr",
            description: (
                <>
                    창고 기반 프랜차이즈 재고/주문/반품 통합 관리 시스템<br />
                    관리자 id: admin / pw: 1234<br />
                    점주 id: user / pw: 1234
                </>
            ),
            image: "/images/late_project_thumb.png"
        },
        {
            title: "개인 PHP 프로젝트 [took.dothome.co.kr]",
            url: "http://took.dothome.co.kr",
            description: "PHP 기반 게시판 + SNS 로그인 기능 구현",
            image: "/images/took_dothome_thumb.png"
        },
        {
            title: "개인 React 프로젝트 [gaji.store]",
            url: "https://gaji.store",
            description: "React 기반 페이징 기능 구현",
            image: "/images/react_project_thumb.png"
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white text-gray-800 px-4 py-8 font-sans">
            <header className="text-center mb-12">
                <h1 className="text-2xl font-extrabold text-indigo-700 mb-2">강동현 Portfolio</h1>
                <p className="text-mg text-gray-600">Java 기반 웹 개발자 | 실무형 프로젝트 중심</p>
            </header>

            <main className="max-w-5xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">주요 프로젝트</h2>

                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-300 rounded-3xl overflow-hidden flex flex-col"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-52 object-cover border-b"
                            />
                            <div className="p-6 flex flex-col flex-grow justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-indigo-800 mb-2">{project.title}</h3>
                                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="mt-auto">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition-colors"
                                    >
                                        사이트 방문
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="mt-20 text-center text-sm text-gray-500">
                © 2025 Donghyun | Contact: took@daum.net
            </footer>
        </div>
    );
}

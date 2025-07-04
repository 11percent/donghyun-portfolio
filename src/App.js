import logo from './logo.png';
import React, {useState} from "react";

export default function App() {
    const [lang, setLang] = useState("ko");
    const [openModal, setOpenModal] = useState(false);

    const translations = {
        title: {
            ko: "강동현 Portfolio",
            ja: "カン・ドンヒョンのポートフォリオ"
        },
        subtitle: {
            ko: "Java 기반 웹 개발자 | 실무형 프로젝트 중심",
            ja: "JavaベースのWeb開発者｜実務型プロジェクト中心"
        },
        sectionTitle: {
            ko: "주요 프로젝트",
            ja: "主なプロジェクト"
        },
        visit: {
            ko: "사이트 방문",
            ja: "サイトを見る"
        }
    };

    const projects = [
        {
            title: "프로젝트 월담 [late.co.kr]",
            title_ja: "プロジェクト 월담 [late.co.kr]",
            url: "https://late.co.kr",
            description: {
                ko: (
                    <>
                        창고 기반 프랜차이즈 재고/주문/반품 통합 관리 시스템<br/>
                        관리자 id: manager / pw: 1234<br/>
                        점주 id: user / pw: 1234
                    </>
                ),
                ja: (
                    <>
                        倉庫ベースのフランチャイズ在庫/注文/返品管理システム<br/>
                        管理者 ID: manager / パスワード: 1234<br/>
                        店主 ID: user / パスワード: 1234
                    </>
                )
            },
            image: "/images/late_project_thumb.png"
        },
        {
            title: "개인 JAVA 프로젝트 [minichat.co.kr]",
            title_ja: "일본어영역 [minichat.co.kr]",
            url: "https://minichat.co.kr",
            description: {
                ko: "JSP + thymelaef 기반 실시간 양방향 채팅 시스템 구현",
                ja: "일본어영역"
            },
            image: "/images/minichat_thumb.png"
        },
        {
            title: "개인 PHP 프로젝트 [took.dothome.co.kr]",
            title_ja: "個人PHPプロジェクト [took.dothome.co.kr]",
            url: "https://took.dothome.co.kr",
            description: {
                ko: "PHP 기반 게시판 + SNS 로그인 기능 구현",
                ja: "PHPベースの掲示板＋SNSログイン機能の実装"
            },
            image: "/images/took_dothome_thumb.png"
        },
        {
            title: "개인 React 프로젝트 [gaji.store]",
            title_ja: "個人Reactプロジェクト [gaji.store]",
            url: "https://gaji.store",
            description: {
                ko: "React 기반 페이징 기능 구현",
                ja: "Reactベースのページング機能の実装"
            },
            image: "/images/react_project_thumb.png"
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white text-gray-800 px-4 py-8 font-sans">
            <div className="text-right max-w-5xl mx-auto">
                <button
                    onClick={() => setLang(lang === "ko" ? "ja" : "ko")}
                    className="mb-4 px-3 py-1 border border-gray-400 rounded text-sm hover:bg-gray-200"
                >
                    {lang === "ko" ? "日本語" : "한국어"}
                </button>
            </div>

            <header className="text-center mb-12">
                <h1 className="text-2xl font-extrabold text-indigo-700 mb-2">{translations.title[lang]}</h1>
                <p className="text-mg text-gray-600">{translations.subtitle[lang]}</p>
            </header>

            <main className="max-w-5xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">{translations.sectionTitle[lang]}</h2>

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
                                    <h3 className="text-xl font-bold text-indigo-800 mb-2">
                                        {lang === "ko" ? project.title : project.title_ja}
                                    </h3>
                                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                                        {project.description[lang]}
                                    </p>
                                    {index === 0 && (
                                        <button
                                            onClick={() => setOpenModal(true)}
                                            className="text-sm text-indigo-600 underline hover:text-indigo-800"
                                        >
                                            +자세히 보기
                                        </button>
                                    )}
                                </div>
                                <div className="mt-auto">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-4 py-2 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-700 transition-colors"
                                    >
                                        {translations.visit[lang]}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {openModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
                    <div
                        className="relative bg-white rounded-xl shadow-xl w-[90%] max-w-2xl p-6 max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setOpenModal(false)}
                            className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-xl"
                            aria-label="닫기"
                        >
                            &times;
                        </button>
                        <h3 className="text-xl font-bold mb-4 text-indigo-700">
                            {lang === 'ko' ? '프로젝트 월담 상세 정보' : 'プロジェクト월담の詳細情報'}
                        </h3>
                        <div className="overflow-x-auto text-sm">
                            <table className="w-full text-left border border-gray-300">
                                <tbody>
                                <tr>
                                    <th className="border px-2 py-1 bg-gray-100">{lang === 'ko' ? '주소' : 'アドレス'}</th>
                                    <td className="border px-2 py-1">late.co.kr</td>
                                </tr>
                                <tr>
                                    <th className="border px-2 py-1 bg-gray-100">{lang === 'ko' ? '작업기간' : '作業期間'}</th>
                                    <td className="border px-2 py-1">2025.05.26 ~ 2025.06.23 (4주)</td>
                                </tr>
                                <tr>
                                    <th className="border px-2 py-1 bg-gray-100">{lang === 'ko' ? '인력구성' : 'チーム構成'}</th>
                                    <td className="border px-2 py-1">{lang === 'ko' ? '백엔드 4명 / 프론트엔드 4명' : 'バックエンド 4名 / フロントエンド 4名'}</td>
                                </tr>
                                <tr>
                                    <th className="border px-2 py-1 bg-gray-100">{lang === 'ko' ? '프로젝트 목적' : 'プロジェクト目的'}</th>
                                    <td className="border px-2 py-1">
                                        <ul className="list-disc pl-4">
                                            {(
                                                lang === 'ko'
                                                    ? [
                                                        "창고 기반 무인카페 매장 재고/주문/반품 관리 시스템 구축",
                                                        "실제 프랜차이즈 운영 시 발생할 수 있는 실무 업무 흐름을 시스템화하여",
                                                        "관리자(본사)와 점주 간 효율적인 운영을 가능하게 하는 것이 목적"
                                                    ]
                                                    : [
                                                        "倉庫ベースの無人カフェ店舗在庫/注文/返品管理システム構築",
                                                        "実際のフランチャイズ運営における実務フローをシステム化し、",
                                                        "本部と店主間の効率的な運営を可能にすることが目的"
                                                    ]
                                            ).map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="border px-2 py-1 bg-gray-100">{lang === 'ko' ? '주요역할' : '主な役割'}</th>
                                    <td className="border px-2 py-1">
                                        <ul className="list-disc pl-4">
                                            {(
                                                lang === 'ko'
                                                    ? [
                                                        "점주/관리자 역할에 따른 접근 경로 분리 (/storeowner, /headOffice), 관리자 대시보드 제작",
                                                        "주요 기능: [재고 관리, 판매 실적 확인, 주문/출고/반품 처리]",
                                                        "상태값 자동 전이 로직 구현 (예: 주문완료 → 출고준비 → 출고완료)",
                                                        "실제 HTML+Thymeleaf 연동 화면까지 완성",
                                                        "본사-매장 간 재고 연동 자동화 구현"
                                                    ]
                                                    : [
                                                        "店主/管理者の役割に応じたアクセス経路の分離（/storeowner, /headOffice）、管理ダッシュボードの作成",
                                                        "主な機能: [在庫管理、売上確認、注文/出庫/返品処理]",
                                                        "状態値自動遷移ロジック実装（例: 注文完了→出庫準備→出庫完了）",
                                                        "HTML + Thymeleaf 連携画面の完成",
                                                        "本部と店舗間の在庫連携の自動化実装"
                                                    ]
                                            ).map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="border px-2 py-1 bg-gray-100">{lang === 'ko' ? '사용 기술' : '使用技術'}</th>
                                    <td className="border px-2 py-1">
                                        <ul className="list-disc pl-4">
                                            {(
                                                lang === 'ko'
                                                    ? [
                                                        "백엔드: Java, Spring Boot, JPA",
                                                        "프론트엔드: Thymeleaf, HTML, JavaScript",
                                                        "DB: Oracle Cloud",
                                                        "형상관리: GitHub (기능별 브랜치 전략 적용)",
                                                        "배포: AWS 배포"
                                                    ]
                                                    : [
                                                        "バックエンド: Java, Spring Boot, JPA",
                                                        "フロントエンド: Thymeleaf, HTML, JavaScript",
                                                        "DB: Oracle Cloud",
                                                        "バージョン管理: GitHub（機能別ブランチ戦略）",
                                                        "デプロイ: AWSによる配信"
                                                    ]
                                            ).map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="border px-2 py-1 bg-gray-100">{lang === 'ko' ? '느낀점' : '感想'}</th>
                                    <td className="border px-2 py-1">
                                        <ul className="list-disc pl-4">
                                            {(
                                                lang === 'ko'
                                                    ? [
                                                        "실무에서 발생하는 요구사항을 직접 구현하며 실무 감각을 익힐 수 있었음",
                                                        "역할 분담과 협업이 원활했음",
                                                        "기능 분리 및 초기 설계를 체계적으로 진행함",
                                                        "UI 디테일을 수정할 시간이 부족했음"
                                                    ]
                                                    : [
                                                        "実務で発生する要件を自ら実装し、実践的な感覚を身につけることができた",
                                                        "役割分担とチーム協力が円滑だった",
                                                        "機能分離と初期設計を体系的に進行した",
                                                        "UIの細部を修正する時間が不足していた"
                                                    ]
                                            ).map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="border px-2 py-1 bg-gray-100">{lang === 'ko' ? '참고자료' : '参考資料'}</th>
                                    <td className="border px-2 py-1">
                                        <ul className="list-disc pl-4">
                                            {(
                                                lang === 'ko'
                                                    ? [
                                                        "실무 절차 기반 서비스 설계 사례",
                                                        "MVC 아키텍처 설계 자료 (블로그 참조)"
                                                    ]
                                                    : [
                                                        "実務プロセスに基づくサービス設計事例",
                                                        "MVCアーキテクチャ設計資料（ブログ参考）"
                                                    ]
                                            ).map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <button
                            onClick={() => setOpenModal(false)}
                            className="mt-4 px-4 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
                        >
                            {lang === 'ko' ? '닫기' : '閉じる'}
                        </button>
                    </div>
                </div>
            )}

            <footer className="mt-20 text-center text-sm text-gray-500">
                © 2025 Donghyun | Contact: took@daum.net
            </footer>
        </div>
    );
}

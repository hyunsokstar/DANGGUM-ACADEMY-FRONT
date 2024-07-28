// src/app/page.tsx

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import CardForMainPageBodyMenu from '@/components/CardForMainPageBodyMenu';

const HomePage = () => {
  const [sections] = useState([
    {
      id: "scheduler",
      title: "스케쥴러",
      description: ["학생들과 선생님의 일정을 관리합니다."],
      bgColor: "bg-blue-400"
    },
    {
      id: "question-bank",
      title: "문제 은행",
      description: ["다양한 문제들을 풀어볼 수 있습니다."],
      bgColor: "bg-green-400"
    },
    {
      id: "admin",
      title: "Admin",
      description: [
        "학생, 선생님, 관리자의 인사를 관리합니다.",
        "교육 콘텐츠를 관리합니다.",
        "학생들의 성적을 관리합니다."
      ],
      bgColor: "bg-red-400"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-4xl font-bold">Seoul Academy</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="#scheduler" className="hover:underline">스케쥴러</Link>
              </li>
              <li>
                <Link href="#question-bank" className="hover:underline">문제 은행</Link>
              </li>
              <li>
                <Link href="#admin" className="hover:underline">Admin</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-12 px-4 flex flex-wrap">
        {sections.map(section => (
          <CardForMainPageBodyMenu
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
            bgColor={section.bgColor}
          />
        ))}
      </main>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          &copy; 2024 Seoul Academy. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

"use client";

import React, { useState } from 'react';
import HeaderForSeoulAcademy from '@/components/HeaderForSeoulAcademy';
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
      {/* <HeaderForSeoulAcademy /> */}
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
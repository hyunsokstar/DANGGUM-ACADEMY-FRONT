// src/app/page.tsx
"use client";

import React, { useState } from 'react';
import CardForMainPageBodyMenu from '@/components/CardForMainPageBodyMenu';
import CommonButton from '@/components/Common/CommonButton';

const HomePage = () => {
  const [sections] = useState([
    {
      id: "scheduler",
      title: "스케쥴러",
      description: ["학생들과 선생님의 일정을 관리합니다."],
      bgColor: "bg-blue-400",
      link: "/schedule-page"
    },
    {
      id: "question-bank",
      title: "문제 은행",
      description: ["다양한 문제들을 풀어볼 수 있습니다."],
      bgColor: "bg-green-400",
      link: "/problem-bank"
    },
    {
      id: "admin",
      title: "Admin",
      description: ["학생, 선생님, 관리자의 인사 및 교육 콘텐츠를 관리합니다."],
      bgColor: "bg-red-400",
      link: "/admin"
    },
    {
      id: "classroom",
      title: "강의실",
      description: ["온라인 강의를 수강할 수 있습니다."],
      bgColor: "bg-yellow-400",
      link: "/lecture-room"
    },
    {
      id: "qa",
      title: "QA",
      description: ["질문과 답변을 주고받을 수 있습니다."],
      bgColor: "bg-purple-400",
      link: "/qa-page"
    },
    {
      id: "chatting",
      title: "Chatting",
      description: ["실시간으로 대화할 수 있습니다."],
      bgColor: "bg-indigo-400",
      link: "/chatting-room"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sections.map(section => (
            <CardForMainPageBodyMenu
              key={section.id}
              id={section.id}
              title={section.title}
              description={section.description}
              bgColor={section.bgColor}
              link={section.link}
            />
          ))}
        </div>

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
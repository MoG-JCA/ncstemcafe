
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2">
            <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>
            <span className="text-xl font-bold">Premium Gifts</span>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            주식회사 네이처셀 | 대표: 변대중 | 사업자등록번호: 130-81-05606
            <br />
            서울시 영등포구 국회대로76길 10, 5층 | E-mail: help@drjucre.com
          </p>
          <p className="mt-4 text-sm text-gray-500">
            © {new Date().getFullYear()} Premium Gifts Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

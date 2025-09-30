
import React from 'react';
import Button from './Button';

interface ProcessProps {
  onOpenModal: () => void;
}

const steps = [
  {
    step: '1단계',
    title: '상품 선택 및 수량 결정',
    description: '예산과 목적에 맞는 최적의 상품을 추천받고 수량을 결정합니다. 소량부터 대량까지 모두 가능합니다.',
  },
  {
    step: '2단계',
    title: '로고 및 메시지 전달',
    description: '기업 로고 파일과 각인/인쇄될 메시지를 전달하면, 전문 디자이너가 무료로 시안을 제작하여 제공합니다.',
  },
  {
    step: '3단계',
    title: '최종 확인 및 배송',
    description: '시안 확정 후, 원하시는 날짜에 맞춰 안전하게 포장하여 전국 어디든 정확하게 배송합니다.',
  },
];

const Process: React.FC<ProcessProps> = ({ onOpenModal }) => {
  return (
    <section className="bg-indigo-50 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">단 3단계로 완성되는<br/>우리 회사만의 특별한 선물</h2>
          <p className="mt-4 text-lg text-gray-600">
            복잡한 주문 절차는 이제 그만. 전문가와 함께하는 가장 쉽고 빠른 맞춤 제작 솔루션을 경험하세요.
          </p>
        </div>
        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-indigo-200" aria-hidden="true"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-indigo-600 text-white rounded-full text-2xl font-bold">{index + 1}</div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
            <Button size="large" onClick={onOpenModal}>지금 바로 상담 시작하기</Button>
        </div>
      </div>
    </section>
  );
};

export default Process;

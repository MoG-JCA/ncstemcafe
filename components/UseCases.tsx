
import React from 'react';

const useCases = [
  {
    title: '신입사원 웰컴키트',
    description: '새로운 시작을 응원하는 마음을 담아, 회사에 대한 자부심과 소속감을 높여줍니다.',
    imageUrl: 'https://picsum.photos/seed/welcome/600/400',
  },
  {
    title: '창립기념일 & 명절 선물',
    description: '함께 성장해온 임직원과 파트너에게 감사의 마음을 전하는 가장 품격 있는 방법입니다.',
    imageUrl: 'https://picsum.photos/seed/holiday/600/400',
  },
  {
    title: 'VIP 고객 감사 선물',
    description: '소중한 고객에게 브랜드의 가치를 각인시키고, 변치 않는 파트너십을 약속합니다.',
    imageUrl: 'https://picsum.photos/seed/vip/600/400',
  },
  {
    title: '영업 및 마케팅 이벤트',
    description: '고객의 기억에 오래 남는 특별한 경험을 선물하여, 이벤트 효과를 극대화합니다.',
    imageUrl: 'https://picsum.photos/seed/event/600/400',
  },
];

const UseCases: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">어떤 상황에도 완벽하게 어울리는 선물</h2>
          <p className="mt-4 text-lg text-gray-600">
            다양한 비즈니스 목적에 맞춰 최적화된 선물 솔루션으로 최고의 결과를 만들어 보세요.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="group overflow-hidden bg-gray-100 rounded-xl shadow-md">
              <img src={useCase.imageUrl} alt={useCase.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">{useCase.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;

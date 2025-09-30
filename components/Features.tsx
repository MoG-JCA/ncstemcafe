
import React from 'react';

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
    ),
    title: '10개부터 가능한 소량 맞춤 제작',
    description: '수량 부담 없이, 필요한 만큼만. 우리 회사만의 특별한 선물을 만들어보세요.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    title: '업계 최단 3일, 초고속 배송',
    description: '급한 행사나 이벤트도 걱정 마세요. 주문부터 배송까지 가장 빠르게 처리해 드립니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
    ),
    title: '고급 선물 포장 무료 제공',
    description: '선물의 가치를 한층 더 높여주는 고급 포장 서비스로 보내는 분의 정성을 전달합니다.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    ),
    title: '1:1 전담 매니저의 컨설팅',
    description: '궁금한 점, 어려운 점은 모두 해결해 드립니다. 전문가가 처음부터 끝까지 함께합니다.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">매번 똑같은 선물, 이제 고민하지 마세요.</h2>
          <p className="mt-4 text-lg text-gray-600">
            기업 선물 담당자의 모든 고민을 한 번에 해결하는 가장 스마트한 선택.
            <br/>
            차별화된 가치로 최고의 만족을 약속합니다.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-6 p-6 bg-gray-50 rounded-xl">
              <div className="flex-shrink-0 bg-indigo-600 rounded-lg p-3">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;


import React from 'react';

const testimonials = [
  {
    quote: '매년 명절 선물이 가장 큰 고민이었는데, 담당 매니저님이 알아서 다 챙겨주시니 정말 편했습니다. 직원들 만족도도 역대 최고였어요!',
    name: '김민준',
    title: '인사팀장',
    company: '주식회사 성장',
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
  },
  {
    quote: '까다로운 VIP 고객을 위한 선물을 준비해야 했는데, 저희 브랜드 컨셉에 딱 맞는 제품을 제안해 주셔서 성공적으로 행사를 마쳤습니다. 퀄리티가 정말 다릅니다.',
    name: '이서연',
    title: '마케팅 매니저',
    company: '네오 파트너스',
    avatar: 'https://picsum.photos/seed/avatar2/100/100',
  },
  {
    quote: '급하게 박람회 기념품이 필요했는데, 3일 만에 로고 각인부터 배송까지 완벽하게 처리해주셔서 놀랐습니다. 앞으로도 계속 이용할 예정입니다.',
    name: '박서준',
    title: '영업팀',
    company: '크리에이티브 솔루션',
    avatar: 'https://picsum.photos/seed/avatar3/100/100',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-indigo-50 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">고객사 담당자들이 직접 전하는 만족 후기</h2>
          <p className="mt-4 text-lg text-gray-600">
            수많은 기업들이 왜 우리를 선택하고, 계속해서 다시 찾는지 직접 확인해보세요.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg flex flex-col">
                <svg className="w-10 h-10 text-indigo-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L25.864 4z" />
                </svg>
              <blockquote className="mt-4 text-gray-700 flex-grow">
                <p>"{testimonial.quote}"</p>
              </blockquote>
              <footer className="mt-6">
                <div className="flex items-center">
                  <img className="h-12 w-12 rounded-full" src={testimonial.avatar} alt={testimonial.name} />
                  <div className="ml-4">
                    <div className="text-base font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

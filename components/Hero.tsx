
import React from 'react';
import Button from './Button';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          <span className="block">감동을 선물하는 가장 쉬운 방법,</span>
          <span className="block text-indigo-600 mt-2">프리미엄 기업 선물 솔루션</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
          소중한 파트너와 임직원을 위한 선물을 고민하고 계신가요?
          <br />
          브랜드의 가치를 높이고, 받는 사람의 만족을 극대화하는 맞춤 선물을 제안합니다.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="large" onClick={onOpenModal}>빠른 견적 받아보기</Button>
          <Button size="large" variant="secondary">포트폴리오 보기</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

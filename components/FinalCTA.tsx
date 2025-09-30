
import React from 'react';
import Button from './Button';

interface FinalCTAProps {
  onOpenModal: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenModal }) => {
  return (
    <section className="bg-indigo-600">
      <div className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          지금 바로 전문가와 상담하고,
          <br />
          최고의 선물을 준비하세요.
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-indigo-100">
          간단한 정보만 남겨주시면, 기업 선물 전문 매니저가 즉시 연락드려
          <br />
          예산과 목적에 꼭 맞는 최적의 솔루션을 제안해 드립니다.
        </p>
        <div className="mt-10">
          <Button 
            size="large" 
            variant="secondary" 
            className="bg-white text-indigo-600 hover:bg-indigo-50"
            onClick={onOpenModal}
          >
            무료 상담 및 견적 요청
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

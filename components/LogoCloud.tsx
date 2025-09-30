
import React from 'react';

const logos = [
  "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
  "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
  "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg",
  "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg",
  "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
];

const LogoCloud: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          대한민국 최고의 기업들이 신뢰하고 선택합니다.
        </h2>
        <div className="mt-10 grid grid-cols-2 max-w-lg mx-auto gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-5 sm:gap-x-10 lg:mx-0 lg:max-w-none">
          {logos.map((logo, index) => (
            <img
              key={index}
              className="col-span-1 max-h-12 w-full object-contain"
              src={logo}
              alt={`Client Logo ${index + 1}`}
              width={158}
              height={48}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;

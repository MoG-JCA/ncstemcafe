
import React, { useState, useEffect } from 'react';
import Button from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; contact: string }) => Promise<void>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'hidden';
      // Reset form on open
      setName('');
      setContact('');
      setError('');
      setIsSubmitting(false);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) {
      setError('이름과 연락처를 모두 입력해주세요.');
      return;
    }
    setError('');
    setIsSubmitting(true);
    try {
      await onSubmit({ name, contact });
      // The parent component will close the modal on success
    } catch {
      // The parent component handles the error alert, we just need to stop submitting state
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 m-4 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start">
          <div>
            <h2 id="modal-title" className="text-2xl font-bold text-gray-900">무료 상담 및 견적 요청</h2>
            <p className="mt-2 text-gray-600">전문 매니저가 빠르게 연락드리겠습니다.</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="홍길동"
              required
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">연락처 (전화번호 또는 이메일)</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="010-1234-5678"
              required
              autoComplete="tel"
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div>
            <Button type="submit" className="w-full" size="large" disabled={isSubmitting}>
              {isSubmitting ? '전송 중...' : '무료 상담 신청하기'}
            </Button>
            <p className="text-xs text-gray-500 mt-3 text-center">문의 접수 시 개인정보 수집 및 이용에 동의하는 것으로 간주합니다.</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

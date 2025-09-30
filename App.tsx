
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import Features from './components/Features';
import Process from './components/Process';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleFormSubmit = async (data: { name: string; contact: string }): Promise<void> => {
    // 참고: 아래 URL은 Google Apps Script로 생성된 웹 앱 URL로 교체해야 합니다.
    // URL을 교체하지 않으면, 제출이 시뮬레이션으로 동작합니다.
    /*
      Google Apps Script 설정 방법:
      1. Google Sheets에서 새 스프레드시트 생성
      2. 확장 프로그램 > Apps Script 로 이동
      3. 아래 제공된 스크립트 코드를 붙여넣기 후 저장 (Ctrl+S)
         - 이 스크립트는 'premium_gifts_order' 시트에 데이터를 저장합니다.
         - 시트가 없으면 자동으로 생성됩니다.
      4. [배포] > [새 배포] > 유형: 웹 앱, 설명: v1, 액세스 권한: 모든 사용자 로 설정 후 배포
      5. 배포 후 생성된 URL을 아래 SCRIPT_URL에 붙여넣기

      --- Apps Script 코드 ---
      function doPost(e) {
        try {
          var sheetName = 'premium_gifts_order';
          var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName) || SpreadsheetApp.getActiveSpreadsheet().insertSheet(sheetName);
          
          // 헤더 행이 없으면 추가
          if (sheet.getLastRow() === 0) {
            sheet.appendRow(['Timestamp', 'Name', 'Contact']);
          }

          var name = e.parameter.name;
          var contact = e.parameter.contact;
          var timestamp = new Date();
      
          sheet.appendRow([timestamp, name, contact]);
      
          return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' })).setMimeType(ContentService.MimeType.JSON);
        } catch (error) {
          return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() })).setMimeType(ContentService.MimeType.JSON);
        }
      }
    */
    const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec';

    // URL이 기본값인 경우, 시뮬레이션으로 작동합니다.
    if (SCRIPT_URL === 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec') {
      console.warn("SCRIPT_URL is not set. Simulating form submission.");
      console.log("Submitted data:", data);
      
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          alert('문의가 성공적으로 접수되었습니다. (시뮬레이션 모드)');
          handleCloseModal();
          resolve();
        }, 1500);
      });
    }
    
    // 실제 URL이 설정된 경우, fetch 요청을 보냅니다.
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('contact', data.contact);
    
    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('문의가 성공적으로 접수되었습니다. 곧 연락드리겠습니다!');
        handleCloseModal();
      } else {
        throw new Error('Server responded with an error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('죄송합니다. 문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      throw error; // Re-throw to allow modal to handle submitting state
    }
  };


  return (
    <div className="bg-gray-50 min-h-screen">
      <Header onOpenModal={handleOpenModal} />
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <LogoCloud />
        <Features />
        <Process onOpenModal={handleOpenModal} />
        <UseCases />
        <Testimonials />
        <FinalCTA onOpenModal={handleOpenModal} />
      </main>
      <Footer />
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onSubmit={handleFormSubmit} 
      />
    </div>
  );
};

export default App;
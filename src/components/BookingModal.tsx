import React, { useState } from 'react';
import { ModalBase, ModalProps } from './ModalBase';
import { Link } from 'react-router-dom';

export const BookingModal: React.FC<Omit<ModalProps, 'children'>> = ({
  isOpen,
  contentLabel,
  onRequestClose,
}) => {
  const [isBooked, setIsBooked] = useState(false);

  const handleBookingConfirmation = async () => {
    // TODO: 이메일 전송 로직 구현
    setIsBooked(true);
  };

  return (
    <ModalBase isOpen={isOpen} contentLabel={contentLabel} onRequestClose={onRequestClose}>
      <article className="p-2">
        <section className="text-center p-6">
          {isBooked ? (
            <p>예매가 완료되었습니다</p>
          ) : (
            <>
              <p>티켓을 예매하시겠습니까?</p>
              <p>예매 내역은 이메일로 전송됩니다.</p>
            </>
          )}
        </section>

        <section className="flex flex-col gap-2 text-white text-center">
          {isBooked ? (
            <Link to="/" className="p-1 bg-[#FFBF66] rounded-md">
              확인
            </Link>
          ) : (
            <>
              <button className="p-1 bg-[#FFBF66] rounded-md" onClick={handleBookingConfirmation}>
                확인
              </button>
              <button className="p-1 bg-gray-300 rounded-md" onClick={onRequestClose}>
                취소
              </button>
            </>
          )}
        </section>
      </article>
    </ModalBase>
  );
};

import { ReactNode } from 'react';
import { useGetProductQuery } from '../../../redux/api';

interface CardProps {
  children: ReactNode;
}
const Card = ({ children }: CardProps) => {
  return (
    <div
      className='bg-white	w-full rounded-md pb-5'
      style={{ border: '1px solid #E5E7EB' }}
    >
      <section className='flex flex-col gap-5 sm:flex-row'>{children}</section>
    </div>
  );
};

export default Card;

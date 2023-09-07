import { ReactNode } from 'react';
import Chips from './Chips';

interface DetailBoxProps {
  icon: ReactNode;
  title: string;
  options: string[];
}

const DetailBox = ({ icon, title, options }: DetailBoxProps) => {
  return (
    <div className='flex gap-1.5 w-full'>
      {icon}
      <div className='flex flex-col gap-2.5 w-full'>
        <h1
          className='text-base font-normal'
          style={{ color: '#6B7280' }}
        >
          {title}
        </h1>
        <div className='flex gap-1.5 w-full flex-wrap'>
          {options?.map((option, index) => (
            <Chips
              key={`${option}-index`}
              text={option}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailBox;

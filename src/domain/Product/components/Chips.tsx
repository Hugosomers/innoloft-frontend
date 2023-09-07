interface ChipsProps {
  text: string;
}
const Chips = ({ text }: ChipsProps) => {
  return (
    <div
      className='text-sm font-normal leading-3.5'
      style={{
        backgroundColor: '#E5E7EB',
        borderRadius: '20px',
        padding: '5px 14px',
        height: 'fit-content',
        color: '#6B7280',
      }}
    >
      {text}
    </div>
  );
};

export default Chips;

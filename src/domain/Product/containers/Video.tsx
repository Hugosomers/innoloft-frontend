import Card from '../components/Card';
import { useGetProductQuery } from '../../../redux/api';

const Video = () => {
  const { currentData: productCurrentData } = useGetProductQuery({});

  const getVideoUrl = () => {
    const splittedUrl = productCurrentData?.video.split('v=')[1];
    return `https://www.youtube.com/embed/${splittedUrl}`;
  };

  return (
    <Card>
      <div className='w-full px-2 flex flex-col gap-2 mt-7'>
        <h1
          className='text-base font-semibold	'
          style={{ color: '#374151' }}
        >
          Vídeo
        </h1>
        <div className='w-full flex justify-center'>
          <iframe
            className='w-full h-52 sm:w-2/4 sm:h-96'
            src={getVideoUrl()}
          />
        </div>
      </div>
    </Card>
  );
};

export default Video;

import { useGetProductQuery } from '../../../redux/api';
import Card from '../components/Card';
import DetailBox from '../components/DetailBox';

import { ReactComponent as Gear } from '../../../assets/inno_dev-4.svg';
import { ReactComponent as Strategy } from '../../../assets/inno_strategy.svg';
import { ReactComponent as Clock } from '../../../assets/inno_clock.svg';
import { ReactComponent as Investor } from '../../../assets/inno_investor.svg';

const Details = () => {
  const { currentData: productCurrentData } = useGetProductQuery({});

  return (
    <Card>
      <div className='w-full px-2 flex flex-col gap-2 mt-4'>
        <h1
          className='text-base font-semibold	'
          style={{ color: '#374151' }}
        >
          Offer details
        </h1>
        <DetailBox
          icon={<Gear />}
          title='Technology'
          options={productCurrentData?.categories?.map(
            (model: { id: number; name: string }) => model.name
          )}
        />
        <DetailBox
          icon={<Strategy />}
          title='Business Model'
          options={productCurrentData?.businessModels?.map(
            (model: { id: number; name: string }) => model.name
          )}
        />
        <DetailBox
          icon={<Clock />}
          title='Implementation Time'
          options={[productCurrentData?.trl?.name]}
        />
        <DetailBox
          icon={<Investor />}
          title='Costs'
          options={[productCurrentData?.investmentEffort]}
        />
      </div>
    </Card>
  );
};

export default Details;

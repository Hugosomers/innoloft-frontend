import Card from '../components/Card';
import {
  useGetAppConfigsQuery,
  useGetProductQuery,
  usePutProductMutation,
} from '../../../redux/api';
import { ReactComponent as Location } from '../../../assets/inno_location.svg';
import { ReactComponent as Check } from '../../../assets/Icon-Bib.svg';
import Map from '../components/Map';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Company = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isEditing = pathname.includes('edit');
  const [offerName, setOfferName] = useState('');
  const [description, setDescription] = useState({ blocks: [{ text: '' }] });
  const { currentData } = useGetAppConfigsQuery({});
  const { currentData: productCurrentData, isFetching } = useGetProductQuery(
    {}
  );

  const [triggerPut, { isSuccess }] = usePutProductMutation();

  const onChangeNameHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOfferName(e?.target?.value);
  };

  const saveCompanyChanges = () => {
    triggerPut({
      name: offerName,
      description: description.blocks[0].text,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      alert('Successfully edited');
      navigate('/product');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (!isFetching && productCurrentData?.name) {
      setOfferName(productCurrentData.name);
    }
  }, [isFetching, productCurrentData]);

  return (
    <Card>
      <div className='sm:w-3/4'>
        <img
          src={productCurrentData?.picture}
          className='w-full rounded-md'
          style={{ height: '180px' }}
        />
        <div className='w-full px-2 flex flex-col gap-2.5'>
          {isEditing && !isFetching ? (
            <input
              className='text-base font-semibold rounded-md'
              type='text'
              value={offerName}
              onChange={onChangeNameHandle}
              style={{ border: '1px solid #D1D5DB', padding: '5px 10px' }}
            />
          ) : (
            <h1
              className='text-base font-semibold'
              style={{ color: '#374151' }}
            >
              {productCurrentData?.name}
            </h1>
          )}
          {isEditing ? (
            <div
              className='text-base font-semibold rounded-md'
              style={{ border: '1px solid #D1D5DB' }}
            >
              <Editor
                wrapperClassName='demo-wrapper'
                editorClassName='demo-editor'
                onChange={(e) => setDescription(e as any)}
              />
            </div>
          ) : (
            <p
              className='text-sm font-normal leading-6 text-justify'
              style={{ color: '#6B7280' }}
              dangerouslySetInnerHTML={{
                __html: productCurrentData?.description || '',
              }}
            />
          )}
          <div className='w-full flex justify-end'>
            {isEditing && (
              <button
                className='flex items-center gap-1 text-base font-semibold rounded-md'
                onClick={saveCompanyChanges}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#272E7180',
                  color: 'white',
                }}
              >
                {<Check />}Save
              </button>
            )}
          </div>
        </div>
      </div>
      <div className='w-full px-2 flex flex-col gap-5 sm:w-2/5'>
        <h1
          className='text-base font-semibold	'
          style={{ color: '#374151' }}
        >
          Offered By
        </h1>

        <img
          className='w-4/5'
          src={productCurrentData?.company?.logo}
        />

        {currentData?.hasUserSection && (
          <div className='flex gap-2.5 items-center'>
            <img
              className='rounded-full'
              src={productCurrentData?.user?.profilePicture}
              style={{ width: '60px', height: '60px' }}
            />
            <div className='flex flex-col'>
              <p
                className='text-sm	font-semibold'
                style={{ color: '#6B7280' }}
              >
                {productCurrentData?.user?.firstName}{' '}
                {productCurrentData?.user?.lastName}
              </p>
              <p
                className='text-sm	font-normal'
                style={{ color: '#6B7280' }}
              >
                {productCurrentData?.company?.name}
              </p>
            </div>
          </div>
        )}

        <div className='flex'>
          <Location />
          <div className='flex flex-col'>
            <p
              style={{ color: '#6B7280' }}
              className='text-sm	font-normal'
            >
              {productCurrentData?.company?.address?.street}
              {productCurrentData?.company?.address?.house}
            </p>
            <p
              style={{ color: '#6B7280' }}
              className='text-sm	font-normal'
            >
              {productCurrentData?.company?.address?.zipCode}{' '}
              {productCurrentData?.company?.address?.city.name},{' '}
              {productCurrentData?.company?.address?.country.name}
            </p>
          </div>
        </div>
        {!isFetching &&
          productCurrentData?.company?.address?.latitude &&
          productCurrentData?.company?.address?.longitude && (
            <Map
              lat={Number(productCurrentData?.company?.address?.latitude)}
              lng={Number(productCurrentData?.company?.address?.longitude)}
              key='AIzaSyCm0Y0lGBWBIUmt8scDy3KDdHFwxIrgg5M'
            />
          )}
      </div>
    </Card>
  );
};

export default Company;

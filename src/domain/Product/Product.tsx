import Company from './containers/Company';
import { useGetAppConfigsQuery, useGetProductQuery } from '../../redux/api';
import Video from './containers/Video';
import Details from './containers/Details';
import { Link, useLocation } from 'react-router-dom';

import { ReactComponent as Home } from '../../assets/inno_home.svg';
import { ReactComponent as ChevronRight } from '../../assets/chevron_right.svg';

const Product = () => {
  const { currentData } = useGetAppConfigsQuery({});
  const { pathname } = useLocation();

  const isEditing = pathname.includes('edit');

  const { currentData: productCurrentData } = useGetProductQuery({});

  return (
    <div className='px-2 flex flex-col gap-5'>
      <header className='flex flex-col gap-5 sm:flex-row sm:justify-between sm:items-center'>
        <nav className='flex items-center mt-5 px-2'>
          {!isEditing && (
            <Link to='/'>
              <Home />
            </Link>
          )}

          {!isEditing && (
            <>
              <ChevronRight />
              <p
                className='text-sm	font-normal'
                style={{ color: '#6B7280' }}
              >
                Offers
              </p>
              <ChevronRight />
            </>
          )}
          <p
            className='text-sm	font-semibold text-ellipsis overflow-hidden'
            style={{ color: '#6B7280' }}
          >
            {productCurrentData?.name}
          </p>
        </nav>
        <Link
          className='py-1.25 px-2 rounded-md'
          to={isEditing ? '/product' : '/product/edit'}
          style={{
            backgroundColor: currentData?.mainColor,
            color: 'white',
            border: `1px solid ${currentData?.mainColor}`,
            width: 'fit-content',
          }}
        >
          {isEditing ? 'View Offer' : 'Edit'}
        </Link>
      </header>
      <Company />
      <Video />
      <Details />
    </div>
  );
};

export default Product;

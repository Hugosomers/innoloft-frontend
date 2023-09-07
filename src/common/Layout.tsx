import { Outlet } from 'react-router-dom';

import { useGetAppConfigsQuery } from '../redux/api';

const Layout = () => {
  const { currentData } = useGetAppConfigsQuery({});

  return (
    <div className='w-full flex flex-col sm:items-center'>
      <header
        className='w-full py-3.5 px-5 sm:flex sm:justify-center'
        style={{ backgroundColor: currentData?.mainColor }}
      >
        <div className='w-4/5'>
          <img
            src={currentData?.logo}
            style={{
              maxWidth: '140px',
              height: '26px',
              display: 'inline',
              filter: 'brightness(0) invert(1)',
            }}
          />
        </div>
      </header>
      <div className='flex flex-col sm:items-center sm:w-3/5'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

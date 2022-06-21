import React from 'react';
import { hoc } from '@utils/hoc';
import { useLoadingProps } from './loading.props';
// import { LoadingContainer } from './loading.style';

/**
 * <Loading />
 */
const Loading = hoc(useLoadingProps, () => (
  <div className='loader'>
    <div className='loader-logo'>
      <img src='/nt-logo.png' alt="Najot Ta'lim logotype" />
    </div>
    <div className='loader-content'>
      <div className='loader-title' data-testid='loader-title'>
        “Najot Ta’lim”ga xush kelibsiz. <br />
        Sahifa yuklanyapti, uzoq kutib qolmaysiz.
      </div>
      <div className='loader-description'>Kutganingiz uchun tashakkur!</div>
      <div className='loader-spinner'></div>
    </div>
  </div>
));

export { Loading };

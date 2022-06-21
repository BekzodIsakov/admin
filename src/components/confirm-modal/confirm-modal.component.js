import { hoc } from '@utils/hoc';
import { useUnModalProps } from './confirm-modal.props';

import {
  UnModalWrapper,
  UnModalInner,
  UnModalTitle,
  UnModalBottom
} from './confirm-modal.style';

export const UnModal = hoc(
  useUnModalProps,
  ({
    modalTitle,
    children,
    modal = false,
    modalRef,
    handleCloseModal,
    simple
  }) => {
    return (
      <UnModalWrapper ref={modalRef} isOpen={modal} onClick={handleCloseModal}>
        <UnModalInner simple={simple}>
          {modalTitle ? <UnModalTitle>{modalTitle}</UnModalTitle> : ''}
          <UnModalBottom>{children}</UnModalBottom>
        </UnModalInner>
      </UnModalWrapper>
    );
  }
);

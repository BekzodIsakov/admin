import { useEffect } from 'react';

export const BIRTH_DATE_FORMAT = 'BIRTH_DATE_FORMAT';

export const useInputProps = ({ onChange, value, name, format }) => {
  const _onChange = e => {
    let value = e.target.value;
    onChange(value);
  };

  const _onBlur = e => {
    let value = e.target.value;
    let result = value;
    if (format === BIRTH_DATE_FORMAT) {
      let date = value.split('-');
      if (+date[0] < 1900) {
        date[0] = '1900';
      } else if (+date[0] > 2020) {
        date[0] = '2020';
      }
      result = date.join('-');
    }

    if (result !== value) {
      onChange(result);
    }
  };

  useEffect(() => {
    if (value === undefined || value === null) {
      console.log(
        `%c ${name} name-lik Input-ning value-si undefined yoki null bo'lishi kerak emas`,
        'padding: 5px; background: #e5e0d4; color: #ff1f1f;'
      );
    }
  }, [value, name]);

  return {
    _onChange,
    _onBlur
  };
};

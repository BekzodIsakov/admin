import { useFormikContext } from 'formik';
import { useCallback } from 'react';
// import Yup from 'yup'

const useFieldProps = (name, props) => {
  const {
    values,
    errors,
    touched,
    submitCount,
    isSubmitting,
    setFieldValue,
    setFieldTouched,
    ...formik
  } = useFormikContext();

  const status = formik.status;
  const statusError = status?.errors?.[name];
  const error = errors[name] || statusError;
  const isError = submitCount > 0 && error !== undefined;
  const value = values[name];
  const { hooks } = props;

  const onChange = useCallback(
    value => {
      setFieldValue(name, value);

      if (!hooks?.change) return;

      hooks?.change(value);
    },
    [setFieldValue, name, hooks]
  );

  return {
    value,
    error,
    status,
    isError,
    touched,
    onChange,
    isSubmitting
  };
};

export const FormField = ({ render, ...props }) => {
  const Result = render;
  const { value, error, status, isError, touched, onChange } = useFieldProps(
    props.name,
    props
  );

  return (
    <Result
      value={value}
      error={error}
      isError={isError}
      onChange={onChange}
      touched={touched[props.name]}
      disabled={status?.disabled}
      {...props}
    />
  );
};

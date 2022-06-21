import { FormikContext, Form } from 'formik';

export const ThemeForm = ({ use, children, ...props }) => {
  return (
    <FormikContext.Provider value={use}>
      {<Form {...props}>{children}</Form>}
    </FormikContext.Provider>
  );
};

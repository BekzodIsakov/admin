import { Input } from '@components/atoms/Input';
import { Select } from '@components/atoms/select';
import { Textarea } from '@components/atoms/textarea';
import { FormField } from '@components/form';

export const Field = {
  Input: props => <FormField render={Input} {...props} />,
  Textarea: props => <FormField render={Textarea} {...props} />,
  Select: props => <FormField render={Select} {...props} />
};

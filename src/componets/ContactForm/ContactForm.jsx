import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

import {
  ContactsForm,
  Label,
  FormButton,
  FormField,
  FormError,
} from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const contactsSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too short name!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d\'Artagnan'
    )
    .required('Name is a required field!'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Number is a required field!'),
});

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactsSchema}
    >
      <ContactsForm autoComplete="off">
        <Label htmlFor="name">
          Name
          <Field
            as={FormField}
            type="text"
            id="name"
            name="name"
            placeholder="Jacob Mercer"
            autoComplete="name" 
          />
          <ErrorMessage name="name" component={FormError} />
        </Label>

        <Label htmlFor="number">
          Number
          <Field
            as={FormField}
            type="tel"
            id="number"
            name="number"
            placeholder="123-45-67"
            autoComplete="tel" 
          />
          <ErrorMessage name="number" component={FormError} />
        </Label>
        
        <FormButton type="submit">Add contact</FormButton>
      </ContactsForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
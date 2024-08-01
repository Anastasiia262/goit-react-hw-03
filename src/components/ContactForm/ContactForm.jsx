import { Formik, Field } from 'formik';
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
    .min(3, 'Name must be at least 3 characters long')
    .max(50, 'Name must be at most 50 characters long')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i,
      'Name may contain only letters, apostrophe, dash, and spaces.'
    )
    .required('Name is a required field!'),
  number: yup
    .string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      'Phone number must be in the format 000-00-00'
    )
    .required('Number is a required field!'),
});

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values, { resetForm });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactsSchema}
    >
      {({ errors, touched }) => (
        <ContactsForm>
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
            {errors.name && touched.name ? (
              <FormError>{errors.name}</FormError>
            ) : null}
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
            {errors.number && touched.number ? (
              <FormError>{errors.number}</FormError>
            ) : null}
          </Label>

          <FormButton type="submit">Add contact</FormButton>
        </ContactsForm>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

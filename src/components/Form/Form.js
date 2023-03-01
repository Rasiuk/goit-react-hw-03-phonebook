import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { Form, Field, Label, Section, Button } from './Form.styled';
// import * as Yup from 'yup';
// import { nanoid } from 'nanoid';
export const ContactForm = ({ addContact }) => {
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    values.id = nanoid();
    addContact(values);
    resetForm();
  };
  const initialValues = {
    name: '',
    number: '',
  };
  return (
    <Section>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Label>
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" />
          </Label>

          <Label>
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="number" />
          </Label>
          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </Section>
  );
};

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UpdateItem = ({ match }) => {
  const itemId = match.params.id;
  const [item, setItem] = React.useState({ name: '', price: '' });

  React.useEffect(() => {
    axios.get(`http://localhost:5000/items/${itemId}`)
      .then(response => setItem(response.data))
      .catch(error => console.error('Error fetching item:', error));
  }, [itemId]);

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    price: Yup.number().required('Required').positive('Must be a positive number')
  });

  const onSubmit = (values) => {
    axios.put(`http://localhost:5000/items/${itemId}`, values)
      .then(response => {
        console.log('Item updated:', response.data);
      })
      .catch(error => console.error('Error updating item:', error));
  };

  return (
    <div>
      <h1>Update Item</h1>
      <Formik initialValues={item} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize>
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <Field type="text" id="price" name="price" />
            <ErrorMessage name="price" component="div" />
          </div>
          <button type="submit">Update Item</button>
        </Form>
      </Formik>
    </div>
  );
};

export default UpdateItem;

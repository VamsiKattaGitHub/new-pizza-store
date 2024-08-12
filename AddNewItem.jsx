import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddNewItem = () => {
  const initialValues = {
    name: '',
    price: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    price: Yup.number().required('Required').positive('Must be a positive number')
  });

  const onSubmit = (values, { resetForm }) => {
    axios.post('http://localhost:5000/items', values)
      .then(response => {
        console.log('Item added:', response.data);
        resetForm();
      })
      .catch(error => console.error('Error adding item:', error));
  };

  return (
    <div>
      <h1>Add New Item</h1>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
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
          <button type="submit">Add Item</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddNewItem;

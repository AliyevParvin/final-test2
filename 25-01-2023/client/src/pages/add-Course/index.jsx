import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
const AddCourse = () => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    price: Yup.number()
      .min(2, "Too Short!")
      .max(500000, "Too Long!")
      .required("Required"),
    image: Yup.string().url("Invalid url").required("Required"),
    description: Yup.string()
      .min(5, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    url: Yup.string().url("Invalid url").required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: "Michael Smith",
          price: 0,
          description: "",
          url: "https://preview.colorlib.com/theme/course/images/author.jpg",
          image: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          axios.post("http://localhost:8000/courses", values);
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              {" "}
              <Field name="name" placeholder="Name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </div>
            <div>
              {" "}
              <Field name="price" type="number" placeholder="Price" />
              {errors.price && touched.price ? <div>{errors.price}</div> : null}
            </div>
            <div>
              {" "}
              <Field name="image" placeholder="Image" type="url" />
              {errors.image && touched.image ? (
                <div>{errors.image}</div>
              ) : null}{" "}
            </div>
            <div>
              {" "}
              <Field name="description" placeholder="Description" />
              {errors.description && touched.description ? (
                <div>{errors.description}</div>
              ) : null}{" "}
            </div>

            <div>
              {" "}
              <Field name="url" type="url" placeholder="Url" />
              {errors.url && touched.url ? <div>{errors.url}</div> : null}
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddCourse;

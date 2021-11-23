import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const RenderForm = ({ errors, handleSubmit, isSubmitting }) => (
  <Form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="email" className="form-label">email</label>
      <Field
        id="email"
        name="email"
        type="text"
        className={`form-control ${errors.email && 'is-invalid'}`}
      />
      <ErrorMessage component="div" name="email" className="invalid-feedback" />
    </div>

    <div className="form-group">
      <label htmlFor="password" className="form-label">password</label>
      <Field
        id="password"
        name="password"
        type="password"
        className={`form-control ${errors.password && 'is-invalid'}`}
      />
      <ErrorMessage component="div" name="password" className="invalid-feedback" />
    </div>

    <div className="text-end">
      <button
        disabled={isSubmitting}
        className="btn btn-success"
        type="submit"
      >Submit</button>
    </div>
  </Form>
)

const validationSchema = Yup.object().shape({
  email: Yup.string().min(2, 'Too Short!').required('Required'),
  password: Yup.string().min(6).required('Required')
})

export default function CompsFormsAuthLogin({ handleSubmit, initialValues }) {
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        initialValues
      }}
      validationSchema={validationSchema}
      component={RenderForm}
    />
  )
}

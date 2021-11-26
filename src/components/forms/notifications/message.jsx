import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const RenderForm = ({ errors, handleSubmit, isSubmitting }) => (
  <Form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="message" className="form-label">Message</label>
      <Field
        id="message"
        name="message"
        as="textarea"
        rows="10"
        className={`form-control ${errors.message && 'is-invalid'}`}
      />
      <ErrorMessage component="div" name="message" className="invalid-feedback" />
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
  message: Yup.string().min(2, 'Too Short!').required('Required')
})

export default function CompsFormsNotificationsMessage({ handleSubmit, initialValues }) {
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      component={RenderForm}
    />
  )
}

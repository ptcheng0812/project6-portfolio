import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const RenderForm = ({ errors, handleSubmit, isSubmitting }) => (
  <Form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="duty" className="form-label">duty</label>
      <Field
        id="duty"
        name="duty"
        type="text"
        className={`form-control ${errors.duty && 'is-invalid'}`}
      />
      <ErrorMessage component="div" name="duty" className="invalid-feedback" />
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
  duty: Yup.string().required('Duty is required')
})

export default function CompsFormsMyTasks({ handleSubmit, initialValues }) {
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      component={RenderForm}
    />
  )
}

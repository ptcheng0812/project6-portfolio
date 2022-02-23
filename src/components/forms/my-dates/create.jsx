import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const RenderForm = ({ errors, handleSubmit, isSubmitting }) => (
  <Form onSubmit={handleSubmit} className="d-flex align-items-start flex-column mb-5">
    <div className="form-group">
      <label htmlFor="date" className="form-label"></label>
      <Field
        id="date"
        name="date"
        type="date"
        className={`form-control ${errors.date && 'is-invalid'}`}
      />
      <ErrorMessage component="div" name="date" className="invalid-feedback" />
    </div>

    <div className="text-end">
      <button
        disabled={isSubmitting}
        className="btn btn-success mt-4"
        id="form-my-dates-create-btn"
        type="submit"
      >Create Your Schedule</button>
    </div>
  </Form>
)

const validationSchema = Yup.object().shape({
  date: Yup.string().required('Date is required')
})

export default function CompsFormsMyDate({ handleSubmit, initialValues }) {
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      component={RenderForm}
    />
  )
}

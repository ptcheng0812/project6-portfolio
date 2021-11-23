import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const RenderForm = ({ errors, handleSubmit, isSubmitting }) => (
  <Form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
      <Field
        id="title"
        name="title"
        type="text"
        className={`form-control ${errors.title && 'is-invalid'}`}
      />
      <ErrorMessage component="div" name="title" className="invalid-feedback" />
    </div>

    {/* <div className="mb-3">
      <label htmlFor="category">Choose a category:</label>
      <select name="category" id="category">
        <option value="Depression">Depression</option>
        <option value="Anxiety">Anxiety</option>
        <option value="PTSD">PTSD</option>
        <option value="Bipolar">Bipolar</option>
        <option value="Others">Others</option>
      </select>
      <ErrorMessage component="div" name="category" className="invalid-feedback" />
    </div> */}

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
  title: Yup.string().min(2, 'Too Short!').required('Required')
  // category: Yup.string().required('Category is required')
})

export default function CompsFormsThreadsChange({ handleSubmit, initialValues }) {
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      component={RenderForm}
    />
  )
}

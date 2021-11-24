import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const RenderForm = ({ errors, handleSubmit, isSubmitting }) => (
  <Form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="content" className="form-label">Content</label>
      <Field
        id="content"
        name="content"
        as="textarea"
        rows="20"
        className={`form-control ${errors.content && 'is-invalid'}`}
      />
      <ErrorMessage component="div" name="content" className="invalid-feedback" />
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
  content: Yup.string().min(2, 'Too Short!').required('Required')
})

export default function CompsFormsPostsChange({ handleSubmit, initialValues }) {
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      component={RenderForm}
    />
  )
}

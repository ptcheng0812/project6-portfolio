import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const RenderForm = ({ errors, touched, handleSubmit, isSubmitting }) => (
  <Form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="email" className="form-label">email</label>
      <Field
        id="email"
        name="email"
        type="email"
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

    <div className="form-group">
      <label htmlFor="passwordConfirmation">Confirmation</label>
      <Field
        id="passwordConfirmation"
        className={`form-control ${(errors.passwordConfirmation && touched.passwordConfirmation ? ' is-invalid' : '')}`}
        name="passwordConfirmation"
        type="password"
      />
      <ErrorMessage component="div" className="invalid-feedback" name="passwordConfirmation" />
    </div>

    <div className="form-group">
      <label htmlFor="name" className="form-label">Name</label>
      <Field
        id="name"
        name="name"
        type="text"
        className={`form-control ${errors.name && 'is-invalid'}`}
      />
      <ErrorMessage component="div" name="name" className="invalid-feedback" />
    </div>

    <div className="form-group">
      <label htmlFor="firstName" className="form-label">First Name</label>
      <Field
        id="firstName"
        name="firstName"
        type="text"
        className={`form-control ${errors.name && 'is-invalid'}`}
      />
      <ErrorMessage component="div" name="firstName" className="invalid-feedback" />
    </div>

    <div className="form-group">
      <label htmlFor="lastName" className="form-label">Last Name</label>
      <Field
        id="lastName"
        name="lastName"
        type="text"
        className={`form-control ${errors.name && 'is-invalid'}`}
      />
      <ErrorMessage component="div" name="lastName" className="invalid-feedback" />
    </div>

    <div className="form-group">
      <label htmlFor="dateOfBirth" className="form-label">Date Of Birth</label>
      <Field
        id="dateOfBirth"
        name="dateOfBirth"
        type="date"
        className={`form-control ${errors.name && 'is-invalid'}`}
      />
      <ErrorMessage component="div" name="dateOfBirth" className="invalid-feedback" />
    </div>

    <div className="form-group">
      <label htmlFor="introduction" className="form-label">Introduction</label>
      <Field
        id="introduction"
        name="introduction"
        type="textarea"
        className={`form-control ${errors.name && 'is-invalid'}`}
      />
      <ErrorMessage component="div" name="introduction" className="invalid-feedback" />
    </div>

    {/* <div className="form-group">
      <label htmlFor="avatar" className="form-label">Avatar</label>
      <Field
        id="avatar"
        name="avatar"
        type="text"
        className={`form-control ${errors.name && 'is-invalid'}`}
      />
      <ErrorMessage component="div" name="avatar" className="invalid-feedback" />
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
  email: Yup.string().min(2, 'Too Short!').required('Required'),
  password: Yup.string().min(6).required('Required'),
  passwordConfirmation: Yup.string().when('password', {
    is: (val) => (!!(val && val.length > 0)),
    then: Yup.string().oneOf(
      [Yup.ref('password')],
      'Both Password need to be the same'
    )
  }),
  name: Yup.string().required('Name is required'),
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('First Name is required'),
  dateOfBirth: Yup.date().required('Date is required'),
  introduction: Yup.string().required('Introduction is required')
})

export default function CompsFormsAuthSignUp({ handleSubmit, initialValues }) {
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      component={RenderForm}
    />
  )
}

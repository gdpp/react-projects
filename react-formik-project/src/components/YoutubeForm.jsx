/* eslint-disable react/prop-types */
import {Formik, Form, Field, ErrorMessage, FieldArray} from 'formik';
import * as Yup from 'yup';

// Components
import TextError from './TextError';

const YoutubeForm = () => {
  const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
      facebook: '',
      twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
  }

  const onSubmit = values => {
    console.log('Form data: ', values);
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email Format').required('Required'),
    channel: Yup.string().required('Required')
  });

  // const formik = useFormik({
  //   validationSchema,
  //   initialValues,
  //   //validate,
  //   onSubmit
  // });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <div className='form-control'>
          <label htmlFor="name">Name</label>
          <Field type="text" id='name' name='name' />
          <ErrorMessage name='name' component={TextError}/>
        </div>
        <div className='form-control'>
          <label htmlFor="email">E-mail</label>
          <Field type="email" id='email' name='email' />
          <ErrorMessage name='email'>
            {
              errMsg => <div className='error'>{errMsg}</div> 
            }
          </ErrorMessage>
        </div>
        <div className='form-control'>
          <label htmlFor="channel">Channel</label>
          <Field type="text" id='channel' name='channel' placeholder='Youtube channel name'/>
          <ErrorMessage name='channel'/>
        </div>
        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as='textarea' id='comments' name='comments'/>
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name='address'>
            {
              (props) => {
                console.log(props);
                const {field, form, meta} = props;
                return <div>
                  <input type='text' id='address' {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null }
                </div>
              }
            }
          </Field>
        </div>
        <div className="form-control">
          <label htmlFor="facebook">Facebook profile</label>
          <Field type='text' id='facebook' name='social.facebook' />
        </div>
        <div className="form-control">
          <label htmlFor="twitter">Twitter profile</label>
          <Field type='text' id='twitter' name='social.twitter' />
        </div>
        <div className="form-control">
          <label htmlFor="pphone">Primary phone</label>
          <Field type='text' id='pphone' name='phoneNumbers[0]' />
        </div>
        <div className="form-control">
          <label htmlFor="sphone">Secondary phone</label>
          <Field type='text' id='sphone' name='phoneNumbers[1]' />
        </div>
        <div className="form-control">
          <label htmlFor="listPhone">List of phone numbers</label>
          <FieldArray name='phNumbers'>
            {
              (fieldArrayProps) => {
                const {push, remove, form} = fieldArrayProps;
                const {values} = form;
                const {phNumbers} = values;

                return <div>
                  {
                    phNumbers.map((phone, idx) => (
                      <div key='idx'>
                        <Field name={`phNumbers[${idx}]`}/>
                        <button type='button' onClick={() => remove(idx)}>-</button>
                        <button type='button' onClick={() => push('')}>+</button>
                      </div>
                    ))
                  }
                </div>;
              }
            }
          </FieldArray>
        </div>
        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}

export default YoutubeForm

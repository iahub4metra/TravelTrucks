import DatePicker from "react-datepicker";
import s from "./Form.module.css"
import "react-datepicker/dist/react-datepicker.css"
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { sendFormData } from "../../redux/campers/operations";
import { Field, Formik, FormikHelpers, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup"
import toast, {Toaster} from 'react-hot-toast'
import { useSelector } from "react-redux";
import { errorSelector } from "../../redux/campers/selectors";

interface FormValues {
    name: string;
    email: string;
    comment: string;
    bookingDate: Date | null;
}

const initialData = {
    name: "",
    email: "",
    comment: "",
    bookingDate: ""
}

const Form = () => {    

    const dispatch: AppDispatch = useDispatch()
    const isError = useSelector(errorSelector)

     const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        comment: Yup.string(),
        bookingDate: Yup.date().nullable().required("Booking date is required"),
    });
    
    const handleSumbit = (values: FormValues, FormikHelpers: FormikHelpers<FormValues>) => {
        const bookingData = {
            name: values.name,
            email: values.email,
            comment: values.comment,
            bookingDate: values.bookingDate ? values.bookingDate.toISOString() : undefined
        };
        dispatch(sendFormData(bookingData));
        if (!isError) {
            toast.error("Something went wrong!", { position: "top-right" })
            return
        }
        FormikHelpers.setSubmitting(false);
        toast.success("Successfully booked a camper!", { position: 'top-right' })
        FormikHelpers.resetForm()
    }

    const DatePickerField = ({ field, form, ...props }: any) => {
        return (
            <DatePicker
                {...field}
                {...props}
                selected={field.value}
                onChange={(val) => form.setFieldValue(field.name, val)}
                calendarClassName={s.calendar}
                dayClassName={date => s.dayCalendar}
            />
        );
    };

    return (
        <div className={s.formOuterCont}>
            <div>
                <h3>Book your campervan now</h3>
                <p>Stay connected! We are always ready to help you.</p>
            </div>
            <Formik<FormValues>
                initialValues={{
                    name: "",
                    email: "",
                    comment: "",
                    bookingDate: null
                }}
                onSubmit={handleSumbit}
                validationSchema={validationSchema}
            >
                    <FormikForm>
                    <div>
                        <Field type="text" name="name" placeholder="Name*" />
                        <ErrorMessage className={s.errorMsg} name="name" component="span"/>
                    </div>
                    <div>
                        <Field type="email" name="email" placeholder="Email*" />
                        <ErrorMessage className={s.errorMsg} name="email" component="span"/>
                    </div>
                    <div>
                        <Field className={s.dateInput} name="bookingDate" component={DatePickerField} placeholderText="Booking Date*" minDate={new Date()} />
                        <ErrorMessage className={s.errorMsg} name="bookingDate" component="span"/>
                    </div>
                    <div>
                        <Field as="textarea" name="comment" id="" placeholder="Comment"></Field>
                    </div>
                    <button className={s.btnSubmit} type="submit">Send</button>
                </FormikForm>
                
            </Formik>
            <Toaster/>
        </div>
    );
}
 
export default Form;

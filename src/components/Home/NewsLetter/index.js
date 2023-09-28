import React from "react"

import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"

import Button from "../../../utils/Button"
import Icon from "../../../assets/images/dropDownIcon.svg"

const NewsLetter = () => {
  const options = [
    { label: "English", value: "option1" },
    { label: "Spanish", value: "option2" },
    { label: "French", value: "option3" },
    { label: "German", value: "option4" },
  ]

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    // Define validation rules for the select field
    selectOption: Yup.string().required("Please select language"),
  })

  const initialValues = {
    selectOption: "",
    email: "",
  }

  const handleSubmit = (values, { setSubmitting }) => {
    // You can handle form submission here
    console.log(values)
    // Display an alert when the form is submitted successfully
    window.alert("Form submitted successfully!")
    setSubmitting(false)
  }
  return (
    <div className="rounded-[20px] py-16 px-6 bg-bgPrimary flex flex-col items-center gap-8">
      <div>
        <h4 className={`h4 ${"mb-4 text-center"}`}>Join our newsletter</h4>
        <p className={`p-large ${"text-center !tracking-normal"}`}>
          Get daily emails with word of the day!
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-full flex justify-center">
            <div className="flex flex-col items-center gap-4 md:max-w-[343px] w-full">
              <div className="w-full relative inline-block text-left p-large !font-medium !leading-[22px]">
                <div className="relative inline-block text-left w-full p-large !font-medium !leading-[22px]">
                  <Field
                    as="select"
                    id="selectOption"
                    name="selectOption"
                    className="cursor-pointer inline-flex border border-solid border-bgGrey w-full justify-between items-center rounded-[14px] bg-white px-[14px] py-[13px] focus:outline-none focus:ring-0"
                  >
                    <option
                      value=""
                      disabled
                      className="absolute right-0 z-10 w-full rounded-[14px] bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      Select language
                      <img src={Icon} alt="btn_icon" />
                    </option>
                    {options.map(option => (
                      <option key={option.value} value={option.value}>
                        <p className="px-4 py-2 hover:bg-bgPrimary cursor-pointer absolute right-0 z-10 w-full rounded-[14px] bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {option.label}
                        </p>
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    className="text-xs text-[#FF0000] pt-1 pl-2"
                    name="selectOption"
                    component="div"
                  />
                </div>
              </div>

              <div className="w-full">
                <Field
                  className="rounded-[14px] bg-white p-[14px] w-full focus:outline-none focus:ring-0"
                  type="email"
                  id="email"
                  placeholder="Your email"
                  name="email"
                />
                <ErrorMessage
                  className="text-xs text-[#FF0000] pt-1 pl-2"
                  name="email"
                  component="div"
                />
              </div>
              <Button
                className=" !py-[13px] !rounded-[14px] px-[27px] max-w-full md:max-w-[128px] w-full flex justify-center"
                cta={() => {}}
                type="submit"
                bg
                disabled={isSubmitting ? true : false}
                icon=""
                text="Subscribe"
                buttonStyling="!w-[128px]"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default NewsLetter

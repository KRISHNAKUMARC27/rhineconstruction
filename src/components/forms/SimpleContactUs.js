import React, { useState } from "react";
import emailjs from "emailjs-com";
import tw from "twin.macro";
import styled from "styled-components";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`
  w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 
  rounded-full font-bold tracking-wide shadow-lg uppercase text-sm 
  transition duration-300 transform focus:outline-none focus:shadow-outline 
  hover:bg-gray-300 hover:text-primary-700 
  hocus:-translate-y-px hocus:shadow-xl
`;

const DialogBox = styled.div`
  ${tw`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg shadow-lg z-50`}
  ${({ type }) => type === "success" && tw`bg-green-200 text-green-800`}
  ${({ type }) => type === "error" && tw`bg-red-200 text-red-800`}
`;

const OkButton = tw.button`
  mt-4 px-4 py-2 bg-gray-500 text-white rounded-md shadow-md font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`;

const initialState = {
  name: "",
  email: "",
  message: "",
  phone: "",
};

export default () => {
  const [formValues, setFormValues] = useState(initialState);
  const [dialog, setDialog] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const clearState = () => setFormValues(initialState);

  const closeDialog = () => {
    clearState();
    setDialog(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      formValues.name,
      formValues.email,
      formValues.message,
      formValues.phone
    );

    emailjs
      .sendForm(
        "service_e71ohbt",
        "template_15t7ai6",
        e.target,
        "rb3YnH3YFVOGPIWLs"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
          setDialog({
            type: "success",
            message:
              "Thanks for contacting us. We will get back to you as soon as possible.",
          });
        },
        (error) => {
          console.log(error.text);
          setDialog({
            type: "error",
            message: "Something went wrong. Please call us at Ph: 1234567890",
          });
        }
      );
  };

  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="name-input">Your Name</Label>
                    <Input
                      id="name-input"
                      type="text"
                      name="name"
                      placeholder="E.g. Anil Kumar"
                      onChange={handleChange}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="email-input">Your Email Address</Label>
                    <Input
                      id="email-input"
                      type="email"
                      name="email"
                      placeholder="E.g. anilkumar@mail.com"
                      onChange={handleChange}
                    />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer>
                    <Label htmlFor="phone-input">Your Phone Number</Label>
                    <Input
                      id="phone-input"
                      type="phone"
                      name="phone"
                      placeholder="E.g. 1234567890"
                      onChange={handleChange}
                    />
                  </InputContainer>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="name-input">Your Message</Label>
                    <TextArea
                      id="message-input"
                      name="message"
                      placeholder="E.g. Details about your construction plan"
                      onChange={handleChange}
                    />
                  </InputContainer>
                </Column>
              </TwoColumn>

              <SubmitButton type="submit"> Submit </SubmitButton>
            </form>
          </div>
          {dialog && (
            <DialogBox type={dialog.type}>
              <p>{dialog.message}</p>
              <OkButton onClick={closeDialog}>Ok</OkButton>
            </DialogBox>
          )}
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};

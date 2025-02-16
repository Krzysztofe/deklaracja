import { render, screen } from "@testing-library/react";
import { Formik } from "formik";
import { initialValues } from "../../../pages/steps/stepForm/useFormikMember/initialValuesMember";
import InputsRadioWithText from "./InputsRadioWithText";

const inputsData = ["name", "surname"];

describe("InputsRadioWithText", () => {
  test("input renders the headingText prop", () => {
    render(
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <InputsRadioWithText
          headingText="Test heading"
          inputsData={inputsData}
          radioValue="user"
          textValue="name"
        />
      </Formik>
    );
    const headingEl = screen.getByText(/Test heading/i);
    expect(headingEl).toBeInTheDocument();
  });

  test("renders input based on inputsData prop", () => {
    render(
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <InputsRadioWithText
          headingText="Test heading"
          inputsData={inputsData}
          radioValue="user"
          textValue="name"
        />
      </Formik>
    );

    inputsData.forEach(radio => {
      const radioEl = screen.getByRole("radio", { name: radio });
      expect(radioEl).toHaveAttribute("value", radio);
    });
  });

  test("input renders based on radioValue prop", () => {
    render(
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <InputsRadioWithText
          headingText="Test heading"
          inputsData={inputsData}
          radioValue="user"
          textValue="name"
        />
      </Formik>
    );

    inputsData.forEach(radio => {
      const radioEl = screen.getByRole("radio", { name: radio });
      expect(radioEl).toHaveAttribute("value", radio);
    });
  });

 test("input renders the textValue prop", () => {
   render(
     <Formik initialValues={initialValues} onSubmit={() => {}}>
       <InputsRadioWithText
         headingText="Test heading"
         inputsData={inputsData}
         radioValue="user"
         textValue="name"
       />
     </Formik>
   );

   const textInput = screen.getByRole("textbox", { name: /Inny/i }); 
   expect(textInput).toBeInTheDocument();
   expect(textInput).toHaveAttribute("name", "name");


 });


});


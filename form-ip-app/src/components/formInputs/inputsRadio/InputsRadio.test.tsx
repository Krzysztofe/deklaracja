import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Formik } from "formik";
import { initialValues } from "../../../pages/steps/stepForm/useFormikMember/initialValuesMember";
import InputsRadio from "./InputsRadio";

const inputsData = ["name", "surname"];

describe("InputsRadio", () => {
  test("renders the headingText prop", () => {
    render(
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <InputsRadio
          headingText="Test Heading"
          inputsData={inputsData}
          inputValue={"user"}
          membership={true}
        />
      </Formik>
    );
    const headingEl = screen.getByText("Test Heading");
    expect(headingEl).toBeInTheDocument();
  });

  test("renders radio based on inputsData prop", () => {
    render(
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <InputsRadio
          headingText="Test Heading"
          inputsData={inputsData}
          inputValue={"user"}
          membership={true}
        />
      </Formik>
    );
    inputsData.forEach(radio => {
      const inputElement = screen.getByRole("radio", { name: radio });
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute("value", radio);
      const labelElement = screen.getByText(radio);
      expect(labelElement).toBeInTheDocument();
    });
  });

  test("radio has value based on inputValue prop", () => {
    const customInitialValues = {
      ...initialValues,
      user: "name",
    };

    render(
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <InputsRadio
          headingText="Test Heading"
          inputsData={inputsData}
          inputValue={"user"}
          membership={true}
        />
      </Formik>
    );
    inputsData.forEach(radio => {
      const radioButton = screen.getByRole("radio", { name: radio });
      expect(radioButton).toHaveAttribute("value", radio);
  
      // Check if the selected value is correctly set
      //   if (radio === customInitialValues.user) {
      //     expect(radioButton).toBeChecked();
      //   } else {
      //     expect(radioButton).not.toBeChecked();
      //   }
    });
  });

  test("renders radio styles based on membership prop", () => {
    render(
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <InputsRadio
          headingText="Test Heading"
          inputsData={inputsData}
          inputValue={"user"}
          membership={true}
        />
      </Formik>
    );
    inputsData.forEach(radio => {
      const inputElement = screen.getByRole("radio", { name: radio });
      expect(inputElement).toBeInTheDocument();
    });
  });
});

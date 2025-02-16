import { render, screen } from "@testing-library/react";
import { Formik } from "formik";
import { initialValues } from "../../../pages/steps/stepForm/useFormikMember/initialValuesMember";
import InputsCheckbox from "./InputsCheckbox";

const inputsData = [{ label: "name", value: "nameValue" }];

describe("InputsRadio", () => {
  test("renders radio based on inputsData prop", () => {
    render(
      <Formik initialValues={{ initialValues }} onSubmit={() => {}}>
        <InputsCheckbox inputsData={inputsData} />
      </Formik>
    );
    inputsData.forEach(checkbox => {
      const checkboxEl = screen.getByRole("checkbox", { name: checkbox.label });
      expect(checkboxEl).toHaveAttribute("name", checkbox.value);
    });
  });
});

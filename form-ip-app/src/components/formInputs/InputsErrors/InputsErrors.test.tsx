import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputsErrors from "./InputsErrors";
import { FormikErrors, FormikTouched } from "formik";
import { ModelMember } from "../../../sharedModels/ModelMember";

// Mock data for Formik errors and touched
const mockErrors: FormikErrors<ModelMember> = {
  name: "Name is required",
  email: "Email is invalid",
};

const mockTouched: FormikTouched<ModelMember> = {
  name: true,
  email: true,
};

describe("InputsErrors", () => {
  test("renders error message for 'value' when touched and error exist", () => {
    render(
      <InputsErrors value="name" errors={mockErrors} touched={mockTouched} />
    );

    const errorMessage = screen.getByText("Name is required");
    expect(errorMessage).toBeInTheDocument();
  });

  test("not render error message when field is not touched", () => {
    const unTouched = { ...mockTouched, name: false };

    render(
      <InputsErrors value="name" errors={mockErrors} touched={unTouched} />
    );

    const errorMessage = screen.queryByText("Name is required");
    expect(errorMessage).not.toBeInTheDocument();
  });

  // test("renders error message for 'otherValue' when touched and error exist", () => {
  //   const mockTouchedWithOtherValue = {
  //     ...mockTouched,
  //     email: true, // Ensure `touched["email"]` is true
  //   };

  //   render(
  //     <InputsErrors
  //       value="name"
  //       otherValue="email"
  //       errors={mockErrors}
  //       touched={mockTouchedWithOtherValue}
  //     />
  //   );

  //   const errorMessage = screen.getByText("Email is invalid");
  //   expect(errorMessage).toBeInTheDocument();
  // });

  test("renders error message for 'value' or 'otherValue' when both are touched and errors exist", () => {
    render(
      <InputsErrors
        value="name"
        otherValue="email"
        errors={mockErrors}
        touched={mockTouched}
      />
    );

    const errorMessage = screen.getByText("Name is required");
    expect(errorMessage).toBeInTheDocument();
  });

  test("renders error message only for 'value' when 'otherValue' is not provided", () => {
    render(
      <InputsErrors value="name" errors={mockErrors} touched={mockTouched} />
    );

    const errorMessage = screen.getByText("Name is required");
    expect(errorMessage).toBeInTheDocument();
  });
});

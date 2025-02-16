import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputsTexts from "./InputsTexts";
import { Formik } from "formik";
import { initialValues } from "../../../pages/steps/stepForm/useFormikMember/initialValuesMember";


const inputsData = [
  { label: "First Name", value: "input1", type: "text" },
  { label: "Last Name", value: "input2", type: "text" },
];

describe("InputsTexts", () => {
  test("renders the headingText prop", () => {
    render(
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <InputsTexts headingText="Test Heading" inputsData={inputsData} />
      </Formik>
    );
    const heading = screen.getByText("Test Heading");
    expect(heading).toBeInTheDocument();
  });

  test("renders inputs based on inputsData prop", () => {
    render(
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        <InputsTexts headingText="Test Heading" inputsData={inputsData} />
      </Formik>
    );

    inputsData.forEach(({ label, value, type }) => {
      const inputLabel = screen.getByLabelText(label);
      expect(inputLabel).toBeInTheDocument();
      expect(inputLabel).toHaveAttribute("type", type);
      expect(inputLabel).toHaveAttribute("name", value);
    });
  });
});

// // Mocking Zustand store correctly
// jest.mock("../../../zustandStores/useFormMemberStore", () => ({
//   useFormMemberStore: jest.fn(),
// }));

// jest.mock("./useHandleInputsText", () => ({
//   __esModule: true,
//   default: () => ({
//     handleChange: jest.fn(),
//   }),
// }));

// describe("InputsTexts component", () => {
//   const mockSetError = jest.fn();

//   beforeEach(() => {
//     // Create a mock store with Zustand's expected methods
//     const mockStore = {
//       setError: mockSetError,
//       // Add other methods or properties needed for your tests
//       getState: () => ({
//         // other mock data or methods as necessary
//       }),
//     };

//     // Ensure jest.mock returns the mock store correctly
//     (useFormMemberStore as any).mockReturnValue(mockStore);
//   });

//   const initialValues = {
//     input1: "",
//     input2: "",
//   };

//   const inputsData = [
//     { label: "First Name", value: "input1", type: "text" },
//     { label: "Last Name", value: "input2", type: "text" },
//   ];

//   test("renders HeadingPrimary with correct text", () => {
//     render(
//       <Formik initialValues={initialValues} onSubmit={() => {}}>
//         <InputsTexts headingText="Test Heading" inputsData={inputsData} />
//       </Formik>
//     );

//     expect(screen.getByText("Test Heading")).toBeInTheDocument();
//   });

//   test("renders the correct number of TextField components", () => {
//     render(
//       <Formik initialValues={initialValues} onSubmit={() => {}}>
//         <InputsTexts headingText="Test Heading" inputsData={inputsData} />
//       </Formik>
//     );

//     const textFields = screen.getAllByRole("textbox");
//     expect(textFields).toHaveLength(inputsData.length);
//   });

//   test("passes the correct props to each TextField", () => {
//     render(
//       <Formik initialValues={initialValues} onSubmit={() => {}}>
//         <InputsTexts headingText="Test Heading" inputsData={inputsData} />
//       </Formik>
//     );

//     inputsData.forEach(({ label, value }) => {
//       const textField = screen.getByLabelText(label);
//       expect(textField).toHaveAttribute("name", value);
//       expect(textField).toHaveAttribute("type", "text");
//     });
//   });

//   test("renders InputsErrors for each input field", () => {
//     render(
//       <Formik initialValues={initialValues} onSubmit={() => {}}>
//         <InputsTexts headingText="Test Heading" inputsData={inputsData} />
//       </Formik>
//     );

//     inputsData.forEach(({ value }) => {
//       const errorElement = screen.getByTestId(`error-${value}`); // Ensure InputsErrors has a `data-testid` prop for identification
//       expect(errorElement).toBeInTheDocument();
//     });
//   });

//   test("calls setError with errors on render", () => {
//     const mockErrors = { input1: "Error message" };

//     render(
//       <Formik
//         initialValues={initialValues}
//         onSubmit={() => {}}
//         initialErrors={mockErrors}
//       >
//         <InputsTexts headingText="Test Heading" inputsData={inputsData} />
//       </Formik>
//     );

//     expect(mockSetError).toHaveBeenCalledWith(mockErrors);
//   });
// });

// jest.mock("../../../zustandStores/useFormMemberStore", () => ({
//   useFormMemberStore: jest.fn(),
// }));

// describe("InputsTexts component", () => {
//   const mockSetError = jest.fn();

//   beforeEach(() => {
//     // Mock the Zustand store correctly, including setError
//     (useFormMemberStore as any).mockReturnValue({
//       setError: mockSetError,
//       // You can also mock other properties of the store as needed
//     });
//   });

//   const initialValues = {
//     input1: "",
//     input2: "",
//   };

//   const inputsData = [
//     { label: "First Name", value: "input1", type: "text" },
//     { label: "Last Name", value: "input2", type: "text" },
//   ];

//   test("renders HeadingPrimary with correct text", () => {
//     render(
//       <Formik initialValues={initialValues} onSubmit={() => {}}>
//         <InputsTexts headingText="Test Heading" inputsData={inputsData} />
//       </Formik>
//     );

//     expect(screen.getByText("Test Heading")).toBeInTheDocument();
//   });

//   test("renders the correct number of TextField components", () => {
//     render(
//       <Formik initialValues={initialValues} onSubmit={() => {}}>
//         <InputsTexts headingText="Test Heading" inputsData={inputsData} />
//       </Formik>
//     );

//     const textFields = screen.getAllByRole("textbox");
//     expect(textFields).toHaveLength(inputsData.length);
//   });

//   test("passes the correct props to each TextField", () => {
//     render(
//       <Formik initialValues={initialValues} onSubmit={() => {}}>
//         <InputsTexts headingText="Test Heading" inputsData={inputsData} />
//       </Formik>
//     );

//     inputsData.forEach(({ label, value }) => {
//       const textField = screen.getByLabelText(label);
//       expect(textField).toHaveAttribute("name", value);
//       expect(textField).toHaveAttribute("type", "text");
//     });
//   });

//   test("renders InputsErrors for each input field", () => {
//     render(
//       <Formik initialValues={initialValues} onSubmit={() => {}}>
//         <InputsTexts headingText="Test Heading" inputsData={inputsData} />
//       </Formik>
//     );

//     inputsData.forEach(({ value }) => {
//       const errorElement = screen.getByTestId(`error-${value}`);
//       expect(errorElement).toBeInTheDocument();
//     });
//   });

//   test("calls setError with errors on render", () => {
//     const mockErrors = { input1: "Error message" };

//     render(
//       <Formik
//         initialValues={initialValues}
//         onSubmit={() => {}}
//         initialErrors={mockErrors}
//       >
//         <InputsTexts headingText="Test Heading" inputsData={inputsData} />
//       </Formik>
//     );

//     // Ensure that setError is called with the initial errors
//     expect(mockSetError).toHaveBeenCalledWith(mockErrors);
//   });
// });

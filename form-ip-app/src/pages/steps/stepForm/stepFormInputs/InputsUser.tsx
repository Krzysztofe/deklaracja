import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import InputsErrors from "./InputsErrors";
import HeadingPrimary from "../../../../components/HeadingPrimary";

const InputsUser = () => {
  const { formik } = useContext(StepsContext);

  const dataTextInputs = [
    { label: "Imię", value: "name", type: "text" },
    { label: "Nazwisko", value: "surname", type: "text" },
    { label: "Adres", value: "address", type: "text" },
    { label: "Telefon", value: "phone", type: "tel" },
    { label: "E-mail", value: "email", type: "email" },
  ];

  return (
    <>
      <HeadingPrimary headingText={"Twoje dane:"} />
      {dataTextInputs.map(({ label, value, type }, idx) => {
        return (
          <FormGroup
            key={label}
            sx={{
              maxWidth: "24rem",
              width: { xs: "80%", sm: "60%" },
              marginInline: "auto",
              ml: { xs: "auto", sm: "40%" },
              mt: idx === 0 ? { xs: 4.2, sm: 5.9 } : 0,
            }}
          >
            <TextField
              key={label}
              type={type}
              id={value}
              name={value}
              label={label}
              value={formik.values[value as keyof typeof formik.values]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              size="small"
            />

            <InputsErrors value={value} formik={formik} />
          </FormGroup>
        );
      })}
    </>
  );
};

export default InputsUser;
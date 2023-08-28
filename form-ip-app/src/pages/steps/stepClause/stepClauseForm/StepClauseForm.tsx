import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import InputsErrors from "../../stepForm/inputsPrintElements/InputsErrors";

const StepClauseForm = () => {
  const { formikClause } = useContext(StepsContext);

  return (
    <Box
      sx={{
        position: "sticky",
        bottom: { xs: "6rem", sm: "3rem" },
        left: 0,
        backgroundColor: "white",
        width: "100%",
        height: {
          xs: "8rem",
          sm: "6rem",
          md: "4rem",
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        borderTop: 1,
        borderBottom:1,
        borderColor: "info.light",
        outline: "10px solid white"
      }}
    >
      <FormControlLabel
        control={<Checkbox />}
        name="confirmation"
        checked={formikClause.values.confirmation}
        onChange={formikClause.handleChange}
        label="Zapoznałem się z klauzulą informacyjną i wyrażam zgodę na przetważanie moich danych osobowych na zasadach i w celach w niej wskazanych"
        sx={{
          "& .css-19rnxuj-MuiTypography-root": {
            color: "info.main",
          },
        }}
      />
      <Box sx={{ ml: 4 }}>
        <InputsErrors
          formik={formikClause}
          value={"confirmation"}
          otherValue={null}
        />
      </Box>
    </Box>
  );
};

export default StepClauseForm;

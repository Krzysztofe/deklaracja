import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useContext } from "react";
import { StepsContext } from "../../../../context/ContextProv";
import InputsErrors from "../../stepForm/stepFormInputs/InputsErrors";
import { rwd } from "../../../../utils/rwd";

const StepClauseForm = () => {
  const { formikClause } = useContext(StepsContext);

  return (
    <>
      <Box
        sx={{
          height: rwd("74px", "72px"),
          pl: rwd(1.6, 0),
          borderBottom: 1,
          borderColor: "info.light",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checkedIcon={
                <CheckCircleOutlineIcon sx={{ color: "info.dark" }} />
              }
              icon={<RadioButtonUncheckedIcon />}
              sx={{
                "&:hover": { boxShadow: 2 },
                color: formikClause.values.confirmation
                  ? "main.dark"
                  : "primary.main",
              }}
            />
          }
          name="confirmation"
          checked={formikClause.values.confirmation}
          onChange={formikClause.handleChange}
          label="Zapoznałem/-łam się z klauzulą informacyjną i wyrażam zgodę na przetwarzanie moich danych osobowych na zasadach i w celach w niej wskazanych"
          sx={{
            "& .MuiFormControlLabel-label": {
              color: formikClause.values.confirmation
                ? "main.dark"
                : "primary.main",
              fontSize: theme => theme.typography.fs_12_rg,
            },
          }}
        />
        <Box
          sx={{
            ml: 3.2,
            position: "absolute",
            bottom: rwd("-11px", "-8px", "-1px"),
          }}
        >
          <InputsErrors formik={formikClause} value={"confirmation"} />
        </Box>
      </Box>
    </>
  );
};

export default StepClauseForm;

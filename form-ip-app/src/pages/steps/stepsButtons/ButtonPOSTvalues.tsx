import { useContext, useEffect, useState } from "react";
import { StepsContext } from "../../../context/ContextProv";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import { URL } from "../../../data/dataURL";
import { currentDateInNumbers } from "../../../utils/currentDateInNumbers";
import { rwd } from "../../../utils/rwd";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const ButtonPOSTvalues = () => {
  const { formik, sendRequest, isCaptcha, setIsCaptcha, currentStepIdx, next } =
    useContext(StepsContext);

  const [responseStatus, setResponseStatus] = useState(false);

  useEffect(() => {
    if (responseStatus) next();
  }, [responseStatus]);

  useEffect(() => {
    if (currentStepIdx !== 2) {
      setIsCaptcha(false);
    }
  }, [currentStepIdx]);

  const handlePOST = () => {
    if (currentStepIdx === 2) {
      sendRequest(
        {
          url: URL,
          body: {
            member: { ...formik.values, submitDate: currentDateInNumbers() },
          },
          method: "POST",
        },
        setResponseStatus
      );
    }
  };

  return (
    <>
      {currentStepIdx === 2 && (
        <Button
          variant="contained"
          onClick={() => {
            currentStepIdx < 2 && next();
            isCaptcha && handlePOST();
          }}
          endIcon={isCaptcha ? <KeyboardDoubleArrowRightOutlinedIcon />: <KeyboardDoubleArrowUpIcon />}
          sx={{
            width: rwd("65%", "12rem"),
            "&:hover": { backgroundColor: "#2455BA" },
          }}
        >
          {isCaptcha ? "Wyślij" : "ZAZNACZ CAPTCHA"}
        </Button>
      )}
    </>
  );
};

export default ButtonPOSTvalues;

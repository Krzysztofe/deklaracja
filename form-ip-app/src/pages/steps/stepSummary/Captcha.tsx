import Box from "@mui/material/Box";
import ReCAPTCHA from "react-google-recaptcha";
import { rwd } from "../../../utils/rwd";
import { useCaptchaStore } from "../../../zustandStores/useCaptchaStore";
import useMultistepFormStore from "../../../zustandStores/useMultistepFormStore";
import Container from "@mui/material/Container";

const Captcha = () => {
  const setCaptcha = useCaptchaStore(state => state.setCaptcha);
  const currentStepIdx = useMultistepFormStore(state => state.currentStepIdx);
  const key = process.env.REACT_APP_reCaptchaKey;

  const handleChange = () => {
    setCaptcha(true);
  };

  if (!key) {
    return <div>CAPTCHA nie istnieje.</div>;
  }

  return (
    <Container
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: rwd("50%", "0", "-14px"),
          transform: rwd("scale(0.79) translateX(63%)", "scale(0.79)"),
        }}
      >
        <ReCAPTCHA sitekey={key} onChange={handleChange} />
      </Box>
    </Container>
  );
};

export default Captcha;

import Button from "./Button";
import { useNavigate } from "react-router-dom";
function BackButto() {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      Back
    </Button>
  );
}

export default BackButto;

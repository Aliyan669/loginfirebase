import { Button } from "@mui/material";
function Btn(props) {
  return (
    <Button
      className={props.Class}
      onClick={props.onClick}
      type={props.Type}
      variant="contained">
      {props.btnName}
    </Button>
  );
}

export default Btn;

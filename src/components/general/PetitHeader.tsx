import { Typography } from "@mui/material";
import { generalState } from "@src/store/general";
import { useRecoilValue } from "recoil";

const PetitHeader = () => {
  const general = useRecoilValue(generalState);

  return (
    <div>
      <Typography variant='h1'>Naver dictionary Quiz{general.selectedLanguage ? ' - ' + general.selectedLanguage : null}</Typography>
      <Typography variant='subtitle2'>alpine</Typography>
      <hr></hr>
    </div>
  )
}

export default PetitHeader;
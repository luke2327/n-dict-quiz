import { PROFILE } from "@models/profile";
import { Box, Button, TextField } from "@mui/material"
import { authState, languageState } from "@src/store/general";
import { profileState } from "@src/store/profile";
import axios from "axios";
import { useState } from "react";
import { useSetRecoilState } from "recoil";

const TokenField = () => {
  const [token, setToken] = useState('EUR');
  const setProfile = useSetRecoilState(profileState);
  const setLanguageStore = useSetRecoilState(languageState);
  const setAuth = useSetRecoilState(authState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value);
  };

  const submit = async () => {
    const result = await axios.post('./api/getToken', {
      token
    });

    const data: PROFILE = result.data;
    setProfile({
      ...data
    });
    setLanguageStore({
      indexPageStep: 2
    });
    setAuth({
      token
    });
    localStorage.setItem('token', token);
  }

  return (
    <Box
      sx={{
        '& .MuiTextField-root': { mb: 2, width: '100%' },
      }}
    >
      <TextField
        label="Set Naver tokens"
        variant="standard"
        color="secondary"
        multiline
        onChange={handleChange}
        maxRows={4}
      ></TextField>
      <Button onClick={submit}>Submit</Button>
    </Box>
  )
}

export default TokenField;
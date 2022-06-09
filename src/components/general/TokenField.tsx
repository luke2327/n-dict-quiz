import { PROFILE } from '@models/profile';
import { Box, Button, TextField } from '@mui/material';
import { commonErrorState } from '@src/store/error';
import { authState, languageState } from '@src/store/general';
import { profileState } from '@src/store/profile';
import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

const TokenField = () => {
  const [token, setToken] = useState('EUR');
  const setProfile = useSetRecoilState(profileState);
  const setCommonError = useSetRecoilState(commonErrorState);
  const setLanguageStore = useSetRecoilState(languageState);
  const setAuth = useSetRecoilState(authState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value);
  };

  const submit = async () => {
    await axios
      .post('./api/getToken', {
        token,
      })
      .then(res => {
        console.log('res', res);
        const data: PROFILE = res.data;

        if (data.nuid === '') {
          setLanguageStore({
            indexPageStep: 2,
          });

          return;
        } else {
          setProfile({
            ...data,
          });
          setLanguageStore({
            indexPageStep: 2,
          });
          setAuth({
            isLogin: true,
            token,
          });
          localStorage.setItem('token', token);
        }
      })
      .catch(e => {
        const response = e.response;

        setCommonError({
          currentError: {
            status: response.status,
            message: response.statusText,
          },
        });

        setLanguageStore({
          indexPageStep: 90,
        });
      });
  };

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
  );
};

export default TokenField;

import { Box, Typography, Button } from "@mui/material"
import { authState, languageState } from "@src/store/general";
import { profileState } from "@src/store/profile";
import { useRouter } from "next/router";
import { useRecoilValue, useSetRecoilState } from "recoil";

const PetitProfile = () => {
  const profile = useRecoilValue(profileState);
  const setAuth = useSetRecoilState(authState);
  const setLanguageStore = useSetRecoilState(languageState);
  const router = useRouter();
  const goToIndex = () => {
    router.push('/');
    setAuth({
      token: ''
    })
  }
  const next = () => {
    setLanguageStore({
      indexPageStep: 3
    });
  }

  return (
    <Box>
      <Box display="flex" alignItems={'center'}>
        <Typography variant="caption">{profile.nickName}</Typography>
      </Box>
      <Box>
        <Typography>これが貴方の名前ですか</Typography>
        <Box width="100%" display="flex">
          <Button fullWidth variant="white" onClick={goToIndex}>いいえ</Button>
          <Button fullWidth onClick={next}>はい</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default PetitProfile;
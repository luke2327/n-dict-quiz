import { Box, Avatar, Typography, Button } from "@mui/material"
import { profileState } from "@src/store/profile";
import { useRecoilValue } from "recoil";

const PetitProfile = () => {
  const profile = useRecoilValue(profileState);

  return (
    <Box>
      <Box display="flex" alignItems={'center'}>
        <Typography variant="caption">{profile.nickName}</Typography>
      </Box>
      <Box>
        <Typography>これが貴方の名前ですか</Typography>
        <Box width="100%" display="flex">
          <Button fullWidth variant="white">いいえ</Button>
          <Button fullWidth>はい</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default PetitProfile;
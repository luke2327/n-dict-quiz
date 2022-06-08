import { Box, Typography } from '@mui/material';
import { generalState } from '@src/store/general';
import { useRecoilValue } from 'recoil';
import Breadcrumbs from './Breadcrumbs';

const PetitHeader = () => {
  const general = useRecoilValue(generalState);

  return (
    <div>
      <Typography variant="h1">
        Naver dictionary Quiz
        {general.selectedLanguage ? ' - ' + general.selectedLanguage : null}
      </Typography>
      <Box
        display="flex"
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Typography variant="subtitle2">alpine</Typography>
        <Breadcrumbs />
      </Box>
      <hr></hr>
    </div>
  );
};

export default PetitHeader;

import { Box, Typography } from '@mui/material';
import { commonErrorState } from '@src/store/error';
import { useRecoilValue } from 'recoil';

const TokenFieldError = () => {
  const commonError = useRecoilValue(commonErrorState);

  return (
    <Box
      sx={{
        '& .MuiTextField-root': { mb: 2, width: '100%' },
      }}
    >
      <Typography>トークンを取得する過程でエラーが発生しました。</Typography>
      <Typography variant="caption">
        最初の画面に戻り、再びトークンを入力してください。
      </Typography>
      {commonError.currentError ? (
        <Box mt={2}>
          <hr></hr>
          <Box display="flex" alignItems={'center'}>
            <Typography>{commonError.currentError.status}</Typography>
            <Typography>&nbsp;|&nbsp;</Typography>
            <Typography variant="body2" color="rgba(0, 0, 0, 0.5)">
              {commonError.currentError.message}
            </Typography>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default TokenFieldError;

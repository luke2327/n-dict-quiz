/* eslint-disable prettier/prettier */
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import { dialogState } from '@src/store/general';
import { useRecoilState } from 'recoil';

const YesOrNoDialog = () => {
  const [dialog, setDialog] = useRecoilState(dialogState);

  const handleClose = () => {
    setDialog({
      ...dialog,
      open: false
    })
  };

  const handleAgree = () => {
    if (dialog.callbackFn) {
      dialog.callbackFn();
    }

    handleClose();
  }

  return (
    <Dialog
      open={dialog.open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {'Use Google\'s location service?'}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {dialog.message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{dialog.no}</Button>
        <Button onClick={handleAgree} autoFocus>
          {dialog.yes}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default YesOrNoDialog;

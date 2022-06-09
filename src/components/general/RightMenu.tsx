import {
  Box,
  Button,
  Menu,
  MenuList,
  MenuItem,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { authState, dialogState, languageState } from '@src/store/general';
import { useRouter } from 'next/router';

const RightMenu = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const setLanguageStore = useSetRecoilState(languageState);
  const [dialog, setDialog] = useRecoilState(dialogState);
  const [auth, setAuth] = useRecoilState(authState);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const removeToken = () => {
    setAuth({
      token: '',
      isLogin: false,
    });
    setLanguageStore({
      indexPageStep: 1,
    });

    localStorage.removeItem('token');

    handleClose();

    router.push('./');
  };

  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuList dense>
          {auth.isLogin ? (
            <MenuItem
              onClick={() => {
                handleClose();

                setDialog({
                  ...dialog,
                  callbackFn: removeToken,
                  open: true,
                  message: '',
                });
              }}
            >
              <ListItemText inset>Remove Token</ListItemText>
            </MenuItem>
          ) : null}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default RightMenu;

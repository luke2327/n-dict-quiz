import { Box, Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import type { SUPPORTED_LANGUAGE } from '@models/general';
import { styled } from '@mui/material/styles';
import FolderIcon from '@mui/icons-material/Folder';
import React from 'react';
import { send } from '@libs/api';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const LanguageChooser: React.FC = () => {
  const supportedLanguage: SUPPORTED_LANGUAGE[] = ['JA'];

  const chooseLanguage = async () => {
    await send('get', 'https://google.com', {});
  };

  return (
    <Box>
      <Grid item xs={12} md={6}>
        <Demo>
          <List dense sx={{ padding: 0 }}>
            {supportedLanguage.map(language => (
              <ListItem key={language} sx={{ pl: 1 }}>
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <FolderIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText
                  onClick={chooseLanguage}
                  primary={language}
                />
              </ListItem>
            ))}
          </List>
        </Demo>
      </Grid>
    </Box>
  )
}

export default LanguageChooser;
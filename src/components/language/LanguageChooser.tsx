import { Box, Typography, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import type { SUPPORTED_LANGUAGE, SUPPORTED_LANGUAGE_LOWER } from '@models/general';
import { styled } from '@mui/material/styles';
import FolderIcon from '@mui/icons-material/Folder';
import React from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { generalState } from '@src/store/general';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const LanguageChooser: React.FC = () => {
  const router = useRouter();
  const supportedLanguage: SUPPORTED_LANGUAGE[] = ['JA'];
  const [general, setGeneral] = useRecoilState(generalState);

  const chooseLanguage = async (language: SUPPORTED_LANGUAGE) => {
    setGeneral({
      ...general,
      currentLanguage: language,
      selectedLanguage: language,
      routedLanguage: language.toLowerCase() as SUPPORTED_LANGUAGE_LOWER
    })
    router.push('./' + language.toLowerCase());
  };

  return (
    <Box>
      <Grid item xs={12} md={6}>
        <Demo>
          <List dense sx={{ padding: 0 }}>
            {supportedLanguage.map(language => (
              <ListItem
                key={language}
                sx={{ pl: 1, cursor: 'pointer' }}
                onClick={() => chooseLanguage(language)}
              >
                <ListItemIcon sx={{ minWidth: 30 }}>
                  <FolderIcon fontSize='small' />
                </ListItemIcon>
                <ListItemText
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
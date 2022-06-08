import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { authState } from '@src/store/general';
import { useRecoilValue } from 'recoil';
import type { WORDBOOK } from '@models/dict';

const WordbookList = () => {
  const [wordbookList, setWordbookList] = useState<WORDBOOK[]>([]);
  const recoilToken = useRecoilValue(authState);

  useEffect(() => {
    const token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : recoilToken;

    async function getWordbookList() {
      const result = await axios.post<WORDBOOK[]>('./api/getWordbookList', {
        token,
      });

      console.log(result.data);

      setWordbookList(result.data);
    }

    getWordbookList();
  }, []);

  return (
    <Box
      sx={{
        '& .MuiList-root': { p: 0 },
        '& .MuiListItem-root': { p: 0, py: 0.5 },
      }}
    >
      <Typography fontWeight={500}>単語帳リスト</Typography>

      <List component="div">
        {wordbookList
          ? wordbookList.map(v => (
              <Box key={v.id}>
                <ListItem
                  sx={{
                    cursor: 'pointer',
                  }}
                >
                  <Box
                    display="flex"
                    alignItems={'center'}
                    justifyContent={'space-around'}
                  >
                    <ListItemText>
                      <Typography variant="subtitle1">{v.name}</Typography>
                    </ListItemText>
                    <ListItemText>
                      <Typography variant="caption" ml={1}>
                        {v.wordCount}
                      </Typography>
                    </ListItemText>
                  </Box>
                </ListItem>
                <Divider />
              </Box>
            ))
          : null}
      </List>
    </Box>
  );
};

export default WordbookList;

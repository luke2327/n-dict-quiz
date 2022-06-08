import { WORD_LIST } from '@models/dict';
import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { authState } from '@src/store/general';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

const WordList = () => {
  const [viewMeans, setViewMeans] = useState(true);
  const [words, setWords] = useState<{
    wordList: WORD_LIST;
    wordOnly: string[];
  }>();
  const recoilToken = useRecoilValue(authState);

  useEffect(() => {
    const token = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : recoilToken;

    async function getWordList() {
      const result = await axios.post('/api/getWordList', {
        token,
        option: {
          select: 'all',
        },
      });

      const data: { wordList: WORD_LIST; wordOnly: string[] } = result.data;

      setWords(data);

      console.log(data);
    }

    getWordList();
  }, []);

  return (
    <Grid container spacing={2}>
      <List dense>
        {words
          ? words.wordList
              .filter(({ dicType }) => dicType === 'jako')
              .map((word, wordIdx) => (
                <ListItem
                  key={wordIdx}
                  sx={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <a
                    href={
                      'https://ja.dict.naver.com/#/entry/jako/' + word.entryId
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography display="flex" alignItems={'baseline'}>
                      {`${wordIdx + 1}. `}
                      {word.content.entry ? (
                        <Box display="flex">
                          {word.content.entry.members.map(
                            (member, memberIdx) => (
                              <Typography
                                fontWeight={600}
                                display="flex"
                                key={memberIdx}
                              >
                                {member.kanji}
                              </Typography>
                            )
                          )}
                        </Box>
                      ) : null}
                      &nbsp;[
                      <div
                        dangerouslySetInnerHTML={{ __html: word.name }}
                      ></div>
                      ]
                    </Typography>
                  </a>
                  {viewMeans && (
                    <Box pl={1}>
                      {word.content.entry ? (
                        <Box>
                          {word.content.entry?.means
                            .filter(({ show_mean }) => show_mean !== '')
                            .map((mean, meanIdx) => (
                              <Box key={meanIdx} mb={1}>
                                <Box display="flex" alignItems={'baseline'}>
                                  <Typography>{meanIdx + 1}&nbsp;</Typography>
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: mean.show_mean,
                                    }}
                                  ></div>
                                  <Typography
                                    display={'flex'}
                                    alignItems="flex-end"
                                  >
                                    ({mean.part_name})
                                  </Typography>
                                </Box>
                                <Box>
                                  {mean.examples.map((example, exampleIdx) => (
                                    <Typography key={exampleIdx}>
                                      <div
                                        dangerouslySetInnerHTML={{
                                          __html: example.show_example,
                                        }}
                                      ></div>
                                    </Typography>
                                  ))}
                                </Box>
                              </Box>
                            ))}
                        </Box>
                      ) : null}
                    </Box>
                  )}
                  <hr></hr>
                </ListItem>
              ))
          : null}
      </List>
    </Grid>
  );
};

export default WordList;

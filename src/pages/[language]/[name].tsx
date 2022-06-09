import WordList from '@components/language/WordList';
import WordListPagination from '@components/language/WordListPagination';
import { Box } from '@mui/material';

const DictionaryName = () => {
  return (
    <Box>
      <WordList />
      <WordListPagination />
    </Box>
  );
};

export default DictionaryName;

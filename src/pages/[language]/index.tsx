import PetitProfile from '@components/general/PetitProfile';
import TokenField from '@components/general/TokenField';
import CountWord from '@components/language/CountWord';
import WordbookList from '@components/language/WordbookList';
import { Box } from '@mui/material';
import { languageState } from '@src/store/general';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

const LanguageDictionary = () => {
  const [languageStore, setLanguageStore] = useRecoilState(languageState);
  const router = useRouter();
  const { language } = router.query;

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setLanguageStore({
        indexPageStep: 3,
      });
    }
  }, [setLanguageStore]);

  return (
    <Box>
      <Head>
        <title>N Dict - {language}</title>
      </Head>
      {languageStore.indexPageStep === 1 ? <TokenField /> : null}
      {languageStore.indexPageStep === 2 ? <PetitProfile /> : null}
      {languageStore.indexPageStep === 3 ? (
        <Box sx={{ p: 1 }}>
          <CountWord />
          <WordbookList />
        </Box>
      ) : null}
    </Box>
  );
};

export default LanguageDictionary;

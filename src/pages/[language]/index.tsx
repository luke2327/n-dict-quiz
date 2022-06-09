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
import { authState } from '@src/store/general';
import TokenFieldError from '@components/error/TokenFieldError';

const LanguageDictionary = () => {
  const [languageStore, setLanguageStore] = useRecoilState(languageState);
  const [auth, setAuth] = useRecoilState(authState);
  const router = useRouter();
  const { language } = router.query;

  useEffect(() => {
    const token = process.env.DICT_TOKEN || localStorage.getItem('token');

    if (token) {
      setLanguageStore({
        indexPageStep: 3,
      });
      setAuth({
        ...auth,
        token,
        isLogin: true,
      });
      localStorage.setItem('token', token);
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
      {languageStore.indexPageStep === 90 ? <TokenFieldError /> : null}
    </Box>
  );
};

export default LanguageDictionary;

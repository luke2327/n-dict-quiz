import PetitProfile from "@components/general/PetitProfile";
import TokenField from "@components/general/TokenField";
import { Box, Typography, Button } from "@mui/material";
import { languageState } from "@src/store/general";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

const LanguageDictionary = () => {
  const languageStore = useRecoilValue(languageState);
  const router = useRouter();
  const { language } = router.query;

  return (
    <Box>
      <Head>
        <title>N Dict - {language}</title>
      </Head>
      {
        languageStore.indexPageStep === 1
          ? <TokenField />
          : null
      }
      {
        languageStore.indexPageStep === 2
          ? <PetitProfile />
          : null
      }
    </Box>
  );
}

export default LanguageDictionary;
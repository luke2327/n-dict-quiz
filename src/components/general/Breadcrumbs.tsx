import { Box, Breadcrumbs as MaterialBreadcrumbs } from "@mui/material"
import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumbs = () => {
  const router = useRouter();
  const banWord = ['[language]'];

  return (
    <MaterialBreadcrumbs>
      {
        router && router.asPath !== '/' && !banWord.every(k => router.asPath.includes(k))
          ? router.asPath.split('/').map(v => (
            <Box key={v}>
              <Link href={'/' + v}>{v === '' ? 'Home' : v}</Link>
            </Box>
          ))
          : null
      }
    </MaterialBreadcrumbs>
  )
}

export default Breadcrumbs;
import Head from "next/head";

interface Props {
  pageTitle: string;
}

const Seo = ({ pageTitle }: Props) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} | Grand Bohabs`}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  </>
);

export default Seo;

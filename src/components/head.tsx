
import Head from "next/head";
import PropTypes from "prop-types";

export default function Header({title, description}: {title: string, description: string}) {

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
      <link rel="icon" href="/mlogo.svg" sizes="any" type="image/svg+xml"></link>
      
    </Head>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Header.defaultProps = {
  title: "Sania",
  description: "A portfolio website of sania fathima",
};
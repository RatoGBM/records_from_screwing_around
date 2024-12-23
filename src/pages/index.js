import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {"Records of Messing Around"}
        </Heading>
        <p className="hero__subtitle">{"by RatoGBM"}</p>
        <Link
          className="button button--secondary button--lg"
          to="/docs/intro">
          Read
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={"Records of Messing Around"}
      description="RatoGBM's notes from messing around.">
      <main>
        <HomepageHeader />
      </main>
    </Layout>
  );
}

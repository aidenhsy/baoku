import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>煲库</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          上海<span style={{ color: 'orange' }}>煲库</span>企业管理有限公司
        </h1>
        <h4>网站正在研发中敬请期待</h4>
      </main>

      <footer className={styles.footer}>
        <a>Powered by 上海煲库企业管理有限公司</a>
      </footer>
    </div>
  );
}

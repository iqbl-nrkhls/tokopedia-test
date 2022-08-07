/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Layout from 'libs/layout';
import { ShowAnimes } from './ShowAnimes';

export default function ListAnimesView() {
  return (
    <Layout>

      <h1 css={css({
        textAlign: 'center',
        margin: '50px 10px'
      })}>
        Anime List
      </h1>

      <ShowAnimes />

    </Layout>
  );
}

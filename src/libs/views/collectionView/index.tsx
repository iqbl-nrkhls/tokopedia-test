/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Layout from 'libs/layout';
import { ShowCollections } from './ShowCollections';

export default function CollectionView() {
  return (
    <Layout>

      <h1 css={css({
        textAlign: 'center',
        margin: '50px 10px'
      })}>
        Collections
      </h1>

      <ShowCollections />

    </Layout>
  );
}

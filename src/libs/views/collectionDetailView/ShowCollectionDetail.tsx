/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mq } from "libs/emotion/mediaQuery";
import { Card } from "libs/components/card";
import { CollectionType, getCollections } from "libs/models/localSorage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ShowCollectionDetail() {
    const { id } = useParams();

  const [collections, setCollection] = useState<CollectionType[]>([]);

  useEffect(() => {
    setCollection(JSON.parse(getCollections()));
  }, []);

  const collection = collections[Number(id || 0)];

  return (
    <>
      <h1
        css={css({
          textAlign: "center",
          margin: "50px 10px",
        })}
      >
        {collection?.name}
      </h1>

      <div
        css={css({
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          [mq["md"]]: {
            gridTemplateColumns: "1fr 1fr 1fr",
          },
          [mq["lg"]]: {
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
          },
        })}
      >
        {collection?.data.map((anime, i) => (
          <Card
            key={i}
            href={`/anime/${anime.id}`}
            title={anime.title}
            coverImage={anime.coverImage}
          />
        ))}
      </div>
    </>
  );
}

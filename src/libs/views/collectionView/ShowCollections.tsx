/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mq } from "libs/emotion/mediaQuery";
import { Card } from "libs/components/card";
import { CollectionType, getCollections } from "libs/models/localSorage";
import { useEffect, useState } from "react";
import { AddCollection } from "./AddCollection";

export function ShowCollections() {
  const [collections, setCollections] = useState<CollectionType[]>([]);

  useEffect(() => {
    setCollections(JSON.parse(getCollections()));
  }, []);

  return (
    <>
      <AddCollection
        collections={collections}
        setCollections={setCollections}
      />

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
        {collections.length > 0 ? (
          collections.map((collection, i) => (
            <Card
              key={i}
              href={`/collection/${i}`}
              title={collection.name}
              coverImage={collection.data[0]?.coverImage || "./default.png"}
            />
          ))
        ) : (
          <p
            css={css({
              textAlign: "center",
              gridColumn: 'span 4',
            })}
          >
            You don't have a collection
          </p>
        )}
      </div>
    </>
  );
}

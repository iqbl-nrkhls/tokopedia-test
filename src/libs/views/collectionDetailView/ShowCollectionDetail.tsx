/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mq } from "libs/emotion/mediaQuery";
import { Card } from "libs/components/card";
import {
  CollectionType,
  getCollections,
  removeAnime,
  saveCollections,
} from "libs/models/localSorage";
import { MouseEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IconDelete } from "libs/components/icons/IconDelete";

import Swal from "sweetalert2";
import { Toast } from "libs/toast";

export function ShowCollectionDetail() {
  const { id } = useParams();

  const [collections, setCollection] = useState<CollectionType[]>([]);

  useEffect(() => {
    setCollection(JSON.parse(getCollections()));
  }, []);

  const handleDelete = (
    e: MouseEvent<HTMLButtonElement>,
    collectionName: string,
    id: number
  ) => {
    e.preventDefault();

    Swal.fire({
      title: "Do you want to remove this anime?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const newData = removeAnime(collections, collectionName, id);
        saveCollections(newData);
        setCollection(newData);
        Toast.fire("Collection has been deleted", "", "success");
      }
    });
  };

  const collection = collections[Number(id || 0)];

  return (
    <>
      <h1 css={css({ textAlign: "center", margin: "50px 10px" })}>
        {collection?.name}
      </h1>

      <div
        css={css({
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          [mq["md"]]: { gridTemplateColumns: "1fr 1fr 1fr" },
          [mq["lg"]]: { gridTemplateColumns: "1fr 1fr 1fr 1fr" },
        })}
      >
        {collection?.data.length > 0 ? (
          collection?.data.map((anime, i) => (
            <Card
              key={i}
              href={`/anime/${anime.id}`}
              title={anime.title}
              coverImage={anime.coverImage}
              extraButton={
                <button
                  css={css({
                    borderRadius: "50%",
                    aspectRatio: "1",
                    border: "none",
                    color: "#fff",
                    background: "#b02323",
                    cursor: "pointer",
                  })}
                  onClick={(e) => handleDelete(e, collection.name, anime.id)}
                >
                  <IconDelete />
                </button>
              }
            />
          ))
        ) : (
          <p css={css({ textAlign: "center", gridColumn: "span 4" })}>
            There is no anime in this collection
          </p>
        )}
      </div>
    </>
  );
}

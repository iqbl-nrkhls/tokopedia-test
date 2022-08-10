/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mq } from "libs/emotion/mediaQuery";
import { Card } from "libs/components/card";
import {
  CollectionType,
  getCollections,
  removeCollection,
  saveCollections,
} from "libs/models/localSorage";
import { MouseEvent, useEffect, useState } from "react";
import { AddCollection } from "./AddCollection";
import { IconDelete } from "libs/components/icons/IconDelete";

import Swal from "sweetalert2";
import { Toast } from "libs/toast";

export function ShowCollections() {
  const [collections, setCollections] = useState<CollectionType[]>([]);

  useEffect(() => {
    setCollections(JSON.parse(getCollections()));
  }, []);

  const handleDelete = (e: MouseEvent<HTMLButtonElement>, index: number) => {
    e.preventDefault();

    Swal.fire({
      title: "Do you want to remove this collection?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const newData = removeCollection(collections, index);
        saveCollections(newData);
        setCollections(newData);
        Toast.fire("Collection has been deleted", "", "success");
      }
    });
  };

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
                  onClick={(e) => handleDelete(e, i)}
                >
                  <IconDelete />
                </button>
              }
            />
          ))
        ) : (
          <p
            css={css({
              textAlign: "center",
              gridColumn: "span 4",
            })}
          >
            You don't have a collection
          </p>
        )}
      </div>
    </>
  );
}

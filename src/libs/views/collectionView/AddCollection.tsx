/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  CollectionType,
  getCollections,
  isCollectionAvailable,
  saveCollections,
} from "libs/models/localSorage";

type AddCollectionProps = {
  collections: CollectionType[];
  setCollections: (value: CollectionType[]) => void
}

export function AddCollection({ collections, setCollections }: AddCollectionProps) {
  const addCollection = () => {
    const collectionName = window.prompt("Inser collection name");
    if (collectionName !== null && collectionName !== '') {
      if (isCollectionAvailable(collectionName)) {
        const newData = [...collections, { name: collectionName, data: [] }];
        setCollections(newData);
        saveCollections(newData);
      } else {
        alert("This collection name not available");
      }
    } else {
      alert("Please insert collection name");
    }
  };

  return (
    <button
      onClick={addCollection}
      css={css({
        display: "block",
        margin: "20px auto",
      })}
    >
      Add a Collection
    </button>
  );
}

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "libs/button";
import {
  CollectionType,
  isCollectionAvailable,
  saveCollections,
} from "libs/models/localSorage";
import { Toast } from "libs/toast";

import Swal from "sweetalert2";

type AddCollectionProps = {
  collections: CollectionType[];
  setCollections: (value: CollectionType[]) => void
}

export function AddCollection({ collections, setCollections }: AddCollectionProps) {
  const addCollection = async () => {
    const { value: collectionName } = await Swal.fire({
      title: "Insert a collection name",
      input: "text",
      showCancelButton: true,
      inputValidator: (value) => {
        return !value
          ? "Please insert collection name"
          : /[~`!#$%^&*+=\-[\]\\';,/{}|\\":<>?]/g.test(value)
          ? "Special character is not allowed"
          : !isCollectionAvailable(value)
          ? "Collection not available"
          : null;
      },
    });

    if (collectionName) {
      const newData = [...collections, { name: collectionName, data: [] }];
      setCollections(newData);
      saveCollections(newData);
      Toast.fire({
        icon: "success",
        title: "Collection successfully added",
      });
    }
  };

  return (
    <Button
      onClick={addCollection}
      css={css({
        display: "block",
        margin: "40px auto",
        background: '#fff',
        boxShadow: '0 2px 10px 5px #00000007'
      })}
    >
      Add a Collection
    </Button>
  );
}

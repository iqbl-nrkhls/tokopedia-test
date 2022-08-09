/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IconBookmarkPlus } from "libs/components/icons/BookmarkPlus";
import useOutsideClick from "libs/helpers/useOutsideClick";
import {
  CollectionsType,
  getCollections,
  isCollectionAvailable,
  saveCollections,
} from "libs/models/localSorage";
import { MutableRefObject, useEffect, useRef, useState } from "react";

export function SaveToCollection({ data }: any) {
  const buttonRef = useRef() as MutableRefObject<HTMLButtonElement>;
  const contentRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [show, setShow] = useState<boolean>(false);
  const [collections, setCollections] = useState<CollectionsType[]>([]);

  useOutsideClick([buttonRef, contentRef], () => setShow(false));

  useEffect(() => {
    setCollections(JSON.parse(getCollections()));
  }, []);

  const addCollection = () => {
    const collectionName = window.prompt("Inser collection name");
    if (collectionName !== null) {
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

  const addToCollection = (name: string) => {
    const newData = collections.map((collection) => {
      if (collection.name == name) {
        return {
          name: collection.name,
          data: [
            ...collection.data,
            {
              id: data.id,
              coverImage: data.coverImage.large,
              title: data.title.romaji,
            },
          ],
        };
      }
      return collection;
    });
    setCollections(newData);
    saveCollections(newData);
  };

  const removeInCollection = (name: string, id: number) => {
    const newData = collections.map((collection) => {
      if (collection.name == name) {
        return {
          name: collection.name,
          data: collection.data.filter((saved) => saved.id !== data.id)
        };
      }
      return collection;
    });
    setCollections(newData);
    saveCollections(newData);
  };

  return (
    <div
      css={css({
        position: "fixed",
        bottom: "10px",
        right: "10px",
      })}
    >
      <button
        ref={buttonRef}
        onClick={() => setShow(!show)}
        css={css({
          background: "#fff",
          width: "50px",
          aspectRatio: "1",
          boxShadow: "0 5px 20px 5px #0000001f",
          borderRadius: "50%",
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          transition: ".5s",
          ":hover": {
            transform: "scale(1.1)",
          },
        })}
      >
        <IconBookmarkPlus />
      </button>

      <div
        ref={contentRef}
        css={css({
          position: "absolute",
          bottom: "calc(100% + 30px)",
          right: "0",
          width: "300px",
          overflow: "hidden",
          background: "#fff",
          transition: ".5s",
          boxShadow: show ? "0 5px 20px 5px #0000001f" : "none",
          maxHeight: show ? "400px" : "0px",
        })}
      >
        <div
          css={css({
            padding: "20px;",
          })}
        >
          {collections.map((e, i) => (
            <button
              onClick={() => {
                e.data.find((e) => e.id === data.id)
                  ? removeInCollection(e.name, data.id)
                  : addToCollection(e.name);
              }}
            >
              add to {e.name}
              {e.data.find((e) => e.id === data.id) ? " (done)" : null}
            </button>
          ))}
          <button onClick={addCollection}>add new</button>
        </div>
      </div>
    </div>
  );
}

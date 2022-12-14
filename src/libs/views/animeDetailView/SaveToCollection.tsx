/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "libs/button";
import { IconBookmarkPlus } from "libs/components/icons/IconBookmarkPlus";
import useOutsideClick from "libs/helpers/useOutsideClick";
import {
  addAnime,
  CollectionType,
  getCollections,
  isCollectionAvailable,
  removeAnime,
  saveCollections,
} from "libs/models/localSorage";
import { Toast } from "libs/toast";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

export function SaveToCollection({ data }: any) {
  const buttonRef = useRef() as MutableRefObject<HTMLButtonElement>;
  const contentRef = useRef() as MutableRefObject<HTMLDivElement>;
  const [show, setShow] = useState<boolean>(false);
  const [collections, setCollections] = useState<CollectionType[]>([]);

  useOutsideClick([buttonRef, contentRef], () => setShow(false));

  useEffect(() => {
    setCollections(JSON.parse(getCollections()));
  }, []);

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

  const addToCollection = (name: string) => {
    const newData = addAnime(collections, name, {
      id: data.id,
      coverImage: data.coverImage.large,
      title: data.title.romaji,
    });
    setCollections(newData);
    saveCollections(newData);
  };

  const removeInCollection = (name: string, id: number) => {
    const newData = removeAnime(collections, name, id);
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
          width: "max-content",
          maxWidth: "300px",
          overflow: "hidden",
          background: "#fff",
          transition: ".5s",
          borderRadius: "10px",
          boxShadow: show ? "0 5px 20px 5px #0000001f" : "none",
          maxHeight: show ? "400px" : "0px",
        })}
      >
        <div
          css={css({
            padding: "10px",
          })}
        >
          {collections.map((e, i) => (
            <div
              key={i}
              css={css({
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
              })}
            >
              <p css={css({ margin: "5px" })}>{e.name}</p>
              {!e.data.find((e) => e.id === data.id) ? (
                <button
                  onClick={() => {
                    e.data.find((e) => e.id === data.id)
                      ? removeInCollection(e.name, data.id)
                      : addToCollection(e.name);
                  }}
                  css={css({
                    fontSize: "12px",
                    background: "#ddd",
                    border: "1px solid #555",
                    borderRadius: "2px",
                  })}
                >
                  Add
                </button>
              ) : (
                <Link to={`/collection/${i}`}>
                  <button
                    css={css({
                      fontSize: "12px",
                      background: "#ddd",
                      border: "1px solid #555",
                      borderRadius: "2px",
                    })}
                  >
                    View
                  </button>
                </Link>
              )}
            </div>
          ))}
          <Button
            onClick={addCollection}
            css={css({
              display: "block",
              margin: "5px auto",
            })}
          >
            Add new collection
          </Button>
        </div>
      </div>
    </div>
  );
}

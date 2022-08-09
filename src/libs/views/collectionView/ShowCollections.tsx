/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";

export function ShowCollections() {
  const [collections, setCollections] = useState<any[]>([]);

  useEffect(() => {
    const localCollections = window.localStorage.getItem("collections") || "[]";
    setCollections(JSON.parse(localCollections));
  }, []);

  return (
    <div>
      {JSON.stringify(collections)}
    </div>
  )
}
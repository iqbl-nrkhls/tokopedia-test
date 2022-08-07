/** @jsxImportSource @emotion/react */
import { css, Global } from "@emotion/react";
import Pagination from "rc-pagination";
import { ReactNode } from "react";

type PaginateProps = {
  total: number;
  pageSize: number;
  currentPage: number;
  onChange?: (page: number, pageSize: number) => void;
};

export function Paginate({
  total,
  pageSize,
  currentPage,
  onChange,
}: PaginateProps) {
  const itemRender = (
    page: number,
    type: "prev" | "next" | "page" | "jump-prev" | "jump-next"
  ) => {
    return type === "prev"
      ? "Prev"
      : type === "next"
      ? "Next"
      : type === "jump-prev" || type === "jump-next"
      ? "..."
      : page;
  };

  return (
    <>
      <Global
        styles={css({
          ".rc-pagination-item,.rc-pagination-prev,.rc-pagination-next": {
            padding: "10px 15px",
            background: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 2px 5px 2px #00000007",
          },
          ".rc-pagination-disabled,.rc-pagination-item-active": {
            background: "transparent",
            boxShadow: "none",
          },
        })}
      />
      <Pagination
        css={css({
          margin: "50px 10px",
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          listStyle: "none",
        })}
        onChange={onChange}
        current={currentPage}
        itemRender={itemRender}
        total={total}
        pageSize={pageSize}
        showTitle={false}
      />
    </>
  );
}

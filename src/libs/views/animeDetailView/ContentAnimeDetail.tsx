/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mq } from "libs/emotion/mediaQuery";

type ContentAnimeDetailProps = {
  description?: string;
};

export function ContentAnimeDetail({ description }: ContentAnimeDetailProps) {
  return (
    <div
      css={css({
        background: "#fff",
        display: "flex",
        flexDirection: "column-reverse",
        padding: "20px",
        paddingTop: "100px",
        borderRadius: "10px",
        [mq["sm"]]: {
          paddingTop: "60px",
        },
        [mq["md"]]: {
          paddingTop: "20px",
          flexDirection: "row",
        },
      })}
    >
      <div
        css={css({
          width: "100%",
          flexShrink: 0,
          [mq["sm"]]: {
            width: "45%",
          },
          [mq["md"]]: {
            marginTop: "120px",
          },
          [mq["lg"]]: {
            width: "450px",
          },
        })}
      >
        asas
      </div>

      <div>
        <h2>Description</h2>
        <p
          css={css({
            lineHeight: "1.8em",
          })}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

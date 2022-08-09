/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mq } from "libs/emotion/mediaQuery";

type HeadAnimeDetailProps = {
  image: string;
  title: string;
};

export function HeadAnimeDetail({ image, title }: HeadAnimeDetailProps) {
  return (
    <div
      css={css({
        display: "flex",
        flexDirection: "column",
        marginBottom: "-80px",
        [mq["sm"]]: {
          flexDirection: "row",
          alignItems: "end",
          marginBottom: "-60px",
        },
        [mq["md"]]: {
          marginBottom: "-140px",
        },
        [mq["lg"]]: {
          marginBottom: "-180px",
        },
      })}
    >
      <div
        css={css({
          padding: "20px",
          flexShrink: 0,
          [mq["sm"]]: {
            width: "40%",
          },
          [mq["lg"]]: {
            width: "400px",
          },
        })}
      >
        <img
          src={image}
          alt="cover"
          css={css({
            width: "60%",
            display: "block",
            margin: "0 auto",
            aspectRatio: "1",
            borderRadius: "10px",
            boxShadow: "0 2px 10px 5px #00000007",
            objectFit: "cover",
            [mq["sm"]]: {
              width: "100%",
            },
          })}
        />
      </div>
      <h1
        css={css({
          margin: "0 20px",
          [mq["sm"]]: {
            marginBottom: "100px",
          },
          [mq["md"]]: {
            marginBottom: "150px",
          },
          [mq["lg"]]: {
            marginBottom: "200px",
          },
        })}
      >
        {title}
      </h1>
    </div>
  );
}

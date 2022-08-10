/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { mq } from "libs/emotion/mediaQuery";

type ContentAnimeDetailProps = {
  data: {
    description: string;
    duration: number;
    episodes: number;
    genres: string[];
    popularity: number;
    siteUrl: string;
  };
};

export function ContentAnimeDetail({ data }: ContentAnimeDetailProps) {
  return (
    <div
      css={css({
        background: "#fff",
        display: "flex",
        columnGap: "20px",
        flexDirection: "column-reverse",
        padding: "20px",
        paddingTop: "100px",
        borderRadius: "10px",
        [mq["sm"]]: { paddingTop: "60px" },
        [mq["md"]]: { paddingTop: "20px", flexDirection: "row" },
      })}
    >
      <div
        css={css({
          width: "100%",
          flexShrink: 0,
          [mq["sm"]]: { width: "45%" },
          [mq["md"]]: { marginTop: "120px" },
          [mq["lg"]]: { width: "420px", marginTop: "160px" },
          "& h3": { fontSize: "16px", marginBottom: "5px" },
          "& p": { margin: 0 },
        })}
      >
        <div>
          <h3>Duration</h3>
          <p>{data.duration && `${data.duration} Minutes`}</p>
        </div>
        <div>
          <h3>Number of Episodes</h3>
          <p>{data.episodes}</p>
        </div>
        <div>
          <h3>Genres</h3>
          <p>{data.genres.join(", ")}</p>
        </div>
        <div>
          <h3>Popularity</h3>
          <p>{data.popularity}</p>
        </div>
        <div>
          <h3>Site Url</h3>
          <p>
            <a href={data.siteUrl} target="_blank" rel="noreferrer">
              {data.siteUrl}
            </a>
          </p>
        </div>
      </div>

      <div>
        <h2>Description</h2>
        <p
          css={css({
            lineHeight: "1.8em",
          })}
        >
          {data.description}
        </p>
      </div>
    </div>
  );
}

/** @jsxImportSource @emotion/react */
import { useQuery } from "@apollo/client";
import { css } from "@emotion/react";
import { ShowError } from "libs/components/showError";
import { mq } from "libs/emotion/mediaQuery";
import { GET_ANIME_DETAIL } from "libs/models/anime";
import { useParams } from "react-router-dom";

export function ShowAnimeDetail() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_ANIME_DETAIL, {
    variables: {
      id,
    },
  });

  if (loading) return <>Loading</>;
  if (error) return <ShowError />;

  console.log(data);
  const { coverImage, title, description } = data.Media;

  return (
    <>
      <div
        css={css({
          display: "flex",
          flexDirection: "column",
          marginBottom: '-80px',
          [mq["sm"]]: {
            flexDirection: "row",
            alignItems: 'end',
            marginBottom: '-60px'
          },
          [mq["md"]]: {
            marginBottom: '-140px'
          },
          [mq["lg"]]: {
            marginBottom: '-180px'
          }
        })}
      >
        <div
          css={css({
            padding: "20px",
            flexShrink: 0,
            [mq["sm"]]: {
              width: '40%'
            },
            [mq["lg"]]: {
              width: '400px'
            }
          })}
        >
          <img
            src={coverImage.medium}
            alt="cover"
            css={css({
              width: "60%",
              display: 'block',
              margin: '0 auto',
              aspectRatio: "1",
              borderRadius: "10px",
              boxShadow: "0 2px 10px 5px #00000007",
              objectFit: "cover",
              [mq['sm']]: {
                width: "100%",
              }
            })}
          />
        </div>
        <h1
          css={css({
            margin: '0 20px',
            [mq['sm']]: {
              marginBottom: '100px'
            },
            [mq['md']]: {
              marginBottom: '150px'
            },
            [mq['lg']]: {
              marginBottom: '200px'
            },
          })}
        >
          {title.romaji}
        </h1>
      </div>

      <div css={css({
        background: '#fff',
        display: 'flex',
        flexDirection: 'column-reverse',
        padding: '20px',
        paddingTop: '100px',
        borderRadius: '10px',
        [mq['sm']]: {
          paddingTop: '60px',
        },
        [mq['md']]: {
          paddingTop: '20px',
          flexDirection: 'row',
        },
      })}>
        <div css={css({
          width: '100%',
          flexShrink: 0,
          [mq['sm']]: {
            width: '45%'
          },
          [mq['lg']]: {
            width: '450px'
          }
        })}>
          asas
        </div>
        <div>
          <h2>Description</h2>
          <p css={css({
            lineHeight: '1.8em'
          })}>{description}</p>
        </div>
      </div>
    </>
  );
}

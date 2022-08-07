/** @jsxImportSource @emotion/react */
import { useQuery } from "@apollo/client";
import { css } from "@emotion/react";
import { Card } from "libs/components/card";
import { LoadingCard } from "libs/components/loadingCard";
import { Paginate } from "libs/components/pagination";
import { ShowError } from "libs/components/showError";
import { mq } from "libs/emotion/mediaQuery";
import { useLocation, useNavigate } from "react-router-dom";
import { GET_ANIMES } from "../../models/anime";

type AnimeType = {
  id: string;
  title: {
    romaji: string;
  };
  coverImage: {
    medium: string;
    large: string;
  };
};

export function ShowAnimes() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = new URLSearchParams(location.search).get("p") || 1;
  
  const handlePageChange = (page: number) => {
    console.log(page);
    
    navigate(`/?p=${page}`)
  }

  const { loading, error, data } = useQuery(GET_ANIMES, {
    variables: {
      page: currentPage,
      perPage: 10,
    },
  });

  if (loading) return <LoadingCard />;
  if (true) return <ShowError />;

  return (
    <>
      <div
        css={css({
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          [mq["md"]]: {
            gridTemplateColumns: "1fr 1fr 1fr",
          },
          [mq["lg"]]: {
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
          },
        })}
      >
        {data.Page.media.map((anime: AnimeType) => (
          <Card
            key={anime.id}
            id={anime.id}
            title={anime.title.romaji}
            coverImage={anime.coverImage.medium}
          />
        ))}
      </div>
      <Paginate
        pageSize={10}
        total={data.Page.pageInfo.total}
        currentPage={Number(currentPage)}
        onChange={handlePageChange}
      />
    </>
  );
}

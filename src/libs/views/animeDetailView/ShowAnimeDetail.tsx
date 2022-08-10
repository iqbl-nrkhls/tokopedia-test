/** @jsxImportSource @emotion/react */
import { useQuery } from "@apollo/client";
import { ShowError } from "libs/components/showError";
import { GET_ANIME_DETAIL } from "libs/models/graphQL";
import { useParams } from "react-router-dom";
import { SaveToCollection } from "./SaveToCollection";
import { ContentAnimeDetail } from "./ContentAnimeDetail";
import { HeadAnimeDetail } from "./HeadAnimeDetail";

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
  const { coverImage, title } = data.Media;

  return (
    <>
      <HeadAnimeDetail image={coverImage.large} title={title.romaji} />
      <ContentAnimeDetail data={data.Media}></ContentAnimeDetail>

      <SaveToCollection data={data.Media} />
    </>
  );
}

import { gql } from "@apollo/client";

export const GET_ALL_ANIME = gql`
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(type: ANIME) {
        id
        title {
          romaji
        }
        coverImage {
          large
          medium
        }
      }
    }
  }
`;

export const GET_ANIME_DETAIL = gql`
  query ($id: Int) {
    Media(id: $id) {
      id
      title {
        romaji
      }
      coverImage {
        large
        medium
      }
      description
      episodes
      duration
      popularity
      genres
      trending
      siteUrl
    }
  }
`;

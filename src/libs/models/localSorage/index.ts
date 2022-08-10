export type CollectionType = {
  name: string;
  data: {
    id: number;
    coverImage: string;
    title: string;
  }[];
};

export function saveCollections(data: CollectionType[]) {
  return window.localStorage.setItem("collections", JSON.stringify(data)) as unknown as boolean;
}

export function getCollections() {
  return window.localStorage.getItem("collections") || "[]";
}

export const isCollectionAvailable = (name: string | null) => {
  const data = JSON.parse(getCollections());
  return !data.find((e: CollectionType) => e.name === name);
};

export const removeCollection = (
  collections: CollectionType[],
  index: number
) => {
  return collections.filter((collection, i) => {
    return i !== index;
  });
};

export const addAnime = (
  collections: CollectionType[],
  name: string,
  data: {
    id: number;
    coverImage: string;
    title: string;
  }
) => {
  return collections.map((collection) => {
    if (collection.name === name) {
      return {
        name: collection.name,
        data: [...collection.data, data],
      };
    }
    return collection;
  });
};

export const removeAnime = (
  collections: CollectionType[],
  name: string,
  id: number
) => {
  return collections.map((collection) => {
    if (collection.name === name) {
      return {
        name: collection.name,
        data: collection.data.filter((saved) => saved.id !== id),
      };
    }
    return collection;
  });
};

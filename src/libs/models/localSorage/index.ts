export type CollectionsType = {
  name: string;
  data: {
    id: number;
    coverImage: string;
    title: string;
  }[];
};

export function saveCollections(data: CollectionsType[]) {
  return window.localStorage.setItem("collections", JSON.stringify(data));
}

export function getCollections() {
  return window.localStorage.getItem("collections") || "[]";
}

export const isCollectionAvailable = (name: string | null) => {
  const data = JSON.parse(getCollections());
  return !data.find((e: any) => e.name == name);
};

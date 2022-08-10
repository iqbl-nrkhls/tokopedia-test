import AnimeDetailView from "libs/views/animeDetailView";
import CollectionDetailView from "libs/views/collectionDetailView";
import CollectionView from "libs/views/collectionView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimeList from "../views/animeList";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AnimeList />} />
        <Route path="anime">
          <Route path=":id" element={<AnimeDetailView />} />
        </Route>
        <Route path="collection">
          <Route index element={<CollectionView />} />
          <Route path=":id" element={<CollectionDetailView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
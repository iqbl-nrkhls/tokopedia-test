import AnimeDetailView from "libs/views/animeDetailView";
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
          <Route index element={<>yu</>} />
          <Route path=":id" element={<AnimeDetailView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
import Layout from "libs/layout"
import { useParams } from "react-router-dom"


export default function AnimeDetailView () {
  const {id} = useParams()

  return (
    <Layout>{id}</Layout>
  )
}
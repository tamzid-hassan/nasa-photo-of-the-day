import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"
import conf from "./conf/conf"


function App() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null)
  const [loading, setloading] = useState(null)


  const NASA_API_KEY = conf.nasaApiKey;
  const NASA_API_ApiEndPoint = conf.nasaApiEndPoint;

  const url = `${NASA_API_ApiEndPoint}?api_key=${NASA_API_KEY}`


  console.log(NASA_API_KEY);
  console.log(NASA_API_ApiEndPoint);

  async function fetchNasaData() {
    try {
      const response = await fetch(url)
      const result = await response.json()

      setData(result)

      console.log(result)
    } catch (error) {
      console.log("Failed to fetch data from Nasa: ", error)
    }
  }

  useEffect(() => {

    let getDataTimeout = setTimeout(() => {
      fetchNasaData();

    }, 2000);

    return () => {
      clearTimeout(getDataTimeout)
    }

  }, [])

  return (
    <>
      {data ? (<Main data={data} />) : (
        <div className="loadingState"><i className="fa-solid fa-spinner"></i></div>
      )}

      {showModal && (<SideBar data={data} setShowModal={setShowModal} />)}

      {data && (<Footer data={data} setShowModal={setShowModal} />)}
    </>
  )
}

export default App

import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"
import conf from "./conf/conf"


function App() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null)
  // const [loading, setloading] = useState(null)


  const NASA_API_KEY = conf.nasaApiKey;
  const NASA_API_ApiEndPoint = conf.nasaApiEndPoint;

  const url = `${NASA_API_ApiEndPoint}?api_key=${NASA_API_KEY}`


  console.log(NASA_API_KEY);
  console.log(NASA_API_ApiEndPoint);

  async function fetchNasaData() {

    //Checking if data is cached in Local Storage
    const today = (new Date()).toDateString()
    const localStorageKey = `NASA-${today}`
    const localStorageData = localStorage.getItem(localStorageKey);

    if (localStorageData) {
      setData(JSON.parse(localStorageData))
      console.log("Fetched from LocalStorage", localStorageData)
    } else {

      //Deleting previous KEY and DATA from localstorage
      localStorage.clear()

      //As no data in Local Storage, so getting DATA from API
      try {
        const response = await fetch(url)
        const result = await response.json()


        //Setting both Local Storage and State Data
        localStorage.setItem(localStorageKey, JSON.stringify(result))
        setData(result)

        console.log("Fetched from API", result)
      } catch (error) {
        console.log("Failed to fetch data from Nasa: ", error)
      }
    }


  }

  useEffect(() => {

    let getDataTimeout = setTimeout(() => {
      fetchNasaData();

    }, 1000);

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

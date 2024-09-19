function Main({ data }) {
    return (
        <div className="imgContainer">
            <img src={data.hdurl} alt={data.title || "nasa picture of the day"} className="bgImage" />
        </div>
    )
}

export default Main
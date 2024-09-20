function Main({ data, setShowModal }) {
    return (
        <div className="imgContainer" onClick={() => setShowModal(prev => false)}>
            <img loading="lazy" src={data.hdurl} alt={data.title || "nasa picture of the day"} className="bgImage" />
        </div>
    )
}

export default Main
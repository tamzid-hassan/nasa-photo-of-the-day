function Main({ data }) {
    return (
        <div className="imgContainer">
            <img src={data.url} alt="nasa picture of the day" className="bgImage" />
        </div>
    )
}

export default Main
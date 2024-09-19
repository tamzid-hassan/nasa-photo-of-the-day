function Footer({ setShowModal, data }) {


    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h2>{data.title}</h2>
                <h1>NASA APOD PROJECT</h1>
            </div>
            <button onClick={() => setShowModal(prev => !prev)}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}

export default Footer
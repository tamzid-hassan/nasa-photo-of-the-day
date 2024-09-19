function SideBar({ setShowModal, data }) {
    return (
        <div className="sidebar">
            <div className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>{data.copyright}</h2>
                <div>
                    <p>{data.date}</p>
                    <p>{data.explanation}</p>
                </div>
                <button onClick={() => setShowModal(prev => !prev)}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div >
    )
}

export default SideBar
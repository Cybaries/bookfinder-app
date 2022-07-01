function Card({ book }) {
    return (
        <>
            {
                book.map((item, index) => {
                    let thumbnail = item.volumeInfo.imageLinks.smallThumbnail;
                    let title = item.volumeInfo.title;
                    // let amount = item.volumeInfo.listPrice.amount && item.volumeInfo.listPrice;
                    return (
                        <>
                            <div className="card">
                                <img src={thumbnail} alt="Logo" />
                                <div className="bottom">
                                    <h3 className="title flex-item">{title}</h3>
                                    <p className="amount flex-item">&#8377;350</p>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default Card;
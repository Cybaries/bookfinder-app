function Card({ book }) {
    return (
        <>
            {
                book.map((item, index) => {
                    console.log(item)
                    let thumbnail = item.volumeInfo.imageLinks.smallThumbnail;
                    let title = item.volumeInfo.title;
                    let amount;
                    if (item.saleInfo.saleability === 'FOR_SALE') {
                        amount = item.saleInfo.listPrice.amount + ' ' + item.saleInfo.listPrice.currencyCode;
                    }
                    else {
                        amount = 'Not for sale';
                    }
                    return (
                        <>
                            <div className="card">
                                <img src={thumbnail} alt="" />
                                <div className="bottom">
                                    <h3 className="title flex-item">{title}</h3>
                                    <p className="amount flex-item">{ amount }</p>
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
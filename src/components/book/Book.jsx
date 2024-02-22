import './book.css'

const Book = (props) => {
    const { author, title, img, description, href, num } = props;
    // console.log(num);

    return (
        <div className='col'>
            <div
                className='card h-100 border border-3 border-dark-subtle rounded-5 bg-warning-subtle p-3'
                style={{ width: 400 }}
            >
                <img src={img} className='card-img-top rounded-4' alt={title} />
                <div className='card-body'>
                    <h4 className='card-title'>
                        <u>{title}</u>
                    </h4>
                    <p className='lead'>
                        <b>Author:</b> {author}
                    </p>
                    <span className="book-flag">{`# ${num + 1}`}</span>
                    <p className='card-text'>
                        <em>{description}</em>
                    </p>
                </div>
                <a
                    href={href}
                    target='_blank'
                    type='button'
                    className='btn btn-success'
                >
                    More...
                </a>
            </div>
        </div>
    );
};

export default Book;
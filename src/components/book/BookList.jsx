import React from 'react';
import './BookList.css';

const books = [
    {
        id: 1,
        author: 'James Clavel',
        title: 'Shogun',
        img: 'https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/91QQYVntN+L._AC_UY218_.jpg',
        description: `After Englishman John Blackthorne is lost at sea, he awakens in a place few Europeans know of and even fewer have seen—Nippon. Thrust into the closed society that is seventeenth-century Japan, a land where the line between life and death is razor-thin, Blackthorne must negotiate not only a foreign people, with unknown customs and language, but also his own definitions of morality, truth, and freedom. As internal political strife and a clash of cultures lead to seemingly inevitable conflict, Blackthorne’s loyalty and strength of character are tested by both passion and loss, and he is torn between two worlds that will each be forever changed.`,
        href: 'https://www.amazon.com/Sho%CC%84gun-Part-One-Asian-Saga/dp/B0CPYTHP9J/ref=sr_1_2?crid=1V062IQS5C9S5&dib=eyJ2IjoiMSJ9.EbfxYzZsp1N_JymrxeRpBkLFWEW5dijOgqjsHOw43tqrNGkHxRElPE0cRnHO6FYChnw6m1HAv3dN-kmMTXXsXDdhpRVlju5ylqbNUiJ4QLK3OU3w36agab_ouH2hPFzYAfGV_9r1hpyAuuK14NFFiBXObKAf37Lm84E0guZREaDp8gvcAj1-OXyzQmfJbhZCmaIEqDCzKmbs8vARxx1APqA08PSaB9bXT6k2_hnJ6vE.MBVqMkZDBuPRQgYEs1lGGz1yYLql-B3W5bznlDQm88E&dib_tag=se&keywords=Books&qid=1708539464&s=audible&sprefix=books%2Caudible%2C93&sr=1-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
    },
    {
        id: 2,
        author: 'Danny Kade',
        title: 'Beyond Superpowered',
        img: 'https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/81rbqwkWPKL._AC_UY218_.jpg',
        description: `New world. New life. New everything.
        I thought it was the end when my car flew off a cliff. But a beautiful goddess stepped in and offered me a second chance.
        Now I have the power of light itself within me, and that power is growing.
        Which is just as well, because I have to battle villains, monsters, mutants and more.
        I’m not a natural born superhero, but just maybe, I can become something more.`,
        href: 'https://www.amazon.com/Beyond-Superpowered-Omnibus-Books-1-3/dp/B0CKFKQFJX/ref=sr_1_13?crid=1V062IQS5C9S5&dib=eyJ2IjoiMSJ9.EbfxYzZsp1N_JymrxeRpBkLFWEW5dijOgqjsHOw43tqrNGkHxRElPE0cRnHO6FYChnw6m1HAv3dN-kmMTXXsXDdhpRVlju5ylqbNUiJ4QLK3OU3w36agab_ouH2hPFzYAfGV_9r1hpyAuuK14NFFiBXObKAf37Lm84E0guZREaDp8gvcAj1-OXyzQmfJbhZCmaIEqDCzKmbs8vARxx1APqA08PSaB9bXT6k2_hnJ6vE.MBVqMkZDBuPRQgYEs1lGGz1yYLql-B3W5bznlDQm88E&dib_tag=se&keywords=Books&qid=1708539292&s=audible&sprefix=books%2Caudible%2C93&sr=1-13',
    },
    {
        id: 3,
        author: 'James David Victor',
        title: 'Secrets of the Prime Ones',
        img: 'https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/51wvjgYIohL.jpg',
        description: `Melias and his Sentinel crew survived their first encounter with Prime One technology and even procured an apparently powerful device. Now all they need is to figure out how to use it. Can they uncover the secrets of the Prime Ones and figure out how to stop the Lightbringer, a being intent on destroying the galaxy? Secrets of the Prime Ones is the second book in the Sentinels series.`,
        href: 'https://www.amazon.com/Secrets-Prime-Ones-Sentinels-Book/dp/B0CPTDXYH6/ref=sr_1_22?crid=1V062IQS5C9S5&dib=eyJ2IjoiMSJ9.BjZqeOTWo5kgngMnElSv5qfLoNfVDBMS3nCYfzJ-WvbppF1Owx3P2vYdNzv-5Whb783FFT9o28rqMZLKawAC1KkPiK1PXp7w4a7tDxwvrYFQZUnRlJJKIoJAaew0tphc7Ockkk3ekIniY1dzH4HxJDpneDTE8wHEWJVHH55LKB9a0RQRn4SCNr2B7uaosq4w.B403TQNFyATTT_oyEMXFHXIklRjliIDq6S6C3MuH0JQ&dib_tag=se&keywords=Books&qid=1708560855&s=audible&sprefix=books%2Caudible%2C93&sr=1-22-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1',
    },
];

const Book = props => {
    const { author, title, img, description, href } = props;
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
                    <p className='card-text'>
                        <em>{description}</em>
                    </p>
                </div>
                {/* <a
                    href={href}
                    target='_blank'
                    type='button'
                    className='btn btn-success'
                >
                    More...
                </a> */}
            </div>
        </div>
    );
};

const Modal = () => {
    const handleFormSubmit = e => {
        e.preventDefault();
        console.log('handle form Submit');
    };
    const handleFormInput = e => {
        console.log(e.target.name);
        console.log(e.target.value);
        console.log('handle form input');
    };
    const handleButtonClick = () => {
        alert('handle button click');
        // <button
        //     type='button'
        //     className='btn btn-primary'
        //     data-bs-toggle='modal'
        //     data-bs-target='#exampleModal'
        // >
        //     Click Me
        // </button>;
    };
    return (
        <>
            {/* <!-- Modal --> */}
            {/* <div
                className='modal fade'
                id='exampleModal'
                tabindex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
            >
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h1
                                className='modal-title fs-5'
                                id='exampleModalLabel'
                            >
                                Modal title
                            </h1>
                            <button
                                type='button'
                                className='btn-close'
                                data-bs-dismiss='modal'
                                aria-label='Close'
                            ></button>
                        </div>
                        <div className='modal-body'>...</div>
                        <div className='modal-footer'>
                            <button
                                type='button'
                                className='btn btn-secondary'
                                data-bs-dismiss='modal'
                            >
                                Close
                            </button>
                            <button type='button' className='btn btn-primary'>
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
            <div>
                <form onSubmit={handleFormSubmit}>
                    <h2>Typical Form</h2>
                    <input
                        type='text'
                        name='example'
                        onChange={handleFormInput}
                        style={{ margin: '1rem 0' }}
                    />
                </form>
                <button onClick={handleButtonClick}>click me</button>
            </div>
        </>
    );
};

function BookList() {
    return (
        <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-2 row-cols-xl-3 g-5 justify-content-evenly'>
            <Modal />
            {books.map(book => {
                const { id } = book;
                return <Book key={id} {...book} />;
            })}
        </div>
    );
}

export default BookList;

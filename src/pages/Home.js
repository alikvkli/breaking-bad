import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCharacters } from '../redux/services';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Link } from 'react-router-dom';


const Home = () => {
    const characters = useSelector((state) => state.characters.items);
    const status = useSelector((state) => state.characters.status);
    const nextPage = useSelector((state) => state.characters.page);
    const hasNextPage = useSelector((state) => state.characters.hasNextPage);
    const error = useSelector((state) => state.characters.error)
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(getCharacters());
        }
    }, [dispatch, status])

    if (status === "loading") {
        return <Loading />;
    }
    if (status === "failed" && error) {
        return <Error error={error} />;
    }


    return (
        <div className='container'>
            <h1>Karakterler</h1>
            <div className='grid'>
                {characters.map(character => (
                    <div key={character.char_id} className="character-card">
                        <Link to={`/character/${character.char_id}`} key={character.char_id}>
                            <img src={character.img} alt={character.name} />
                        </Link>
                        <div className="character-desc">
                            <span>Karakter : {character.name}</span>
                            <span>Takma ad : {character.nickname}</span>
                            <span>Meslek :
                                <ul>
                                    {character.occupation.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </span>
                        </div>
                    </div>

                ))}
            </div>

            {status === 'loading' && <Loading />}
            {hasNextPage && status !== 'loading' && (
                <div className="load-more">
                    <button className='btn btn-purple' onClick={() => { dispatch(getCharacters(nextPage)) }}>Devam??n?? G??ster ({nextPage})</button>
                </div>
            )}

        </div>
    )
}

export default Home;
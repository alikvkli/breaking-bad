import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from '../redux/services';
import Loading from '../components/Loading';
import Error from '../components/Error';


const Home = () => {
    const characters = useSelector((state) => state.characters.items);
    const isLoading = useSelector((state) => state.characters.isLoading);
    const nextPage = useSelector((state) => state.characters.page);
    const hasNextPage = useSelector((state) => state.characters.hasNextPage);
    const error = useSelector((state) => state.characters.error)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharacters());
    }, [dispatch]);

    if (isLoading) {
        return <Loading />;
    }
    if (error) {
        return <Error error={error} />;
    }


    return (
        <div>
            <h1>Karakterler</h1>
            {characters.map(character => (
                <div key={character.char_id} className="character-card">
                    <img src={character.img} alt={character.name} />
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
            {isLoading && <Loading />}
            {hasNextPage && !isLoading && (
                <div className="load-more">
                    <button onClick={() => { dispatch(getCharacters(nextPage)) }}>Devamını Göster ({nextPage})</button>
                </div>
            )}

        </div>
    )
}

export default Home;
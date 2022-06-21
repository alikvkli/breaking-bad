import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getCharacterById } from '../redux/services';

const Detail = () => {
    const [character, setCharacter] = useState(null);
    const { char_id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCharacterById(char_id)).then((data) => setCharacter(data.payload));

    }, [dispatch, char_id]);


    return (
        <div className='container'>
            {
                character &&
                <div>
                    <h1>{character.name}</h1>
                    <img src={character.img} alt={character.name}/>
                </div>
            }
        </div>

    );
}
export default Detail;
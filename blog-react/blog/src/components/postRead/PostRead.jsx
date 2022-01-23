import './postRead.scss';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useLocation, Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';
export default function PostRead() {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [state, setState] = useState({});
    const { user } = useContext(Context);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const [update, setUpdate] = useState(false);
    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get('/posts/' + path);
            setState(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        fetchPost();
    }, [path]);
    const PF = 'http://localhost:5000/images/';

    const handleDelete = async () => {
        await axios
            .delete('/posts/' + path, { data: user.username })
            .then((res) => {
                console.log(res);
                window.location.replace('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleUpdate = async () => {
        await axios
            .put('/posts/' + path, { username: user.username, title, desc })
            .then((res) => {
                console.log(res);
                setUpdate(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className='postRead'>
            <div className='itemContainer'>
                <img src={PF + state.photo} alt='postImg' />
                <div className='title'>
                    {update ? (
                        <input
                            type='text'
                            className='inputUpdate'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            autoFocus></input>
                    ) : (
                        <span>{title}</span>
                    )}
                    {state.username === user?.username && (
                        <div className='icons'>
                            <span>
                                <EditIcon
                                    onClick={(e) => {
                                        update
                                            ? setUpdate(false)
                                            : setUpdate(true);
                                    }}
                                    fontSize='large'
                                />
                            </span>
                            <span>
                                <DeleteForeverIcon
                                    onClick={handleDelete}
                                    fontSize='large'
                                />
                            </span>
                        </div>
                    )}
                </div>
                <div className='userInfo'>
                    <span>
                        Author{' '}
                        <Link
                            className='routerLink'
                            to={`/?user=${state.username}`}>
                            <b>{state.username} </b>
                        </Link>
                    </span>
                    <span>({new Date(state.createdAt).toUTCString()})</span>
                </div>
                <div className='text'>
                    {update ? (
                        <textarea
                            value={desc}
                            className='textareaUpdate'
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    ) : (
                        <p>{desc}</p>
                    )}
                </div>
                {update && (
                    <button className='buttonUpdate' onClick={handleUpdate}>
                        UPDATE
                    </button>
                )}
            </div>
        </div>
    );
}

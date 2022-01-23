import './write.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useContext, useRef, useState } from 'react';
import axios from 'axios';
import { Context } from '../../context/Context';

export default function Write() {
    const titleRef = useRef('');
    const descRef = useRef('');
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = {
            username: user.username,
            title: titleRef.current.value,
            desc: descRef.current.value,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            newPost.photo = filename;
            try {
                await axios.post('/upload', data);
            } catch (error) {}
        }
        try {
            const res = await axios.post('/posts', newPost);
            window.location.replace('/post/' + res.data._id);
        } catch (error) {}
    };
    return (
        <div className='write'>
            {file && (
                <img
                    className='writeImg'
                    src={URL.createObjectURL(file)}
                    alt='banner'
                />
            )}
            <form className='writeForm' onSubmit={handleSubmit}>
                <div className='top'>
                    <label htmlFor='fileInput'>
                        <AddCircleOutlineIcon fontSize='larger' />
                    </label>
                    <input
                        type={'file'}
                        id='fileInput'
                        onChange={(e) => setFile(e.target.files[0])}
                        style={{ display: 'none' }}
                    />
                    <input
                        type={'text'}
                        ref={titleRef}
                        placeholder='Title'
                        autoFocus={true}
                    />
                </div>
                <div className='center'>
                    <textarea
                        type='text'
                        ref={descRef}
                        placeholder='Tell Your Story..'></textarea>
                </div>
                <div className='bottom'>
                    <button type='submit'>Publish</button>
                </div>
            </form>
        </div>
    );
}

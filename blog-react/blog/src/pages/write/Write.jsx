import './write.scss';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useRef } from 'react';

export default function Write() {
    const titleRef = useRef('');
    const descRef = useRef('');
    const photoRef = useRef('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };
    return (
        <div className='write'>
            <img className='writeImg' src='../assets/postItem.jpg' alt='banner'/>
            <form className='writeForm' onSubmit={handleSubmit}>
                <div className='top'>
                    <label htmlFor='fileInput'>
                        <AddCircleOutlineIcon fontSize='larger' />
                    </label>
                    <input
                        type={'file'}
                        ref={photoRef}
                        id='fileInput'
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

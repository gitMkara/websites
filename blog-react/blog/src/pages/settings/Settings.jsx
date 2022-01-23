import './settings.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { useContext, useRef, useState } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';

export default function Settings() {
    const { user } = useContext(Context);
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState();
    const [email, setEmail] = useState(user.email);
    const [isUpdated, setIsUpdated] = useState(false);

    const PF = 'http://localhost:5000/images/';
    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedUser = {
            userId: user._id,
            username,
            password,
            email,
        };

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            updatedUser.profilePic = filename;
            try {
                await axios.post('/upload', data);
            } catch (error) {}
        }
        try {
            let res = await axios.put('/users/' + user._id, updatedUser);
            setIsUpdated(true);
            setInterval(() => {
                setIsUpdated(false);
            }, 4000);

            console.log(res);
        } catch (error) {}
    };

    return (
        <div className='settings'>
            <div className='itemContainer'>
                <div className='left'>
                    <div className='top'>
                        <h1>Update Your Account</h1>
                        <h3>Delete Account!</h3>
                    </div>
                    <div className='center'>
                        <h3>Profile Picture</h3>
                        <form onSubmit={handleSubmit}>
                            <div className='ppSetting'>
                                <img
                                    src={
                                        file
                                            ? URL.createObjectURL(file)
                                            : PF + user.profilePic
                                    }
                                />
                                <label htmlFor='inputFile'>
                                    <ContactPageIcon fontSize='larger' />
                                </label>

                                <input
                                    type='file'
                                    style={{ display: 'none' }}
                                    onChange={(e) => setFile(e.target.files[0])}
                                    id='inputFile'
                                />
                            </div>

                            <div className='inputContainer'>
                                <label className=''>User Name</label>
                                <input
                                    type='input'
                                    placeholder={user.username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                                <label className=''>E-mail</label>
                                <input
                                    type='email'
                                    placeholder={user.email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <label className=''>Password</label>
                                <input
                                    type='password'
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div className='bottom'>
                                <button type='submit'>Update</button>
                                {isUpdated && <span>Updated Successfully</span>}
                            </div>
                        </form>
                    </div>
                </div>
                <div className='right'>
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}

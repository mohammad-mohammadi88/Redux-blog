import { selectAllUsers } from '../../../libs/users/UserSlice';
import { useSelector } from 'react-redux';
import { FormEvent, useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../libs/hook';
import { addNewPost } from '../../../libs/posts/PostSlice';
import { faker } from "@faker-js/faker";


const AddPost :FC = () => {
    const users:any = useSelector(selectAllUsers)
    const defaultUser:any = Object.values(users)[0]
    const [postTitle, setPostTitle] = useState('')
    const [userId, setUserId] = useState(defaultUser.id)
    const [postContent, setPostContent] = useState('')
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const handleClick = async (e:FormEvent) => {
        e.preventDefault()
        const body = {
            id:String(faker.number.bigInt()),
            title:postTitle,
            content:postContent,
            user:userId,
            date: Date.now(),
            reactions: {
                eyes: 0,
                heart: 0,
                hooray: 0,
                rocket: 0,
                thumbsUp: 0
            }
        }
        dispatch(addNewPost(body)).then(res=>res.type === "posts/addPost/fulfilled" && navigate('/'))
    }
    return (
        <section>
            <h2>Add a New Post</h2>
            <form onSubmit={handleClick}>
                <label htmlFor="postTitle">Post Title:</label>
                <input type="text" min="5" max="35" id="postTitle" value={postTitle} onChange={(e)=>setPostTitle(e.target.value)} name="postTitle" placeholder="What's on your mind?" required/>
                <label htmlFor="postAuthor">Author:</label>
                <select value={userId} onChange={(e)=>setUserId(e.target.value)} id="postAuthor" required>
                    {users && Object.values(users).map(({firstName,lastName,id}:any)=><option key={id} value={id}>{firstName} {lastName}</option>)}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea minLength={10} value={postContent} id="postContent" onChange={(e)=>setPostContent(e.target.value)} name="postContent" required></textarea>
                <button type="submit">
                    Save Post
                </button>
            </form>
        </section>
    )
}

export default AddPost
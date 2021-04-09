import React, { useState, useEffect } from 'react'
import Post from './Post'
import Services from './Services';

function MainPage(props) {
    const [posts, setposts] = useState([]);

    /*useEffect(() => {
        Services.getImageServices().onSnapshot(snapshot => {
            setposts(snapshot.docs.map(doc =>
            ({
                id: doc.id,
                post: doc.data()
            })))
        })
    }, [])*/
//alert("Hi");
    return (
        <div >
            <div style={{
                height: '60px',
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: 'lightgrey'
            }}>
                <h3 style={{
                    padding: '10px',
                    fontWeight: '600',
                }}>{props.username}</h3>
                <h3 style={{
                    padding: '10px',
                    fontWeight: '600',
                }}>Home</h3>
            </div>
            <div class="container" style={{
                alignContent: 'center',
                justifyContent: 'center',
                minWidth: '500px',
                maxWidth: '650px'
            }}>
                <div class=" d-flex justify-content-center mt-3">
                <input type="file"/>
                    <button 
                    class="btn btn-danger"  style={{
                        height: '40px',
                    }}>UPLOAD</button>
                </div>
                {
                    posts &&
                    posts.map(({ id, post }) => <Post key={id} username={post.username} caption={post.caption} imageURL={post.imageURL} Like={post.Like} Comment={post.Comment} Share={post.Share} />)}
            </div>
        </div>
    )
}
export default MainPage

import React from 'react'
import {useParams } from 'react-router-dom';
import './Post.css'
import 'bootstrap/dist/css/bootstrap.css'

function Image({ username, imageURL, }) {
    let {id} = useParams();
    if(username===id){
    return (
        <div >
                <div class="col-md-4">
                    <div class="thumbnail">
                        <img src={imageURL} alt="posts" style={{ width: '100%', border: '1px solid grey' }} />
                    </div>
                </div>
        </div>
    )
}
}

export default Image

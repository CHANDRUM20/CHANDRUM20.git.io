import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import logo from './logo.svg'
import logo2 from './logo2.svg'
import logo3 from './logo3.svg'
import {Link} from 'react-router-dom';
import './Post.css'
import 'bootstrap/dist/css/bootstrap.css'
import Services from './Services'
import { Button, Modal } from 'react-bootstrap'

function Post({ username, caption, imageURL, Like, Comment, Share}) {
    
    const [like1, setlike1] = useState(0)
    const  [share1, setshare1] = useState()
    const [like, setlike] = useState(false)
    const [comment, setcomment] = useState('')
    const  [share, setshare] = useState(false)
    const  [open, setopen] = useState(false)


    function CommentController(){
        return(
            setopen(true),
            setcomment(comment + 1),
            <Modal
            open={open}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Comments
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h6>{username}</h6>
              <p>
                  {

                  }
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={setopen(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
        )
    }

    return (
        <div style={{
            backgroundColor: 'loghtgrey',
            border: '1px solid grey',
            borderRadius: '25px',
            alignContent: 'center',
            justifyContent: 'center',
            margin: '20px 10px',
        }}>
            <div style={{
                alignItems: 'center',
                display: 'flex'
            }}>
                <Avatar alt="Username" style={{
                    margin: '10px'
                }} />
                <Link to="/MainPage/UserPage?+{username}">
                <button class="btn"><h3 style={{
                    fontWeight: '600'
                }}>{username}</h3></button></Link>
            </div>
            <img alt="logo" src={imageURL} style={{
                objectFit: 'contain',
                width: '100%',
                maxHeight: '550px',
                borderTop: '1px solid grey',
                borderBottom: '1px solid grey',
            }} />
            <div class="d-flex justify-content-around p-1">
                <div className="like">
                    <button onClick={() => {
                        if(like){
                            setlike(false)
                            setlike1(Like-1)
                            Services.putImageServices({props:like1})
                        }
                        else{
                            setlike(true)                            
                            setlike1(Like+1)
                            Services.putImageServices({props:like1})
                        }
                        }
                        } class="btn btn-dark" >
                        {like} like
                        <img src={logo} alt="like-logo" className='post_logo' />
                    </button>
                </div>

                <div className="like">
                    <button onClick={() => {
                        if(!share){
                            setshare(true)
                            setshare1(Share+1)
                            Services.putImageServices({props:share1})
                        }
                        }} class="btn btn-dark "> {share1} share <img src={logo3} alt="share-logo" className="post_logo" />
                    </button>
                </div>
                <div className="like"><button onClick={CommentController()}
                    class="btn btn-dark" >{comment}  comment <img src={logo2} alt="comment-logo" className='post_logo' /></button>
                </div>
            </div>
            <div style={{
                fontWeight: '400',
                margin: '10px'
            }}>
                <h4 style={{
                    fontWeight: '300',
                    fontSize: '15px',
                    paddingBottom: '10px'
                }}><strong><b>{username}:</b></strong> {caption}</h4>
            </div>
            <div style={{
                fontWeight: '400',
                margin: '10px'
            }}>
                <h4 style={{
                    fontWeight: '300',
                    fontSize: '15px',
                    paddingBottom: '10px'
                }}><strong><b>{username}:</b></strong> {caption}</h4>
            </div>
        </div>
    )
}

export default Post

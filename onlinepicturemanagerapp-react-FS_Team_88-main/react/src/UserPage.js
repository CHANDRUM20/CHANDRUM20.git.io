import React, {useEffect, useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink, useParams } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import {Nav,} from 'react-bootstrap';
import Services from './Services';
import Image from './Image';

function UserPage() {

    const [images, setimages] = useState([]);
    //const [imagename, setimagename] = useState("")
    let {id} = useParams();

    useEffect(() => {
        
        Services.getImageServices().onSnapshot(snapshot => {
            setimages(snapshot.docs.map(doc =>
            ({
                image: doc.data(),        
            })))
        })
    }, [])

    return (
        <div class="container" style={{
            backgroundColor: 'whitesmoke',
            minHeight: '400px',
            paddingTop: '50px',
            paddingBottom: '20px',
            maxWidth: '600px',
            minWidth: '500px',
        }}>
            <div class="d-flex container" style={{
                alignItems: 'center',
                alignContent: 'start',
                paddingTop: '30px',
                justifyContent: 'space-between',
                borderBottom: '2px solid red',
            }}>
                <div class="d-flex " style={{
                    alignItems: 'center',
                    alignContent: 'start',
                    justifyContent: 'space-between',
                }}>
                    <h4 style={{
                        marginRight: '5px'
                    }}>
                        {id}
                        </h4>
                    <Avatar alt="username" style={{
                        marginRight: '10px'
                    }} />
                </div>
                <div class="d-flex container" style={{
                    justifyContent: 'space-between',
                    borderLeft: '2px solid red',
                    alignItems: 'center'
                }}>
                    <div >
                        <h3 >0</h3>
                        <h4>posts</h4>
                    </div>
                    <div >
                        <h3>0</h3>
                        <h4>Followers</h4>
                    </div>
                    <div >
                        <h3>0</h3>
                        <h4>Following</h4>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-between">
                <Router>
                    <Nav >
                        <div class="mt-3" role="group">
                            <div class="pl-4 d-inline"><NavLink to="/MainPage/UserPage" activeClassName="active"><button class="btn btn-outline-danger">Photos</button></NavLink></div>
                            <div class="pl-4 d-inline"><NavLink to="/MainPage/UserPage/Videos"><button class="btn btn-outline-warning">Videos</button></NavLink></div>
                            <div class="pl-4 d-inline"><NavLink to="/MainPage/UserPage/Tag"><button class="btn btn-outline-dark">Tags</button></NavLink></div>
                        </div>
                    </Nav>
                    <Switch>
                        <Route path="/" >
                            <Redirect to="/MainPage/UserPage" />
                        </Route>
                        {/* <Route path='/MainPage' component={MainPage} /> */}
                        <Route path='/Login' component={Login} />
                        <Route path='/sign-up' component={Signup} />
                    </Switch>
                </Router>
            </div>
            <div class="row" style={{
                margin: '10px'
            }}>
                <div class="row" style={{
                    margin: '10px'
                }}>
                    {images.map(({ id, images }) => <Image key={id} currentname={images.username} username={images.username} imageURL={images.imageURL} />)}
                </div>
            </div>
        </div>
    )
}

export default UserPage

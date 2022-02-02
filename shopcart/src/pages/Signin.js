import React, { useState }from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

export const Signin = () => {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

  return(
    <div class="container" id="signin">
      <Card style={{width:'800px'}} className="mx-auto mt-5">
        {!login &&
        <React.Fragment>
            <Card.Header className="pb-4">
                <h1>Sign In</h1>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <h3>Please login using one of the following:</h3>
                    <LoginForm />
                    <FacebookLogin
                        appId="428682902217166"
                        autoLoad={false}
                        fields="name,email,picture"
                        scope="public_profile,user_friends"
                        callback={responseFacebook}
                        icon="fa-facebook"
                    >
                    </FacebookLogin>
                </Card.Text>
            </Card.Body>
        </React.Fragment>
        }

        {login &&
        <React.Fragment>
            <Card.Header className="pb-4">
                <h1>Check Out</h1>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    <Home fbpic={picture} fbdata={data} />
                </Card.Text>
            </Card.Body>
        </React.Fragment>
        }

      </Card>
    </div>
  )
}

const LoginForm = () => {
  return(
    <form className="border mt-3 mb-5 p-3 bg-white">
      <label className="m-2">Name:</label><br />
      <input type="text" name="name" placeholder="Your name"></input><br />
      <label className="m-2">Email:</label><br />
      <input type="email" name="email" placeholder="Your Email"></input><br />
      <input type="submit" value="Login" className="btn bg-success text-white my-3"></input>
    </form>
  )
}

const Home = ({fbpic, fbdata}) => {
  return(
    <React.Fragment>
      <img src={fbpic} alt={fbdata.name} />
      <h3 className="d-inline text-success mx-2">
        Welcome back {fbdata.name}!
      </h3>
      <p className="my-5">Time to check out?</p>
    </React.Fragment>
  )
}
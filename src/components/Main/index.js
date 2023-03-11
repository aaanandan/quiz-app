import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Segment,
  Item,
  Divider,
  Button,
  Message,
  Menu,
  Image,
  Grid
} from 'semantic-ui-react';

import anandagandha from '../../images/anandagandha-sm-copy.png'
import img from '../../images/kailaasa-flag-triangular-2019-compressed.png'
import Loader from '../Loader';

import {
  MAJORS,
} from '../../constants';
import { shuffle } from '../../utils';

import Offline from '../Offline';

import { useAuth0 } from "@auth0/auth0-react";

const Main = ({ startQuiz }) => {
  const { loginWithRedirect } = useAuth0();
  const { logout, isAuthenticated, isLoading, user, getAccessTokenSilently } = useAuth0();

  const [isLoggedin, setIsloggedIn] = useState(false);
  const [major, setMajor] = useState({ value: null, text: null });
  const [numOfQuestions, setNumOfQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState('0');
  const [questionsType, setQuestionsType] = useState('0');
  const [countdownTime, setCountdownTime] = useState({
    hours: 0,
    minutes: 4,
    seconds: 0,
  });
  // const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [offline, setOffline] = useState(false);
  const handleTimeChange = (e, { name, value }) => {
    setCountdownTime({ ...countdownTime, [name]: value });
  };
  const [loading, setLoading] = useState(false);
  let allFieldsSelected = false;
  if (
    major.value &&
    numOfQuestions &&
    difficulty &&
    questionsType &&
    (countdownTime.hours || countdownTime.minutes || countdownTime.seconds)
  ) {
    allFieldsSelected = true;
  }
  useEffect(() => {
    if (!loading) return;
    getAccessTokenSilently().then(token => {
      const api = 'https://kerserver.onrender.com/' + major.value;
      fetch(api, {
        headers: { Authorization: `Bearer ${token}` }
      }).then(respone => respone.json())
        .then(data => {
          // const { response_code, results } = data;
          data.forEach(element => {
            element.options = shuffle([
              ...element.answers,
            ]);
          });
          // setProcessing(false);
          startQuiz(
            data,
            countdownTime.hours * 60 * 60 + countdownTime.minutes * 60 + countdownTime.seconds,
            major
          );
        })
        .catch(error => {
          // setTimeout(() => {
          if (!navigator.onLine) {
            setOffline(true);
          } else {
            // setProcessing(false);
            setError(error);
          }
          // }, 1000)
        }
        );
    });
    if (error) setError(null);
  }, [loading]);

  if (offline) return <Offline />;
  return (
    <Container>
      <Segment>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column key={1}><Image size="medium" verticalAlign="middle" src={img} /></Grid.Column>
            <Grid.Column key={2} textAlign="center" verticalAlign="middle"><h2>Majors</h2></Grid.Column>
            <Grid.Column key={3}><Image size="small" verticalAlign="middle" src={anandagandha} floated="right" /></Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment>
        <Item.Group >
          <Item>
            <Item.Content>
              {error && (
                <Message error onDismiss={() => setError(null)}>
                  <Message.Header>Error!</Message.Header>
                  {error.message}
                </Message>
              )}
              <Item.Meta>
                <br />
                <Item.Description>
                  {isAuthenticated && !isLoading ? <h3>Please choose a major to start, complete all the majors</h3> : <h3>Please login to start</h3>}
                </Item.Description>

                <Menu vertical fluid size="massive" >
                  {MAJORS.map((ele, i) => {
                    return (
                      <Menu.Item
                        key={i}
                        name={ele.text}
                        disabled={!isAuthenticated}
                        active={major.value === ele.value}
                        onClick={() => { setMajor(ele) }}>
                        <b style={{ marginRight: '8px' }}>{i + 1}. </b>
                        {ele.text}
                      </Menu.Item>
                    );
                  })}
                </Menu>
              </Item.Meta>
              <Divider />
              <Divider />
              <Item.Extra>
                {!isAuthenticated && !isLoading ? <Button primary
                  size="big"
                  icon="user"
                  labelPosition="left"
                  content={'Login'}
                  onClick={() => {
                    loginWithRedirect();

                  }}
                  disabled={allFieldsSelected || loading} /> :
                  <Button
                    onClick={() => logout({ logoutParams: { returnTo: window.location.href } })}
                    size="big"
                    icon="user"
                    labelPosition="left"
                    content={'Logout'}
                    disabled={allFieldsSelected || loading} />}
                <Button
                  primary
                  size="big"
                  icon="play"
                  labelPosition="left"
                  content={loading ? 'Processing...' : 'Start Now'}
                  onClick={() => setLoading(true)}
                  disabled={!allFieldsSelected || loading}
                  floated="right"
                />
              </Item.Extra>
              {loading && <><br /> <Loader /></>}

            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      {/* <Segment>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column key={1}><h3>Welcome &nbsp;&nbsp;&nbsp;&nbsp; {user.name}</h3></Grid.Column>
            <Grid.Column key={2} textAlign="center" verticalAlign="middle"><h2>&nbsp;&nbsp;&nbsp;&nbsp;{user.email}</h2></Grid.Column>
            <Grid.Column key={3}><h2>{user.phone_number} {user.address} </h2></Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment> */}
      <br />
    </Container >
  );
};
Main.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};
export default Main;
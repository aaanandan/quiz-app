import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Segment,
  Item,
  Button,
  Message,
  Menu,
  Image,
  Grid
} from 'semantic-ui-react';

import anandagandha from '../../images/anandagandha-sm-copy.png'
import img from '../../images/kailaasa-flag-triangular-2019-compressed.png'
import Loader from '../Loader';
import axios from 'axios';

import {
  MAJORS, API_URL
} from '../../constants';
import { shuffle } from '../../utils';

import Offline from '../Offline';

import { useAuth0 } from "@auth0/auth0-react";

const Main = ({ startQuiz, attempts }) => {
  const { loginWithRedirect } = useAuth0();
  const { logout, isAuthenticated, isLoading, user, getAccessTokenSilently } = useAuth0();

  // const [isLoggedin, setIsloggedIn] = useState(false);
  const [major, setMajor] = useState({ value: null, text: null });
  const [numOfQuestions, setNumOfQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState('0');
  const [questionsType, setQuestionsType] = useState('0');
  const [countdownTime, setCountdownTime] = useState({
    hours: 0,
    minutes: 4,
    seconds: 0,
  });
  const [data, setData] = useState(null);

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


  const api = API_URL + '/getQuestions';
  useEffect(() => {
    if (!loading) return;

    getAccessTokenSilently().then((token) => {
      axios.post(api, { major: major.value, ...user }, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      }).then(function (response) {
        let data = response.data;
        data = data.map(element => {
          element.options = shuffle([
            ...element.answers,
          ]);
        });
        let sec = countdownTime.hours * 60 * 60 + countdownTime.minutes * 60 + countdownTime.seconds;
        startQuiz(response.data, sec, major);
      })
        .catch(function (error) {
          setError(error);
        });
    })

  }, [loading, major.value]);

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
                  {isAuthenticated && !isLoading ? <h3>Please choose a major to start. Complete all the majors.</h3> : <h3>Please login to start</h3>}
                </Item.Description>

                <Menu vertical fluid size="massive" >
                  {MAJORS.map((ele, i) => {
                    return (
                      <>
                        <Menu.Item
                          key={i}
                          name={ele.text}
                          disabled={!isAuthenticated || !attempts}
                          active={major.value === ele.value}
                          onClick={() => { setMajor(ele) }}>
                          <b style={{ marginRight: '8px' }}>{i + 1}. </b>{ele.text}
                          <span style={{ margin: '8px', color: 'grey', fontSize: '10px' }}>{isAuthenticated && attempts && attempts[ele.value] + " attemps"}</span>
                          {(isAuthenticated && !attempts) && <span style={{ alignSelf: "right" }}>...</span>}
                        </Menu.Item>
                      </>
                    );
                  })}
                </Menu>
              </Item.Meta>
              <Item.Extra>
                <Grid columns={2}>
                  <Grid.Row>
                    <Grid.Column key={1}>
                      {!isAuthenticated && !isLoading ? <Button primary
                        size="small"
                        icon="user"
                        labelPosition="left"
                        content={'Login'}
                        onClick={() => {
                          loginWithRedirect();

                        }}
                        disabled={allFieldsSelected || loading} /> :
                        <Button
                          onClick={() => logout({ logoutParams: { returnTo: window.location.href } })}
                          size="small"
                          icon="user"
                          labelPosition="left"
                          content={'Logout'}
                          disabled={allFieldsSelected || loading} />}
                    </Grid.Column>
                    <Grid.Column floated="right">
                      <Button
                        primary
                        size="small"
                        icon="play"
                        labelPosition="left"
                        content={loading ? 'Processing...' : 'Start'}
                        onClick={() => setLoading(true)}
                        disabled={!allFieldsSelected || loading}
                        floated="right"
                      />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      {loading && <><br /> <Loader /></>}
      <br />
    </Container >
  );
};
Main.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};
export default Main;
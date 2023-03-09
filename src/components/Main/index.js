import React, { useState } from 'react';
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

import {
  MAJORS,
} from '../../constants';
import { shuffle } from '../../utils';

import Offline from '../Offline';

const Main = ({ startQuiz }) => {
  const [major, setMajor] = useState({ value: null, text: null });
  const [numOfQuestions, setNumOfQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState('0');
  const [questionsType, setQuestionsType] = useState('0');
  const [countdownTime, setCountdownTime] = useState({
    hours: 0,
    minutes: 120,
    seconds: 0,
  });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [offline, setOffline] = useState(false);

  const handleTimeChange = (e, { name, value }) => {
    setCountdownTime({ ...countdownTime, [name]: value });
  };

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

  const fetchData = () => {
    setProcessing(true);
    if (error) setError(null);

    //TODO: change API end point to secure API validating token and generate questioner 
    // 1. Hindu  Philosophy
    // 2. Hindu History 
    // 3. Hindu identity 
    // 4. Know your nation

    // 25 mcq objectives (1 mark)/
    // 10 application (2 marks each) 
    // 1 social media activity (5 marks)
    // types : mcq, application, activity
    // const API = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${major.value}&difficulty=${difficulty}&type=${questionsType}`;

    const api = 'https://kerserver.onrender.com/' + major.value;
    fetch(api)
      .then(respone => respone.json())
      .then(data =>
        setTimeout(() => {
          // const { response_code, results } = data;
          data.forEach(element => {
            element.options = shuffle([
              ...element.answers,
            ]);
          });
          setProcessing(false);
          startQuiz(
            data,
            countdownTime.hours * 60 * 60 + countdownTime.minutes * 60 + countdownTime.seconds,
            major
          );
        }, 1000)
      )
      .catch(error =>
        setTimeout(() => {
          if (!navigator.onLine) {
            setOffline(true);
          } else {
            setProcessing(false);
            setError(error);
          }
        }, 1000)
      );
  };

  if (offline) return <Offline />;
  return (
    <Container>
      <Segment>
        <Grid columns={3} divide>
          <Grid.Row>
            <Grid.Column key={1}><Image size="medium" verticalAlign="middle" src={img} /></Grid.Column>
            <Grid.Column key={2} textAlign="center" verticalAlign="middle"><h2>Majors</h2></Grid.Column>
            <Grid.Column key={3}><Image size="small" verticalAlign="middle" src={anandagandha} floated="right" /></Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment>
        <Item.Group divided>
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
                  <h3>Please choose a major to start, complete all the majors</h3>
                </Item.Description>
                <Menu vertical fluid size="massive">
                  {MAJORS.map((ele, i) => {
                    return (
                      <Menu.Item
                        key={i}
                        name={ele.text}
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
                <Button
                  primary
                  size="big"
                  icon="play"
                  labelPosition="left"
                  content={processing ? 'Processing...' : 'Start Now'}
                  onClick={fetchData}
                  disabled={!allFieldsSelected || processing}
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <br />
    </Container>
  );
};

Main.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};

export default Main;

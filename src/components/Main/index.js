import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Segment,
  Item,
  Divider,
  Button,
  Message,
  Menu
} from 'semantic-ui-react';

import img from '../../images/kailaasa-flag-triangular-2019-compressed.png'

import {
  MAJORS,
} from '../../constants';
import { shuffle } from '../../utils';

import Offline from '../Offline';

const Main = ({ startQuiz }) => {
  const [category, setCategory] = useState(0);
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
    category &&
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


    const API = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=${questionsType}`;

    fetch(API)
      .then(respone => respone.json())
      .then(data =>
        setTimeout(() => {
          const { response_code, results } = data;

          if (response_code === 1) {
            const message = (
              <p>
                The API doesn't have enough questions for your query. (Ex.
                Asking for 50 Questions in a Category that only has 20.)
                <br />
                <br />
                Please change the <strong>No. of Questions</strong>,{' '}
                <strong>Difficulty Level</strong>, or{' '}
                <strong>Type of Questions</strong>.
              </p>
            );

            setProcessing(false);
            setError({ message });

            return;
          }

          results.forEach(element => {
            element.options = shuffle([
              element.correct_answer,
              ...element.incorrect_answers,
            ]);
          });

          setProcessing(false);
          startQuiz(
            results,
            countdownTime.hours * 60 * 60 + countdownTime.minutes * 60 + countdownTime.seconds
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
        <Item.Group divided>
          <Item>
            <Item.Image src={img} />
            <Item.Content>
              <Item.Header>
                <br />
                <h1>KET  - Kailasa eligiblity test</h1>
              </Item.Header>
              {error && (
                <Message error onDismiss={() => setError(null)}>
                  <Message.Header>Error!</Message.Header>
                  {error.message}
                </Message>
              )}

              <Item.Meta>
                <Divider />
                <br />
                <br />
                <br />
                <Item.Description>
                  <h3>Please choose a Major to start, complete all the majors</h3>
                </Item.Description>
                <Menu vertical fluid size="massive">
                  {MAJORS.map((major, i) => {
                    return (
                      <Menu.Item
                        key={i}
                        name={major.text}
                        active={category === major.value}
                        onClick={() => { setCategory(major.value) }}>
                        <b style={{ marginRight: '8px' }}>{i + 1}. </b>
                        {major.text}
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

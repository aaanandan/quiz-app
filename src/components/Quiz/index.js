import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Segment,
  Item,
  Divider,
  Button,
  Image,
  Grid,
  Icon,
  Message,
  Menu,
  Header
} from 'semantic-ui-react';

import he from 'he';
import Countdown from '../Countdown';
import { getLetter } from '../../utils';
import img from '../../images/kailaasa-flag-triangular-2019-compressed.png';
import anandagandha from '../../images/anandagandha-sm-copy.png'
import { useAuth0 } from "@auth0/auth0-react";

import { API_URL } from '../../constants';
import Loader from '../Loader';

const Quiz = ({ data, countdownTime, endQuiz, major }) => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [userSlectedAns, setUserSlectedAns] = useState(null);
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  const [timeTaken, setTimeTaken] = useState(null);

  const handleItemClick = (e, { name }) => {
    setUserSlectedAns(name);
  };

  const handleNext = (_id) => {
    let point = 0;
    const api = API_URL + '/validateAnswer';

    let question = {
      _questionId: _id,
      question: he.decode(data[questionIndex].question),
      user_answer: userSlectedAns,
      correct_answer: '',
      point: 0
    }

    getAccessTokenSilently().then((token) => {
      fetch(api, {
        method: 'POST',
        body: JSON.stringify({ major: major.value, question, email: user.email, questionsAndAnswers }),
        headers: { "Content-type": "application/json; charset=UTF-8", "Authorization": "Bearer " + token }
      }).then(respone => {
        return respone.json().then(res => {
          if (res.correct_answer === userSlectedAns) point = 1;
          const qna = questionsAndAnswers;
          qna.push({
            question: he.decode(data[questionIndex].question),
            user_answer: userSlectedAns,
            correct_answer: res.correct_answer,
            point
          });

          if (questionIndex === data.length - 1) {
            return endQuiz({
              totalQuestions: data.length,
              correctAnswers: correctAnswers + point,
              timeTaken,
              questionsAndAnswers: qna
            });
          }

          setCorrectAnswers(correctAnswers + point);
          setQuestionIndex(questionIndex + 1);
          setUserSlectedAns(null);
          setQuestionsAndAnswers(qna);
        })
      })
    });
  };

  const timeOver = timeTaken => {
    return endQuiz({
      totalQuestions: data.length,
      correctAnswers,
      timeTaken,
      questionsAndAnswers
    });
  };

  if (!data) return (<><br /> <Loader /></>);
  return (
    <Item.Header>
      <Container>
        <Segment>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column key={1}><Image size="medium" verticalAlign="middle" src={img} /></Grid.Column>
              <Grid.Column key={2} textAlign="center" verticalAlign="middle"><h2>{major.text}</h2></Grid.Column>
              <Grid.Column key={3}><Image size="small" src={anandagandha} floated="right" /></Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <Item.Group divided>
            <Item>
              <Item.Content>
                <Item.Extra>
                  <Header as="h1" block floated="left">
                    <Icon name="info circle" />
                    <Header.Content>
                      {`Question No.${questionIndex + 1} of ${data.length}`}
                    </Header.Content>
                  </Header>
                  <Countdown
                    countdownTime={countdownTime}
                    timeOver={timeOver}
                    setTimeTaken={setTimeTaken}
                  />
                </Item.Extra>
                <br />
                <Item.Meta>
                  <Message size="huge" floating>
                    <b>{`Q. ${he.decode(data[questionIndex].question)}`}</b>
                  </Message>
                  <br />
                  <Item.Description>
                    <h3>Please choose one of the following answers:</h3>
                  </Item.Description>
                  <Divider />
                  <Menu vertical fluid size="massive">
                    {data[questionIndex].options.map((option, i) => {
                      const letter = getLetter(i);
                      const decodedOption = he.decode(option);
                      return (
                        <Menu.Item
                          key={decodedOption}
                          name={decodedOption}
                          active={userSlectedAns === decodedOption}
                          onClick={handleItemClick}
                        >
                          <b style={{ marginRight: '8px' }}>{letter}</b>
                          {decodedOption}
                        </Menu.Item>
                      );
                    })}
                  </Menu>
                </Item.Meta>
                <Divider />
                <Item.Extra>
                  <Button
                    primary
                    content="Next"
                    onClick={() => handleNext(he.decode(data[questionIndex]._id))}
                    floated="right"
                    size="big"
                    icon="right chevron"
                    labelPosition="right"
                    disabled={!userSlectedAns}
                  />
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <br />
      </Container>
    </Item.Header>
  );
};

Quiz.propTypes = {
  data: PropTypes.array.isRequired,
  countdownTime: PropTypes.number.isRequired,
  endQuiz: PropTypes.func.isRequired
};

export default Quiz;

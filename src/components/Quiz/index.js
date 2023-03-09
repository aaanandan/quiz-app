import React, { useState } from 'react';
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



const Quiz = ({ data, countdownTime, endQuiz, major }) => {


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
    const api = 'https://kerserver.onrender.com/' + major.value + '/' + _id;
    fetch(api)
      .then(respone => {
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
  };

  const timeOver = timeTaken => {
    return endQuiz({
      totalQuestions: data.length,
      correctAnswers,
      timeTaken,
      questionsAndAnswers
    });
  };

  // const [questionIndex, setQuestionIndex] = useState(0);
  // const [correctAnswers, setCorrectAnswers] = useState(0);
  // const [userSlectedAns, setUserSlectedAns] = useState(null);
  // const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
  // const [timeTaken, setTimeTaken] = useState(null);
  // const [offline, setOffline] = useState(false);


  // const [processing, setProcessing] = useState(false);
  // const [error, setError] = useState(null);

  // const handleItemClick = (e, { name }) => {
  //   setUserSlectedAns(name);
  // };

  // const handleNext = (_id) => {
  //   let point = 0;
  //   setProcessing(true);
  //   if (error) setError(null);
  //   let qna;
  //   const api = 'http://localhost:5050/' + major.value + '/' + _id;
  //   fetch(api)
  //     .then(respone => {
  //       return respone.json().then(res => {
  //         point = res.correct_answer === userSlectedAns ? 1 : 0;
  //         qna = [...questionsAndAnswers, {
  //           question: he.decode(data[questionIndex].question),
  //           user_answer: userSlectedAns,
  //           correct_answer: res.correct_answer,
  //           point
  //         }];
  //         setQuestionsAndAnswers(qna);
  //         setCorrectAnswers(correctAnswers + point);
  //         setUserSlectedAns(null);
  //         setProcessing(false);
  //       }).then(() => {
  //         setQuestionIndex(questionIndex + 1, () => {
  //           if (questionIndex === data.length - 1) {
  //             return endQuiz({
  //               totalQuestions: data.length,
  //               correctAnswers: correctAnswers,
  //               timeTaken,
  //               questionsAndAnswers,
  //             });
  //           }
  //         });
  //       })
  //     }).catch(error =>
  //       setTimeout(() => {
  //         if (!navigator.onLine) {
  //           setOffline(true);
  //         } else {
  //           setProcessing(false);
  //           setError(error);
  //         }
  //       }, 1000)
  //     );
  // };

  // if (questionIndex === data.length - 1) {
  //   return endQuiz({
  //     totalQuestions: data.length,
  //     correctAnswers: correctAnswers,
  //     timeTaken,
  //     questionsAndAnswers,
  //   });
  // }

  // const timeOver = timeTaken => {
  //   return endQuiz({
  //     totalQuestions: data.length,
  //     correctAnswers,
  //     timeTaken,
  //     questionsAndAnswers
  //   });
  // };



  return (
    <Item.Header>
      <Container>
        <Segment>
          <Grid columns={3} divide>
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

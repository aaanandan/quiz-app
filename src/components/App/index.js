import React, { useState } from 'react';

import Layout from '../Layout';
import Loader from '../Loader';
import Main from '../Main';
import Quiz from '../Quiz';
import Result from '../Result';
import { shuffle } from '../../utils';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [major, setMajor] = useState(null);
  const [countdownTime, setCountdownTime] = useState(null);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [resultData, setResultData] = useState(null);

  const startQuiz = (data, countdownTime, major) => {
    console.log('data....', data);
    setData(data);
    setLoading(true);
    setCountdownTime(countdownTime);
    setMajor(major);
    setIsQuizStarted(true);
    setLoading(false);
  };

  const endQuiz = resultData => {
    setLoading(true);
    setIsQuizStarted(false);
    setIsQuizCompleted(true);
    setResultData(resultData);
    setLoading(false);
  };

  const replayQuiz = () => {
    setLoading(true);
    const shuffledData = shuffle(data);
    shuffledData.forEach(element => {
      element.options = shuffle(element.options);
    });
    setData(shuffledData);
    setIsQuizStarted(true);
    setIsQuizCompleted(false);
    setResultData(null);
    setLoading(false);
  };

  const resetQuiz = () => {
    setLoading(true);
    setIsQuizStarted(false);
    setIsQuizCompleted(false);
    setResultData(null);
    setLoading(false);
  };

  return (
    <Layout>
      {/*  TODO: redirect for authentication */}
      {loading && < Loader />}
      {!loading && !isQuizStarted && !isQuizCompleted && (
        <Main startQuiz={startQuiz} />
      )}
      {!loading && isQuizStarted && (
        <Quiz data={data} countdownTime={countdownTime} endQuiz={endQuiz} major={major} />
      )}
      {!loading && isQuizCompleted && (
        <Result {...resultData} replayQuiz={replayQuiz} resetQuiz={resetQuiz} />
      )}
    </Layout>
  );
};

export default App;

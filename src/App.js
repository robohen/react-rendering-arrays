import React, { useState } from 'react';

const learnersData = [
  {
    name: 'Cait Yomorta',
    bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
    scores: [
      { date: '2018-02-08', score: 77 },
      { date: '2018-04-22', score: 92 },
      { date: '2018-09-15', score: 68 }
    ]
  },
  {
    name: 'Holly Baird',
    bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem!...',
    scores: [
      { date: '2018-12-14', score: 88 },
      { date: '2019-01-09', score: 79 },
      { date: '2019-02-23', score: 91 },
      { date: '2019-03-01', score: 95 }
    ]
  },
  {
    name: 'Wes Mungia',
    bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis...',
    scores: [
      { date: '2018-10-11', score: 62 },
      { date: '2018-11-24', score: 74 },
      { date: '2018-12-19', score: 85 }
    ]
  }
];

const Score = ({ date, score }) => {
  return (
    <li>
      <strong>Date:</strong> {date}, <strong>Score:</strong> {score}
    </li>
  );
};

const Learner = ({ name, bio, scores }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{bio}</p>
      <ul>
        {scores.map((score, index) => (
          <Score key={index} date={score.date} score={score.score} />
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [learners, setLearners] = useState(learnersData);

  return (
    <div>
      {learners.map((learner, index) => (
        <Learner key={index} name={learner.name} bio={learner.bio} scores={learner.scores} />
      ))}
    </div>
  );
};

export default App;

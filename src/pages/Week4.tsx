import WeekPage from './WeekPage';

function Week4() {
  return (
    <WeekPage
      weekNumber={4}
      title="Deep Listening"
      competency="Active Listening Mastery"
      objectives={[
        'Master the art of listening at multiple levels',
        'Practice listening for underlying beliefs and values',
        'Distinguish between listening to respond vs. listening to understand',
        'Develop intuition and presence through deep listening'
      ]}
      lessons={[
        {
          title: 'Lesson 1: Levels of Listening',
          description: 'Internal listening, focused listening, and global listening'
        },
        {
          title: 'Lesson 2: Listening for What Matters Most',
          description: 'Identifying client values, beliefs, and core desires'
        },
        {
          title: 'Lesson 3: Listening Beyond Words',
          description: 'Noticing tone, energy, body language, and what is unsaid'
        },
        {
          title: 'Lesson 4: Intuitive Listening Practice',
          description: 'Trusting your intuition and sharing observations with clients'
        }
      ]}
      reflectionPrompt="When was the last time you felt truly heard? What made that experience meaningful? How can you cultivate that quality of listening in your coaching?"
    />
  );
}

export default Week4;

import WeekPage from './WeekPage';

function Week2() {
  return (
    <WeekPage
      weekNumber={2}
      title="Power of Pause™"
      competency="Active Listening"
      objectives={[
        'Understand the P3 Method® framework (Pause → Plan → Proceed)',
        'Practice strategic pausing in coaching conversations',
        'Develop skills in active and reflective listening',
        'Learn to create space for client insight'
      ]}
      lessons={[
        {
          title: 'Lesson 1: Introduction to P3 Method®',
          description: 'Overview of Pause → Plan → Proceed framework'
        },
        {
          title: 'Lesson 2: The Power of Pause',
          description: 'Why pausing is a strategic leadership and coaching tool'
        },
        {
          title: 'Lesson 3: Active Listening Skills',
          description: 'Listening for content, emotion, and what is not being said'
        },
        {
          title: 'Lesson 4: Reflective Listening Practice',
          description: 'Hands-on practice with mirroring and paraphrasing'
        }
      ]}
      reflectionPrompt="How comfortable are you with silence? What happens internally when you pause before responding? How might strategic pausing improve your coaching effectiveness?"
    />
  );
}

export default Week2;

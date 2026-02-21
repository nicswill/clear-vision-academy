import WeekPage from './WeekPage';

function Week9() {
  return (
    <WeekPage
      weekNumber={9}
      title="Client Growth Design"
      competency="Facilitating Client Growth"
      objectives={[
        'Understand the ICF competency of facilitating growth',
        'Design coaching engagements that support long-term transformation',
        'Help clients set meaningful goals and milestones',
        'Celebrate progress while maintaining forward momentum'
      ]}
      lessons={[
        {
          title: 'Lesson 1: Facilitating Growth',
          description: 'What it means to partner with clients in their development journey'
        },
        {
          title: 'Lesson 2: Goal Setting & Visioning',
          description: 'Helping clients clarify what they truly want'
        },
        {
          title: 'Lesson 3: Milestones & Progress Tracking',
          description: 'Creating markers of success and celebrating wins'
        },
        {
          title: 'Lesson 4: Coaching Engagement Design',
          description: 'Structuring coaching relationships for sustainable growth'
        }
      ]}
      reflectionPrompt="What does transformation look like? How do you know when a client is truly growing? How can you design coaching engagements that support deep, lasting change?"
    />
  );
}

export default Week9;

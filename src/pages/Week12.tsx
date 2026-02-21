import WeekPage from './WeekPage';

function Week12() {
  return (
    <WeekPage
      weekNumber={12}
      title="Integration & Graduation"
      competency="Completion & Next Steps"
      objectives={[
        'Integrate and celebrate your learning journey',
        'Complete final assessments and reflections',
        'Receive your certification and digital badge',
        'Identify next steps for your coaching career'
      ]}
      lessons={[
        {
          title: 'Lesson 1: Integration & Reflection',
          description: 'Looking back on your 12-week journey and key takeaways'
        },
        {
          title: 'Lesson 2: Completion Requirements',
          description: 'Final submissions and certification evaluation'
        },
        {
          title: 'Lesson 3: Your Coaching Identity',
          description: 'Claiming your identity as a Whole Health Leadership Coach'
        },
        {
          title: 'Lesson 4: Graduation & Next Steps',
          description: 'Celebration, certification, and pathways for continued growth'
        }
      ]}
      reflectionPrompt="How have you grown over these 12 weeks? What surprised you about this journey? What kind of coach do you want to be? What commitments are you making to your continued development?"
    />
  );
}

export default Week12;

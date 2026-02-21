import WeekPage from './WeekPage';

function Week1() {
  return (
    <WeekPage
      weekNumber={1}
      title="Foundation of Coaching"
      competency="Coaching Presence"
      objectives={[
        'Define what coaching is and is not',
        'Understand the power of presence in coaching',
        'Practice being fully present with a client',
        'Identify your current coaching strengths and growth areas'
      ]}
      lessons={[
        {
          title: 'Lesson 1: What is Coaching?',
          description: 'Core definition and philosophy of professional coaching'
        },
        {
          title: 'Lesson 2: Coaching Presence Defined',
          description: 'ICF competency: Embodies a coaching mindset and demonstrates self-awareness'
        },
        {
          title: 'Lesson 3: Being vs. Doing',
          description: 'The importance of who you are being in the coaching relationship'
        },
        {
          title: 'Lesson 4: Practice Lab',
          description: 'Guided practice session focusing on presence and self-awareness'
        }
      ]}
      reflectionPrompt="What does 'presence' mean to you? When have you experienced being fully present with another person? What helps you cultivate presence, and what distracts you from it?"
    />
  );
}

export default Week1;

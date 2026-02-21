import WeekPage from './WeekPage';

function Week3() {
  return (
    <WeekPage
      weekNumber={3}
      title="Trust & Safety"
      competency="Establishing Trust & Intimacy"
      objectives={[
        'Understand the ICF competency of trust and intimacy',
        'Learn to create safe space for vulnerable conversations',
        'Practice establishing coaching agreements',
        'Build rapport while maintaining professional boundaries'
      ]}
      lessons={[
        {
          title: 'Lesson 1: Trust as Foundation',
          description: 'Why trust is essential for effective coaching relationships'
        },
        {
          title: 'Lesson 2: Creating Safe Space',
          description: 'Practical techniques for establishing psychological safety'
        },
        {
          title: 'Lesson 3: Coaching Agreements',
          description: 'How to establish clear agreements and expectations'
        },
        {
          title: 'Lesson 4: Boundaries & Intimacy',
          description: 'Balancing professional boundaries with authentic connection'
        }
      ]}
      reflectionPrompt="What does a trusting relationship look like to you? How do you know when you feel safe with someone? What can you do as a coach to create that environment for your clients?"
    />
  );
}

export default Week3;

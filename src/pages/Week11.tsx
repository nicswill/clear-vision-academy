import WeekPage from './WeekPage';

function Week11() {
  return (
    <WeekPage
      weekNumber={11}
      title="Observed Coaching"
      competency="Demonstrating Competence"
      objectives={[
        'Demonstrate ICF Core Competencies in a live coaching session',
        'Receive professional feedback on your coaching',
        'Identify strengths and areas for continued development',
        'Prepare for ICF credentialing assessments'
      ]}
      lessons={[
        {
          title: 'Lesson 1: Observed Coaching Preparation',
          description: 'What to expect and how to prepare for your observed session'
        },
        {
          title: 'Lesson 2: Integrating All Competencies',
          description: 'Bringing together everything you have learned'
        },
        {
          title: 'Lesson 3: Observed Session',
          description: 'Live coaching session with professional observation and feedback'
        },
        {
          title: 'Lesson 4: Feedback Integration',
          description: 'Processing feedback and creating your development plan'
        }
      ]}
      reflectionPrompt="How do you feel about being observed as a coach? What strengths do you want to demonstrate? What areas are you still developing? How will you continue to grow after this program?"
    />
  );
}

export default Week11;

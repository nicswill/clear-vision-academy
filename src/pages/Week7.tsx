import WeekPage from './WeekPage';

function Week7() {
  return (
    <WeekPage
      weekNumber={7}
      title="P3 Method® in Action"
      competency="Designing Actions"
      objectives={[
        'Integrate the P3 Method® into coaching sessions',
        'Help clients design meaningful actions and experiments',
        'Support clients in planning next steps',
        'Ensure actions align with client values and goals'
      ]}
      lessons={[
        {
          title: 'Lesson 1: From Awareness to Action',
          description: 'Bridging insight and implementation in coaching'
        },
        {
          title: 'Lesson 2: P3 Method® in Coaching',
          description: 'How to guide clients through Pause → Plan → Proceed'
        },
        {
          title: 'Lesson 3: Designing Actions',
          description: 'Co-creating actionable steps that inspire commitment'
        },
        {
          title: 'Lesson 4: Accountability Without Pressure',
          description: 'Supporting follow-through while honoring client autonomy'
        }
      ]}
      reflectionPrompt="How do you help clients move from insight to action without pushing your own agenda? What does it mean to hold someone accountable in a way that empowers rather than pressures?"
    />
  );
}

export default Week7;

import WeekPage from './WeekPage';

function Week6() {
  return (
    <WeekPage
      weekNumber={6}
      title="Awareness Tools"
      competency="Creating Awareness"
      objectives={[
        'Understand the ICF competency of creating awareness',
        'Use tools and frameworks to help clients gain insight',
        'Practice reflecting observations back to clients',
        'Facilitate client self-discovery and aha moments'
      ]}
      lessons={[
        {
          title: 'Lesson 1: Creating Awareness Defined',
          description: 'What it means to help clients see themselves and their situations clearly'
        },
        {
          title: 'Lesson 2: Observations & Reflections',
          description: 'Sharing what you notice without judgment or interpretation'
        },
        {
          title: 'Lesson 3: Reframing & Perspective Shifts',
          description: 'Helping clients view situations from different angles'
        },
        {
          title: 'Lesson 4: Awareness Tools in Action',
          description: 'Using assessments, metaphors, and exercises to deepen insight'
        }
      ]}
      reflectionPrompt="When have you had an unexpected realization about yourself? What helped you see something you couldn't see before? How can you facilitate that kind of awareness for your clients?"
    />
  );
}

export default Week6;

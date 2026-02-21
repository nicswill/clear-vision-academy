import WeekPage from './WeekPage';

function Week0() {
  return (
    <WeekPage
      weekNumber={0}
      title="Pre-Work & Orientation"
      competency="Ethics • Mindset • Foundation"
      objectives={[
        'Understand ICF Core Competencies and ethical standards',
        'Explore the coaching mindset vs. consulting/advising',
        'Complete pre-program assessments',
        'Set personal learning goals for the certification journey'
      ]}
      lessons={[
        {
          title: 'Lesson 1: Welcome & Program Overview',
          description: 'Introduction to the certification program structure, expectations, and learning pathway'
        },
        {
          title: 'Lesson 2: ICF Core Competencies',
          description: 'Overview of the eight ICF Core Coaching Competencies framework'
        },
        {
          title: 'Lesson 3: Coaching Mindset',
          description: 'Understanding the fundamental difference between coaching, consulting, and mentoring'
        },
        {
          title: 'Lesson 4: Ethics & Professional Standards',
          description: 'ICF Code of Ethics and professional boundaries in coaching relationships'
        }
      ]}
      reflectionPrompt="What draws you to coaching? What mindset shifts might you need to make as you transition into the role of coach? How do you currently see the difference between coaching and other helping professions?"
    />
  );
}

export default Week0;

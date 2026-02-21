import WeekPage from './WeekPage';

function Week10() {
  return (
    <WeekPage
      weekNumber={10}
      title="Ethical Practice Building"
      competency="Ethics & Standards"
      objectives={[
        'Review ICF ethical standards and professional boundaries',
        'Understand confidentiality and when to refer clients',
        'Build a sustainable coaching practice',
        'Navigate ethical dilemmas with confidence'
      ]}
      lessons={[
        {
          title: 'Lesson 1: ICF Code of Ethics Review',
          description: 'Deep dive into professional standards and responsibilities'
        },
        {
          title: 'Lesson 2: Boundaries & Dual Relationships',
          description: 'Managing professional boundaries in coaching relationships'
        },
        {
          title: 'Lesson 3: When to Refer',
          description: 'Recognizing when clients need therapy or other support'
        },
        {
          title: 'Lesson 4: Building Your Practice',
          description: 'Practical guidance for starting or growing a coaching business'
        }
      ]}
      reflectionPrompt="What ethical dilemmas might you face as a coach? How will you maintain professional standards while staying authentic? What boundaries do you need to establish in your coaching practice?"
    />
  );
}

export default Week10;

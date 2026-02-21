import WeekPage from './WeekPage';

function Week5() {
  return (
    <WeekPage
      weekNumber={5}
      title="Powerful Questioning"
      competency="Powerful Questioning"
      objectives={[
        'Understand the ICF competency of powerful questioning',
        'Learn to ask open-ended, curiosity-driven questions',
        'Practice questions that evoke insight and clarity',
        'Distinguish between coaching questions and leading questions'
      ]}
      lessons={[
        {
          title: 'Lesson 1: What Makes a Question Powerful?',
          description: 'Characteristics of questions that create breakthrough moments'
        },
        {
          title: 'Lesson 2: Open vs. Closed Questions',
          description: 'Crafting questions that invite exploration vs. yes/no answers'
        },
        {
          title: 'Lesson 3: Curiosity & Exploration',
          description: 'Asking from genuine curiosity rather than agenda or advice'
        },
        {
          title: 'Lesson 4: Practice Lab',
          description: 'Hands-on practice generating and asking powerful questions'
        }
      ]}
      reflectionPrompt="Think of a powerful question someone has asked you. What made it impactful? How did it shift your thinking or awareness? What would it take for you to become naturally curious in every conversation?"
    />
  );
}

export default Week5;

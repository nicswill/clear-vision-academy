import WeekPage from './WeekPage';

function Week8() {
  return (
    <WeekPage
      weekNumber={8}
      title="Presence Under Pressure"
      competency="Managing Progress & Accountability"
      objectives={[
        'Maintain coaching presence when clients are stuck or resistant',
        'Manage your own emotions and triggers in sessions',
        'Support clients through difficult emotions',
        'Navigate challenging coaching moments with confidence'
      ]}
      lessons={[
        {
          title: 'Lesson 1: Staying Present in Difficulty',
          description: 'How to remain grounded when clients are in pain or confusion'
        },
        {
          title: 'Lesson 2: Managing Your Triggers',
          description: 'Self-awareness and emotional regulation for coaches'
        },
        {
          title: 'Lesson 3: Coaching Through Resistance',
          description: 'What to do when clients are stuck or avoiding action'
        },
        {
          title: 'Lesson 4: Supporting Emotions',
          description: 'Holding space for client feelings without fixing or rescuing'
        }
      ]}
      reflectionPrompt="What situations cause you to lose your coaching presence? What are your triggers? How can you develop the capacity to stay grounded even when clients are in distress?"
    />
  );
}

export default Week8;

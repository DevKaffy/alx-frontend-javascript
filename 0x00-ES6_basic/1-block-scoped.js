export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // elsint-disable-line no unused-vars
    const task2 = false; // elsint-disable-line no unused-vars
  }

  return [task, task2];
}

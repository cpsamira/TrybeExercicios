const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rigthAnswer, studentAnswer) => {
  if (rigthAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A'){
    return 0;
  }
  return -0.5;
};

const countPoints = (rigthAnswers, studentAnswers, action) => {
  let count = 0;

  for (let i = 0; i < rigthAnswers.length; i += 1) {
    const actionReturn = action(rigthAnswers[i], studentAnswers[i]);
    count += actionReturn;
  }
  return `Resultado final: ${count} pontos`;
}

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));
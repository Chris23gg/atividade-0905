const aluno = {
    nome: "Isabela Pereira",
    idade: 19,
    curso: "Técnico em desenvolvimento de sistemas",
    disciplinas: ["Banco de Dados", "back-end", "computação gráfica", "Analise e projeto de sistemas "]
  };
  
  for (let chave in aluno) {
    console.log(chave + ": " + aluno[chave]);
  }
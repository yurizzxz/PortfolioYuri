interface Project {
  linguagem1?: string;
  linguagem2?: string;
  linguagem3?: string;
  linguagem4?: string;
}

export const getLinguagens = (project: Project) => {
  return [project.linguagem1, project.linguagem2, project.linguagem3, project.linguagem4];
};

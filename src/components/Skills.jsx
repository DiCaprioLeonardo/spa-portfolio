import React from 'react';

const skills = {
  languages: ['C#', 'Python', 'SQL'],
  tools: ['Unity', 'Blender', 'Git'],
  unityExtensions: ['Mirror', 'Zenject', 'UniTask'],
  concepts: ['OOP', 'SOLID', 'Векторная алгебра'],
  patterns: ['Singleton', 'Factory', 'Object Pool'],
};

const Skills = () => {
  return (
    <section id="skills" className="container">
      <h2>Мои навыки</h2>
      <div className="skills-grid">
        <div>
          <h3>Языки</h3>
          <ul>
            {skills.languages.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Инструменты</h3>
          <ul>
            {skills.tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Unity</h3>
          <ul>
            {skills.unityExtensions.map((extension, index) => (
              <li key={index}>{extension}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Концепции</h3>
          <ul>
            {skills.concepts.map((concept, index) => (
              <li key={index}>{concept}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Паттерны</h3>
          <ul>
            {skills.patterns.map((pattern, index) => (
              <li key={index}>{pattern}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
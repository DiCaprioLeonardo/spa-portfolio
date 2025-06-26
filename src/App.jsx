import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles.css';

import React, { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(prefersDark.matches ? 'dark' : 'light');

    const handleChange = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    prefersDark.addEventListener('change', handleChange);
    return () => prefersDark.removeEventListener('change', handleChange);
  }, []);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div className={`app ${theme}`}>
        <Navbar theme={theme} toggleTheme={handleToggleTheme} />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects projects={projects} />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

export const projects = [
  {
    title: 'ПрограмЛаб Тренажер',
    description:
      'Тренажер для компании ПрограмЛаб, предназначенный для обучения темам из различных отраслей. Включает интерактивные уроки и тестирование.',
    link: 'https://github.com/Effirot/InteractivePresentation/pull/1',
    image: '/images/programlab.jpg',
  },
  {
    title: 'Мемори',
    description:
      'Прототип игры Мемори, где игроки должны находить пары одинаковых карточек. Игра развивает память и внимание. Реализовано с использованием Unity',
    link: 'https://github.com/DiCaprioLeonardo/Memory',
    image: '/images/memory.png',
  },
  {
    title: 'Pipe Puzzle',
    description:
      'Прототип игры, где игрок должен соединить трубы, чтобы создать непрерывный поток воды. Уровни усложняются по мере прохождения.',
    link: 'https://github.com/DiCaprioLeonardo/PipePuzzle',
    image: '/images/pipe-puzzle.png',
  },
  {
    title: 'GOS: Пошаговая RPG',
    description:
      'Пошаговая игра в реальном времени с системой прокачки персонажа. Игроки могут улучшать навыки своего героя и сражаться с врагами.',
    link: 'https://github.com/DiCaprioLeonardo/GOS',
    image: '/images/GOS.png',
  },
  {
    title: 'Симуляция Солнечной Системы',
    description:
      'Интерактивная симуляция движения планет Солнечной системы. Реализовано с использованием физики и анимаций для точного отображения орбит.',
    link: 'https://github.com/DiCaprioLeonardo/SimulationOfSolarSystem',
    image: '/images/solar-system.png',
  },
  {
    title: 'OldArcanoid',
    description:
      'Проект сосредоточенный на разрабке игр выходивших на различных приставках',
    link: 'https://github.com/DiCaprioLeonardo/OldArcanoid',
    image: '/images/OldArcanoid.png',
  },
  {
    title: '3D-модель Микросхемы',
    description:
      '3D-модель микросхемы, созданная для использования в образовательных целях или для использования в игре. Разработано в Blender.',
    link: 'https://skfb.ly/pyBLG',
    image: '/images/microchip.png',
  },
  {
    title: '3D-модель Чипа',
    description:
      '3D-модель чипа. Подходит для использования в играх.',
    link: 'https://sketchfab.com/3d-models/chip-22a38ef294894b08b5420122c7f6e8db',
    image: '/images/chip.png',
  },
  {
    title: '3D-модель Шестерен',
    description:
      'Комплект 3D-моделей шестеренок, которые можно использовать для создания механических устройств или анимаций. Разработано в Blender.',
    link: 'https://sketchfab.com/3d-models/gears-3dd98f90029b463c92098478df1371db',
    image: '/images/gears.png',
  },
  {
    title: '3D-модель Сканера',
    description:
      '3D-модель сканера. Может быть использована в играх, симуляциях.',
    link: 'https://skfb.ly/pyAMy',
    image: '/images/scanner.png',
  },
  {
    title: '3D-модель Истребителя Ситхов',
    description:
      '3D-модель космического истребителя Ситхов из вселенной Star Wars. Модель может быть использована в играх или анимациях. Разработано в Blender.',
    link: 'https://skfb.ly/pyANt',
    image: '/images/sith-fighter.png',
  },
];
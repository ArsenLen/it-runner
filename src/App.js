import './App.css';
import { Routes, Route } from 'react-router-dom'
import AddLessonPage from './pages/AddLessonPage/AddLessonPage';
import PrimaryLayout from './layout/PrimaryLayout';
import LessonsCalendarPage from './pages/LessonsCalendarPage/LessonsCalendarPage';

function App() {
  return (
    <>
    <PrimaryLayout >
      <Routes>
        <Route path="/" />
        <Route path="/calendar" element={<LessonsCalendarPage />} />
        <Route path="/add-lesson/:time" element={<AddLessonPage />}/>
        <Route path="/homework" />
        <Route path="/homeworks" />
        <Route path="/video" />
      </Routes>
    </PrimaryLayout>
    </>
  );
}

export default App;

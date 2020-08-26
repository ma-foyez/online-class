import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import CourseContainer from './Components/CourseContainer/CourseContainer';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CourseContainer></CourseContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;

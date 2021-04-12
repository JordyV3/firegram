import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './index.css';
import './App.css';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (

    <div className="App">
      <Navbar />
      <div className="container-__p">
        <Title/>
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
    </div>
  );
}

export default App;

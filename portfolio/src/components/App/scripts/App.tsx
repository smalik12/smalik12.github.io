import React from 'react';

// Imported Styles
import '../style/App.css';

// Imported Images
import profilePhoto from '../../../Images/profile_photo.jpeg';

// Imported Components
import Card from '../../Card/scripts/Card';

function App() {
  return (
    <div className="App">
      <Card profilePhoto={profilePhoto} />
    </div>
  );
}

export default App;

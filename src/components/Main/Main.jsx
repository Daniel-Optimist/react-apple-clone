import React from 'react'
import Alert from './Alert/Alert';
import FirstSec from './FirstSec/FirstSec';
import SecondSec from './SecondSec/SecondSec';
import ThirdSec from './ThirdSec/ThirdSec';
import FourthSec from './FourthSec/FourthSec';
import FifthSec from './FifthSec/FifthSec';
import SixthSec from './SixthSec/SixthSec';

function Main() {
  return (
    <div>
      <Alert />
      <FirstSec />
      <SecondSec />
      <ThirdSec />
      <FourthSec />
      <FifthSec />
      <SixthSec /> 
    </div>
  );
}

export default Main
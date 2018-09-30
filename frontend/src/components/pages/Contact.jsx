import React from 'react'
import HeroUnit from '../HeroUnit';

const unit = {
  title: "Contact",
  content: "Contact stuff goes completely in here"
}

const Contact = () => (
    <div className='contact'>
      <HeroUnit title={unit.title} content={unit.content}/>
    </div>
  );

export default Contact
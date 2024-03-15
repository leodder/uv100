import React, { useState} from 'react'
//scss
import styles from './Content.module.scss';
//boostrap
// import Button from 'react-bootstrap/Button';
import { Button } from 'react-bootstrap';


const Content = () => {

    const [selectedButton, setSelectedButton] = useState(1);
    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
      };
  return (
    <>
        <div>
            <Button variant="outline-primary" onClick={() => handleButtonClick(1)}>會員獨享</Button>
            <Button variant="outline-primary" onClick={() => handleButtonClick(2)}>桌曆兌換</Button>
            <Button variant="outline-primary" onClick={() => handleButtonClick(3)}>會員權益說明</Button>
            <Button variant="outline-primary" onClick={() => handleButtonClick(4)}>回收做公益</Button>
        </div>
        {selectedButton === 1 && <main><div>123</div></main> }
        {selectedButton === 2 && <main><div></div></main> }
        {selectedButton === 3 && <main><div></div></main> }
        {selectedButton === 4 && <main><div></div></main> }
    
    </>
  )
}

export default Content
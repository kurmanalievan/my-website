import { Container, Row, Col} from 'react-bootstrap';
import BackgroundImg from '../assets/images/BackgroundImg.jpeg';
import {useEffect, useState} from 'react';

export const Banner = () => {

    const toRotate = ['Fullstack developer', 'Software Engineer'];
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() =>{
      let ticker = setInterval(() => {
        tick();
      }, delta);

      return () => {clearInterval(ticker)};
    }, [text]);
    
    let tick = () => {
    let i = loopNum % toRotate.length; // its just an index of the current element 
    let fullText = toRotate[i];  // choose the current text from the array
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
    }
    return (
       <Container className="banner">
         <Row className="align-items-center">
           <Col xs={12} md={6} >
             <span className="tagline">Welcome to my portfolio!</span>
             <h1>{'Hi, I am Nursezim, '}
             <span>{text}</span></h1>
             <button onClick={ () => console.log('hey')}>Let's connect</button>
           </Col>
           <Col xs={12} md={6}>
             
           </Col>
         </Row>
       </Container>
    )
}
export default Banner;
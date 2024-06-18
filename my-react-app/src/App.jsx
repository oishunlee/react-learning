import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'

function App() {
  return(
    <>
    <Card/>
    <Student name="Charlotte" age={32} isStudent={true}/>
    <Student name="Mushie" age={2.2} isStudent={true}/>
    <Student name="Captain" age={5} isStudent={false}/>
    <Student/>
    <Student name="Larry"/>
    <Button/>
    </>
  );
}

export default App

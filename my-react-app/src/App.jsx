import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
import ProfilePicture from './ProfilePicture.jsx';
import MyComponent from './MyComponent.jsx';
import Counter from './Counter.jsx';

function App() {

  return(<MyComponent/>);

  // const fruits = [{id: 1, name:"pear", calories: 80}, 
  //                 {id: 2, name: "grapes", calories: 15}, 
  //                 {id: 3, name: "guava", calories: 50}, 
  //                 {id: 4, name: "coconut", calories: 159},
  //                 {id: 5, name: "apple", calories: 159}];

  // const vegetables = [{id: 6, name:"potatoes", calories: 110}, 
  //                     {id: 7, name: "celery", calories: 15}, 
  //                     {id: 8, name: "carrots", calories: 25}, 
  //                     {id: 9, name: "corn", calories: 63},
  //                     {id: 10, name: "broccoli", calories: 50}];

  //   return(
  //     <>
  //     {fruits.length > 0 && <List items={fruits} category="Fruits"/> }
  //     {vegetables.length > 0? <List items={vegetables} category="Vegetables"/> : null}
        
  //    </>);
  // return(
    
  //   //<List/>

  //   // <> 
  //   // <UserGreeting isLoggedIn={true} username="oishun"/>
  //   // <Card/>
  //   // <Student name="Charlotte" age={32} isStudent={true}/>
  //   // <Student name="Mushie" age={2.2} isStudent={true}/>
  //   // <Student name="Captain" age={5} isStudent={false}/>
  //   // <Student/> 
  //   // <Student name="Larry"/>
  //   // <Button/>
  //   // </>
  // );
}

export default App

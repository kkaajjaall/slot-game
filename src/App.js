import React from 'react'
import "./App.css"

const SlotM  =(props)=>
{
  // let x = '😄';
  // let y = '😄';
  // let z = '😄';

  let x=props.x;
  let y=props.y;
  let z=props.z;

  if((x===y) && (y===z))
{
  return (
  <> 
  <div> 
  <h1> {x} {y} {z}</h1>
  <h2> This is matching</h2>
 < hr/> 
 </div>
  </>
  );
}
 else {

  return (
    <> 
    <div> 
    <h1> {x} {y} {z}</h1>
    <h2> This is not matching</h2>
   <hr/> 
   </div>
    </>
    );

 };

};





const App = () => {
  return (
    <>
    
    <h1 className="heading"> 🎰 Welcome to <span> Slot machine game</span> 🎰</h1>
    <div className="CENTER">
    <SlotM x='😃'  y='😃' z='😃' />
    <SlotM x='😃' y='💇' z='❤️'/>
    <SlotM  x='❤️' y='❤️' z='❤️'/>
    </div>
    </>
  )
}
export default App;

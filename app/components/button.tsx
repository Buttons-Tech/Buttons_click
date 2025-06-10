import React from 'react'

const Button = () => {
  return (
    <>
    <button className='w-[100px] h-[35px] border-2 border-[#E1A35B] rounded-[10px] mt-4 text-[20px] font-bold '>Sign in</button>
    </>
  )
}

export default Button

// const Button = (props) => {
//   return (
//     <button
//       className={props.className} onClick={props.onClick} style={props.style}>
//       {props.text}
//     </button>
//   );
// }


// // Parent Component
// function App() {
//   const handleClick = () => {
//     console.log("Button clicked!");
//   };

//   return (
//     <div>
//       <Button text="Submit" onClick={handleClick} className="primary-button" />
//       <Button text="Cancel" onClick={handleClick} style={{ backgroundColor: 'red', color: 'white' }} />
//     </div>
//   );
// }
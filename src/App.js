import './App.css';
// import { useState } from 'react';
import Items from './components/Items';
import Navbar from './components/Navbar';
// import { itemContext } from './itemContext';
// import { totalContext } from './totalContext';
import CustomItemContext,{itemContext} from './itemContext';


// function App() {
//   const [total, setTotal] = useState(0);
//   const [item, setItem] = useState(0);
//   return (
//     <itemContext.Provider value={{item,setItem,total,setTotal}}>
//       {/* <totalContext.Provider  value={{total,setTotal}}>  */}
    
//         <div className='App'>
//           <h2>Shopping Cart</h2>
//             <Navbar />
//             <Items />
//         </div>
//         {/* </totalContext.Provider> */}
//         </itemContext.Provider>
//   );
// }
// export default App;


// CUSTOM PROVIDER //


function App(){


  return(
     <CustomItemContext>

<div className='App'>
           <h2>Shopping Cart</h2>
             <Navbar />
             <Items />
         </div>

     </CustomItemContext>
  );
}

export default App;


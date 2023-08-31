import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

export function ChatBoxReciever({name,massage}) {
    return (
     
          <div className='flex flex-col justify-start  '>
           <span className='text-xs pl-2'>{name}</span>
           <p className='bg-slate-200 p-1 m-1 rounded-lg w-32'>
          
             {massage}
          

           </p>
       </div>
   
    );
};
export function ChatBoxSender({name,massage}) {
    return (
      
         <div className='flex flex-row justify-end  '>
           
           <p className='bg-indigo-500 text-white p-1 m-1 rounded-lg w-32'>
           
             {massage} 
          
        
           </p>
       </div>
      
    );
};


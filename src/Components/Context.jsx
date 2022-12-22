import React, {createContext, useState,useEffect} from 'react'

export const userContext=createContext()
export const ContextProvider= props => {

    const [events,setEvents]= useState([]);
    const [items,setItems]=useState([])
    const [ticketAmount, setTicketAmount] = useState(0);
    const[newprod,setNewProd]=useState([])
    const[chosenEvents,setChosenEvents]=useState([])
    
    const url ='https://my-json-server.typicode.com/majazocom/events/events'

    useEffect(()=> [
        fetch(url)
        .then(response => response.json())
        .then(data => setEvents(data))
    ], []);

    useEffect(() => {
    }, [chosenEvents])
    
    return(
        <section>
           <userContext.Provider value={{events,setEvents, newprod,setNewProd, items,setItems, chosenEvents,setChosenEvents, ticketAmount, setTicketAmount}} >
              {props.children}
           </userContext.Provider>
       </section>
    )
}
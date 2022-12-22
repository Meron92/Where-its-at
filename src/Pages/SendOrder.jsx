import { useContext, useEffect, useState} from "react";
import styles from './SendOrder.module.css'
import { Link } from "react-router-dom";
import { userContext } from "../Components/Context";
import TicketUpdate from "../Components/TicketUpdate";

function SendOrder(){
  const {newprod,chosenEvents}=useContext(userContext)


  const [subtotal, setSubtotal]=useState(0)

  
  useEffect(() => {
  let price = 0;
  chosenEvents.forEach((event) => {
  price += event.price
  })
    setSubtotal(price)
  },)
  
  return(
     <section className={styles.center}>
        <h1>Order</h1>
        
         {
          newprod.map((item,i)=>(
              <section className={styles.wrapper}  key={i}>
                  <h1 className={styles.title} > {item.name} </h1>
                  <p> {item.date} <span> {item.from}-{item.to} </span></p>
            
                  <TicketUpdate event={item} price={item.price} name={item.name} subtotal={subtotal}/>
             </section>    
           ))
         }
      
        <p>Total värde på order</p>
        <h1>{subtotal}</h1>
        <button> <Link to="/Tickets"> Skicka order</Link> </button>
    </section>
    )
}

export default  SendOrder;
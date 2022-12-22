import styles from './TicketUpdate.module.css'

import { useContext} from "react";
import { userContext } from "../Components/Context";

function TicketUpdate(props){
  const {chosenEvents,setChosenEvents,setTicketAmount,ticketAmount}=useContext(userContext)


function ticketsPlus() {
     setTicketAmount(ticketAmount + 1)
     setChosenEvents([...chosenEvents, props.event])
  }

  function ticketMinus() {
      chosenEvents.pop(props.event)
      setTicketAmount(ticketAmount -1)
      setChosenEvents([...chosenEvents])
  }

  return(
      <section>
        <article className={styles.flex}>
          <article>
           <button className={styles.button}  onClick={ticketMinus}>-</button>  
           </article>

           <article>
             <p> {ticketAmount} </p>
            </article>
            <article>
               <button className={styles.button} onClick={ticketsPlus}>+</button>
            </article>
        </article>
      </section>
  )
}

export default TicketUpdate;
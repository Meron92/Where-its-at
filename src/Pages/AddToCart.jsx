import styles from './AddToCart.module.css'
import { useContext, useEffect, useState } from "react";
import {Link, useLocation} from 'react-router-dom';
import { userContext } from "../Components/Context";


function AddToCart() {
     const location = useLocation()
     const { from } = location.state
     const { newprod, setNewProd, chosenEvents, setChosenEvents, ticketAmount, setTicketAmount } = useContext(userContext)
     const [count, setCount] = useState(0)
   
     let currentEventCount = chosenEvents.filter((chosenEvent) => chosenEvent.name == from.name);
      
     useEffect(() => {
             setNewProd([...newprod, { ...from }]);
             setTicketAmount(countTicketsAmount);
       }, [])

       useEffect(() => {
         setTicketAmount(currentEventCount.length)
       }, [chosenEvents])
       
       
       function countTicketsAmount() {
           setTicketAmount(currentEventCount.length);
           return currentEventCount.length;     
         }
      
         function countTicketAmountMinus(){
             chosenEvents.pop(from.name)
             setChosenEvents([...chosenEvents])
             setTicketAmount(currentEventCount.length)
             
             return currentEventCount.length;
           }

           console.log(chosenEvents)


    function countPlus() {
        setCount(count + from.price)
        countTicketsAmount();
        setChosenEvents([...chosenEvents, from])
    }
     function countMinus() {
           setCount( count - from.price)
           countTicketAmountMinus()
     }

    return (
        <section className={styles.center}>

            <article>
                <h1> Event </h1>
                <p className={styles.txtCenter} >You are about to score some tickets to </p>
            </article>

            <article className={styles.info}>
                <h1 className={styles.title}> {from.name} </h1>
                <p className={styles.greenText}> {from.date} kl <span> {from.from} - {from.to} </span> </p>
                <p> {from.where} </p>
            </article>

            <article className={styles.border}>
                <p className={styles.price}> {count} sek </p>
                <p><span onClick={countMinus}>-</span> {ticketAmount} <span onClick={countPlus} >+</span></p>
            </article>

            <button className={styles.bttn}> <Link className={styles.btn} to="/SendOrder"> Lägg i varukorg </Link></button>

        </section>
    )
}

export default AddToCart;
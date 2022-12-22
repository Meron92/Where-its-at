import React from 'react'
import { Link } from 'react-router-dom';
import styles from './EventsCard.module.css'


function EventsCard({name, date, from, to, price, where}){
    return(
    
    <section className={styles.center}>

         <section className={styles.wrapper}>
             <article className={styles.date}>
                 {date}
             </article>

             <article>
                 <button> <Link className={styles.btn} to="/AddToCart" state={{ from: {name, date, from, to, where, price}}}  > {name}  </Link> </button>
                 <p className={styles.italic} > {where}</p>
            </article>
         </section>
        
         <article className={styles.flex}>
             <article>
                 <p> {from} - <span>{to} </span> </p>
             </article>
            
            <article>
                 <p className={styles.green} > {price}sek </p>
            </article>
         </article>
        
     </section>
    )
}

export default EventsCard;

import styles from './Tickets.module.css'

import { useContext} from "react";
import { userContext } from "../Components/Context";

function Tickets(){
  const {chosenEvents}=useContext(userContext)
    return(
        <section>
            {
                chosenEvents.map((item,i)=>(
                      <section className={styles.boxShadow}  key={i} >
                             <p>What</p>
                             <h1> {item.name} </h1>
                        
                    <article>
                        <p>where</p>
                        <h3> {item.where} </h3>

                         <article>
                                 <article>
                                     <p>when</p>
                                     <p> {item.date} </p>
                                 </article>
                                 <article>
                                     <p>from</p>
                                     <p> {item.from} </p>
                                 </article>
                                 <article>
                                     <p>to</p>
                                     <p> {item.to} </p>
                                 </article>
                            <p>info</p>
                            <p> Section C - seat 233, bring umbrella </p>
                      </article>
                     </article>
                    </section>
                ))
            }
      </section>
    )
}
export default Tickets;
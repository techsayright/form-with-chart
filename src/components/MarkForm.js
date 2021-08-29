import React, { useState } from 'react'
import styles from './css module/MarkForm.module.scss'

export const MarkForm = (props) => {

    const [erNO, setErNo] = useState("")
    const [cd, setCd] = useState("")
    const [ml, setMl] = useState("")
    const [ai, setAi] = useState("")
    const [cc, setCc] = useState("")
    const [dis, setDis] = useState("")

    const formSubmitHandler =(event)=>{
        event.preventDefault();

        if(!(erNO && cd && ml && ai && cc & dis)){
            console.log("Enter Value");
            props.setIsErr(true)
            return
        }
        
        props.setIsErr(false)
        props.formDataFunction(erNO, cd, ml,ai,cc,dis);

        // reset form
        for(let i=0; i<=6; i++){
            event.target[i].value=""
        }

        setErNo("")
        setCd("")
        setMl("")
        setAi("")
        setCc("")
        setDis("")
        
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={styles["form-control"]}>

                <div className={styles.erNo}>
                    <label htmlFor="erNo">Enter Er No.</label><br />
                    <input type="number" name="erNo" id="erNo" placeholder="Your Enrollement No."  onChange={(e)=>{setErNo(e.target.value)}}/>
                </div>

                <div className={styles.flex}>
                    <div className={styles.cd}>
                        <label htmlFor="cd">Compiler Design</label><br />
                        <input type="number" name="cd" id="cd" placeholder="Enter Marks"  onChange={(e)=>{setCd(e.target.value)}}/>
                    </div>
                    <div className={styles.ml}>
                        <label htmlFor="ml">Machine Learning</label><br />
                        <input type="number" name="ml" id="ml" placeholder="Enter Marks"  onChange={(e)=>{setMl(e.target.value)}}/>
                    </div>
                </div>

                <div className={styles.flex}>
                    <div className={styles.ai}>
                        <label htmlFor="ai">Artificial Intellingence</label><br />
                        <input type="number" name="ai" id="ai" placeholder="Enter Marks"  onChange={(e)=>{setAi(e.target.value)}}/>
                    </div>
                    <div className={styles.cc}>
                        <label htmlFor="cc">Cloud Computing</label><br />
                        <input type="number" name="cc" id="cc" placeholder="Enter Marks"  onChange={(e)=>{setCc(e.target.value)}}/>
                    </div>
                </div>

                <div className={styles.dis}>
                    <label htmlFor="dis">Distributed System</label><br />
                    <input type="number" name="dis" id="dis" placeholder="Enter Marks" onChange={(e)=>{setDis(e.target.value)}}/>
                </div>

                <div className={styles["btn--submit"]}>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
    )
}

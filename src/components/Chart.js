import React, { useState } from 'react'
import {Bar, Pie} from 'react-chartjs-2'
import { DropDown } from './DropDown'
import styles from './css module/Chart.module.scss'

export const Chart = ({erNo, dataSet}) => {

    const [dropDown, setDropDown]= useState("VBar")

    const objToArry= Object.values(dataSet)
    let Data=[];

    for (const value of objToArry) {
        // console.log(+value);
        Data.push(+value)
    }

    // console.log(objToArry);
    // console.log(Data);

    const data={
        labels: ["Compiler Design", "Machine Learning", "Artificial Intelligence","Cloud Computing", "Distributed System" ],
        datasets: [
            {
                label: `Er No.${erNo}'s MarkSheet`,
                data: Data,
                backgroundColor: [
                     "#ffc857",
                     "#768D89",
                     "#FC878C",
                     "#BECACA",
                     "#85E848",
                   ],
                borderColor: [
                     "#CBA656",
                     "#2E4052",
                     "#C9787C",
                     "#ADB7B7",
                     "#50AF16",
                   ],
            }
        ]

    }

    const options ={
        scales:{
            y:{
                beginAtZero: true
            }
        },
        maintainAspectRatio: false

    }

    const selectedVal=(val)=>{
        setDropDown(val);
    }
    return (
        <>
            <DropDown selectedVal={selectedVal} selected={dropDown}/>

            {dropDown==="VBar" && <div className={styles.chartBar} >
                <Bar data={data} options={options} />
            </div>}

            {dropDown==="Pie" && <div className={styles.chartPie} >
                <Pie data={data} options={options} />
            </div>}
        </>
    )
}

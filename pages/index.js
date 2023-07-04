import styles from '@/styles/Home.module.css'
import {useState} from "react";
import postDiscordMsg from "@/service/discord";

export default function Home() {

  const [submission, setSubmission] = useState('')

    let onClick = () => {
        if (submission == ''){
            setSubmission('')
            alert("Empty Field, Try Again")
        }

        else (
            postDiscordMsg(submission)
                .then((result) => {
                    if(result instanceof Error) {
                        setSubmission('')
                        alert("Error Posting Message")
                    } else {
                        setSubmission('')
                        alert("Message Success")
                    }
                })
            )
    }


    let onChange = (event) => {
    setSubmission(event.target.value)
  }

  return (
      <div className={styles.container}>

        <h1> Homework </h1>
        <input
            value={submission}
            onChange={onChange}
        />
        <button
            onClick={onClick}
        >Submit</button>

      </div>
  );
}

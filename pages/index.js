import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useState} from "react";
import postDiscordMsg from "@/service/discord";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [submission, setSubmission] = useState()

  let onClick = () => {
    postDiscordMsg(submission)
  }

  let onChange = (event) => {
    setSubmission(event.target.value)
  }

  return (
      <div className={styles.container}>

        <h1> Homework </h1>
        <input
            onChange={onChange}
        />
        <button
            onClick={onClick}
        >Submit</button>

      </div>
  );
}

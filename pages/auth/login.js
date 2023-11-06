import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/Users.module.css";

export default function Login() {
  return (
    <>
      <Head>
        <title>Users</title>
        <meta
          name="description"
          content="Dasboard made using React and Bootstrap"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Users
      </main>
    </>
  );
}

import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import { getApp, getApps, initializeApp } from "firebase/app";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, limit, query, runTransaction, updateDoc, where } from "firebase/firestore";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const firebaseConfig = {
  apiKey: "AIzaSyAO9iCL_kJYGZtT514_eyiu89fyZ_-FPCw",
  authDomain: "next-auth-dbdbc.firebaseapp.com",
  projectId: "next-auth-dbdbc",
  storageBucket: "next-auth-dbdbc.appspot.com",
  messagingSenderId: "591238200607",
  appId: "1:591238200607:web:a8709486239b14120f442a",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  adapter: FirebaseAdapter({
    db,
    collection,
    query,
    getDocs,
    where,
    limit,
    doc,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    runTransaction,
  }),
});

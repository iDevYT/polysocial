/* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useEffect, useState } from "react";
import React from 'react';
import { User } from "firebase/auth";
import { UploadImage } from "./UploadImage";
import { ImageGrid } from "./ImageGrid";

const firebaseConfig = {
  apiKey: "AIzaSyB6YpcLlowvaCVSPUfpxrflvdi1wqzwdDs",
  authDomain: "polygon-social.firebaseapp.com",
  projectId: "polygon-social",
  storageBucket: "polygon-social.appspot.com",
  messagingSenderId: "1040413982197",
  appId: "1:1040413982197:web:d8b8a70509ec88c50274bc",
  measurementId: "G-3L8NZ3JVB5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
interface Props {
  user: User
}
export function MainMenu({user}:Props) {

  return (
    <>
    <h2>Images</h2>
    <UploadImage user={user} />
    <ImageGrid/>
    </>
  );
}
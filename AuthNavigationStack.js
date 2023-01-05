import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SignedInStack, SignedOutStack } from './navigation'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from './firebase'

const AuthNavigationStack = () => {
    const [currentUser,setCurrentUser] =useState(null);
    const handleUser = (user) => user? setCurrentUser(user):setCurrentUser(null);
    useEffect(()=>onAuthStateChanged(auth, (user)=>handleUser(user)),[]);
  return (
    <>{currentUser?< SignedInStack/>:<SignedOutStack/>}</>
  )
}

export default AuthNavigationStack
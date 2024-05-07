'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }
     setUpProviders();
  }, [])
  return (
  <div className="navbar bg-transparent">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl font-inter">OneBusyWeek</a>
      </div>

    {session?.user ? ( //if session is true and user is logged in 
    <div className="flex-none">

    <Link href='/' className="btn btn-ghost text-xl font-inter">
    Saved
    </Link> 

    {providers && //understand this function better 
        Object.values(providers).map((provider) => (
          <button 
            type="button"
            key={provider.name}
            onClick={() => signOut(provider.id)}
            className="btn btn-ghost text-xl font-inter"
          >
            Logout
          </button>
        ))}

    </div>

    ): (
      //session user false
      <>
      {providers && //understand this function better 
        Object.values(providers).map((provider) => (
          <button 
            type="button"
            key={provider.name}
            onClick={() => signIn(provider.id)}
            className="btn btn-ghost text-xl font-inter"
          >
            Login
          </button>
        ))}
      </>
    )}
</div>
  )
}

export default Nav
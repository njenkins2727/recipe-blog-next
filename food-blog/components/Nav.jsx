'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, settoggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }
     setUpProviders();
  }, [])
  return (
  <nav className="navbar bg-transparent">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl font-inter">OneBusyWeek</a>
      </div>
    {/* bigger screen */}
    {session?.user ? ( //if session is true and user is logged in 
    <div className="flex-none sm:flex hidden">

    <Link href='/saved-recipes' className="btn btn-ghost text-xl font-inter">
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

  {/* Smaller screen */}
  <div className="sm:hidden flex relative">
  {session?.user ? (
  <div className="flex">
    <Image 
      src={session?.user.image}
      width={37}   
      height={37}
      className="rounded-full"
      alt="profile"
      onClick={() => settoggleDropdown((prev) => !prev)}
    />
    {toggleDropdown && (
      <div className="dropdown bg-white flex">

        <Link
          href="/saved-recipes"
          className="btn btn-ghost text-xl font-inter"
          onClick={() => settoggleDropdown(false)}
        >
        Saved
        </Link>

         {providers && //understand this function better 
        Object.values(providers).map((provider) => (
          <button 
            type="button"
            key={provider.name}
            onClick={() => {signOut(provider.id) ||
            toggleDropdown(false)}}
            className="btn btn-ghost text-xl font-inter"
          >
            Logout
          </button>
        ))}

      </div>
    )}
  </div> 
): (<></>)} 
  </div>
</nav>
  )
}

export default Nav


// TODO:
// responsiveness. on sm change saved and login to hamburger icon or profile photo of google user pfp? onlick dropdown to saved and logout etc 
//line 97 needs to dropdown over the hero component!
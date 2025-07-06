'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const { data: session, status } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, settoggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  if (status === 'loading') {
    // Show a loading state while the session is being fetched
    return (  
  <div className="bg-secondary rounded-lg shadow-md p-6 mt-6 max-w-full mx-6 mb-10 animate-pulse flex flex-row justify-between">
          <div className=" p-6 xsm:w-56 w-28 h-6 bg-light flex justify-center rounded"></div>
          <div className=" p-6 btn-circle bg-light xsm:w-56 xsm:h-6 xsm:flex xsm:justify-center xsm:rounded xsm:m-0"></div>
        </div>
    )
  }

  return (
    <nav className="nav">
      <div className="flex justify-between">
        <a href="/" className="nav-items">FoodbyNathan</a>
        
        {/* Bigger screen */}
        {session?.user ? (
          <div className="hidden sm:flex space-x-4">
            <Link href='/saved-recipes' className="nav-items">
              Saved
            </Link>
            {providers && Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => signOut({ callbackUrl: '/' })}
                className="nav-items"
              >
                Logout
              </button>
            ))}
          </div>
          ) : (
          <>
            {providers && Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="nav-items"
              >
                Login
              </button>
            ))}
          </>
        )}

        {/* Smaller screen */}
        <div className="sm:hidden flex relative">
          {session?.user ? (
            <div className="flex items-center">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full cursor-pointer"
                alt="profile"
                onClick={() => settoggleDropdown((prev) => !prev)}
              />
              {toggleDropdown && (
                <div className="absolute top-12 right-0 w-40 bg-secondary shadow-lg">
                  <Link
                    href="/saved-recipes"
                    className="nav-dropdown border-b-2 border-dark"
                    onClick={() => settoggleDropdown(false)}
                  >
                    Saved
                  </Link>
                  {providers && Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      key={provider.name}
                      onClick={() => { signOut({ callbackUrl: '/' }); settoggleDropdown(false); }}
                      className="nav-dropdown w-40 text-left"
                    >
                      Logout
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (<></>)}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

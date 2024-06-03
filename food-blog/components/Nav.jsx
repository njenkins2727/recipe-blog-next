'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, settoggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 bg-base-100 z-50">
      <div className="flex justify-between items-center px-4 py-2">
        <a href="/" className="text-xl font-inter">OneBusyWeek</a>
        
        {/* Bigger screen */}
        {session?.user ? (
          <div className="hidden sm:flex space-x-4">
            <Link href='/saved-recipes' className="text-xl font-inter">
              Saved
            </Link>
            {providers && Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => signOut(provider.id)}
                className="text-xl font-inter"
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
                className="text-xl font-inter ml-auto"
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
                <div className="absolute top-12 right-0 w-40 bg-white shadow-lg z-50">
                  <Link
                    href="/saved-recipes"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b-2"
                    onClick={() => settoggleDropdown(false)}
                  >
                    Saved
                  </Link>
                  {providers && Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      key={provider.name}
                      onClick={() => { signOut(provider.id); settoggleDropdown(false); }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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

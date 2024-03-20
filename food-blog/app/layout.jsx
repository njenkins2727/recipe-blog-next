import '@styles/global.css'

export const metadata = {
    title: "gastronomic-alchemy",
    description: 'Discover and Save amazing recipes'
}

const RootLayout = ({ children }) => {
    return (
      <html lang='en'>
          <body>
            {/* <Provider>
              <div className='main'>
                  <div className='gradient' />
              </div>
  
              <main className='app'>
                <Nav/>
               {children}
              </main>
            </Provider> */}
          </body>
      </html>
    )
  }
  
  export default RootLayout

//   base layout for all pages 
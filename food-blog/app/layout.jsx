import '@styles/global.css'

export const metadata = {
    title: "Title text",
    description: 'Discover and Save amazing recipes'
}

const RootLayout = ({ children }) => {
    return (
      <html lang='en'>
          <body>
            {children}
          </body>
      </html>
    )
  }
  
  export default RootLayout

//   base layout for all pages 
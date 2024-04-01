import '@styles/global.css'

export const metadata = {
    title: "Onebusyweek",
    description: '7 days, 7 Recipes'
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
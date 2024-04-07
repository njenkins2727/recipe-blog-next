import '@styles/global.css'
import Provider from '@components/Provider'

export const metadata = {
    title: "Onebusyweek",
    description: '7 days, 7 Recipes'
}

const RootLayout = ({ children }) => {
    return (
      <html lang='en'>
          <body>
            <Provider>
              {children}
            </Provider>
          </body>
      </html>
    )
  }
  
  export default RootLayout

//   base layout for all pages 
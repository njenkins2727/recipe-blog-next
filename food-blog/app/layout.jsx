import '@styles/global.css'
import Provider from '@components/Provider'

export const metadata = {
    title: "FoodbyNathan",
    description: 'Food blog by Nathan Jenkins',
}

const RootLayout = ({ children }) => {
    return (
      <html lang='en' className='bg-dark'>
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
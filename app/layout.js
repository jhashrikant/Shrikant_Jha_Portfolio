
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';


export const metadata = {
  title: 'Shrikant Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import '../styles/globals.css'
import { Header } from '../components/header/Header';


 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
        <title>My first app with Nextjs 13</title>
        <link rel="icon" href="https://mrjark.com/wp-content/uploads/2023/04/cropped-favicon-mrjark-32x32.png" sizes="32x32"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200;0,6..12,300;0,6..12,400;0,6..12,500;0,6..12,600;0,6..12,700;0,6..12,800;0,6..12,900;0,6..12,1000;1,6..12,200;1,6..12,300;1,6..12,400;1,6..12,500;1,6..12,600;1,6..12,700;1,6..12,800;1,6..12,900;1,6..12,1000&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}

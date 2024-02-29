import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Navber from "./Components/Header";
import Footer from "./Components/Footer";
import AuthProvider from "./Provider/AuthProvider";
import QueryClientProvider from "./Provider/TanstackProvider";

const firasans = Fira_Sans({ 
  subsets: ["latin"],
  weight:["100","200","300","400","500","600","700","800","900"],
  style:['normal','italic']

});

export const metadata = {
  title: "Pet Zone Website",
  description: "Pet Adoption Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={firasans.className} >
        <QueryClientProvider>
        <AuthProvider>
       
          {children}
        
        </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}

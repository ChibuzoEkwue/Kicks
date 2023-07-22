import NotificationBar from '@/components/NotificationBar/NotificationBar';
import NavBar from '@/components/NavBar/NavBar';
import './globals.scss';
import { Open_Sans } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "Kicks - Step into style : your perfect fit awaits",
	description: "",
};

export default function RootLayout({ children }) {
  return (
		<html lang="en">
			<body className={openSans.className}>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
				<NotificationBar />
				<NavBar />
				{children}
			</body>
		</html>
	);
}

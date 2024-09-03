import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

// font settings
const fontsans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "MedEase",
	description: "A Healthcare App for all the hospital needs",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-dark-300 font-sans antialiased",
					fontsans.variable
				)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
                >
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@chakra-ui/theme';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<ChakraProvider theme={theme}>
					<Navbar />
					{children}
					<Footer />
				</ChakraProvider>
			</body>
		</html>
	);
}

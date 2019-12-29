import React from 'react';
import Styled from './index.styled';
import Header from './children/header';
import Screen from './children/screen';
import Seats from './children/seats';
import Note from './children/note';
import Info from './children/info';
import { BookingProvider } from './index.context';

const Booking = () => (
	<BookingProvider>
		<Styled>
			<Header />
			<Screen />
			<Seats />
			<Note />
			<Info />
		</Styled>
	</BookingProvider>
);

export default Booking;

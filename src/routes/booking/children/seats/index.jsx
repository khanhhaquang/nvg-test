import React from 'react';
import Seat from '@shared/components/seat';
import { MAX_SELECT, STATUS } from '@configs';
import Styled from './index.styled';
import { CinemaSeats } from '../../index.mockup';
import { BookingContext } from '../../index.context';
import { add, remove } from '../../index.actions';

const Seats = () => {
	const { selected, dispatch } = React.useContext(BookingContext);

	const handleSelect = (data) => {
		if (selected?.find((i) => i?.id === data?.id)) {
			remove(dispatch, data);
		} else {
			if (selected?.length === MAX_SELECT) return;
			add(dispatch, data);
		}
	};
	const getType = (data) => {
		if (data?.status === STATUS.BOOKED) {
			return 'booked';
		}

		if (selected?.find((i) => i?.id === data?.id)) {
			return 'selected';
		}

		return data?.type;
	};

	const renderRow = (rowData) => rowData.map((item, index) => (
		<Seat
			onClick={() => handleSelect(item)}
			key={item.id}
			type={getType(item)}
			number={index + 1}
		/>
		));
	const renderContent = (data) => data?.map((item, index) => (
		<div className='row' key={String.fromCharCode(index + 65)}>
			<span className='name'>{String.fromCharCode(index + 65)}</span>
			<div className='inner'>{renderRow(item)}</div>
		</div>
		));

	return <Styled>{renderContent(CinemaSeats)}</Styled>;
};

export default Seats;

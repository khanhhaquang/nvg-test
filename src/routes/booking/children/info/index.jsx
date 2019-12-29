import React from 'react';
import Button from '@shared/components/button';
import { formatNumber } from '@helpers';
import Styled from './index.styled';
import { BookingContext } from '../../index.context';

const Info = () => {
	const { selected } = React.useContext(BookingContext);
	const getTotal = () => selected?.reduce((result, item) => result + item?.price, 0);

	return (
		<Styled className='info'>
			<div className='movie'>
				<div className='cinema'>
					<span className='name'>CGV Hoàng Văn Thụ</span>
					<span className='time'>09:10 ~ 11:10 | 08/07/2019</span>
				</div>
				<p className='price'>
					<span className='total'>{formatNumber(getTotal(), 0, '')}</span>
					<span className='currency'>đ</span>
					<span className='info-logo'>
						<img alt='info' src='/assets/images/info.svg' />
					</span>
				</p>
			</div>
			<div className='actions'>
				<Button>Chọn combo</Button>
				<Button>Thanh toán</Button>
			</div>
		</Styled>
	);
};
export default Info;

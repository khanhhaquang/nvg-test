import styled from 'styled-components';
import { COLORS } from '@configs';

const Styled = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 8px;
	border: 1px solid ${COLORS.SEAT.DEFAULT};
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	span {
		color: #000000;
		opacity: 0;
		font-size: 12px;
	}

	&.vip {
		border: 1px solid ${COLORS.SEAT.VIP};
	}

	&.deluxe {
		border: 1px solid ${COLORS.SEAT.DELUXE};
	}

	&.booked {
		border: 1px solid ${COLORS.SEAT.BOOKED};
		background: ${COLORS.SEAT.BOOKED};
		pointer-events: none;
	}

	&.selected {
		border: 1px solid ${COLORS.SEAT.SELECTED} !important;
		background: ${COLORS.SEAT.SELECTED};

		span {
			opacity: 1;
		}
	}
`;

export default Styled;

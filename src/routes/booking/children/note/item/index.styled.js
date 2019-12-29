import styled from 'styled-components';
import { COLORS } from '@configs';

const Styled = styled.div`
	display: flex;

	.pre {
		width: 15px;
		height: 15px;
		border-radius: 50%;
		border: 1px solid ${COLORS.SEAT.DEFAULT};

		&.booked {
			border: 1px solid ${COLORS.SEAT.BOOKED};
			background: ${COLORS.SEAT.BOOKED};
		}
		&.vip {
			border: 1px solid ${COLORS.SEAT.VIP};
		}
		&.deluxe {
			border: 1px solid ${COLORS.SEAT.DELUXE};
		}
		&.selected {
			border: 1px solid ${COLORS.SEAT.SELECTED};
			background: ${COLORS.SEAT.SELECTED};
		}
	}

	.content {
		font-size: 12px;
		margin-left: 10px;
	}
`;

export default Styled;

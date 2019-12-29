import styled from 'styled-components';

const Styled = styled.main`
	display: flex;
	flex-direction: column;
	.row {
		display: flex;
		align-items: center;
		min-width: 100%;
		.name {
			width: 20px;
			height: 20px;
			padding: 3px;
			display: flex;
			justify-content: center;
			align-items: center;
			opacity: 0.6;
			font-size: 14px;
		}
		.inner {
			margin-left: 5px;
			display: flex;
		}
	}

	.seat {
		margin: 2px 2px 2px 0;
	}
`;

export default Styled;

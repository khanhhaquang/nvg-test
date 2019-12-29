import styled from 'styled-components';

const Styled = styled.main`
	display: flex;
	justify-content: center;
	.page {
		cursor: pointer;
		padding: 5px 10px;
		color: #000;
		background: #ffffff;
		border-radius: 5px;
		margin: 0 5px;
		&.active {
			background: #aaa;
		}
	}
`;

export default Styled;

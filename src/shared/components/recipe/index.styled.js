import styled from 'styled-components';

const Styled = styled.div`
	position: relative;
	width: 100%;
	border: 1px solid #ffffff;
	border-radius: 5px;
	padding: 10px;
	span {
		display: block;
	}
	.title {
		margin-bottom: 10px;
	}
	.description {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	button {
		position: absolute;
		top: 10px;
		right: 10px;
		font-size: 12px;
		font-weight: 700;
		border: 1px solid #dd4b39;
		border-radius: 2px;
		padding: 5px 10px;
		background-image: linear-gradient(#dd4b39, #d14836);
		color: #ffffff;
		text-shadow: 0 1px 0 #c04131;

		&:hover {
			border: 1px solid #af301f;
			background-image: linear-gradient(#dd4b39, #c53727);
		}

		&:active {
			box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2);
			background-image: linear-gradient(#d74736, #ad2719);
		}
	}
`;

export default Styled;

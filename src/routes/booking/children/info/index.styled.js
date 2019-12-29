import styled from 'styled-components';

const Styled = styled.div`
	width: calc(100% + 20px);
	background: #ffffff;
	color: #000000;
	padding: 10px;
	margin-left: -10px;
	margin-top: 10px;
	margin-bottom: -20px;

	.movie {
		display: flex;
		justify-content: space-between;

		.cinema {
			span {
				font-size: 14px;
				display: block;
				font-weight: 500;
				margin-bottom: 5px;
			}
		}
		.price {
			font-weight: 700;
			font-size: 12px;
			.total {
				font-size: 20px;
			}
			.info-logo {
				cursor: pointer;
				margin-left: 5px;
				img {
					opacity: 0.5;
					height: 18px;
				}
			}
		}
	}

	.actions {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		.btn {
			width: 48%;
			font-weight: 700;
			padding: 10px 20px;
		}
	}
`;

export default Styled;

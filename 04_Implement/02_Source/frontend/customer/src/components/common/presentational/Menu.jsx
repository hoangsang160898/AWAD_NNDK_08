import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from './Button.Menu'
import { connect } from 'react-redux'
import { fetchCardsDataIfNeeded } from '../../../actions/cards'
import {
	commaSeparating,
	fixBalanceOneThousandBillion,
} from '../../../utils/utils'
const Wrapper = styled.div`
	width: 220px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	background-color: ${(props) => props.theme.blackMedium};
	position: fixed;
`
const LogoWrapper = styled.div`
	width: 100%;
	padding: 22px 24px;
	margin-bottom: 20px;
`
const BalanceWrapper = styled.div`
	width: 100%;
	padding: 0 24px 22px 24px;
	margin-bottom: 20px;
`
const Title = styled.p`
	font-family: OpenSans-Bold;
	font-size: 15px;
	color: #fff;
	margin: 0;
`
const Text = styled.p`
	color: #fff;
	font-family: OpenSans-Bold;
	font-size: 22px;
	margin: 0;
`
const ButtonWrapper = styled.div`
	width: 100%;
	margin-bottom: 20px;
`
const Menu = ({ tab, balance, onFetchData }) => {
	useEffect(() => {
		onFetchData()
	}, [onFetchData])
	return (
		<Wrapper>
			<LogoWrapper>
				<svg
					width='131'
					height='23'
					viewBox='0 0 131 23'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M11.247 6.94474V9.46542H2.73174V13.6666H10.3795V16.051H2.73174V20.2975H11.521V22.8182H0.0379028V6.94474H11.247Z'
						fill='white'
					/>
					<path
						d='M14.9749 6.94474H17.6688V22.8182H14.9749V6.94474Z'
						fill='white'
					/>
					<path
						d='M33.136 15.0972H35.8299V20.5246C34.3231 22.1748 32.1696 22.9999 29.3692 22.9999C27.0102 22.9999 25.0317 22.2278 23.4336 20.6836C21.8508 19.1394 21.0594 17.1864 21.0594 14.8247C21.0594 12.463 21.8661 10.4949 23.4793 8.92041C25.1078 7.34593 27.0711 6.55869 29.3692 6.55869C31.6674 6.55869 33.5774 7.22482 35.0993 8.55707L33.6611 10.6009C33.0371 10.071 32.4055 9.70765 31.7663 9.51084C31.1423 9.29889 30.4118 9.19291 29.5747 9.19291C27.9614 9.19291 26.6069 9.71522 25.5111 10.7598C24.4153 11.7893 23.8674 13.1518 23.8674 14.8474C23.8674 16.5279 24.4001 17.8828 25.4654 18.9123C26.5308 19.9266 27.8168 20.4338 29.3236 20.4338C30.8455 20.4338 32.1163 20.1083 33.136 19.4573V15.0972Z'
						fill='white'
					/>
					<path
						d='M39.3646 22.8182V6.94474H42.0585V13.8255H49.9802V6.94474H52.674V22.8182H49.9802V16.3235H42.0585V22.8182H39.3646Z'
						fill='white'
					/>
					<path
						d='M63.1376 9.39729V22.8182H60.4437V9.39729H55.604V6.94474H67.9774V9.39729H63.1376Z'
						fill='white'
					/>
					<path
						d='M69.3448 22.5003C69.0252 22.1672 68.8654 21.766 68.8654 21.2967C68.8654 20.8274 69.0252 20.4338 69.3448 20.1159C69.6796 19.7828 70.0829 19.6163 70.5547 19.6163C71.0265 19.6163 71.4298 19.7828 71.7647 20.1159C72.0995 20.4338 72.2669 20.8274 72.2669 21.2967C72.2669 21.766 72.0995 22.1672 71.7647 22.5003C71.4298 22.8333 71.0265 22.9999 70.5547 22.9999C70.0829 22.9999 69.6796 22.8333 69.3448 22.5003Z'
						fill='white'
					/>
					<path
						d='M82.9572 22.8182H75.9715V6.94474H82.181C83.2616 6.94474 84.19 7.07342 84.9661 7.33079C85.7576 7.58816 86.3435 7.93636 86.724 8.3754C87.4545 9.19291 87.8198 10.1164 87.8198 11.1459C87.8198 12.3873 87.4241 13.3108 86.6327 13.9164C86.3435 14.1283 86.1457 14.2646 86.0391 14.3251C85.9326 14.3705 85.7423 14.4538 85.4684 14.5749C86.4576 14.7869 87.2415 15.2335 87.8198 15.9147C88.4134 16.5809 88.7101 17.4135 88.7101 18.4127C88.7101 19.5179 88.3296 20.4943 87.5687 21.3421C86.6707 22.3262 85.1336 22.8182 82.9572 22.8182ZM78.6653 13.5303H82.0897C84.0378 13.5303 85.0118 12.8717 85.0118 11.5546C85.0118 10.7977 84.7759 10.2527 84.3041 9.9196C83.8323 9.58653 83.1018 9.42 82.1125 9.42H78.6653V13.5303ZM78.6653 20.3429H82.8887C83.878 20.3429 84.6313 20.1916 85.1488 19.8888C85.6815 19.5708 85.9478 18.9804 85.9478 18.1175C85.9478 16.7095 84.814 16.0056 82.5463 16.0056H78.6653V20.3429Z'
						fill='white'
					/>
					<path
						d='M101.564 22.8182H99.2356V21.2059C98.2311 22.4019 96.8842 22.9999 95.1948 22.9999C93.9316 22.9999 92.8815 22.6441 92.0444 21.9326C91.2226 21.221 90.8117 20.2748 90.8117 19.094C90.8117 17.898 91.253 17.0048 92.1357 16.4143C93.0185 15.8239 94.2132 15.5287 95.7199 15.5287H99.0301V15.0745C99.0301 13.4697 98.1322 12.6674 96.3363 12.6674C95.2101 12.6674 94.0382 13.0761 92.8206 13.8936L91.6792 12.304C93.1554 11.1383 94.8296 10.5554 96.7016 10.5554C98.1322 10.5554 99.2965 10.9188 100.194 11.6455C101.108 12.357 101.564 13.4849 101.564 15.0291V22.8182ZM99.0073 18.3219V17.3H96.1308C94.2893 17.3 93.3685 17.8753 93.3685 19.0258C93.3685 19.6163 93.5968 20.0704 94.0534 20.3884C94.51 20.6911 95.1416 20.8425 95.9482 20.8425C96.7701 20.8425 97.4854 20.6155 98.0941 20.1613C98.7029 19.7071 99.0073 19.094 99.0073 18.3219Z'
						fill='white'
					/>
					<path
						d='M107.68 16.2781V22.8182H105.124V10.7371H107.68V12.9399C108.091 12.198 108.654 11.6152 109.37 11.1913C110.1 10.7674 110.884 10.5554 111.721 10.5554C113.091 10.5554 114.194 10.9718 115.031 11.8044C115.884 12.6371 116.31 13.8407 116.31 15.4151V22.8182H113.753V16.1872C113.753 13.9618 112.825 12.849 110.968 12.849C110.085 12.849 109.316 13.1443 108.662 13.7347C108.008 14.31 107.68 15.1578 107.68 16.2781Z'
						fill='white'
					/>
					<path
						d='M122.439 22.8182H119.882V5.96826H122.439V15.8693L127.37 10.7371H130.658L126.046 15.5287L131 22.8182H127.895L124.288 17.5271L122.439 19.3892V22.8182Z'
						fill='white'
					/>
					<path d='M0 2.49797V0H62.0952L68.0308 2.49797H0Z' fill='#EF230C' />
				</svg>
			</LogoWrapper>
			<BalanceWrapper>
				<Title>Balance</Title>
				<Text>
					<sup>₫</sup>
					{commaSeparating(fixBalanceOneThousandBillion(balance || 0), 3)}
				</Text>
			</BalanceWrapper>
			<ButtonWrapper>
				<Button active={tab === 0} name='Cards' url='/cards'>
					{tab === 0 ? (
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2 7C2 5.34315 3.34315 4 5 4H15C16.6569 4 18 5.34315 18 7V8H2V7Z'
								fill='#EF230C'
							/>
							<path
								d='M2 9H18V13C18 14.6569 16.6569 16 15 16H5C3.34315 16 2 14.6569 2 13V9Z'
								fill='#EF230C'
							/>
						</svg>
					) : (
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2 7C2 5.34315 3.34315 4 5 4H15C16.6569 4 18 5.34315 18 7V8H2V7Z'
								fill='#7C7F87'
							/>
							<path
								d='M2 9H18V13C18 14.6569 16.6569 16 15 16H5C3.34315 16 2 14.6569 2 13V9Z'
								fill='#7C7F87'
							/>
						</svg>
					)}
				</Button>
			</ButtonWrapper>
			<ButtonWrapper>
				<Button active={tab === 1} name='Receivers' url='/receivers'>
					{tab === 1 ? (
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M6 3C5.44772 3 5 3.44771 5 4V15.3333C5 15.8856 5.44772 16.3333 6 16.3333H12.8889C13.4412 16.3333 13.8889 15.8856 13.8889 15.3333V4C13.8889 3.44772 13.4412 3 12.8889 3H6ZM9.55556 8.21372C10.3822 8.21372 11.0524 7.54406 11.0524 6.71799C11.0524 5.89192 10.3822 5.22226 9.55556 5.22226C8.72888 5.22226 8.05872 5.89192 8.05872 6.71799C8.05872 7.54406 8.72888 8.21372 9.55556 8.21372ZM11.8889 13L9.55556 9.4103L7.22222 13H11.8889Z'
								fill='#EF230C'
							/>
							<line x1='15.5' y1='5' x2='15.5' y2='14' stroke='#EF230C' />
						</svg>
					) : (
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M6 3C5.44772 3 5 3.44771 5 4V15.3333C5 15.8856 5.44772 16.3333 6 16.3333H12.8889C13.4412 16.3333 13.8889 15.8856 13.8889 15.3333V4C13.8889 3.44772 13.4412 3 12.8889 3H6ZM9.55556 8.21372C10.3822 8.21372 11.0524 7.54406 11.0524 6.71799C11.0524 5.89192 10.3822 5.22226 9.55556 5.22226C8.72888 5.22226 8.05872 5.89192 8.05872 6.71799C8.05872 7.54406 8.72888 8.21372 9.55556 8.21372ZM11.8889 13L9.55556 9.4103L7.22222 13H11.8889Z'
								fill='#7C7F87'
							/>
							<line x1='15.5' y1='5' x2='15.5' y2='14' stroke='#7C7F87' />
						</svg>
					)}
				</Button>
			</ButtonWrapper>
			<ButtonWrapper>
				<Button
					active={tab === 2}
					name='Transfer'
					color='linear-gradient(90deg, #EF230C 0%, #FFDC00 100%)'
					url='/transfer'
				>
					<svg
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M4 6.99993L7 4.40186V9.59801L4 6.99993Z' fill='white' />
						<path d='M7 5.99993H16V7.99993H7V5.99993Z' fill='white' />
						<path d='M16 12.9999L13 15.598V10.4019L16 12.9999Z' fill='white' />
						<path d='M4 11.9999H13V13.9999H4V11.9999Z' fill='white' />
					</svg>
				</Button>
			</ButtonWrapper>
			<ButtonWrapper>
				<Button active={tab === 3} name='Debts' url='/debts'>
					{tab === 3 ? (
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M12 6H8V14H12V6ZM13 6V14H18V6H13ZM2 6H7V14H2V6ZM10 11.5C10.8284 11.5 11.5 10.8284 11.5 10C11.5 9.17157 10.8284 8.5 10 8.5C9.17157 8.5 8.5 9.17157 8.5 10C8.5 10.8284 9.17157 11.5 10 11.5Z'
								fill='#EF230C'
							/>
						</svg>
					) : (
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M12 6H8V14H12V6ZM13 6V14H18V6H13ZM2 6H7V14H2V6ZM10 11.5C10.8284 11.5 11.5 10.8284 11.5 10C11.5 9.17157 10.8284 8.5 10 8.5C9.17157 8.5 8.5 9.17157 8.5 10C8.5 10.8284 9.17157 11.5 10 11.5Z'
								fill='#7C7F87'
							/>
						</svg>
					)}
				</Button>
			</ButtonWrapper>
			<ButtonWrapper>
				<Button active={tab === 4} name='History' url='/history'>
					{tab === 4 ? (
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<circle cx='10' cy='10' r='5.5' stroke='#EF230C' />
							<path
								d='M9.00001 7C9.00001 6.44772 9.44772 6 10 6C10.5523 6 11 6.44772 11 7V11C11 11.5523 10.5523 12 10 12C9.44772 12 9.00001 11.5523 9.00001 11V7Z'
								fill='#EF230C'
							/>
							<path
								d='M11.7619 8.56434C12.2178 8.25266 12.8401 8.36961 13.1518 8.82554C13.4634 9.28148 13.3465 9.90375 12.8906 10.2154L10.5543 11.8125C10.0983 12.1242 9.47607 12.0072 9.16439 11.5513C8.85271 11.0954 8.96966 10.4731 9.42559 10.1614L11.7619 8.56434Z'
								fill='#EF230C'
							/>
						</svg>
					) : (
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<circle cx='10' cy='10' r='5.5' stroke='#7C7F87' />
							<path
								d='M9 7C9 6.44772 9.44771 6 10 6C10.5523 6 11 6.44772 11 7V11C11 11.5523 10.5523 12 10 12C9.44771 12 9 11.5523 9 11V7Z'
								fill='#7C7F87'
							/>
							<path
								d='M11.7619 8.56434C12.2178 8.25266 12.8401 8.36961 13.1518 8.82554C13.4634 9.28148 13.3465 9.90375 12.8906 10.2154L10.5543 11.8125C10.0983 12.1242 9.47606 12.0072 9.16438 11.5513C8.85271 11.0954 8.96965 10.4731 9.42559 10.1614L11.7619 8.56434Z'
								fill='#7C7F87'
							/>
						</svg>
					)}
				</Button>
			</ButtonWrapper>
			<ButtonWrapper style={{ marginTop: 'auto', marginBottom: '0' }}>
				<Button active={tab === 5} name='Account' url='/account'>
					{tab === 5 ? (
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M12.8813 5.38462C12.8813 6.97774 11.5898 8.26923 9.99667 8.26923C8.40354 8.26923 7.11206 6.97774 7.11206 5.38462C7.11206 3.79149 8.40354 2.5 9.99667 2.5C11.5898 2.5 12.8813 3.79149 12.8813 5.38462Z'
								fill='#EF230C'
							/>
							<path
								d='M9.99667 10.5769L14.4933 17.5H5.5L9.99667 10.5769Z'
								fill='#EF230C'
							/>
						</svg>
					) : (
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M12.8813 5.38462C12.8813 6.97774 11.5898 8.26923 9.99667 8.26923C8.40354 8.26923 7.11206 6.97774 7.11206 5.38462C7.11206 3.79149 8.40354 2.5 9.99667 2.5C11.5898 2.5 12.8813 3.79149 12.8813 5.38462Z'
								fill='#7C7F87'
							/>
							<path
								d='M9.99667 10.5769L14.4933 17.5H5.5L9.99667 10.5769Z'
								fill='#7C7F87'
							/>
						</svg>
					)}
				</Button>
			</ButtonWrapper>
		</Wrapper>
	)
}

Menu.defaultProps = {
	tab: 0,
}
Menu.propTypes = {
	tab: PropTypes.number,
}
const mapStateToProps = (state) => {
	const { defaultCard } = state.cards
	const { balance } = defaultCard
	return {
		balance,
	}
}
const mapDispatchToProps = (dispatch) => ({
	onFetchData: () => dispatch(fetchCardsDataIfNeeded()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Menu)

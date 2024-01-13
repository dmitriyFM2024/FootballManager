import React, { useState } from 'react';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { BsSearch } from 'react-icons/bs';
import { initialSlice } from '../../redux/reducers';
import { RiArrowDownSLine } from 'react-icons/ri';

import './styles/index.scss';
import { useLocation } from 'react-router';
import { tabItems } from './utils';
import { useSelector, useStore } from 'react-redux';

const TopBar = () => {
	const [isSearch, setIsSearch] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [activeIndex, setActiveIndex] = useState(0);

	const pathname = useLocation().pathname.replace('/', '');

	const { dispatch } = useStore();
	const {
		currentDate,
		selectedClub: {
			settings: { color, logoPath },
		},
	} = useSelector(state => state.mainReducer);
	const { changeCurrentDate } = initialSlice.actions;

	const handleEnterPress = event => {
		if (event.keyCode === 13) {

		}
	}

	return (
		<div
			className="topbar"
			style={{ backgroundImage: `linear-gradient(to left, #1d2030, #1d2030, #1d2030, ${color})` }}
		>
			<div className="topbar_top">
				<div className="df mt05">
					<BsFillArrowLeftSquareFill style={{ marginRight: '1rem' }} />
					<BsFillArrowRightSquareFill />
				</div>

				<img className="topbar_logo" src={`images/${logoPath}`} />

				<div className="topbar_search">
					<div className="df">
						<div className="topbar_search" onClick={() => setIsSearch(true)}>
							{isSearch ? (
								<input
									type="text"
									onChange={(e) => setSearchValue(e.target.value)}
									onBlur={() => setIsSearch(false)}
									onKeyUp={handleEnterPress}
									value={searchValue}
								/>
							) : (
								<>
									<BsSearch />
									<div className="df fdc ml05">
										<div className="upcase bold">{pathname || 'Homepage'}</div>
										<div className="name">Johny McWalter - Arsenal</div>
									</div>
								</>
							)}
						</div>
						<div className="topbar_navigation">
							<AiFillQuestionCircle />
							<div className="title">IM</div>
							<div className="date">
								<div className="time">Tue 0:00</div>
								<div>{currentDate}</div>
							</div>
							<div 
								className="button"
								onClick={() => dispatch(changeCurrentDate())}
							>
								Next
								<IoIosArrowDroprightCircle />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="topbar_bottom">
				{tabItems?.[pathname]?.map((item, index) => {
					return (
						<div
							className={`item ${index === activeIndex && 'item_active'}`}
							onClick={() => setActiveIndex(index)}
							key={item.name}
						>
							{item.name}
							{item.sub && <RiArrowDownSLine />}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TopBar;

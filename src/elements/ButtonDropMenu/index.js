import React, { useState } from 'react';

const ButtonDropMenu = ({
	text = 'Button',
	icon = null,
	iconPosition = 'left',
	width = 'auto',
	height = 'auto',
	border = 'none',
	borderRadius = '4px',
	backgroundColor = '#007BFF',
	color = '#fff',
	hoverBackgroundColor = '#0056b3',
	hoverColor = '#fff',
	padding = '10px 20px',
	fontSize = '16px',
	menuItems = [],
	menuDirection = 'down',
	menuStyle = {},
	onClick = () => {},
	disabled = false,
	activeItemIndex = null, // Відслідковуємо активний елемент меню
	activeBackgroundColor = '#f0f0f0', // Для активної кнопки
	activeItemBackgroundColor = '#e0e0e0', // Фон активного елемента меню
	hoverItemBackgroundColor = '#f0f0f0', // Фон для наведення на елементи меню
	animationDuration = '0.3s', // Тривалість анімації для меню
	activeButtonBorder = '2px solid #333', // Бордер для активної кнопки
	dropMenuAnimationDuration = '0.3s', // Тривалість анімації меню
	dropMenuAnimationTiming = 'ease', // Функція анімації
	dropMenuAnimationType = 'fadeIn', // Тип анімації
}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isButtonActive, setIsButtonActive] = useState(false); // Стан активної кнопки

	const toggleMenu = () => {
		if (!disabled) {
			setIsMenuOpen(prev => !prev);
		}
	};

	// Функція для розрахунку позиції меню
	function getMenuPosition(direction) {
		switch (direction) {
			case 'up':
				return { bottom: '100%', left: '0' };
			case 'down':
				return { top: '100%', left: '0' };
			case 'left':
				return { right: '100%', top: '0' };
			case 'right':
				return { left: '100%', top: '0' };
			default:
				return { top: '100%', left: '0' };
		}
	}

	// Стилі для кнопки
	const buttonStyles = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '8px',
		width,
		height,
		backgroundColor: isButtonActive ? activeBackgroundColor : backgroundColor, // Фон при активності
		color,
		border,
		borderRadius,
		fontSize,
		padding,
		cursor: disabled ? 'not-allowed' : 'pointer',
		opacity: disabled ? 0.6 : 1,
		transition: 'all 0.3s ease',
		position: 'relative',
		border: isButtonActive ? activeButtonBorder : border, // Бордер при активності
	};

	// Стилі для кнопки при hover
	const buttonHoverStyles = {
		backgroundColor: hoverBackgroundColor,
		color: hoverColor,
	};

	// Стилі для меню
	const menuStyles = {
		position: 'absolute',
		display: isMenuOpen ? 'block' : 'none',
		backgroundColor: '#fff',
		boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
		borderRadius: '4px',
		zIndex: 1000,
		...getMenuPosition(menuDirection),
		...menuStyle,
		animation: `${dropMenuAnimationType} ${dropMenuAnimationDuration} ${dropMenuAnimationTiming}`,
	};

	// CSS анімація для появи меню
	const menuAnimationKeyframes = `
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes slideIn {
      0% {
        opacity: 0;
        transform: translateY(10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

	// Функція для стилів елемента меню
	const menuItemStyles = index => ({
		padding: '8px 16px',
		cursor: 'pointer',
		listStyleType: 'none',
		transition: 'background-color 0.2s ease',
		backgroundColor:
			activeItemIndex === index ? activeItemBackgroundColor : 'transparent', // Фон для активного елемента
		color: activeItemIndex === index ? hoverColor : color, // Колір тексту для активного елемента
	});

	return (
		<div style={{ position: 'relative', display: 'inline-block' }}>
			<style>{menuAnimationKeyframes}</style>

			{/* Кнопка */}
			<button
				style={buttonStyles}
				onClick={e => {
					toggleMenu();
					setIsButtonActive(prev => !prev); // Перемикаємо активність кнопки
					onClick(e);
				}}
				disabled={disabled}
				onMouseEnter={e => {
					if (!disabled) {
						e.target.style.backgroundColor = hoverBackgroundColor;
						e.target.style.color = hoverColor;
					}
				}}
				onMouseLeave={e => {
					if (!disabled) {
						e.target.style.backgroundColor = isButtonActive
							? activeBackgroundColor
							: backgroundColor;
						e.target.style.color = color;
					}
				}}
			>
				{icon && iconPosition === 'left' && icon}
				{text}
				{icon && iconPosition === 'right' && icon}
			</button>

			{/* Випадаюче меню */}
			<ul style={menuStyles}>
				{menuItems.map((item, index) => (
					<li
						key={index}
						style={menuItemStyles(index)} // Застосовуємо стилі для кожного елемента меню
						onClick={item.onClick}
						onMouseEnter={e => {
							e.target.style.backgroundColor = hoverItemBackgroundColor; // Зміна фону при наведенні
							e.target.style.color = hoverColor;
						}}
						onMouseLeave={e => {
							e.target.style.backgroundColor =
								activeItemIndex === index
									? activeItemBackgroundColor
									: 'transparent'; // Повернення до активного фону або прозорого
							e.target.style.color =
								activeItemIndex === index ? hoverColor : color; // Повернення до кольору тексту
						}}
					>
						{item.label}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ButtonDropMenu;

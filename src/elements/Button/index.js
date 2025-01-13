import React, { useState } from 'react';

const Button = ({
	text = 'Button', // Текст кнопки
	width = 'auto', // Ширина кнопки
	height = 'auto', // Висота кнопки
	backgroundColor = '#007BFF', // Колір фону
	color = '#fff', // Колір тексту
	border = 'none', // Загальний бордер для всіх сторін
	borderTop = null, // Бордер для верхньої сторони
	borderRight = null, // Бордер для правої сторони
	borderBottom = null, // Бордер для нижньої сторони
	borderLeft = null, // Бордер для лівої сторони
	borderRadius = '4px', // Радіус бордера
	icon = null, // Іконка (JSX-елемент)
	iconPosition = 'left', // Позиція іконки: left або right
	fontSize = '16px', // Розмір шрифту
	padding = '10px 20px', // Відступи
	onClick = () => {}, // Обробник кліку
	hoverBackgroundColor = '#0056b3', // Колір фону при ховері
	hoverColor = '#fff', // Колір тексту при ховері
	hoverTextDecoration = 'none', // Оформлення тексту при ховері
	hoverBorderTop = null, // Бордер для верхньої сторони при ховері
	hoverBorderRight = null, // Бордер для правої сторони при ховері
	hoverBorderBottom = null, // Бордер для нижньої сторони при ховері
	hoverBorderLeft = null, // Бордер для лівої сторони при ховері
	active = false, // Стан активності кнопки
	activeBackgroundColor = '#004080', // Колір фону для активної кнопки
	activeColor = '#fff', // Колір тексту для активної кнопки
	activeBorderTop = null, // Бордер для верхньої сторони при активній кнопці
	activeBorderRight = null, // Бордер для правої сторони при активній кнопці
	activeBorderBottom = null, // Бордер для нижньої сторони при активній кнопці
	activeBorderLeft = null, // Бордер для лівої сторони при активній кнопці
	style = {}, // Додаткові стилі
	disabled = false, // Стан кнопки
}) => {
	const [isHovered, setIsHovered] = useState(false);

	// Функція для визначення бордерів в залежності від стану
	const getBorders = state => {
		if (state === 'active') {
			return {
				borderTop: activeBorderTop || borderTop || border,
				borderRight: activeBorderRight || borderRight || border,
				borderBottom: activeBorderBottom || borderBottom || border,
				borderLeft: activeBorderLeft || borderLeft || border,
			};
		} else if (state === 'hover') {
			return {
				borderTop: hoverBorderTop || borderTop || border,
				borderRight: hoverBorderRight || borderRight || border,
				borderBottom: hoverBorderBottom || borderBottom || border,
				borderLeft: hoverBorderLeft || borderLeft || border,
			};
		} else {
			return {
				borderTop: borderTop || border,
				borderRight: borderRight || border,
				borderBottom: borderBottom || border,
				borderLeft: borderLeft || border,
			};
		}
	};

	const currentStyles = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '8px',
		width,
		height,
		backgroundColor: active
			? activeBackgroundColor
			: isHovered
			? hoverBackgroundColor
			: backgroundColor,
		color: active ? activeColor : isHovered ? hoverColor : color,
		textDecoration: isHovered ? hoverTextDecoration : 'none',
		...getBorders(active ? 'active' : isHovered ? 'hover' : 'default'),
		borderRadius,
		fontSize,
		padding,
		cursor: disabled ? '' : 'pointer',
		opacity: disabled ? 0.6 : 1,
		transition: 'all 0.1s linear',
		...style,
	};

	return (
		<button
			style={currentStyles}
			onClick={!disabled ? onClick : undefined}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			disabled={disabled}
		>
			{icon && iconPosition === 'left' && icon}
			{text}
			{icon && iconPosition === 'right' && icon}
		</button>
	);
};

export default Button;

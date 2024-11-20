import React, { useState } from 'react';

const Button = ({
	text = 'Button', // Текст кнопки
	width = 'auto', // Ширина кнопки
	height = 'auto', // Висота кнопки
	backgroundColor = '#007BFF', // Колір фону
	color = '#fff', // Колір тексту
	border = 'none', // Стиль бордера
	borderRadius = '4px', // Радіус бордера
	icon = null, // Іконка (JSX-елемент)
	iconPosition = 'left', // Позиція іконки: left або right
	fontSize = '16px', // Розмір шрифту
	padding = '10px 20px', // Відступи
	onClick = () => {}, // Обробник кліку
	hoverBackgroundColor = '#0056b3', // Колір фону при ховері
	hoverColor = '#fff', // Колір тексту при ховері
	hoverTextDecoration = 'none', // Оформлення тексту при ховері
	hoverBorder = null, // Стиль бордера при ховері
	active = false, // Стан активності кнопки
	activeBackgroundColor = '#004080', // Колір фону для активної кнопки
	activeColor = '#fff', // Колір тексту для активної кнопки
	activeBorder = null, // Бордер для активної кнопки
	style = {}, // Додаткові стилі
	disabled = false, // Стан кнопки
}) => {
	const [isHovered, setIsHovered] = useState(false);

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
		border: isHovered
			? hoverBorder || border
			: active
			? activeBorder || border
			: border,
		borderRadius,
		fontSize,
		padding,
		cursor: disabled ? 'not-allowed' : 'pointer',
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

function importAllIcons(r) {
	let icons = {};
	r.keys().forEach(item => {
		const iconName = item.replace('./', '').replace('.svg', '');
		icons[iconName] = r(item);
	});
	return icons;
}

const icons = importAllIcons(
	require.context('./assets/images/icons', false, /\.svg$/)
);

export default icons;

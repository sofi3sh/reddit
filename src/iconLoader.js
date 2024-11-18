function importAllIcons(r) {
    let icons = {};
    r.keys().forEach((item) => {
      const iconName = item.replace('./', '').replace('.png', '');
      icons[iconName] = r(item);
    });
    return icons;
  }
  
  const icons = importAllIcons(require.context('./icons', false, /\.png$/));
  
  export default icons;
  
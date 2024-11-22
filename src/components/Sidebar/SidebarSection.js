import React, { useState } from "react";
import icons from '../../iconLoader';

const SidebarSection = ({ title, children, iconName, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="sidebar-section">
      <div
        className="sidebar-section-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title.toUpperCase()}</span>
        <img
          src={isOpen ? icons["expand_less_white"] : icons["expand_more_white"]}
          alt="toggle icon"
          className="icon" width="25px" height="25px"
        />
      </div>
      {isOpen && <div className="sidebar-section-items">{children}</div>}
    </div>
  );
};

export default SidebarSection;

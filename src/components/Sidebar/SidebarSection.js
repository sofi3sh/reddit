import React, { useState } from 'react';

const SidebarSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="sidebar-section">
      <div 
        className="sidebar-section-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title.toUpperCase()}</span>
        <span className="material-icons">
          {isOpen ? 'expand_less' : 'expand_more'}
        </span>
      </div>
      {isOpen && <div className="sidebar-section-items">{children}</div>}
    </div>
  );
};

export default SidebarSection;

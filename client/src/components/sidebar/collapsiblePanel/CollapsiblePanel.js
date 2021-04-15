import React, { useState, useEffect } from "react";
import './CollapsiblePanel.css'

function CollapsiblePanel({ children, ...props }) {
  const { title, collapse, leftIcon } = props;
  const [isCollapse, setIsCollapse] = useState(collapse);
  const [icon, setIcon] = useState("fa fa-chevron-down");
  const toggle = () => {
    setIsCollapse(!isCollapse);
    setIcon(state => {
      return state === "fa fa-chevron-down"
        ? "fa fa-chevron-right"
        : "fa fa-chevron-down";
    });
  };

  const animate = collapse => {
    setIsCollapse(collapse);
    setIcon(state => {
      return state === "fa fa-chevron-down"
        ? "fa fa-chevron-right"
        : "fa fa-chevron-down";
    });
  };

  useEffect(() => {
    animate(!collapse);
  }, [collapse]);

  return (
    <div className="coll-panel">
      <div
        className="coll-panel-btn  btn-block text-left"
        onClick={() => toggle()}
        style={{color: 'white'}}
      >
        <div className="leftIcon"><i className={leftIcon} /><a href="#"> {title} </a> </div>
        <div className="rightIcon"><i className={icon} /></div>
      </div>
      { isCollapse && children}
    </div>
  );
}

CollapsiblePanel.defaultProps = {
  children: "Add node as a child",
  title: "Collapsible Panel",
  collapse: true
};

export default CollapsiblePanel;
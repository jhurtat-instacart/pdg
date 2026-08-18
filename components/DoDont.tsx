import React from "react";

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="9" fill="var(--granny-smith)" />
      <path d="M5 9.5L7.5 12L13 6.5" stroke="var(--kale)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="9" fill="var(--watermelon)" />
      <path d="M6 6L12 12M12 6L6 12" stroke="var(--dark-chocolate)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface DoDontProps {
  doText: React.ReactNode;
  dontText: React.ReactNode;
  doExample?: React.ReactNode;
  dontExample?: React.ReactNode;
  sideBySide?: boolean;
  style?: React.CSSProperties;
}

export default function DoDont({ doText, dontText, doExample, dontExample, sideBySide, style }: DoDontProps) {
  return (
    <div className={`do-dont${sideBySide ? " side-by-side" : ""}`} style={style}>
      <div className="do-row">
        <div className="do-row-content">
          <div className="do-row-header">
            <span className="do-icon"><CheckIcon /></span>
            <span className="do-label">Do</span>
          </div>
          <div className="do-row-text">{doText}</div>
        </div>
        {!sideBySide && <div className="example-zone" />}
      </div>
      <div className="do-divider" />
      <div className="dont-row">
        <div className="do-row-content">
          <div className="do-row-header">
            <span className="dont-icon"><XIcon /></span>
            <span className="dont-label">Don&apos;t</span>
          </div>
          <div className="do-row-text">{dontText}</div>
        </div>
        {!sideBySide && <div className="example-zone" />}
      </div>
    </div>
  );
}

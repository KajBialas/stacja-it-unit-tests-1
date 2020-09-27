import React from 'react';

function TopBar({text}) {
  return (
    <div className="topBar" data-testid="topBarContainer">
      {text}
    </div>
  )
}

export default TopBar;
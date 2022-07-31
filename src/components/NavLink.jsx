import React from "react";

export function NavLink({ children, to, navigate, setIsNavOpen }) {
  return (
    <div className="header__content__nav__entry">
      <input
        type="radio"
        name="header__content__nav__entry"
        id={children}
        title={children}
        className="header__content__nav__entry__input"
        defaultChecked={window.location.pathname === to}
        onClick={() => {
          navigate(to);
          setIsNavOpen(false);
        }}
      />
      <div className="header__content__nav__entry__content">{children}</div>
    </div>
  );
}

import React from "react";

function LessonsBar() {
  return (
    <aside className="sidebar h-fit min-h-96 rounded-md fixed top-2/4 -translate-y-1/2 justify-start">
      <section className="sidebar-content h-fit min-h-[20rem] overflow-visible">
        <nav className="menu rounded-md">
          <section className="menu-section px-4">
            <span className="menu-title capitalize">chapter 1</span>
            <ul className="menu-items">
              <li className="menu-item capitalize">lesson1</li>
            </ul>
          </section>
        </nav>
      </section>
    </aside>
  );
}

export default LessonsBar;

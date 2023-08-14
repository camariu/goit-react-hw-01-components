import React from "react";
import "./Statistics.css";

export default function Statistics({ stats, title }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <div className="statistics-list">
        {stats.map((tab) => {
          return (
            <ul key={tab.id} class="stat-list">
              <li className="item">
                <span className="label">{tab.label}</span>
                <span className="percentage">{tab.percentage}%</span>
              </li>
            </ul>
          );
        })}
      </div>
    </section>
  );
}

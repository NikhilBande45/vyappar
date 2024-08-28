import React from 'react';
import './Count.css';

const Count = () => {
  const counters = [
    { endValue: 2245341, label: "Ads Managed", image: "/images/counter_1.png" },
    { endValue: 46328, label: "Active Campaigns", image: "/images/counter_2.png" },
    { endValue: 828867, label: "Clients Served", image: "/images/counter_3.png" },
    { endValue: 1926436, label: "Total Impressions", image: "/images/counter_4.png" },
  ];

  return (
    <div className="counter-section">
      <div className="counter-content">
        <div>
          <div className="counter-header">Driving Success with Data</div>
          <p className="counter-subtext">Delivering results for our clients</p>
        </div>

        <div className="counter-grid">
          {counters.map((counter, index) => (
            <div key={index} className="counter-item">
              <img src={counter.image} alt={`${counter.label} Logo`} width={60} height={60} />
              <div>
                <p className="counter-number">{counter.endValue.toLocaleString()}</p>
                <p className="counter-label">{counter.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Count;

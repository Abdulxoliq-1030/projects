import "./range-2.scss";

export default function Range2({ getValue, value }) {
  return (
    <div className="wrap">
      <input type="range" onChange={getValue} />

      <div className="percents">
        <span className="percent">{value} %</span>
        <div className="progress">
          <div className="range"></div>
          <div className="inner-range" style={{ width: `${value}%` }}></div>
        </div>
      </div>
    </div>
  );
}

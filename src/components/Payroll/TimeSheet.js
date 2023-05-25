import React, { useState } from "react";
import "./TimeSheet.css";

const Timesheet = () => {
  const [teammate, setTeammate] = useState("");
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [hours, setHours] = useState([
    Array(7).fill(""), // Vacation row
    Array(7).fill(""), // Project X row
    Array(7).fill(""), // Break row
    Array(7).fill(""), // Office row
  ]);

  const handleTeammateChange = (e) => {
    setTeammate(e.target.value);
  };

  const handlePreviousWeek = () => {
    setCurrentWeek((prevWeek) => {
      const prevWeekDate = new Date(prevWeek);
      prevWeekDate.setDate(prevWeekDate.getDate() - 7);
      return prevWeekDate;
    });
  };

  const handleNextWeek = () => {
    setCurrentWeek((prevWeek) => {
      const nextWeekDate = new Date(prevWeek);
      nextWeekDate.setDate(nextWeekDate.getDate() + 7);
      return nextWeekDate;
    });
  };

  const handleHoursChange = (rowIndex, colIndex, event) => {
    const updatedHours = [...hours];
    updatedHours[rowIndex][colIndex] = event.target.value;
    setHours(updatedHours);
  };

  const calculateTotalHours = () => {
    let totalHours = 0;
    hours.forEach((row) => {
      row.forEach((hour) => {
        totalHours += parseInt(hour) || 0;
      });
    });
    return totalHours;
  };

  return (
    <div>
      <div className="timesheet-buttons-container">
        <div>
          {/* <label>Teammate:</label> */}
          <select
            style={{ padding: "5px" }}
            value={teammate}
            onChange={handleTeammateChange}
          >
            <option value="">Select teammate</option>
            <option value="teammate1">Teammate 1</option>
            <option value="teammate2">Teammate 2</option>
            {/* Add more teammate options */}
          </select>
        </div>

        <div>
          <button className="timesheet-btn" onClick={handlePreviousWeek}>
            Previous Week
          </button>
          <button className="timesheet-btn" onClick={handleNextWeek}>
            Next Week
          </button>
        </div>
      </div>
      <table className="timesheet-table">
        <thead>
          <tr>
            <th>Projects</th>
            {Array.from({ length: 7 }).map((_, index) => {
              const date = new Date(currentWeek);
              date.setDate(date.getDate() + index);
              return <th key={index}>{date.toDateString()}</th>;
            })}
            <th>Total Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Vacation</td>
            {Array.from({ length: 7 }).map((_, colIndex) => (
              <td key={colIndex}>
                <input
                  type="number"
                  value={hours[0]?.[colIndex] || ""}
                  onChange={(event) => handleHoursChange(0, colIndex, event)}
                />
              </td>
            ))}
            <td>
              {hours[0]?.reduce((acc, val) => acc + parseInt(val || 0), 0)}
            </td>
          </tr>
          <tr>
            <td>Project X</td>
            {Array.from({ length: 7 }).map((_, colIndex) => (
              <td key={colIndex}>
                <input
                  type="number"
                  value={hours[1]?.[colIndex] || ""}
                  onChange={(event) => handleHoursChange(1, colIndex, event)}
                />
              </td>
            ))}
            <td>
              {hours[1]?.reduce((acc, val) => acc + parseInt(val || 0), 0)}
            </td>
          </tr>
          <tr>
            <td>Break</td>
            {Array.from({ length: 7 }).map((_, colIndex) => (
              <td key={colIndex}>
                <input
                  type="number"
                  value={hours[2]?.[colIndex] || ""}
                  onChange={(event) => handleHoursChange(2, colIndex, event)}
                />
              </td>
            ))}
            <td>
              {hours[2]?.reduce((acc, val) => acc + parseInt(val || 0), 0)}
            </td>
          </tr>
          <tr>
            <td>Office</td>
            {Array.from({ length: 7 }).map((_, colIndex) => (
              <td key={colIndex}>
                <input
                  type="number"
                  value={hours[3]?.[colIndex] || ""}
                  onChange={(event) => handleHoursChange(3, colIndex, event)}
                />
              </td>
            ))}
            <td>
              {hours[3]?.reduce((acc, val) => acc + parseInt(val || 0), 0)}
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <h7 className="timesheet-total">
          Total Hours Worked: {calculateTotalHours()}
        </h7>
      </div>

      <div>
        <button className="timesheet-btn">Submit for Approval</button>
        <button className="timesheet-btn">Copy from Last week</button>
      </div>
    </div>
  );
};

export default Timesheet;

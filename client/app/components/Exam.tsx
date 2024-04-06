import React from "react";

function Exam() {
  return (
    <section className="w-full md:w-1/4  ">
      <div className="flex w-full overflow-x-auto overflow-y-scroll min-h-20 max-h-80">
        <table className="table-hover table max-w-4xl  ">
          <thead>
            <tr>
              <th>Exam</th>
              <th>Where</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>3</th>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>{" "}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Exam;

import React from 'react';
import './CollegeDetailsStyles.css';

function CollegeDetails({collegeName}) {
  return (
    <>
      <div className="container-fluid" style={{ marginTop: '30px' }}>
        <div className="row">
          <div className="column">
            <div className="card shadow" style={{ borderRadius: '15px', margin: '50px' }}>
              <div className="card-header py-3" style={{ background: 'rgb(18,35,46)', margin: '-1px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
                <p className="m-0 fw-bold" style={{ color: '#ffffff' }}>{collegeName}</p>
              </div>

              <div className="card-body" style={{ background: 'white', margin: '0px', borderRadius: '15px' }}>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr className="table-header-row">
                        <th  className="course-title">Course</th>
                        <th className="fee-title"> Annual Fee</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr className="table-row">
                        <td><div className="course-content">MASTER OF BUSINESS ADMINISTRATION</div></td>
                        <td><div className="fee-content">200000</div></td>
                      </tr>
                      <tr className="table-row">
                        <td><div className="course-content">BACHELOR OF COMPUTER APPLICATION</div></td>
                        <td><div className="fee-content">130000</div></td>
                      </tr>
                      <tr className="table-row">
                        <td><div className="course-content">BACHELOR OF BUSINESS ADMINISTRATION</div></td>
                        <td><div className="fee-content">130000</div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollegeDetails;
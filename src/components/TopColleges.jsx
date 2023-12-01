import React from 'react';
import './TopCollegesStyles.css'; 

function TopColleges(){
    return (
        <>
        <div className="container-fluid top-colleges-container">
     <div className="row">
         <div className="column">
             <div className="card shadow card-custom">

                <div className="card-body card-body-custom">
                    <div className="table-responsive">
                        <table className="table" style={{borderTop:'none'}}>
                            <thead>
                                <tr className="table-header-row">

                                  <th scope="col">Rank</th>
                                  <th scope="col">Gender</th>
                                  <th scope="col">College Name</th>
                                  <th scope="col">Branch</th>
                                  <th scope="col">Caste</th>

                                </tr>
                              </thead>
                              <tbody>
                              <tr>

                                  <th scope="col">1</th>
                                  <th scope="col">M</th>
                                  <th scope="col">mAHARAJA SURAJML INSTITUTE mAHARAJA SURAJML INSTITUTE</th>
                                  <th scope="col">Bachelor of Computer APPLICATION</th>
                                  <th scope="col">General</th>

                                </tr>
                              <tr>

                                  <th scope="col">1</th>
                                  <th scope="col">M</th>
                                  <th scope="col">mAHARAJA SURAJML INSTITUTE mAHARAJA SURAJML INSTITUTE</th>
                                  <th scope="col">Bachelor of Computer APPLICATION</th>
                                  <th scope="col">General</th>

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
export default TopColleges;

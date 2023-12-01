import React ,{useEffect }from 'react';
import './PredRankstyles.css'; 

function PredictRank() {
  useEffect(() => {
    const handleDropdownSelection = () => {
      document.querySelectorAll('.color-dropdown ul li').forEach((li) => {
        li.addEventListener('click', function() {
          document.querySelectorAll('.color-dropdown ul li.selected').forEach((selectedLi) => {
            selectedLi.classList.remove('selected');
          });
          this.classList.add('selected');
          document.querySelector('.color-dropdown h1').innerHTML = this.innerHTML;
          document.querySelector('.color-dropdown h1').className = 'selected-' + (this.getAttribute('data-index'));
        });
      });
    };
    handleDropdownSelection();
  }, []);
  return (
    <>
      <div className="row justify-content-center align-items-center mb-3">
        <div className="col-lg-8">
          <div className="row">
            <div className="col">
              <div className="card border-dark shadow mb-3 predict-card">
                <div className="card-body">
                  <form className="predict-form justify-content-center align-items-center" method="POST">
                      <div className="row">
                          <div className="col">
                            <div className="mb-2 d-flex align-items-center ">
                              <label className="form-label1 me-5" htmlFor="username">
                                <strong>CML RANK </strong>
                              </label>
                              <input
                                className="form-control custom-input-size"
                                type="number"
                                min="1"
                                max="10000"
                                id="username"
                                placeholder="Rank"
                                name="rank"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      <div className="row">
                          <div className="col">
                            <div className="mb-2 d-flex align-items-center ">
                              <label className="form-label2 me-5" htmlFor="username">
                                <strong>CML MARKS</strong>
                                <p>(Out of 400)</p>
                              </label>
                              <input
                                className="form-control custom-input-size"
                                type="number"
                                min="0"
                                max="400"
                                id="username"
                                placeholder="Rank"
                                name="rank"
                                required
                              />
                            </div>
                          </div>
                        </div>
                    <div className="row">
                      <div className="col">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="gender">
                            <strong>Gender </strong><br/>
                          </label><br />
                          <select className="form-select" name="gender" required>
                            <option disabled selected value>-- Select Gender --</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="col">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="caste">
                            <strong>Caste </strong>
                          </label><br />
                          <select className="form-select" name="caste" required>
                            <option disabled selected value>-- Select Caste --</option>
                            <option value="GEN">General</option>
                            <option value="SC">SC</option>
                            <option value="ST">ST</option>
                            <option value="OBC">OBC</option>
                          </select>
                        </div>
                      </div>
                      <div className="col">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="gender">
                            <strong>State </strong><br/>
                          </label><br />
                          <select className="form-select" name="gender" required>
                            <option disabled selected value>-- Select State --</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="mb-3">
                          <label className="form-label" htmlFor="branch">
                            <strong>Course</strong><br />
                          </label><br />
                          <select className="form-select" name="branch" required>
                            <option disabled selected value>Course</option>
                            <option value="BCA">BCA</option>
                            <option value="BCOM">BCOM</option>
                            <option value="BBA"> BBA</option>
                            <option value="B.ED">B.ED</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-primary btn-sm submit-button" type="submit">
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PredictRank;

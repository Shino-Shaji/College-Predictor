import {React,useState} from 'react';
import './TopCollegesStyles.css'; 
import CollegeDetails from './CollegeDetails';

function TopColleges(){
    const [selectedCollege,setSelectedCollege]=useState(null);
    const [showCollegeDetails, setShowCollegeDetails] = useState(false);

    const handleRowClick = (collegeName)=>{
        setSelectedCollege(collegeName);
        setShowCollegeDetails(true);
    }
    return (
        <>
        {showCollegeDetails ? (
        <CollegeDetails collegeName={selectedCollege} />
      ) : (
        <div className="container-fluid top-colleges-container">
     <div className="row">
         <div className="column">
             <div className="card shadow card-custom">

                <div className="card-body card-body-custom">
                    <div className="table-responsive">
                        <table className="table" style={{borderTop:'none'}}>
                            <thead>
                                <tr className="table-header-row" >
                                  <th scope="col">Rank</th>
                                  <th scope="col">Gender</th>
                                  <th scope="col">College Name</th>
                                  <th scope="col">Branch</th>
                                  <th scope="col">Caste</th>
                                </tr>
                              </thead>
                              <tbody>
                              <tr >
                                  <th scope="col">1</th>
                                  <th scope="col">M</th>
                                  <th scope="col" className = "college-name" onMouseOver={(e) => e.target.style.color = '#999'} onMouseOut={(e) => e.target.style.color = 'black'} 
                                  onClick={()=>handleRowClick('Maharaja Surajmal Institute')}>Maharaja Surajmal Institute</th>
                                  <th scope="col">Bachelor of Computer APPLICATION</th>
                                  <th scope="col">General</th>

                                </tr>
                              <tr >

                                  <th scope="col">1</th>
                                  <th scope="col">M</th>
                                  <th scope="col" className = "college-name" onMouseOver={(e) => e.target.style.color = '#999'} onMouseOut={(e) => e.target.style.color = 'black'} 
                                  onClick={()=>handleRowClick('Vivekananda Institute of Professional Studies')} >Vivekananda Institute of Professional Studies</th>
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
</div>)}

        </>
    );
}
export default TopColleges;

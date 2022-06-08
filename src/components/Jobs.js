import React from 'react';
import Job from './Job';

const Jobs = ({data, setKeywords}) =>{
    console.log(data);
    return (
        <div>
            <div className="jobs">
                {data.map((d) => {
                    return <Job data={d}setKeywords={setKeywords} />;
                }
                )};
            </div> 
        </div>
    );
};

export default Jobs;
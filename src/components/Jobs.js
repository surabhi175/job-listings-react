import React, {useState, useEffect} from 'react';
import Job from './Job';

const Jobs = ({data, setKeywords, keywords}) =>{
    // console.log(data);
    const [filteredData, setFilteredData] = useState([]);

    const modifiedData= () => {
        if(keywords.length > 0){
            const newData = filteredData.filter(d => {
                return(
                    keywords.every(key => {
                        return(
                            d.role == key ||
                            d.level == key ||
                            d.languages.includes(key) ||
                            d.tools.includes(key) 
                        );
                    })
                );
            });
            setFilteredData(newData);
        }else{
            setFilteredData(data);
        }
    };

    useEffect(() => {
        modifiedData();
    }, [keywords]);

    return (
        <div>
            <div className="jobs">
                {filteredData.map((d) => {
                    return <Job
                    key={d.id} 
                    data={d} 
                    setkeywords={setKeywords} />;
                }
                )};
            </div> 
        </div>
    );
};

export default Jobs;
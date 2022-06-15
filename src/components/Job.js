import React, {useState, useEffect} from 'react';

function Job(props) {
const{
    company,
    contract,
    featured,
    id,
    languages,
    level,
    location,
    logo,    
    position,
    postedAt,
    role,
    tools,
    } = props.data;

    const l = props.data.company.toLowerCase().replace(/\s/g , "-");
    console.log(l);


    const [image, setImage] = useState("");
    const loadImage = (imageName) => {
        import(`../images/${imageName}.png`).then(image => {
          setImage(image.default);
        });
      };

    let keywords = [role, level, ...languages, ...tools];

    useEffect(() => {
       loadImage(l);
    }, [l]);

    console.log(image);
    return (
        
        <div className={featured ? "job-container job-container--borderLeft" : "job-container"}>
            <div className="logo">
                {/* <div className="imgtag" style={{backgroundImage: `url(${props.data.logo})`, backgroundSize: "contain", width:"4rem", height:"4rem" }}></div> */}
                <img src={image} alt="" />
            </div>
            <div className="part1">
                <div className="company">
                    <span className="cname">{company}</span>
                    {props.data.new && <span className="new">new!</span> }
                    {props.data.featured && <span className="featured">featured</span> }
                </div>
                <div className="position">{position}</div>
                <div className="details"> 
                    <span>{postedAt}</span>
                    <span>&nbsp;•&nbsp;</span>
                    <span>{contract}</span>
                    <span>&nbsp;•&nbsp;</span>
                    <span>{location}</span>
                </div>
            </div>
            <div className="part2">
                {
                    keywords.map((key, id) => (
                        <span onClick={() => props.setkeywords(key)} key={id}>{key}</span>
                    ))
                }
            </div> 
        </div>
    );
};

export default Job;
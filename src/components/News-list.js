import React from "react";

function Newslist(props){
    const {data} = props;

    return (
        <>
        {data && data.map((item) => {
            return (
                <div className="mb-0">
                    <div className="row g-3">
                        <div className="col-md-3">
                            <img srcSet={item.newsImage} src={item.newsImage} className="img-fluid rounded w-100" style={{objectFit:"cover", maxHeight:120+'px'}} alt="news"/>
                        </div>   
                        <div className="col-md-7">
                            <div style={{marginTop:10+'px'}}>
                                <small className="text-white fw-normal">Detik.com - <span className="fw-light">{item.newsDate}</span></small>
                                <h5 className="card-title fw-normal lh-base">
                                    <a href={item.newsUrl} target="blank">{item.newsTitle}</a></h5>
                            </div>
                            
                        </div>
                        <div className="clear"/>
                    </div>
                </div>
            );
        })}
        
        </>
    )
}

export default Newslist
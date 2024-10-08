import React from "react";

function Cardlist(props){
    const {data} = props;

    return (
        <>
        {data && data.map((item) => {
            return (
                <div className="mb-3">
                    <div className="row g-3">
                        <div className="col-md-3">
                            <img src={item.newsImage} className="img-fluid rounded" style={{objectFit:"cover", height:60+'px'}} alt="news" />
                        </div>
                        <div className="col-md-7">
                            <div>
                                <p className="text-white m-0 lh-sm fw-normal" style={{fontSize:15}}>
                                    <a href={item.newsUrl} target="blank">
                                        {item.newsTitle}
                                    </a>
                                </p>
                                <small className="text-white" style={{display:"none"}}>{item.newsDate}</small>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })}
        
        </>
    )
}

/*const Cardlist = () => {
    return (
        <div className="mb-3">
            <div className="row g-2">
                <div className="col-md-4">
                    <img src="../images/tes.jpg" className="img-fluid rounded" style={{objectFit:"cover", height:60+'px'}} alt="news" />
                </div>
                <div className="col-md-8">
                    <div>
                        <p className="text-white m-0 lh-sm fw-normal" style={{fontSize:15}}>Warga Kota Bekasi Diminta Laporkan Pohon Berpotensi Bahaya ke DBMSDA</p>
                        <small className="text-white" style={{display:"none"}}>3 mins ago</small>
                    </div>
                </div>
            </div>
        </div>
    );
}*/

export default Cardlist
const Feed = () => {
    return (
        <div className="mb-0">
            <div className="row">
                <div className="col">
                    <img src="../images/macet.jpg" className="img-fluid rounded" style={{objectFit:"cover", height:240+'px'}} alt="news" />
                    <div className="rounded" style={{marginTop:-70+'px',backgroundColor:'#000',opacity:0.8,padding:10}}>
                        <p className="text-white m-0 lh-sm fw-normal" style={{fontSize:15}}>Macet total ada container mogok ...</p>
                        <small className="text-white" style={{fontSize:12}}>Hasan - 3 mins ago</small>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feed
import Carousel from 'react-bootstrap/Carousel';

const Trending = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img src="https://akcdn.detik.net.id/community/media/visual/2023/09/18/sule_169.jpeg?w=700&q=90"  className="card-image rounded" alt="news"/>
                <Carousel.Caption>
                <h3>Sule Nyaris Putus Asa, Sampai Mau Jual Rumah Mewah dan Tinggal di Gunung</h3>
                <p>Hiburan</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://akcdn.detik.net.id/community/media/visual/2024/08/05/victor-axelsen-bulutangkis-olimpiade-2024-olimpiade-2024-olimpiade-paris-2024_169.jpeg?w=700&q=90" className="card-image rounded" alt="news"/>
                <Carousel.Caption>
                <h3>Viktor Axelsen Raih Emas Bulutangkis Tunggal Putra Olimpiade 2024</h3>
                <p>Olahraga</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://akcdn.detik.net.id/community/media/visual/2024/08/06/jean-philippe-mateta-timnas-prancis-u-23-prancis-vs-mesir-prancis-u-23-vs-mesir-u-23-sepakbola-olimpiade-2023-sepakbola-olimpi_169.jpeg?w=700&q=90" className="card-image rounded" alt="news"/>
                <Carousel.Caption>
                <h3>Gebuk Mesir 3-1, Prancis ke Final Sepakbola Putra Olimpiade 2024</h3>
                <p>
                   Sepakbola
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Trending
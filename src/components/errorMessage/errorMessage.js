import img from './error.gif';

const errorMessage = () => {
 return (
    <img style={{display: 'blok', width: "250px", height: "250px", objectFit: 'contain', margin: '0 auto'}} src={img}/>
 )
}


export default errorMessage;
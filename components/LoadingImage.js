const LoadingImage = () =>{
    const imgUrl = "https://img.icons8.com/pastel-glyph/96/calculator--v2.png";
    const alt= "image of calculator";
    return(
        <div style={{alignContent : 'center'}}>
        <img src={imgUrl} alt={alt} width={160} height={160}></img>

        <p style={{
            textAlign: 'center',
            fontSize: '20px',
            fontWeight: 'bold'

        }}>Just a calculator</p>
        </div>
        
    );
}

export default LoadingImage;
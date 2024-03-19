const NegativeNumber=({onClose})=>{
    const handleButtonClick = () => {
        onClose()
      };
    return(
        <div>
            <p> Please enter a valid age</p>
            <button type='button' onClick={handleButtonClick}> ok</button>
        </div>
    )
}
export default NegativeNumber
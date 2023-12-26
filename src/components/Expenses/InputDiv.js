const InputDiv = (props) => {
    return (
        <div className='input-container'>
            <label></label>
            <input
                type={props.type}
                id={props.id}
                placeholder={props.placeholder}
                className='input-field'
            />
        </div>
    );
};
export default InputDiv;

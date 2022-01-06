import React from 'react';

const EditPost:React.FC = () => {
    return (
        <button className='edit_btn' style={{marginRight:"5px"}} onClick={() => console.log()}>
            <img src="https://img.icons8.com/fluency-systems-regular/50/000000/edit.png" style={{width: "20px", height:"20px", cursor:"pointer"}}/>  
        </button>
    );
};

export default EditPost;
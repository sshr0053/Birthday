import React, { Component } from 'react';

const ChangeDate = (title, callback) => {

return(
    <button key={1} className="change-date" onClick={callback}>
    <i className="fas fa-calendar-alt"></i> 
    </button>
)

}

export default ChangeDate;
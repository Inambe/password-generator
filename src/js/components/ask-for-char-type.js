import React from 'react';

const AskForCharType = (props) => {
    const { charType, charKey, onChange, checked } = props;
    return (
        <div className="form-control">
            <label className="mr-0-5">Include {charType}?</label>
            <input
                type="checkbox"
                value={charKey}
                onChange={onChange}
                checked={checked} />
        </div>
    );
};

export default AskForCharType;
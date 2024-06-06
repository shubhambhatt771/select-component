import { useState } from 'react'

const Dropdown = ({items}) => {
    const [selectedItem, setSelectedItem] = useState("Select");
    const [showOptions, setShowOptions] = useState(false);
  
    const handleChange = (item) => {
      setSelectedItem(item);
      setShowOptions(false);
    };
  
    return (
      <div className="dropdown-container">
        <h5><b>Should you use a dropdown ?</b></h5>
        <button onMouseOver={() => setShowOptions(true)} className='select-btn'>{selectedItem}<i className='fas fa-solid fa-chevron-down' /></button>
        {showOptions && <div className='option-wrapper'>
          {
            items.map((item, index) => (
              <span className='select-option' onClick={() => handleChange(item)} style={{ display: 'block' }} key={index}>{item}</span>
            ))
          }
        </div>
        }
      </div>
    );
}

export default Dropdown
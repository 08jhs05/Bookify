// Import react and UserContext
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import Select from "react-dropdown-select";
import { UserContext } from '../UserContext';

// Import Material-UI
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function IncExNavbar(props) {
  const { logoutCallback, type, options, isScanPage, onChange} = props;
  const {userName, setUserName} = useContext(UserContext); 

  const history = useHistory();
  const onClickFunc = function() {
    setUserName(null);
    logoutCallback();
    history.push("/signin");
  }


  return (
    <section className="dashboard_navbar">
      <div style={{display:"flex", alignItems:"center", width:"540px", justifyContent:"space-between"}}>
      <h1 style={{fontSize:'40px'}}>{type}</h1>
        { isScanPage ?  <div></div> : <Select options={options}
        className={'regularFont'}
        searchable={false}
          color={'#303F9F'}
          onChange={onChange}
          dropdownGap={5}
          labelField={"label"}
          valueField={"key"}
          values={[options?.find(opt => opt.key === 0)]}
          multi={false}
          style={{width: "300px", height: '40px', backgroundColor: 'white', borderRadius: '15px', paddingLeft: '20px', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.4)'}}
        /> }
      </div>
      <div style={{display:"flex", alignItems:"center", width:"280px", justifyContent:"space-between"}}>
          <div className={'regularFont'} style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <AccountCircleIcon style={{width:'40px', height:'40px'}}/>&nbsp;&nbsp;{userName}
          </div>
        <Button variant="contained" style={{width:'100px', height:'40px', backgroundColor:'#303F9F', color:'white', borderRadius:'15px'}} onClick={onClickFunc}>Logout</Button>
      </div>
    </section>
  );
}
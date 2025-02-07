function BenefitsList(props) {
  return (
    <li className={props.isInPackage ? 'included' : 'notIncluded'} style={{fontSize: '12px', paddingLeft: '25px', color: 'grey'}}>
      {props.benefit}
    </li>
  );
}

const CardStyle = {
  width: '270px',
  height: '500px',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.20)',
  padding: '15px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
};

export function PackageCard(props) {
  const li = props.info.mas.map(elem => BenefitsList(elem));
  return (
    <div className="card" style={CardStyle}>
     <h2 style={{ backgroundColor: props.info.color, color: 'white', margin: '0', height: '145px', width: '100%'}}>{props.info.title}</h2>
      <p style={{backgroundColor: 'rgba(0, 0, 0, 0.80)', color: 'white', width:'190px', height: '50px', margin: '0', position: 'relative', top: '-25px'}}>${props.info.price}</p>
      <ul style={{width: '145px', padding: '0', marginTop: '10px', marginBottom: '50px'}}>
        {li}
      </ul>
      <button style={{ backgroundColor: props.info.color, color: 'white', border: 'none', outline: 'none', width: '100%', height: '72px', cursor: 'pointer'}}>SELECT PACKAGE</button>
    </div>

  );
};


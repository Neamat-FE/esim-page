import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Esim = () => {
  // Sample data for packages
  const [packages, setPackages] = useState([
    { id: 1, name: "10 GB 30 Days", price: 750, quantity: 1 },
    { id: 2, name: "10 GB 30 Days", price: 750, quantity: 0 }
  ]);

  const incrementQuantity = (id) => {
    setPackages(packages.map(pkg => 
      pkg.id === id ? { ...pkg, quantity: pkg.quantity + 1 } : pkg
    ));
  };

  const decrementQuantity = (id) => {
    setPackages(packages.map(pkg => 
      pkg.id === id && pkg.quantity > 0 ? { ...pkg, quantity: pkg.quantity - 1 } : pkg
    ));
  };

  const customShapeStyle = {
    position: 'relative',
  };

  const getBeforeStyle = (isActive) => ({
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: isActive ? 'red' : '#E2E2E2',
    clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)',
    borderRadius: '10px',
    zIndex: -1,
  });

  const afterStyle = {
    content: '""',
    position: 'absolute',
    top: '2px',
    left: '2px',
    right: '2px',
    bottom: '2px',
    backgroundColor: 'white',
    clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)',
    borderRadius: '8px',
    zIndex: -1,
  };

  const packageContentStyle = {
    position: 'relative',
    zIndex: 1,
    height: '100%',
    padding: '5px',
    textAlign: 'center',
  };

  const getPackagePriceStyle = (isActive) => ({
    backgroundColor: isActive ? 'rgba(255, 0, 0, 0.1)' : 'white',
    padding: '10px',
    borderRadius: '10px',
    border: isActive ? '1px solid red' : '1px solid #E2E2E2',
    width: '160px',
  });

  const btnCircleStyle = {
    width: '24px',
    height: '24px',
    padding: 0,
    borderRadius: '50%',
    lineHeight: 1,
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // Custom component to create the shaped container with pseudo-elements
  const CustomShape = ({ children, isActive }) => {
    return (
      <div style={customShapeStyle}>
        <div style={{...getBeforeStyle(isActive), content: ''}}></div>
        <div style={{...afterStyle, content: ''}}></div>
        {children}
      </div>
    );
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 shadow-sm p-3">
          <div className="row">
            {packages.map((pkg) => {
              const isActive = pkg.quantity > 0;
              
              return (
                <div className="col-md-3" key={pkg.id}>
                  <CustomShape isActive={isActive}>
                    <div style={packageContentStyle} className="d-flex flex-column align-content-center align-items-center mt-3">
                      <h6 className="m-3">{pkg.name}</h6>
                      <div style={getPackagePriceStyle(isActive)} className="mb-3">
                        <p className="mb-2 text-center">BDT <strong>{pkg.price}</strong></p>
                        <div className="d-flex justify-content-center align-items-center my-3">
                          <button 
                            className={`btn ${isActive ? 'btn-danger' : 'btn-secondary'}`}
                            style={btnCircleStyle}
                            onClick={() => decrementQuantity(pkg.id)}
                          >
                            &minus;
                          </button>
                          <span className="mx-2">{pkg.quantity}</span>
                          <button 
                            className={`btn ${isActive ? 'btn-danger' : 'btn-secondary'}`}
                            style={btnCircleStyle}
                            onClick={() => incrementQuantity(pkg.id)}
                          >
                            +
                          </button>
                        </div>
                        <div className="text-center">
                          <a href="#" className={`text-decoration-none ${isActive ? 'text-danger' : 'text-secondary'}`}>
                            More Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </CustomShape>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Esim;
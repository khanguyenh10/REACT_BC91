import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const HomePage = () => {


  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="w3ls-reg">
            {/* input fields */}
            <form className="inputForm">
              <h2>fill the required details below and select your seats</h2>
              <div className="mr_agilemain">
                <div className="agileits-left">
                  <label> Name
                    <span>*</span>
                  </label><br />
                  <input type="text" id="Username" required />
                </div>
                <div className="agileits-right">
                  <label> Number of Seats
                    <span>*</span>
                  </label>
                  <input type="number" id="Numseats" required min={1} />
                </div>
              </div>
              <button onclick="takeData()">Start Selecting</button>
            </form>
            {/* //input fields */}
            {/*-728x90-*/}
            {/* seat availabilty list */}
            <ul className="seat_w3ls">
              <li className="smallBox greenBox">Selected Seat</li>
              <li className="smallBox redBox">Reserved Seat</li>
              <li className="smallBox emptyBox">Empty Seat</li>
            </ul>
            {/* seat availabilty list */}
            {/* seat layout */}
            <div className="seatStructure txt-center" style={{ overflowX: 'auto' }}>
              <p id="notification" /><table id="seatsBlock">
                <tbody><tr>
                  <td />
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td />
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                  <td>12</td>
                </tr>
                  <tr>
                    <td>A</td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="A1" />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="A2" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="A3" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="A4" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="A5" disabled />
                    </td>
                    <td className="seatGap" />
                    <td>
                      <input type="checkbox" className="seats" defaultValue="A6" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="A7" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="A8" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="A9" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="A10" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="A11" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="A12" disabled />
                    </td>
                  </tr>
                  <tr>
                    <td>B</td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="B1" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="B2" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="B3" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="B4" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="B5" disabled />
                    </td>
                    <td />
                    <td>
                      <input type="checkbox" className="seats" defaultValue="B6" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="B7" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="B8" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="B9" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="B10" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="B11" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="B12" disabled />
                    </td>
                  </tr>
                  <tr>
                    <td>C</td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="C1" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="C2" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="C3" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="C4" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="C5" disabled />
                    </td>
                    <td />
                    <td>
                      <input type="checkbox" className="seats" defaultValue="C6" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="C7" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="C8" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="C9" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="C10" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="C11" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="C12" disabled />
                    </td>
                  </tr>
                  <tr>
                    <td>D</td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="D1" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="D2" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="D3" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="D4" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="D5" disabled />
                    </td>
                    <td />
                    <td>
                      <input type="checkbox" className="seats" defaultValue="D6" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="D7" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="D8" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="D9" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="D10" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="D11" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="D12" disabled />
                    </td>
                  </tr>
                  <tr>
                    <td>E</td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="E1" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="E2" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="E3" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="E4" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="E5" disabled />
                    </td>
                    <td />
                    <td>
                      <input type="checkbox" className="seats" defaultValue="E6" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="E7" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="E8" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="E9" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="E10" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="E11" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="E12" disabled />
                    </td>
                  </tr>
                  <tr className="seatVGap" />
                  <tr>
                    <td>F</td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="F1" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="F2" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="F3" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="F4" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="F5" disabled />
                    </td>
                    <td />
                    <td>
                      <input type="checkbox" className="seats" defaultValue="F6" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="F7" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="F8" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="F9" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="F10" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="F11" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="F12" disabled />
                    </td>
                  </tr>
                  <tr>
                    <td>G</td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="G1" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="G2" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="G3" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="G4" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="G5" disabled />
                    </td>
                    <td />
                    <td>
                      <input type="checkbox" className="seats" defaultValue="G6" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="G7" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="G8" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="G9" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="G10" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="G11" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="G12" disabled />
                    </td>
                  </tr>
                  <tr>
                    <td>H</td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="H1" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="H2" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="H3" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="H4" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="H5" disabled />
                    </td>
                    <td />
                    <td>
                      <input type="checkbox" className="seats" defaultValue="H6" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="H7" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="H8" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="H9" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="H10" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="H11" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="H12" disabled />
                    </td>
                  </tr>
                  <tr>
                    <td>I</td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="I1" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="I2" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="I3" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="I4" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="I5" disabled />
                    </td>
                    <td />
                    <td>
                      <input type="checkbox" className="seats" defaultValue="I6" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="I7" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="I8" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="I9" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="I10" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="I11" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="I12" disabled />
                    </td>
                  </tr>
                  <tr>
                    <td>J</td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="J1" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="J2" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="J3" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="J4" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="J5" disabled />
                    </td>
                    <td />
                    <td>
                      <input type="checkbox" className="seats" defaultValue="J6" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="J7" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="J8" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="J9" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="J10" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="J11" disabled />
                    </td>
                    <td>
                      <input type="checkbox" className="seats" defaultValue="J12" disabled />
                    </td>
                  </tr>
                </tbody></table>
              <div className="screen">
                <h2 className="wthree">Screen this way</h2>
              </div>
              <button onclick="updateTextArea()" disabled>Confirm Selection</button>
            </div>
            {/* //seat layout */}
            {/* details after booking displayed here */}
            <div className="displayerBoxes txt-center" style={{ overflowX: 'auto' }}>
              <table className="Displaytable w3ls-table" width="100%">
                <tbody><tr>
                  <th>Name</th>
                  <th>Number of Seats</th>
                  <th>Seats</th>
                </tr>
                  <tr>
                    <td>
                      <textarea id="nameDisplay" disabled defaultValue={""} />
                    </td>
                    <td>
                      <textarea id="NumberDisplay" disabled defaultValue={""} />
                    </td>
                    <td>
                      <textarea id="seatsDisplay" disabled defaultValue={""} />
                    </td>
                  </tr>
                </tbody></table>
            </div>
            {/* //details after booking displayed here */}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default HomePage
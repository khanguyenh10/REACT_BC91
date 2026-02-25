import React from 'react'
import dsGhe from "../danhSachGhe.json";
const SeatLayout = () => {
    return (
        <div className="seatStructure txt-center" style={{ overflowX: 'auto' }}>
            <p id="notification" /><table id="seatsBlock">
                <tbody><tr>
                    <td ></td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                </tr>
                    {dsGhe.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.hang}</td>
                                {item.danhSachGhe.map((ghe, index) => {
                                    return (
                                        <td key={index}>
                                            <input type="checkbox" className="seats" defaultValue={ghe.soGhe} disabled={ghe.daDat} />
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}

                </tbody></table>
            <div className="screen">
                <h2 className="wthree">Screen this way</h2>
            </div>
            <button onClick="updateTextArea()" disabled>Confirm Selection</button>
        </div>
    )
}

export default SeatLayout
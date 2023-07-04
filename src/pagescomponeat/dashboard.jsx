

import Navbar from "./navbar"
import "../cssfiles/dashboard.css"
import { useEffect, useState } from "react"

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState("")

    useEffect(() => {
        fetch("objectData.json").then((res) => {
            res.json().then((data) => {
                console.log(data);
                setData(data.user)
                if (data?.user?.length > 0) {
                    const defaultData = data?.user[0]?.Accountnumber + "-" + data?.user[0]?.BankName;
                    setValue(defaultData);
                }
            })
        })
    }, [])

    const newData = value.split("-");
    console.log(newData);
    const filterdata = data.filter((item) => item.Accountnumber === newData[0] && item.BankName === newData[1])

    return (
        <div>
            <Navbar />
            <div className="dashboard">
                <div className="selectsection">
                    <div>
                        <select name="" id="select" onChange={(e) => setValue(e.target.value)}>
                            {data?.map((item) => (
                                <option key={`${item?.Accountnumber}-${item?.BankName}`} value={`${item.Accountnumber}-${item.BankName}`}>{item?.Accountnumber}-{item?.BankName}</option>
                            ))}
                        
                        </select>
                    </div>
                    <div>
                        <p>(select/search rd from dropdown)</p>
                    </div>
                </div>

                {filterdata.map((item) => (
                    <div key={`${item.Accountnumber}-${item.BankName}`}>
                        <div className="accountdetails">
                            <div className="accountdata">
                                <div><p>Account Number: <span style={{fontWeight:"bold"}}> {item.Accountnumber}</span></p></div>
                                <div><p>Bank Code: <span style={{fontWeight:"bold"}}>{item.BankCode}</span></p></div>
                            </div>
                            <div className="accountdata">
                                <div><p>Linked Bank Account: <span style={{fontWeight:"bold"}}>{item.LinkedBankAccount}</span></p></div>
                                <div><p>Bank Name: <span style={{fontWeight:"bold"}}>{item.BankName}</span></p></div>
                            </div>
                            <div className="accountdata">
                                <div><p>Status: <span className="status">{item.Status}</span></p></div>
                                <div><button className="updatebutton">Update</button></div>
                            </div>
                        </div>
                        <div className="alldata">
                            <div className="amountdetails">
                                <p>Available balance</p>
                                <h3>Rs. {item.AvailableBalance}</h3>
                            </div>
                            <div className="amountdetails">
                                <p>Principle Amount</p>
                                <h3>Rs. {item.PrincipleAmount}</h3>
                            </div>
                            <div className="amountdetails">
                                <p>Interest Earned</p>
                                <h3>Rs. {item.InterestEarned}</h3>
                            </div>
                            <div className="amountdetails">
                                <p>Monthly Deposit</p>
                                <h3>Rs. {item.MonthlyDeposit}</h3>
                            </div>
                            <div className="amountdetails">
                                <p>Interest Rate</p>
                                <h3>{item.InterestRate}</h3>
                            </div>
                            <div className="amountdetails">
                                <p>Tenure</p>
                                <h3>{item.Tenure} Months</h3>
                            </div>
                            <div className="amountdetails">
                                <p>Maturity Amount</p>
                                <h3>Rs. {item.MaturityAmount}</h3>
                            </div>
                            <div className="amountdetails">
                                <p>Tax-Paid</p>
                                <h3>Rs.{item.TaxPaid}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard;

import React from "react";
import './instruments.css';
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
const Instrument = () => {
    return (
        <>
            <Navbar home={true} />
            <div className="instruMain">
                <div className="instruBg">
                    {/* <img className="landingBg1" src="../assets/bg4.jpg" alt="" /> */}
                    <img className="landingBg2" src="https://t4.ftcdn.net/jpg/03/74/22/69/240_F_374226997_Jd6oh6pUXFuBgai2ogvG3XcltqTfEsuN.jpg" alt="" />
                </div>
                <div className="instruBoxContainer">
                    <div className="stocksBox">
                        <div className="content">
                            <h1 className="contentStocksHeading">Stocks</h1>
                            <p className="contentPara">Stocks, as previously mentioned, represent ownership in a company and can potentially offer higher returns but also come with greater risk. Bonds, on the other hand, represent a loan made to a company or government entity, and typically offer lower returns but come with lower risk.Stocks are bought and sold predominantly on stock exchanges and are the foundation of many individual investors' portfolios.</p>
                            <div className="contentButtons">
                                <div className="button1">
                                    <Link className="buttonToBuy" to="/stocks">
                                        Proceed To Buy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stocksBox">
                        <div className="content">
                            <h1 className="contentStocksHeading">Bonds</h1>
                            <p className="contentPara">Bonds are a type of investment where an investor lends money to a company, government, or other entity in exchange for regular interest payments and the return of the initial investment at a specified future date, known as the bond's maturity date.Bonds are often used by companies and governments to raise money to finance projects or operations.When an investor buys a bondthey are essentially lending money </p>
                            <div className="contentButtons">
                                <div className="button1">
                                    <Link className="buttonToBuy" to="/stocks">
                                        Proceed To Buy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stocksBox">
                        <div className="content">
                            <h1 className="contentStocksHeading">Mutual Fund</h1>
                            <p className="contentPara">There are different types of mutual funds, including stock funds, bond funds, and balanced funds that invest in both stocks and bonds. Mutual funds are managed by professional fund managers, who make decisions on which assets to buy and sell based on the fund's investment objectiveOne advantage of investing in mutual funds is that they provide a way for investors to access a diversified portfolio..</p>
                            <div className="contentButtons">
                                <div className="button1">
                                    <Link className="buttonToBuy" to="/stocks">
                                        Proceed To Buy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Instrument;
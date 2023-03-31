import React from "react";
import './tradingInstruments.css';
const TradingInstruments = () => {
    return(
        <>
            <div className="tradingInstrumentsMain">
                <div className="InstrumentBox">
                    <div className="instrumentBoxHeading">
                        <h1>Stock</h1>
                    </div>
                    <div className="instrumentBoxDescription">
                        <p>When an investor buys a stock, part ownership in the form of a share is bought. If the business or enterprise happens to do well, the investor benefits by seeing an increase in the value of the share. The share can either be held or sold at a profit on the stock exchange. If the business does poorly, the value of the share declines, and the investor may lose some or all of the investment.
Stocks are usually riskier than bonds as there is no guarantee that the stock will do well. However, there is potential to earn higher returns when it comes to stock trading. Companies sell their stock for various reasons, such as developing new products, expanding into new markets, or even paying off debt. The first time a company sells stock is called an initial public offering (IPO).</p>
                    </div>
                    {/* <div className="instrumentBoxButton">
                        <h2>Proceed to instrument page</h2>
                        <button>Go</button>
                    </div> */}
                </div>
                <div className="InstrumentBox">
                    <div className="instrumentBoxHeading">
                        <h1>Bond</h1>
                    </div>
                    <div className="instrumentBoxDescription">
                        <p>Bonds are a type of investment designed to aid governments and corporations to raise money. It can be viewed as a type of loan. There is no stock ownership and dividends, but investors who purchase bonds do receive payment in the form of interest.

For example, Company A needs to raise $2 million for a certain project. It decides to offer a 3-year bond to investors to raise the money. The investor will then purchase the bond at the issue price, and Company A will pay the investor interest on the money paid for the bond. Once the bond matures, the company will pay the face value of the bond back to the investor.

Therefore, bonds are fixed-income assets, unlike stocks. The percentage of interest is fixed in advance. Bonds are rated by credit rating agencies such as Moody’s and Standard and Poor to help investors.</p>
                    </div>
                    {/* <div className="instrumentBoxButton">
                        <h2>Proceed to instrument page</h2>
                        <button>Go</button>
                    </div> */}
                </div>
                <div className="InstrumentBox">
                    <div className="instrumentBoxHeading">
                        <h1>Mutual Fund</h1>
                    </div>
                    <div className="instrumentBoxDescription">
                        <p>Stocks and bonds are characterized by asset classes. On the other hand, mutual funds are pooled investment vehicles. In a mutual fund, money collected from various investors is taken together to buy a large variety of securities. A mutual fund gives an investor instant diversification.

Mutual funds are not the same as stocks. When you invest in a mutual fund, you do not own shares of the stock invested in but own a piece of the fund. Furthermore, mutual funds are usually managed by fund managers in financial corporations. Once an investor purchases a fund, there is no control over what goes in or out of the fund. Therefore, there is no investment in a particular stock or bond but a combination of various assets. There is also a fee or commission to be paid.</p>
                    </div>
                    {/* <div className="instrumentBoxButton">
                        <h2>Proceed to instrument page</h2>
                        <button>Go</button>
                    </div> */}
                </div>
                
            </div>
        </>
    );
}
export default TradingInstruments;
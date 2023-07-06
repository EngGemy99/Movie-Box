import './style.css'
const Pricing = () => {
    return (
        <div className="container mt-5">
            <div className="heading">
                <h3>Select Your Plan
                </h3>
                <p>No hidden fees, equipment rentals, or installation appointments.</p>
            </div>
            <div className="row">
                <div className="col-lg col-md-6 mb-5">
                    <div className="box">
                        <h4>Regular</h4>
                        <ul>
                            <li>
                                <i className="fas fa-check"></i>
                                Movie Box Originals
                            </li>
                            <li>
                                <i className="fas fa-check"></i>
                                Switch plans or cancel anytime
                            </li>
                            <li>
                                <i className="fas fa-times"></i>
                                Stream 65+ top Live
                            </li>
                            <li>
                                <i className="fas fa-times"></i>
                                TV channels
                            </li>
                        </ul>
                        <p>$11.99
                            <span>
                                /month
                            </span>
                        </p>
                        <button>SELECT PLAN</button>
                    </div>
                </div>
                <div className="col-lg col-md-6 mb-5">
                    <div className="box Premium">
                        <h4>Premium</h4>
                        <ul>
                            <li>
                                <i className="fas fa-check"></i>
                                Movie Box Originals
                            </li>
                            <li>
                                <i className="fas fa-check"></i>
                                Switch plans or cancel anytime
                            </li>
                            <li>
                                <i className="fas fa-check"></i>

                                Stream 65+ top Live
                            </li>
                            <li>
                                <i className="fas fa-times"></i>
                                TV channels
                            </li>
                        </ul>
                        <p>
                            $34.99
                            <span>
                                /month
                            </span>
                        </p>
                        <button>SELECT PLAN</button>
                    </div>
                </div>
                <div className="col-lg col-md-6 mb-5">
                    <div className="box">
                        <h4>Premium + TV channels</h4>
                        <ul>
                            <li>
                                <i className="fas fa-check"></i>
                                Movie Box Originals
                            </li>
                            <li>
                                <i className="fas fa-check"></i>
                                Switch plans or cancel anytime
                            </li>
                            <li>
                                <i className="fas fa-check"></i>

                                Stream 65+ top Live
                            </li>
                            <li>
                                <i className="fas fa-check"></i>

                                TV channels
                            </li>
                        </ul>
                        <p>$49.99
                            <span>
                                /month
                            </span>
                        </p>
                        <button>SELECT PLAN</button>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default Pricing;
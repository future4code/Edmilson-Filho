// const component = React.createElement;

class ImageViewer extends React.Component {
    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            password: "",
            images: null,
            auth: "",
            isLogged: false
        }
    }

    setForm = (value) => {

    }

    onChangeName = (event) => {
        const value = event.target.value;
        
        this.setState({
            name: value
        })
    }

    onChangeEmail = (event) => {
        const value = event.target.value;

        this.setState({
            email: value
        })
    }
    
    onChangePassword = (event) => {
        const value = event.target.value;

        this.setState({
            password: value
        })
    }
    
    componentDidMount = async () => {
        try {
            if (this.state.isLogged) {
                viewConcertImages();
            }    
        } catch(err) {
            throw new Error(err.message)
        }
    }

    signup = () => {

    }

    viewProfile = () => {

    }

    login = async () => {
        const result = await axios.post("http://localhost:3003/user/login", {
            email: this.state.email,
            password: this.state.password
        });

        const token = result.data.token;

        this.setState({
            auth: token,
            isLogged: true,
        })

        localStorage.setItem("token", token);

        this.viewConcertImages();
    }

    logout = () => {

    }

    viewConcertImages = async () => {

        const token = localStorage.getItem("token");
        
        const result =  await axios.get("http://localhost:3003/concert/1/getImage", {
            headers: {
                Authorization: token
            }
        });

        this.setState({
            images: result.data.result
        })
    }

    render() {
        return (
            <div>
                <div>
                    {
                        this.state.isLogged ?
                        <a href="#" onClick={ this.viewProfile } >
                            Edmilson
                        </a>
                        :
                        <div>
                            <a href="#" onClick={ this.signup } >
                                Signup
                            </a>
                        </div>
                    }
                    {
                        this.state.isLogged ?
                        <div>
                            <a href="#" onClick={ this.logout } >
                                Logout
                            </a>

                            <div>
                                <h3>
                                    Logout
                                </h3>
                            </div>
                        </div>
                        :
                        <div>
                            <div>
                                <h3>
                                    Login
                                </h3>
                                <p>
                                    <label htmlFor="name">
                                        Name
                                    </label>

                                    <input onChange={e => this.onChangeName(e)} type="text" name="name" id="name" value={this.state.name} />
                                </p>
                                <p>
                                    <label htmlFor="email">
                                        Email
                                    </label>

                                    <input onChange={e => this.onChangeEmail(e)} type="email" name="email" id="email" value={this.state.email} />
                                </p>
                                <p>
                                    <label htmlFor="password">
                                        Password
                                    </label>

                                    <input onChange={e => this.onChangePassword(e)} type="password" name="password" id="password" value={this.state.password} />
                                </p>
                                <p>
                                    <button onClick={this.login}>
                                        Login
                                    </button>
                                </p>
                            </div>
                        </div>
                    }
                    <div>
                    {
                        this.state.images && this.state.images.map(image => <img src={image.photo} />)
                    }
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <ImageViewer />,
    document.getElementById('react_container')
);
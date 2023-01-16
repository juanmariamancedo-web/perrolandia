export class Card extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            imgUrl: props.imgUrl !== undefined? props.imgUrl: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(){
        axios(`https://dog.ceo/api/breed/${this.props.breed}/images/random`)
        .then((res)=>{this.setState({imgUrl : res.data.message})})
        .catch((err)=>{console.log(err)})
    }

    render(){      
        return(
            <div className="col col-sm-6 col-md-5">
            <article className="card  text-bg-dark h-100">
                <img src={this.state.imgUrl} onClick={this.handleChange} className="card-img-top responsive-img" alt="..." />
                <div className="card-body">
                    <h2 className="card-title">{this.props.title}</h2>
                    <p className="card-text">{this.props.text}</p>
                    <button type="button" className="btn btn-primary" onClick={this.handleChange}>Actualizar</button>
                </div>
            </article>
            </div>
        )
    }
}
import { CardsContainer } from "./components/CardsContainer.jsx";

Promise.all([
    axios(`https://dog.ceo/api/breed/dalmatian/images/random`).then(res=>res.data.message),
    axios(`https://dog.ceo/api/breed/pitbull/images/random`).then(res=>res.data.message),
    axios(`https://dog.ceo/api/breed/akita/images/random`).then(res=>res.data.message),
    axios(`https://dog.ceo/api/breed/husky/images/random`).then(res=>res.data.message)
])
.then((res)=>{
    ReactDOM.createRoot(document.getElementById('rootCards')).render(<CardsContainer imgUrl={res}/>);
})
.catch((err)=>{console.log(err.message)})

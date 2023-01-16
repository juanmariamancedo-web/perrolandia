import { Card } from "./Cards.jsx";

export class CardsContainer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="row row-cols-1 row-cols-md-2 g-3 justify-content-around">
                <Card breed="dalmatian" title="Dalmata" text="El Dalmata es un perro atlético, leal y juguetón. Con su característico patrón de manchas blancas en su pelaje negro o marrón, es un perro muy distintivo. Son ideales como compañero de juego para niños y adultos y tienden a ser buenos con otras mascotas. A menudo se utilizan en trabajos de búsqueda y rescate y son fáciles de entrenar."/>
                <Card breed="pitbull" title="Pitbull" text="El Pitbull es una raza de perro originaria de Estados Unidos. Es conocido por su lealtad, inteligencia y gran energía. A menudo se utilizan como perros de trabajo, especialmente en actividades de protección y búsqueda y rescate. Sin embargo, a menudo se les relaciona con actividades ilegales debido a su reputación como perros agresivos. Es importante recordar que un perro pitbull bien entrenado y socializado es capaz de ser un compañero leal y amigable con su familia y amigos. Es esencial una formación adecuada y una buena socialización para cualquier raza de perro."/>
                <Card breed="akita" title="Akita" text="El Akita es una raza de perro originaria de Japón. Es conocido por su lealtad, inteligencia y coraje. Es un perro grande y musculoso, con un pelaje denso y suave que puede ser de color blanco, rojo, sable o negro. El Akita tiene una cabeza grande y redonda con orejas puntiagudas y una cola larga y gruesa que se lleva sobre su espalda."/>
                <Card breed="husky" title="Husky" text="El Husky es un perro originario de Siberia, Rusia, que se utiliza principalmente como perro de trineo. Estos perros son muy resistentes al frío y tienen un pelaje doble grueso y sedoso para mantenerlos calientes. Son conocidos por su gran energía y necesidad de ejercicio diario, así como por su inteligencia y capacidad para aprender rápidamente. A menudo se consideran perros de trabajo, ya que son muy leales y obedientes a sus dueños. Sin embargo, también pueden ser un desafío para los propietarios que no están preparados para brindarles suficiente ejercicio y entrenamiento. El Husky es un perro muy cariñoso y leal con su familia, pero puede ser reservado con extraños. Son una raza muy hermosa pero requieren de una crianza y cuidado específico." />
            </div>
        )
    }
}
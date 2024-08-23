import {Link} from 'react-router-dom'
import '../screen.css'

//Con este formato se puede llenar la página de tipos de ejercicios 
function exerciceType(props){
    return(
        <div classname="card-row">
        <img 
        classname="card-img-top" 
        src={require(`../../images/exerciceType/${props.carpet}/exercice-${props.imagen}.png`)}
        alt= {props.exercice}
        ></img>
        <div classname="card-body">
          <Link className='card-text' to={props.linkto}>
           {props.exercice}
          </Link> 
    </div>
</div>
    );
}

export default exerciceType;
import {Link} from 'react-router-dom'
import '../screen.css'
// con este formato se puede llenar la página de ejercicios usando props

function exercicetempla(props){
    return(
        <div classname="card-row">
        <img 
        classname="card-img-top" 
        src={require(`../../images/images-principal/exercice-${props.imagen}.png`)}
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

export default exercicetempla;
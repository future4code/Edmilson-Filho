import Typography from '@material-ui/core/Typography';
import { goToRecipeDetails } from '../../coordinators/routes';
import { useHistory } from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { CardStyled, CardMediaStyled } from './styles';

const RecipeCard = (props) => {
    const history = useHistory();
    
    return (
        <CardStyled onClick={() => goToRecipeDetails(history, props.id)}>
            <CardActionArea>
                <CardMediaStyled
                    image={props.image}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom align="center" color="primary">
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </CardStyled>
    )
}

export default RecipeCard;
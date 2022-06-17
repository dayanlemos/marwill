import { ReactComponent as Arrow } from "./arrow.svg";
import CreateIcon from "../utils/CreateIcon";

const IconArrow = (props) => (<CreateIcon {...props}><Arrow stroke={props?.stroke || 'white'} /></CreateIcon>);

export default IconArrow;

import IconArrow from "../../../../design-system/svg-icons/IconArrow";
import Typography from "../../../../design-system/components/Typography";
import './DropDownMenuButton.scss'

const DropDownMenuButton = ({ isOpened, onClick }) => {
    return (
        <div className='drop-down-container'>
            <div role="button" onClick={onClick} style={{ display: 'flex', cursor: 'pointer' }}>
                <Typography style={{fontWeight: 500, fontSize: 14, lineHeight: '21px'}}>Personagens</Typography>
                <IconArrow data-testid='icon-arrow' rotate={isOpened ? 180 : 0} stroke={isOpened && '#FFD900'} />
            </div>

        </div>
    );
}
export default DropDownMenuButton;

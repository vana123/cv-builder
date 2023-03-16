import { IExperiance } from "../../models/Icv";
import '../../scss/components/Row.scss'
import { TiPen, TiTrash } from "react-icons/ti";
import { BsBuilding } from "react-icons/bs";

type Props={
    values: IExperiance,
    onRemuve: (id: number) => void,
    onEdit: (id: number) => void
}

export default function RowExperience({ values, onRemuve, onEdit }: Props) {
    const { id, title, company, location, isworkingNow, start, end }=values
    return (
        <div className="CVDataBlok">
            <div className="CVDataBlok__icon">
                <BsBuilding size={'2.2rem'}/>
            </div>
            <div className="CVDataBlok__content">
                <div className="CVDataBlok__row CVDataBlok__title">
                    {title||""}
                </div>
                <div className="CVDataBlok__row CVDataBlok__text">
                    {`${company||""}•${start||""} - ${end||""}`}
                </div>
                <div className="CVDataBlok__row CVDataBlok__text">
                    {location}
                </div>
            </div>
            <div className="CVDataBlok__btnGrup">
                <button
                    className="CVDataBlok__btn"
                    type='button'
                    onClick={() => { onEdit(id) }}
                >
                    <TiPen size={'1.3rem'} />
                </button>
                <button
                    className="CVDataBlok__btn"
                    type='button'
                    onClick={() => {
                        onRemuve(id)
                    }}
                >
                    <TiTrash size={'1.3rem'} />
                </button>
            </div>

        </div>
    );
}
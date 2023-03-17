import { IExperiance } from "../../models/Icv";
import '../../scss/components/Row.scss'
import { TiPen, TiTrash } from "react-icons/ti";
import { BsBuilding } from "react-icons/bs";
import { DataWithId } from "../../hooks/useCVDataBlock";

type Props={
    values: DataWithId<IExperiance>,
    onRemuve: (id: number) => void,
    onEdit: (id: number) => void
}

export default function RowExperience({ values, onRemuve, onEdit }: Props) {
    const data = values.data
    const id = values.id
    return (
        <div className="CVDataBlok">
            <div className="CVDataBlok__icon">
                <BsBuilding size={'2.2rem'}/>
            </div>
            <div className="CVDataBlok__content">
                <div className="CVDataBlok__row CVDataBlok__title">
                    {data?.title||""}
                </div>
                <div className="CVDataBlok__row CVDataBlok__text">
                    {`${data?.company||""}•${data?.start||""} - ${data?.end||""}`}
                </div>
                <div className="CVDataBlok__row CVDataBlok__text">
                    {data?.location}
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
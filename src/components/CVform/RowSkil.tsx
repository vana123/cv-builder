import { ISkil } from "../../models/Icv";
import '../../scss/components/Row.scss'
import { TiPen, TiTrash } from "react-icons/ti";

type Props={
    values: ISkil,
    onRemuve: (id: number) => void,
    onEdit: (id: number) => void
}

export default function RowSkil({ values, onRemuve, onEdit }: Props) {
    const { id, title, count }=values
    return (
        <div className="CVDataBlok">
            <div className="CVDataBlok__content">
                <div className="CVDataBlok__row CVDataBlok__title">
                    {title||""}
                </div>
                <div className="CVDataBlok__row CVDataBlok__text" >
                    <input
                        type="range"
                        min={1} max={100}
                        value={count} 
                        onChange={()=>{}}
                    />
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